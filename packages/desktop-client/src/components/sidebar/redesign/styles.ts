import type { CSSProperties } from '@universal-app/components/styles';
import { theme } from '@universal-app/components/theme';
import { radius } from '@universal-app/components/tokens';

export const sectionLabelStyle = {
  fontSize: 13,
  fontWeight: 600,
} satisfies CSSProperties;

export const groupLabelStyle = {
  fontSize: 12,
  fontWeight: 600,
  color: theme.sidebarTextSubdued,
} satisfies CSSProperties;

export const dropZoneStyle = {
  backgroundColor: theme.sidebarItemBackgroundHover,
  boxShadow: `inset 0 0 0 1px ${theme.sidebarItemAccentSelected}`,
  borderRadius: radius.sm,
} satisfies CSSProperties;
