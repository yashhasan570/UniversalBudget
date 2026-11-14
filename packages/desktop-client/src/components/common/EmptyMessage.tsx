import type { ReactNode } from 'react';

import { styles } from '@universal-app/components/styles';
import { theme } from '@universal-app/components/theme';
import { spacing } from '@universal-app/components/tokens';
import { View } from '@universal-app/components/view';

type EmptyMessageProps = {
  children: ReactNode;
};

export function EmptyMessage({ children }: EmptyMessageProps) {
  return (
    <View
      style={{
        ...styles.smallText,
        flex: 1,
        padding: spacing.xl,
        alignItems: 'center',
        justifyContent: 'center',
        fontStyle: 'italic',
        color: theme.pageTextSubdued,
        backgroundColor: theme.tableBackground,
      }}
    >
      {children}
    </View>
  );
}
