import * as selectChangeSelectors from '../../selectors/change-theme.selectors';
import * as selectChangeReducer from '../../reducers/change-theme.reducer';

describe('Authentication Select Change Selector test', () => {
  const authenticationUser: selectChangeReducer.ChangeThemeState =
    selectChangeReducer.initialState;

  it('selectChangeThemeState should work when the value of the reducer is the same as the selector', () => {
    const result = selectChangeSelectors.selectChangeThemeState({
      [selectChangeReducer.changeThemeFeatureKey]:
        selectChangeReducer.initialState,
    });
    expect(result).toEqual(authenticationUser);
  });

  it('getChangeTheme should work when the value of the reducer is the same as the selector', () => {
    const result = selectChangeSelectors.getChangeTheme({
      [selectChangeReducer.changeThemeFeatureKey]:
        selectChangeReducer.initialState,
    });
    expect(result).toEqual(authenticationUser.theme);
  });
});
