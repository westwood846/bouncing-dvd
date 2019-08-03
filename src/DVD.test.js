import React from 'react';
import ReactDOM from 'react-dom';
import DVD from './DVD';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DVD />, div);
  ReactDOM.unmountComponentAtNode(div);
});
