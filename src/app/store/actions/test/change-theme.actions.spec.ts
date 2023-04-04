import * as fromChangeThemeAction from '../change-theme.actions';

describe('loadChangeThemes', () => {
  it('loadChangeThemes should work when it matches the description', () => {
    expect(fromChangeThemeAction.loadChangeThemes.type).toBe(
      '[ChangeTheme] Load ChangeThemes'
    );
  });
});
