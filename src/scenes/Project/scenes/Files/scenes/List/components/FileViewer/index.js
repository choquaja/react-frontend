/* eslint-disable */
import React from 'react';
import { findDOMNode } from 'react-dom';
import Table from '../../../../../../components/Table';
import FileViewerToolbar from '../FileViewerToolbar';

class FileViewerSorter extends React.Component {
  onClick(event) {
    const element = findDOMNode(event.target);
    if (element.tagName === 'TH') {
      const elementClass = element.className;
      this.sortData(elementClass);
    }
  }

  sortData(key) {
    this.props.data.sort((a, b) => parseFloat(a[key]) - parseFloat(b[key]));
  }

  render() {
    return (
      <div onClick={this.onClick}>
        {this.props.children(this.props.data || [])}
      </div>
    );
  }
}

class FileViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Name', dataIndex: 'filePath', key: ['filePath'], className: 'filePath' },
        { title: 'Size', dataIndex: 'size', key: ['size'], className: 'size' },
        { title: 'Author',
          dataIndex: 'authorName',
          key: ['authorName'],
          className: 'authorName' },
      ],
    };
  }

  onRowClick(index, record, event) {
    const parentRow = findDOMNode(event.target).parentNode;
    parentRow.classList.toggle('selected');
  }

  render() {
    return (
      <FileViewerSorter>
        {data => (
          <div>
            <FileViewerToolbar />
            <Table
              columns={this.state.columns}
              data={data}
            />
          </div>
        )}
      </FileViewerSorter>
    );
  }
}

export default FileViewer;
