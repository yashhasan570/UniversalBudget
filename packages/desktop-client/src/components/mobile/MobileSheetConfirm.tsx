import type { ReactNode } from 'react';

import { styles } from '@universal-app/components/styles';
import { Text } from '@universal-app/components/text';
import { theme } from '@universal-app/components/theme';
import { spacing } from '@universal-app/components/tokens';
import { View } from '@universal-app/components/view';

import { MobileSheetActions } from './MobileSheetActions';

type MobileSheetConfirmProps = {
  message: ReactNode;
  detail?: ReactNode;
  error?: ReactNode;
  confirmLabel: ReactNode;
  isDestructive?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  children?: ReactNode;
};

export function MobileSheetConfirm({
  message,
  detail,
  error,
  confirmLabel,
  isDestructive = false,
  onCancel,
  onConfirm,
  children,
}: MobileSheetConfirmProps) {
  return (
    <View>
      <View
        style={{
          padding: `${spacing.sm}px ${spacing.lg}px 0`,
          gap: spacing.sm,
        }}
      >
        <Text
          style={{
            ...styles.mediumText,
            fontWeight: 600,
            color: theme.pageTextDark,
            overflowWrap: 'anywhere',
          }}
        >
          {message}
        </Text>
        {detail && (
          <Text style={{ ...styles.smallText, color: theme.pageTextLight }}>
            {detail}
          </Text>
        )}
        {children}
        {error && (
          <Text style={{ ...styles.smallText, color: theme.errorText }}>
            {error}
          </Text>
        )}
      </View>
      <MobileSheetActions
        onCancel={onCancel}
        onConfirm={onConfirm}
        confirmLabel={confirmLabel}
        isDestructive={isDestructive}
      />
    </View>
  );
}
