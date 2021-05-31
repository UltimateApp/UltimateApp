import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TouchableOpacity } from 'react-native';

import RadioButton from './RadioButton';

describe('RadioButton', () => {
  const values = ['red', 'blue'];
  const labels = ['I prefer red', 'I prefer blue'];

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Formik initialValues={{ title: 'My title' }}>
          <RadioButton fieldName="title" label="Title" labels={labels} values={values} />
        </Formik>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when there is an error', async () => {
    const { toJSON, getByTestId, getByText } = render(
      <Formik
        initialValues={{ title: 'blue' }}
        validationSchema={Yup.object({ title: Yup.string().oneOf(['blue'], 'Invalid title') })}
      >
        {({ handleSubmit }) => (
          <>
            <RadioButton fieldName="title" label="Title" labels={labels} values={values} />
            <TouchableOpacity onPress={handleSubmit} testID="submit" />
          </>
        )}
      </Formik>,
    );

    await waitFor(() => {
      fireEvent.press(getByText('I prefer red'));
    });

    await waitFor(() => {
      fireEvent.press(getByTestId('submit'));
    });

    expect(getByText('Invalid title')).not.toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });
});