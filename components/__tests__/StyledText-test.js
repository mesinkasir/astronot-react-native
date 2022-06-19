import * as React from 'react';
import renderer from 'react-test-renderer';

import { CabinText } from '../StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<CabinText>Snapshot test!</CabinText>).toJSON();

  expect(tree).toMatchSnapshot();
});
