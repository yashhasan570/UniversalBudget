import type { ReactNode } from 'react';

import { styles } from '@universal-app/components/styles';
import { Text } from '@universal-app/components/text';
import { theme } from '@universal-app/components/theme';
import { spacing } from '@universal-app/components/tokens';
import { View } from '@universal-app/components/view';

type SettingsGroupProps = {
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
};

export function SettingsGroup({
  title,
  description,
  children,
}: SettingsGroupProps) {
  return (
    <View style={{ flexShrink: 0, gap: spacing.sm }}>
      <View style={{ gap: spacing.xxs }}>
        <h2 style={{ ...styles.mediumText, fontWeight: 600, margin: 0 }}>
          {title}
        </h2>
        {description && (
          <Text
            style={{
              ...styles.smallText,
              lineHeight: 1.5,
              color: theme.settingsCardTextSubdued,
            }}
          >
            {description}
          </Text>
        )}
      </View>
      <View
        style={{
          color: theme.settingsCardText,
          backgroundColor: theme.settingsCardBackground,
          border: `1px solid ${theme.settingsCardBorder}`,
          borderRadius: 6,
          '&& > * + *': {
            borderTop: `1px solid ${theme.settingsCardBorder}`,
          },
        }}
      >
        {children}
      </View>
    </View>
  );
}
