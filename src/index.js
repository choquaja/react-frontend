import React from 'react';
import ReactDOM from 'react-dom';
import FileViewerWrapper from './components/file-viewer';
import './stylesheets/style.css';

const testData = [
  { name: 'test.png', size: '512', lastModified: new Date().toString() },
  { name: 'test.png', size: '1024', lastModified: new Date().toString() },
];

ReactDOM.render(
  <FileViewerWrapper data={testData}/>,
  document.getElementById('root')
);
