import React from 'react';

import { Text } from '@universal-app/components/text';
import { theme } from '@universal-app/components/theme';
import { View } from '@universal-app/components/view';
import type { RuleConditionEntity } from '@universal-app/core/types/models';

import { FieldSelect } from '#components/rules/RuleEditor';

export function ConditionsOpMenu({
  conditionsOp,
  onChange,
  conditions,
}: {
  conditionsOp: 'and' | 'or';
  onChange: (value: 'and' | 'or') => void;
  conditions: RuleConditionEntity[];
}) {
  return conditions.length > 1 ? (
    <Text style={{ color: theme.pageText, marginTop: 11, marginRight: 5 }}>
      <FieldSelect
        style={{ display: 'inline-flex' }}
        fields={[
          ['and', 'all'],
          ['or', 'any'],
        ]}
        value={conditionsOp}
        onChange={onChange}
      />
      of:
    </Text>
  ) : (
    <View />
  );
}
