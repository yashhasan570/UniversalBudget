import * as Platform from '@universal-app/core/shared/platform';

export function useIsTestEnv(): boolean {
  return Platform.isPlaywright;
}
