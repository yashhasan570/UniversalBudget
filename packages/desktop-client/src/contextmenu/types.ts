import type { MenuItem } from '@universal-app/components/menu';

export type ContextMenuItem =
  | (Extract<MenuItem, object> & {
      hidden?: boolean;
      order?: number;
      onClick?: () => void;
    })
  | Extract<MenuItem, symbol>;
