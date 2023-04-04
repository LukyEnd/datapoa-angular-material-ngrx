import * as fromloading from '../loading.actions';

describe('loadChangeThemes', () => {
  it('LoderStatus should work when it matches the description', () => {
    expect(fromloading.LoderStatus.type).toBe('[LoderStatus] Load LoderStatus');
  });

  it('LoderStatusSuccess should work when it matches the description', () => {
    expect(fromloading.LoderStatusSuccess.type).toBe(
      '[LoderStatus] Load LoderStatus Success'
    );
  });
});
