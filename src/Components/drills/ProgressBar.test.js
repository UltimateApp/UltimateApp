import React from 'react';
import { render, cleanup, fireEvent } from 'react-native-testing-library';

import ProgressBar from './ProgressBar';

describe('<ProgressBar />', () => {
  it('renders correctly', () => {
    const onDotPress = jest.fn();
    const { toJSON, queryAllByTestId } = render(<ProgressBar total={6} current={2} onDotPress={onDotPress} />);

    expect(toJSON()).toMatchSnapshot();

    fireEvent.press(queryAllByTestId('progress-bar-dot')[3]);
    expect(onDotPress).toBeCalledWith(3);
  });
});
