import React from 'react';
import renderer from 'react-test-renderer';
import renderMap from '../presentational/renderMap';

test('App Renders correctly', () => {
  const component = renderer.create(<renderMap />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
