import type { ReactNode } from 'react';

import { styles } from '@universal-app/components/styles';
import type { CSSProperties } from '@universal-app/components/styles';
import { Text } from '@universal-app/components/text';
import { theme } from '@universal-app/components/theme';
import { spacing } from '@universal-app/components/tokens';
import { View } from '@universal-app/components/view';

type ManagePageProps = {
  description?: ReactNode;
  actions?: ReactNode;
  search?: ReactNode;
  selection?: ReactNode;
  menu?: ReactNode;
  style?: CSSProperties;
  children: ReactNode;
};

export function ManagePage({
  description,
  actions,
  search,
  selection,
  menu,
  style,
  children,
}: ManagePageProps) {
  return (
    <View style={{ flex: 1, minHeight: 0, gap: spacing.md, ...style }}>
      {description != null && (
        <Text
          style={{
            ...styles.smallText,
            lineHeight: 1.5,
            color: theme.pageTextLight,
          }}
        >
          {description}
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexWrap: 'wrap',
          gap: spacing.sm,
          flexShrink: 0,
        }}
      >
        <View
          style={{
            flex: '1 0 auto',
            flexDirection: 'row',
            alignItems: 'center',
            gap: spacing.sm,
          }}
        >
          {actions}
        </View>
        {search != null && (
          <View style={{ flex: '100 1 100px', maxWidth: 250 }}>{search}</View>
        )}
        {selection}
        {menu}
      </View>
      {children}
    </View>
  );
}
