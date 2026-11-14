import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { Trans } from 'react-i18next';

import { Button } from '@universal-app/components/button';
import { SvgCheveronLeft } from '@universal-app/components/icons/v1';
import { styles } from '@universal-app/components/styles';
import { Text } from '@universal-app/components/text';

import { useNavigate } from '#hooks/useNavigate';

type MobileBackButtonProps = ComponentPropsWithoutRef<typeof Button>;

export function MobileBackButton({
  onPress,
  style,
  ...props
}: MobileBackButtonProps) {
  const navigate = useNavigate();
  return (
    <Button
      variant="bare"
      style={{
        margin: 10,
        ...style,
      }}
      onPress={onPress || (() => navigate(-1))}
      {...props}
    >
      <SvgCheveronLeft
        style={{ width: 30, height: 30, margin: -10, marginLeft: -5 }}
      />
      <Text
        style={{
          ...styles.text,
          fontWeight: 500,
          marginLeft: 5,
          marginRight: 5,
        }}
      >
        <Trans>Back</Trans>
      </Text>
    </Button>
  );
}
