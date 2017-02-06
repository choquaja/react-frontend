import React from 'react';
import ReactDOM from 'react-dom';
import Files, { Files as BaseFiles  } from '../../../components/routes/files';
import preloadedState from '../../../store/preloadedState';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const files = preloadedState.files;
  ReactDOM.render(<BaseFiles data={files}/>, div);
});
