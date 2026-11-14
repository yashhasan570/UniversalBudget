import { useTranslation } from 'react-i18next';

import { Button } from '@universal-app/components/button';
import { SvgRemove } from '@universal-app/components/icons/v2';
import { InitialFocus } from '@universal-app/components/initial-focus';
import { Input } from '@universal-app/components/input';
import { theme } from '@universal-app/components/theme';
import { spacing } from '@universal-app/components/tokens';
import { View } from '@universal-app/components/view';

type AccountSearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
};

export function AccountSearchField({
  value,
  onChange,
  onClose,
}: AccountSearchFieldProps) {
  const { t } = useTranslation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.xs,
        marginBottom: spacing.xs,
      }}
    >
      <InitialFocus>
        <Input
          value={value}
          aria-label={t('Find account')}
          placeholder={t('Find account')}
          onChangeValue={onChange}
          onEscape={onClose}
          style={{
            flex: 1,
            fontSize: 12,
            backgroundColor: theme.sidebarControlBackground,
            border: '1px solid transparent',
            color: theme.sidebarItemText,
          }}
        />
      </InitialFocus>
      <Button
        variant="bare"
        aria-label={t('Close search')}
        onPress={onClose}
        style={{ color: theme.sidebarTextSubdued, padding: spacing.xxs }}
      >
        <SvgRemove width={9} height={9} />
      </Button>
    </View>
  );
}
