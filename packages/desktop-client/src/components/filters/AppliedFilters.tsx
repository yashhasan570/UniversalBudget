import React from 'react';

import type { CSSProperties } from '@universal-app/components/styles';
import { View } from '@universal-app/components/view';
import type { RuleConditionEntity } from '@universal-app/core/types/models';

import { ConditionsOpMenu } from './ConditionsOpMenu';
import { FilterExpression } from './FilterExpression';

type AppliedFiltersProps = {
  conditions: RuleConditionEntity[];
  onUpdate: (
    filter: RuleConditionEntity,
    newFilter: RuleConditionEntity,
  ) => void;
  onDelete: (filter: RuleConditionEntity) => void;
  conditionsOp: 'and' | 'or';
  onConditionsOpChange: (value: 'and' | 'or') => void;
  style?: CSSProperties;
};

export function AppliedFilters({
  conditions,
  onUpdate,
  onDelete,
  conditionsOp,
  onConditionsOpChange,
  style = {},
}: AppliedFiltersProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        ...style,
      }}
    >
      <ConditionsOpMenu
        conditionsOp={conditionsOp}
        onChange={onConditionsOpChange}
        conditions={conditions}
      />
      {conditions.map((filter: RuleConditionEntity, i: number) => (
        <FilterExpression
          key={i}
          customName={filter.customName}
          field={filter.field}
          op={filter.op}
          value={filter.value}
          options={filter.options}
          onChange={newFilter => onUpdate(filter, newFilter)}
          onDelete={() => onDelete(filter)}
        />
      ))}
    </View>
  );
}
