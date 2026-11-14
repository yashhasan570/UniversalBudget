import { useTranslation } from 'react-i18next';

import { Button } from '@universal-app/components/button';
import { SvgTime } from '@universal-app/components/icons/v1';
import { SvgPencil1 } from '@universal-app/components/icons/v2';
import { InitialFocus } from '@universal-app/components/initial-focus';
import { Input } from '@universal-app/components/input';
import { styles } from '@universal-app/components/styles';
import { Text } from '@universal-app/components/text';
import { theme } from '@universal-app/components/theme';
import { spacing } from '@universal-app/components/tokens';
import { Tooltip } from '@universal-app/components/tooltip';
import { View } from '@universal-app/components/view';
import { isElectron } from '@universal-app/core/shared/environment';
import { css, cx } from '@emotion/css';

import { useMetadataPref } from '#hooks/useMetadataPref';
import { pushModal } from '#modals/modalsSlice';
import { useDispatch } from '#redux';

type SidebarBudgetNameProps = {
  isEditing: boolean;
  onEditingChange: (isEditing: boolean) => void;
};

export function SidebarBudgetName({
  isEditing,
  onEditingChange,
}: SidebarBudgetNameProps) {
  const { t } = useTranslation();
  const [budgetName, setBudgetNamePref] = useMetadataPref('budgetName');
  const dispatch = useDispatch();

  const iconButtonClassName = cx(
    'hover-visible',
    css({
      backgroundColor: 'transparent',
      '&[data-hovered], &[data-focus-visible]': {
        backgroundColor: theme.sidebarControlBackground,
      },
    }),
  );

  function saveBudgetName(newBudgetName: string) {
    if (newBudgetName.trim() !== '' && newBudgetName !== budgetName) {
      setBudgetNamePref(newBudgetName);
    }
    onEditingChange(false);
  }

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: spacing.xs,
          minWidth: 0,
          visibility: isEditing ? 'hidden' : undefined,
          '& .hover-visible': {
            opacity: 0,
          },
          '&:hover .hover-visible, & .hover-visible[data-focus-visible]': {
            opacity: 1,
          },
        }}
      >
        <Text
          data-testid="budget-name"
          style={{
            color: theme.sidebarHeaderText,
            fontSize: 13,
            fontWeight: 600,
            ...styles.ellipsisText,
          }}
        >
          {budgetName || t('Unnamed')}
        </Text>
        <Button
          variant="bare"
          className={iconButtonClassName}
          aria-label={t('Rename budget')}
          style={{ padding: spacing.xxs, flexShrink: 0 }}
          onPress={() => onEditingChange(true)}
        >
          <SvgPencil1
            width={11}
            height={11}
            style={{ color: theme.sidebarTextSubdued }}
          />
        </Button>
        {isElectron() && (
          <Tooltip
            content={t('Load Backup…')}
            placement="bottom start"
            style={styles.tooltip}
            triggerProps={{ delay: 500 }}
          >
            <Button
              variant="bare"
              className={iconButtonClassName}
              aria-label={t('Load Backup…')}
              style={{ padding: spacing.xxs, flexShrink: 0 }}
              onPress={() =>
                dispatch(
                  pushModal({ modal: { name: 'load-backup', options: {} } }),
                )
              }
            >
              <SvgTime
                width={11}
                height={11}
                style={{ color: theme.sidebarTextSubdued }}
              />
            </Button>
          </Tooltip>
        )}
      </View>
      {isEditing && (
        <InitialFocus>
          <Input
            aria-label={t('Budget name')}
            size="medium"
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              width: '100%',
              transform: 'translateY(-50%)',
              fontWeight: 600,
            }}
            defaultValue={budgetName}
            onEnter={saveBudgetName}
            onUpdate={saveBudgetName}
            onEscape={() => onEditingChange(false)}
          />
        </InitialFocus>
      )}
    </>
  );
}
