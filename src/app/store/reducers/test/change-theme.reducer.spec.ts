import { initialState } from '../change-theme.reducer';
import * as changeThemeAction from '../../actions/change-theme.actions';
import * as changeThemeReducer from '../../reducers/change-theme.reducer';

describe('Change Theme Reducer', () => {
  it('should return the previous state', () => {
    const action = {} as any;
    const result = changeThemeReducer.changeThemeStateReducer(
      initialState,
      action
    );
    expect(result).toBe(initialState);
  });

  it('busLineData should have a busLineData', () => {
    const action = changeThemeAction.loadChangeThemes({
      theme: '',
    });
    const state = changeThemeReducer.changeThemeStateReducer(undefined, action);
    expect(state.theme).toEqual('');
  });
});
