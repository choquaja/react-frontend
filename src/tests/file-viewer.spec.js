import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import FileViewer from '../components/file-viewer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const testData = [
    { name: 'test.png', size: '512', lastModified: new Date().toString() },
    { name: 'test.png', size: '1024', lastModified: new Date().toString() },
  ];
  ReactDOM.render(<FileViewer data={testData} />, div);
});

it('renders a table with 3 rows', () => {
  const testData = [
    { name: 'test.png', size: '512', lastModified: new Date().toString() },
    { name: 'test.png', size: '1024', lastModified: new Date().toString() },
  ];
  const component = render(
    <FileViewer data={testData}/>
  );
  expect(component.find('tr').length).toBe(3);
});
