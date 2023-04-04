import * as miniBusSelectors from '../../selectors/mini-bus.selectors';
import * as miniBusReducer from '../../reducers/mini-bus.reducer';

describe('Authentication Mini Bus Selector test', () => {
  const authenticationUser: miniBusReducer.MiniBusState =
    miniBusReducer.initialState;

  it('selectMiniBusState should work when the value of the reducer is the same as the selector', () => {
    const result = miniBusSelectors.selectMiniBusState({
      [miniBusReducer.miniBusFeatureKey]: miniBusReducer.initialState,
    });
    expect(result).toEqual(authenticationUser);
  });

  it('getMiniBusSuccess should work when the value of the reducer is the same as the selector', () => {
    const result = miniBusSelectors.getMiniBusSuccess({
      [miniBusReducer.miniBusFeatureKey]: miniBusReducer.initialState,
    });
    expect(result).toEqual(authenticationUser.miniBusData);
  });

  it('getMiniBusError should work when the value of the reducer is the same as the selector', () => {
    const result = miniBusSelectors.getMiniBusError({
      [miniBusReducer.miniBusFeatureKey]: miniBusReducer.initialState,
    });
    expect(result).toEqual(authenticationUser.error);
  });

  it('getLoader should work when the value of the reducer is the same as the selector', () => {
    const result = miniBusSelectors.getLoader({
      [miniBusReducer.miniBusFeatureKey]: miniBusReducer.initialState,
    });
    expect(result).toEqual(authenticationUser.loading);
  });
});
