import * as busItinerarySelectors from '../../selectors/bus-itinerary.selectors';
import * as busItineraryReducer from '../../reducers/bus-itinerary.reducer';

describe('Authentication User Selector test', () => {
  const authenticationUser: busItineraryReducer.ItineraryState =
    busItineraryReducer.initialState;

  it('selectBusItineraryState should work when the value of the reducer is the same as the selector', () => {
    const result = busItinerarySelectors.selectBusItineraryState({
      [busItineraryReducer.busItineraryFeatureKey]:
        busItineraryReducer.initialState,
    });
    expect(result).toEqual(authenticationUser);
  });

  it('getBusItinerarySuccess should work when the value of the reducer is the same as the selector', () => {
    const result = busItinerarySelectors.getBusItinerarySuccess({
      [busItineraryReducer.busItineraryFeatureKey]:
        busItineraryReducer.initialState,
    });
    expect(result).toEqual(authenticationUser.infoBus);
  });

  it('getBusNameItinerary should work when the value of the reducer is the same as the selector', () => {
    const result = busItinerarySelectors.getBusNameItinerary({
      [busItineraryReducer.busItineraryFeatureKey]:
        busItineraryReducer.initialState,
    });
    expect(result).toEqual(authenticationUser.nameBus);
  });

  it('getBusItineraryError should work when the value of the reducer is the same as the selector', () => {
    const result = busItinerarySelectors.getBusItineraryError({
      [busItineraryReducer.busItineraryFeatureKey]:
        busItineraryReducer.initialState,
    });
    expect(result).toEqual(authenticationUser.error);
  });

  it('getLoader should work when the value of the reducer is the same as the selector', () => {
    const result = busItinerarySelectors.getLoader({
      [busItineraryReducer.busItineraryFeatureKey]:
        busItineraryReducer.initialState,
    });
    expect(result).toEqual(authenticationUser.loading);
  });
});
