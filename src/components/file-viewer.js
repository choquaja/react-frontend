import Table from 'rc-table';
import React from 'react';
import ReactDOM from 'react-dom';

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
      console.log(this);
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
        { title: 'Name', dataIndex: 'name', key: 'name', className: 'name' },
        { title: 'Size', dataIndex: 'size', key: 'size', className: 'size' },
        { title: 'Last Modified', dataIndex: 'lastModified',
          key: 'lastModified', className: 'lastModified' },
      ]
    };
  }

  onRowClick(index, record, event) {
    const parentRow = ReactDOM.findDOMNode(event.target).parentNode;
    parentRow.classList.toggle('selected');
  }

  render() {
    return (
      <Table
        columns={this.state.columns}
        data={this.props.data}
        onRowClick={this.onRowClick}
      />
    );
  }
}

export default FileViewerWrapper;
