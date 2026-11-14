import type { MenuItemObject } from '@universal-app/components/menu';
import { styles } from '@universal-app/components/styles';
import { Text } from '@universal-app/components/text';
import { theme } from '@universal-app/components/theme';
import { spacing } from '@universal-app/components/tokens';

import { MobileSheetRow } from './MobileSheetRow';

type MobileSheetMenuRowsProps = {
  items: MenuItemObject<string>[];
  onSelect: (name: string) => void;
};

export function MobileSheetMenuRows({
  items,
  onSelect,
}: MobileSheetMenuRowsProps) {
  return (
    <>
      {items.map(item =>
        item.disabled ? (
          <Text
            key={item.name}
            style={{
              ...styles.mediumText,
              color: theme.pageTextLight,
              padding: `${spacing.sm}px ${spacing.lg}px ${spacing.lg}px`,
            }}
          >
            {item.text}
          </Text>
        ) : (
          <MobileSheetRow
            key={item.name}
            label={item.text}
            onPress={() => onSelect(item.name)}
          />
        ),
      )}
    </>
  );
}
