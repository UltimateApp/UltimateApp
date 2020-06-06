import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup, waitForElement, act } from 'react-native-testing-library';

import { createDrill } from '../../Fixtures/TestFixtures';
import { IllustrationType, DrillTypes } from '../../Fixtures/config';

import FitnessDrillIllustration from './FitnessDrillIllustration';

afterEach(cleanup);

describe('<FitnessDrillIllustration />', () => {
  const steps = [
    {
      id: 1,
      repetition: 3,
      title: 'First Step',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406746924',
    },
    {
      id: 2,
      repetition: 3,
      title: 'Second Step',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747302',
    },
    {
      id: 3,
      repetition: 3,
      title: 'Third Step',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
    },
  ];
  const drill = createDrill({ type: DrillTypes.FITNESS, title: 'Hot Box', steps });

  it('renders correctly', () => {
    const tree = renderer.create(<FitnessDrillIllustration drill={drill} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links to any step and finishes at the end', async () => {
    const { getByText, getByTestId, toJSON } = render(<FitnessDrillIllustration drill={drill} />);

    // All steps rendered
    expect(getByText('3 First Step')).toBeDefined();
    expect(getByText('3 Second Step')).toBeDefined();
    expect(getByText('3 Third Step')).toBeDefined();

    await fireEvent.press(getByText('3 Third Step'));

    // Third step is current
    expect(toJSON()).toMatchSnapshot();

    await fireEvent.press(getByTestId('doneIcon'));

    await act(async () => {
      await waitForElement(() => expect(getByText('You have completed the drill!')).toBeDefined());
    });
    // Finished state displayed
    expect(toJSON()).toMatchSnapshot();
  });
});