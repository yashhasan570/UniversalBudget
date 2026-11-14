import { useTranslation } from 'react-i18next';

import { SvgCog } from '@universal-app/components/icons/v1';
import { theme } from '@universal-app/components/theme';
import { spacing } from '@universal-app/components/tokens';
import { View } from '@universal-app/components/view';

import { NavRow } from './NavRow';

export function SidebarFooter() {
  const { t } = useTranslation();

  return (
    <View
      style={{
        flexShrink: 0,
        borderTop: `1px solid ${theme.sidebarBorder}`,
        padding: spacing.sm,
      }}
    >
      <NavRow title={t('Settings')} Icon={SvgCog} to="/settings" />
    </View>
  );
}
