import * as busLineActions from '../bus-line.actions';

describe('Add Program Actions', () => {
  it('loadBusLines should work when it matches the description', () => {
    expect(busLineActions.loadBusLines.type).toBe('[BusLine] Load BusLine');
  });

  it('loadBusLinesSuccess should work when it matches the description', () => {
    expect(busLineActions.loadBusLinesSuccess.type).toBe(
      '[BusLine] Load BusLine Success'
    );
  });

  it('loadBusLinesFailure should work when it matches the description', () => {
    expect(busLineActions.loadBusLinesFailure.type).toBe(
      '[BusLine] Load BusLine Failure'
    );
  });
});
