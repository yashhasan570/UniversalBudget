import type { GridListItemProps } from 'react-aria-components';
import { Trans, useTranslation } from 'react-i18next';

import { Button } from '@universal-app/components/button';
import { Text } from '@universal-app/components/text';
import { theme } from '@universal-app/components/theme';
import { spacing } from '@universal-app/components/tokens';
import { View } from '@universal-app/components/view';
import type { TagEntity } from '@universal-app/core/types/models';
import type { WithRequired } from '@universal-app/core/types/util';

import { ActionableGridListItem } from '#components/mobile/ActionableGridListItem';
import { useTagCSS } from '#hooks/useTagCSS';

const VIEW_TRANSACTIONS_ACTION_WIDTH = 100;
const DELETE_ACTION_WIDTH = 60;

type TagsListItemProps = {
  onDelete: () => void;
  onViewTransactions: () => void;
} & WithRequired<GridListItemProps<TagEntity>, 'value'>;

export function TagsListItem({
  value: tag,
  onDelete,
  onViewTransactions,
  ...props
}: TagsListItemProps) {
  const { t } = useTranslation();
  const getTagCSS = useTagCSS({ ellipsis: true });
  const label = `#${tag.tag}`;

  return (
    <ActionableGridListItem
      id={tag.id}
      value={tag}
      textValue={label}
      actionsWidth={VIEW_TRANSACTIONS_ACTION_WIDTH + DELETE_ACTION_WIDTH}
      actions={
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <Button
            variant="bare"
            aria-label={t('View transactions')}
            onPress={onViewTransactions}
            style={{
              padding: 0,
              color: theme.pillText,
              backgroundColor: theme.pillBackground,
              width: VIEW_TRANSACTIONS_ACTION_WIDTH,
              borderRadius: 0,
            }}
          >
            <Trans>Transactions</Trans>
          </Button>
          <Button
            variant="bare"
            onPress={onDelete}
            style={{
              color: theme.errorText,
              flex: 1,
              padding: 0,
              borderRadius: 0,
            }}
          >
            <Trans>Delete</Trans>
          </Button>
        </View>
      }
      {...props}
    >
      <View
        style={{
          flex: 1,
          minWidth: 0,
          alignItems: 'flex-start',
          gap: spacing.xs,
        }}
      >
        <span className={getTagCSS(tag.tag)}>{label}</span>
        {tag.description != null && tag.description !== '' && (
          <Text
            style={{
              fontSize: 13,
              color: theme.pageTextLight,
              textAlign: 'left',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxWidth: '100%',
            }}
          >
            {tag.description}
          </Text>
        )}
      </View>
    </ActionableGridListItem>
  );
}
