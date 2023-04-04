import * as busSelectors from '../../selectors/bus-line.selectors';
import * as busReducer from '../../reducers/bus-line.reducer';

describe('Authentication Bus Line Selector test', () => {
  const authenticationUser: busReducer.BusState = busReducer.initialState;

  it('selectBusLineState should work when the value of the reducer is the same as the selector', () => {
    const result = busSelectors.selectBusLineState({
      [busReducer.busLineFeatureKey]: busReducer.initialState,
    });
    expect(result).toEqual(authenticationUser);
  });

  it('getBusLineSuccess should work when the value of the reducer is the same as the selector', () => {
    const result = busSelectors.getBusLineSuccess({
      [busReducer.busLineFeatureKey]: busReducer.initialState,
    });
    expect(result).toEqual(authenticationUser.busLineData);
  });

  it('getBusLineError should work when the value of the reducer is the same as the selector', () => {
    const result = busSelectors.getBusLineError({
      [busReducer.busLineFeatureKey]: busReducer.initialState,
    });
    expect(result).toEqual(authenticationUser.error);
  });

  it('getLoader should work when the value of the reducer is the same as the selector', () => {
    const result = busSelectors.getLoader({
      [busReducer.busLineFeatureKey]: busReducer.initialState,
    });
    expect(result).toEqual(authenticationUser.loading);
  });
});
