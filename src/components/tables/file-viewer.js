import Table from 'rc-table';
import React from 'react';
import ReactDOM from 'react-dom';
import FileViewerToolbar from './file-viewer-toolbar';

class FileViewerWrapper extends React.Component {
  sortData(key) {
    this.props.data.sort((a, b) => {
      return parseFloat(a[key]) - parseFloat(b[key]);
    });
  }

  onClick(event, target) {
    const element = ReactDOM.findDOMNode(event.target);
    if (element.tagName === 'TH') {
      const elementClass = element.className;
      this.sortData(elementClass);
    }
  }

  render() {
    return (
      <div onClick={this.onClick}>
        <FileViewer
          data={this.props.data}
        />
      </div>
    );
  }
}

class FileViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [ 
        { title: 'Name', dataIndex: 'filePath', key: 'filePath', className: 'filePath' },
        { title: 'Size', dataIndex: 'size', key: 'size', className: 'size' },
        { title: 'Author', dataIndex: 'authorName',
          key: 'authorName', className: 'authorName' },
      ]
    };
  }

  onRowClick(index, record, event) {
    const parentRow = ReactDOM.findDOMNode(event.target).parentNode;
    parentRow.classList.toggle('selected');
  }

  render() {
    return (
      <div>
        <FileViewerToolbar/>
        <Table
          columns={this.state.columns}
          data={this.props.data.toJS()}
          onRowClick={this.onRowClick}
        />
      </div>
    );
  }
}

export default FileViewerWrapper;
