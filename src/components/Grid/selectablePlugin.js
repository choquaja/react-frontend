import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import compose from 'recompose/compose';
import getContext from 'recompose/getContext';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const noop = () => {};
const toggleSet = (set, value) => (set.includes(value) ? set.delete(value) : set.add(value));

const reducer = {
  GRIDDLE_SELECTABLE_SELECT_ROW: (state, action) => {
    const selectedSet = state.get('selectedRows');
    const key = action.payload.key;
    const newSelectedSet = toggleSet(selectedSet, key);
    return state.set('selectedRows', newSelectedSet);
  },
  GRIDDLE_SELECTABLE_SELECT_ALL: (state) => {
    const selectedSet = state.get('selectedRows');
    const rowsList = state.get('data');
    const newSelectedSet = (selectedSet.size === rowsList.size ? selectedSet.clear() : rowsList.map(row => row.get('griddleKey')).toSet());
    return state.set('selectedRows', newSelectedSet);
  },
};

const actions = {
  toggleRowSelection: key => ({
    type: 'GRIDDLE_SELECTABLE_SELECT_ROW',
    payload: {
      key,
    },
  }),
  toggleAllRows: () => ({
    type: 'GRIDDLE_SELECTABLE_SELECT_ALL',
  }),
};

const getSelectedRows = keyName => (state) => {
  const rows = state.get('data');
  const selected = state.get('selectedRows');
  const selectedRows = rows.filter(row => selected.includes(row.get('griddleKey')));
  // console.log('getSelectedRows', keyName, rows, selected, selectedRows)
  if (keyName) return selectedRows.map(row => row.get(keyName)).toJS();
  return selectedRows.toJS();
};

const initialState = {
  selectedRows: Immutable.Set(),
};

const selectors = {
  selected(state) {
    return state.get('selectedRows');
  },
  checkIfSelected(state, key) {
    return state.get('selectedRows').includes(key);
  },
  allSelected(state) {
    return state.get('selectedRows').size === state.get('data').size;
  },
};

/* eslint-disable */
const components = config => ({
  RowEnhancer: OriginalComponent => connect((state, props) => ({ isSelected: selectors.checkIfSelected(state, props.griddleKey) }))(props => <OriginalComponent {...props} />),
  TableHeadingCellEnhancer: OriginalComponent => props => <OriginalComponent {...props} onClick={props.columnId === config.selectableColumnId ? noop : props.onClick} />,
});
/* eslint-enable */

export const CustomComponent = connect(
  (state, props) => ({ isSelected: selectors.checkIfSelected(state, props.griddleKey) }),
  (dispatch, props) => ({
    onChange() {
      dispatch(actions.toggleRowSelection(props.griddleKey));
    },
  }),
)(props => <input type="checkbox" checked={props.isSelected} onChange={props.onChange} />);

class EventFirerComponent extends Component {
  componentDidMount = () => {
    this.handleUpdate();
  }

  componentDidUpdate = () => {
    this.handleUpdate();
  }

  handleUpdate = () => {
    const { events: { onSelected, getSelectedRows: handleGetSelectedRows }, state } = this.props;
    if (typeof onSelected === 'function') onSelected(handleGetSelectedRows(state));
  }

  render() {
    return null;
  }
}

EventFirerComponent.propTypes = {
  events: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};

const EventFirer = compose(
  getContext({ events: PropTypes.object }),
  connect(state => ({ selectedRows: selectors.selected(state), state })),
  onlyUpdateForKeys(['selectedRows']),
)(EventFirerComponent);

export const CustomHeader = connect(
  state => ({ allSelected: selectors.allSelected(state) }),
  dispatch => ({
    onChange() {
      dispatch(actions.toggleAllRows());
    },
  }),
)(props => (
  <span>
    <EventFirer />
    <input type="checkbox" checked={props.allSelected} onChange={props.onChange} />
  </span>
  ));

export default function (config = {}) {
  return {
    name: 'GriddleSelectable',
    reducer,
    selectors,
    events: {
      getSelectedRows: getSelectedRows(config.keyName),
    },
    initialState,
    components: components(config),
  };
}
