import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';

test('should render logo', () => {
  const {getByAltText} = render(<App />);
  getByAltText(/^midwestern interactive logo$/i);
});