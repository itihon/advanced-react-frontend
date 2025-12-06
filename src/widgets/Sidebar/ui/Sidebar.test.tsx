import { describe, test, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import Sidebar from 'widgets/Sidebar/index';
import '@testing-library/jest-dom/jest-globals';

describe('Sidebar', () => {
  test('render', () => {
    const sidebar = render(<Sidebar />).asFragment().firstChild as HTMLElement;

    expect(sidebar).toHaveClass(Sidebar.name);
  });
});