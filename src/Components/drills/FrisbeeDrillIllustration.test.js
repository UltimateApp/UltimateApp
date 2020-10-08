import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { createDrill } from '../../Fixtures/TestFixtures';

import FrisbeeDrillIllustration from './FrisbeeDrillIllustration';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<FrisbeeDrillIllustration />', () => {
  it('renders correctly', () => {
    const drill = createDrill();
    const { toJSON } = render(<FrisbeeDrillIllustration drill={drill} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
