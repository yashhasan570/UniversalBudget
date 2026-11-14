import React from 'react';
import type { CSSProperties, ReactNode } from 'react';

import { Button } from '@universal-app/components/button';
import { styles } from '@universal-app/components/styles';
import { Text } from '@universal-app/components/text';
import { theme } from '@universal-app/components/theme';
import { Tooltip } from '@universal-app/components/tooltip';

type SnapshotButtonProps = {
  selected?: boolean;
  children: ReactNode;
  style?: CSSProperties;
  onSelect?: () => void;
  title?: string;
};

export function SnapshotButton({
  selected,
  children,
  style,
  onSelect,
  title,
}: SnapshotButtonProps) {
  return (
    <Tooltip
      placement="bottom start"
      content={<Text>{title}</Text>}
      style={{ ...styles.tooltip, lineHeight: 1.5, padding: '6px 10px' }}
    >
      <Button
        variant="bare"
        style={{
          ...(selected && {
            backgroundColor: theme.buttonBareBackgroundHover,
          }),
          ...style,
        }}
        onPress={onSelect}
        aria-label={title}
      >
        {children}
      </Button>
    </Tooltip>
  );
}
