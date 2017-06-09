import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Griddle, { plugins as griddlePlugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import styled, { css } from 'styled-components';
import GriddleCell from 'griddle-react/dist/module/components/Cell';
import GriddleRow from 'griddle-react/dist/module/components/Row';
import GriddleTable from 'griddle-react/dist/module/components/Table';
import GriddleTableHeading from 'griddle-react/dist/module/components/TableHeading';
import { MdSwapVert, MdArrowUpward, MdArrowDownward } from 'react-icons/lib/md';
import SelectablePlugin, { CustomComponent, CustomHeader } from './selectablePlugin';
import { themeColor } from '../../services/theme';

import LayoutComponent from './components/LayoutComponent';
import FilterComponent from './components/FilterComponent';

const TableComponent = styled(GriddleTable)`
  width: 100%;
  border-collapse: collapse;
`;
const RowComponent = styled(GriddleRow)`
  border-bottom: 1px solid ${themeColor('gray2')};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${themeColor('gray1')};
  }
  ${props => props.isSelected && css`
    background-color: ${themeColor('primary')};
    color: ${themeColor('white')};
    &:hover {
      background-color: ${themeColor('primary')};
    }
  `}
`;
const TableHeadingComponent = styled(GriddleTableHeading)`
  background-color: ${themeColor('tertiaryVariant2')};
  color: ${themeColor('white')};
`;
const TableHeadingCellEl = styled.th`
  text-align: left;
  cursor: pointer;
  padding: .8rem .5rem .5rem;
`;
const SortableIcon = styled(MdSwapVert)`opacity: .4;`;
const SortAscIcon = styled(MdArrowDownward)`opacity: .6;`;
const SortDescIcon = styled(MdArrowUpward)`opacity: .6;`;
const TableHeadingCellComponent = ({
  title,
  onClick,
  onMouseEnter,
  onMouseLeave,
  sortProperty,
  customHeadingComponent,
}) =>
   (
     <TableHeadingCellEl onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
       {title}
       {!customHeadingComponent && <SortDirection sort={sortProperty} />}
     </TableHeadingCellEl>
  );
TableHeadingCellComponent.propTypes = {
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  sortProperty: PropTypes.object,
  customHeadingComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};
TableHeadingCellComponent.defaultProps = {
  onMouseEnter: () => null,
  onMouseLeave: () => null,
  sortProperty: {},
  customHeadingComponent: () => null,
};

const SortDirection = ({ sort }) => {
  if (!sort) return <SortableIcon size={18} />;
  if (sort.sortAscending) return <SortAscIcon size={18} />;
  return <SortDescIcon size={18} />;
};
SortDirection.propTypes = {
  sort: PropTypes.object.isRequired,
};
const CellComponent = styled(GriddleCell)`
  padding: .8rem .5rem .5rem;
`;

class Grid extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    events: PropTypes.object.isRequired,
    columns: PropTypes.array.isRequired,
    children: PropTypes.node,
    sortProperties: PropTypes.object,
    pageProperties: PropTypes.object,
    selectable: PropTypes.bool,
    filterable: PropTypes.bool,
  }

  static defaultProps = {
    events: {},
    sortProperties: {},
    pageProperties: {},
    selectable: false,
    filterable: true,
    children: null,
  }

  constructor(props) {
    super(props);
    this.prepareColumns();
    this.preparePlugins();
    this.prepareComponents();
    this.prepareStyleConfig();
  }

  prepareColumns = () => {
    const selectedId = 'selected';
    const isSelectable = this.props.selectable;
    this.cols = [
      (
      isSelectable &&
        <ColumnDefinition
          key={selectedId}
          id={selectedId}
          customComponent={CustomComponent}
          customHeadingComponent={CustomHeader}
          width={40}
        />
      ),
      ...this.props.columns.map(column => <ColumnDefinition key={column.id} {...column} />),
    ].filter(Boolean);
  }

  preparePlugins = () => {
    const selectedId = 'selected';
    const isSelectable = this.props.selectable;
    this.plugins = [
      griddlePlugins.LocalPlugin,
      isSelectable && SelectablePlugin({ selectableColumnId: selectedId }),
    ].filter(Boolean);
  }

  prepareComponents = () => {
    this.components = {
      Cell: CellComponent,
      Filter: FilterComponent,
      Layout: LayoutComponent({ filterable: this.props.filterable, header: this.props.children }),
      Row: RowComponent,
      Table: TableComponent,
      TableHeading: TableHeadingComponent,
      TableHeadingCell: TableHeadingCellComponent,
    };
  }

  prepareStyleConfig = () => {
    this.styleConfig = {
      icons: {
        TableHeadingCell: {
          sortDescendingIcon: '',
          sortAscendingIcon: '',
        },
      },
    };
  }

  render() {
    const { data, events, sortProperties, pageProperties } = this.props;
    return (
      <Griddle
        data={data}
        events={events}
        sortProperties={sortProperties}
        pageProperties={pageProperties}
        plugins={this.plugins}
        components={this.components}
        styleConfig={this.styleConfig}
      >
        <RowDefinition>
          {this.cols}
        </RowDefinition>
      </Griddle>
    );
  }
}

export default Grid;

export const GridWrapper = styled.div`
  position: relative;
`;

export const GridActions = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
