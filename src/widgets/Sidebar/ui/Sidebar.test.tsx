import { describe, test, expect } from '@jest/globals';
import renderWithRouter from 'shared/lib/test-utils/renderWithRouter';
import Sidebar from 'widgets/Sidebar/index';
import '@testing-library/jest-dom/jest-globals';

describe('Sidebar', () => {
  test('render', () => {
    const sidebar = renderWithRouter(<Sidebar />).asFragment().firstChild as HTMLElement;

    expect(sidebar).toHaveClass(Sidebar.name);
  });
});