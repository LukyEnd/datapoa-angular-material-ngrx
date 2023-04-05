import * as busItineraryAction from '../../actions/bus-itinerary.actions';
import * as loadingAction from '../../actions/loading.actions';
import * as busItineraryReducer from '../bus-itinerary.reducer';
import { initialState } from '../bus-itinerary.reducer';

describe('Bus Itinerary Reducer', () => {
  it('should return the previous state', () => {
    const action = {} as any;
    const result = busItineraryReducer.itineraryReducer(initialState, action);
    expect(result).toBe(initialState);
  });

  it('should infoBus', () => {
    const action = busItineraryAction.loadBusItinerarysSuccess({
      infoBus: [],
    });
    const state = busItineraryReducer.itineraryReducer(initialState, action);
    expect(state.infoBus).toEqual([]);
  });

  it('should nameBus', () => {
    const action = busItineraryAction.loadNameBusItinerarys({
      nameBus: '',
    });
    const state = busItineraryReducer.itineraryReducer(initialState, action);
    expect(state.nameBus).toEqual('');
  });

  it('should error', () => {
    const action = busItineraryAction.loadBusItinerarysFailure({
      error: '',
    });
    const state = busItineraryReducer.itineraryReducer(initialState, action);
    expect(state.error).toEqual('');
  });

  it('should loading', () => {
    const action = loadingAction.LoderStatusSuccess({
      loading: true,
    });
    const state = busItineraryReducer.itineraryReducer(initialState, action);
    expect(state.loading).toEqual(true);
  });
});
