import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import isEqual from 'lodash/isEqual';
import { getFileTree } from '../../services/tree';

const toggleInArray = (array, item) => (
  array.includes(item) ?
  array.filter(v => v !== item) :
  [...array, item]
);
const selectOneReducer = relPath => state =>
  ({ selected: (state.selected[0] === relPath ? [] : [relPath]) });
const selectMultipleReducer = relPath => state =>
  ({ selected: toggleInArray(state.selected, relPath) });
const getFileById = (files, id) => files.find(file => file.id === id);

class FileManagerContainer extends Component {
  constructor(props) {
    super(props);
    this.state.files = getFileTree(props.files);
  }

  state = {
    selected: [],
  }

  componentWillReceiveProps = (nextProps) => {
    if (!isEqual(this.props.files, nextProps.files)) {
      this.setState({ files: getFileTree(nextProps.files) });
    }
  }

  updateSelected = (event, relPath) => {
    // console.log('updateSelected', event, event.ctrlKey, relPath);
    if (event.ctrlKey) {
      this.setState(selectMultipleReducer(relPath));
    } else {
      this.setState(selectOneReducer(relPath));
    }
  }

  editCurrentFile = () => {
    if (this.state.selected.length !== 1) return;
    const file = getFileById(this.props.files, this.state.selected[0]);
    const url = `${this.props.match.url}/edit/${file.id}`;
    this.props.history.push(url);
  }

  deleteSelected = () => {
    if (!this.state.selected.length) return;
    this.props.actions.deleteFiles(this.state.selected);
  }

  render() {
    // console.log('FileManagerContainer', this.props.match);
    const { updateSelected, editCurrentFile, deleteSelected, state: { files, selected } } = this;
    return this.props.children({
      files,
      selected,
      updateSelected,
      editCurrentFile,
      deleteSelected,
    });
  }
}

FileManagerContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  files: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
};

export default withRouter(FileManagerContainer);
