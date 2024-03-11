import { render } from '@testing-library/react';

import MyComponents from './my-components';

describe('MyComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyComponents />);
    expect(baseElement).toBeTruthy();
  });
});
