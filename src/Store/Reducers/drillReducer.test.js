import drillReducer from './drillReducer';
import { createDrill } from '../../Fixtures/TestFixtures';

describe('drillReducer', () => {
  const drill = createDrill({ title: 'Title' });
  const initialState = [drill];

  describe('When handling SAVE_DRILL', () => {
    it('when saving an existing drill', () => {
      const newDrill = createDrill({
        animation: {
          positions: [1],
        },
        id: drill.id,
      });
      expect(drillReducer(initialState, { type: 'SAVE_DRILL', value: newDrill })).toEqual([newDrill]);
    });

    it('when saving a new drill', () => {
      const newDrill = createDrill({
        animation: {
          positions: [1],
        },
        id: '999',
      });
      expect(drillReducer(initialState, { type: 'SAVE_DRILL', value: newDrill })).toEqual([drill, newDrill]);
    });
  });

  describe('When handling DELETE_DRILL', () => {
    it('when deleting an existing drill', () => {
      expect(drillReducer(initialState, { type: 'DELETE_DRILL', value: drill.id })).toEqual([]);
    });

    it('when deleting an unknown drill', () => {
      expect(drillReducer(initialState, { type: 'DELETE_DRILL', value: '999' })).toEqual([drill]);
    });
  });

  it('when handling a unknown action type it does not change the state', () => {
    expect(drillReducer(initialState, { type: 'UKNOWN', value: drill })).toEqual([drill]);
  });

  it('has a default state', () => {
    expect(drillReducer(undefined, { type: 'unknown' })).toEqual([]);
  });
});
