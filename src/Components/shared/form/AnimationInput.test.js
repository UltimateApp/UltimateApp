import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TouchableOpacity } from 'react-native';
import { NavigationContext } from '@react-navigation/native';

import AnimationInput from './AnimationInput';

describe('AnimationInput', () => {
  // fake NavigationContext value data
  const navContext = {
    isFocused: () => true,
    // addListener returns an unscubscribe function.
    addListener: jest.fn(() => jest.fn()),
  };

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <NavigationContext.Provider value={navContext}>
          <Formik initialValues={{ title: 'My title' }}>
            <AnimationInput fieldName="title" label="Title" />
          </Formik>
        </NavigationContext.Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
