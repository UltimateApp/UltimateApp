import NativeFlashMessage, { showMessage } from 'react-native-flash-message';

import FlashMessage, { showSuccess, showError } from './flashMessage';
jest.mock('react-native-flash-message');

describe('flashMessage', () => {
  beforeEach(() => showMessage.mockReturnValue(0));
  afterEach(() => jest.clearAllMocks());

  it('re-exports FlashMessage', () => {
    showSuccess('success message');
    expect(FlashMessage).toEqual(NativeFlashMessage);
  });

  it('shows a success message', () => {
    showSuccess('success message');
    expect(showMessage).toHaveBeenCalledWith({
      description: 'success message',
      floating: 'true',
      message: 'Success 👍',
      textStyle: {
        fontSize: 14,
      },
      titleStyle: {
        fontSize: 16,
      },
      type: 'success',
    });
  });

  it('shows a success message on explicit ref', () => {
    const ref = {
      showMessage: jest.fn(),
    };
    showSuccess('success message', ref);
    expect(showMessage).not.toHaveBeenCalled();
    expect(ref.showMessage).toHaveBeenCalledWith({
      description: 'success message',
      floating: 'true',
      message: 'Success 👍',
      textStyle: {
        fontSize: 14,
      },
      titleStyle: {
        fontSize: 16,
      },
      type: 'success',
    });
  });

  it('shows an error message', () => {
    showError('error message');
    expect(showMessage).toHaveBeenCalledWith({
      description: 'error message',
      floating: 'true',
      message: 'Oh no… 😥',
      textStyle: {
        fontSize: 14,
      },
      titleStyle: {
        fontSize: 16,
      },
      type: 'danger',
    });
  });

  it('shows an error message on explicit ref', () => {
    const ref = {
      showMessage: jest.fn(),
    };
    showError('error message', ref);
    expect(showMessage).not.toHaveBeenCalled();
    expect(ref.showMessage).toHaveBeenCalledWith({
      description: 'error message',
      floating: 'true',
      message: 'Oh no… 😥',
      textStyle: {
        fontSize: 14,
      },
      titleStyle: {
        fontSize: 16,
      },
      type: 'danger',
    });
  });
});
