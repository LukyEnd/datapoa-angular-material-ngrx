import * as busItineraryActions from '../bus-itinerary.actions';

describe('Add Program Actions', () => {
  it('loadBusItinerarys should work when it matches the description', () => {
    expect(busItineraryActions.loadBusItinerarys.type).toBe(
      '[BusItinerary] Load BusItinerarys'
    );
  });

  it('loadBusItinerarysSuccess should work when it matches the description', () => {
    expect(busItineraryActions.loadBusItinerarysSuccess.type).toBe(
      '[BusItinerary] Load BusItinerarys Success'
    );
  });

  it('loadNameBusItinerarys should work when it matches the description', () => {
    expect(busItineraryActions.loadNameBusItinerarys.type).toBe(
      '[BusItinerary] Load Name Bus Itinerarys Success'
    );
  });

  it('loadBusItinerarysFailure should work when it matches the description', () => {
    expect(busItineraryActions.loadBusItinerarysFailure.type).toBe(
      '[BusItinerary] Load BusItinerarys Failure'
    );
  });
});
