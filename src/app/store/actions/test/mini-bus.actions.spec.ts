import * as miniBusLineActions from '../mini-bus.actions';

describe('Add Program Actions', () => {
  it('MiniBuss should work when it matches the description', () => {
    expect(miniBusLineActions.MiniBuss.type).toBe('[MiniBus] Load MiniBus');
  });

  it('MiniBussSuccess should work when it matches the description', () => {
    expect(miniBusLineActions.MiniBussSuccess.type).toBe(
      '[MiniBus]Load MiniBus Success'
    );
  });

  it('MiniBussFailure should work when it matches the description', () => {
    expect(miniBusLineActions.MiniBussFailure.type).toBe(
      '[MiniBus] Load MiniBus Failure'
    );
  });
});
