import type { ComponentProps, ComponentType, SVGProps } from 'react';

import { Button } from '@universal-app/components/button';
import { styles } from '@universal-app/components/styles';
import { theme } from '@universal-app/components/theme';
import { radius } from '@universal-app/components/tokens';
import { Tooltip } from '@universal-app/components/tooltip';
import { css } from '@emotion/css';

type SidebarIconButtonProps = {
  Icon:
    | ComponentType<SVGProps<SVGElement>>
    | ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  isToggledOn?: boolean;
  isDisabled?: boolean;
  onPress: ComponentProps<typeof Button>['onPress'];
};

export function SidebarIconButton({
  Icon,
  label,
  isToggledOn,
  isDisabled,
  onPress,
}: SidebarIconButtonProps) {
  return (
    <Tooltip
      content={label}
      placement="bottom"
      style={styles.tooltip}
      triggerProps={{ delay: 500 }}
    >
      <Button
        variant="bare"
        aria-label={label}
        aria-pressed={isToggledOn}
        isDisabled={isDisabled}
        onPress={onPress}
        className={css({
          color: isToggledOn
            ? theme.sidebarItemTextSelected
            : theme.sidebarTextSubdued,
          backgroundColor: isToggledOn
            ? theme.sidebarControlBackground
            : 'transparent',
          '&[data-hovered], &[data-focus-visible]': {
            backgroundColor: theme.sidebarControlBackground,
            color: theme.sidebarItemTextSelected,
          },
        })}
        style={{
          width: 18,
          height: 18,
          padding: 0,
          borderRadius: radius.sm,
        }}
      >
        <Icon width={12} height={12} style={{ flexShrink: 0 }} />
      </Button>
    </Tooltip>
  );
}
