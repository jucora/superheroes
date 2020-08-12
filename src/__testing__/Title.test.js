import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Title from '../components/Title';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Title />);
  expect(asFragment(<Title />)).toMatchSnapshot();
});

it('should display a main title', () => {
  const { getByTestId } = render(<Title />);
  expect(getByTestId('mainTitle')).toHaveTextContent('SUPERHEROES');
});

it('should display a subtitle', () => {
  const { getByTestId } = render(<Title />);
  expect(getByTestId('title-subtitle')).toHaveTextContent(
    'Search and get information about your favorite superhero!',
  );
});

it('should have a link to redirect to hero List', () => {
  const { getByTestId } = render(<Title />);
  expect(getByTestId('listLink')).toHaveTextContent('List');
});

it('should have a link to redirect to the Author section', () => {
  const { getByTestId } = render(<Title />);
  expect(getByTestId('aboutLink')).toHaveTextContent('About');
});
