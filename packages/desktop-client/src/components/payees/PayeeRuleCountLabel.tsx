import type { CSSProperties } from 'react';
import { Trans } from 'react-i18next';

import { AnimatedLoading } from '@universal-app/components/icons/AnimatedLoading';
import { Text } from '@universal-app/components/text';
import { View } from '@universal-app/components/view';

type PayeeRuleCountLabelProps = {
  count: number;
  isLoading?: boolean;
  style?: CSSProperties;
};

export function PayeeRuleCountLabel({
  count,
  isLoading,
  style,
}: PayeeRuleCountLabelProps) {
  return (
    <Text style={style}>
      {isLoading ? (
        <View>
          <AnimatedLoading style={{ width: 12, height: 12 }} />
        </View>
      ) : count > 0 ? (
        <Trans count={count}>{{ count }} associated rules</Trans>
      ) : (
        <Trans>Create rule</Trans>
      )}
    </Text>
  );
}
