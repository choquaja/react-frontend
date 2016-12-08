import React from 'react';
import ReactDOM from 'react-dom';
import FileViewer from '../components/file-viewer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const testData = [
    { name: 'test.png', size: '512', lastModified: new Date().toString() },
    { name: 'test.png', size: '1024', lastModified: new Date().toString() },
  ];
  ReactDOM.render(<FileViewer data={testData} />, div);
});
