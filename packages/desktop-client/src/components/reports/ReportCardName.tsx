import React from 'react';

import { InitialFocus } from '@universal-app/components/initial-focus';
import { Input } from '@universal-app/components/input';
import { styles } from '@universal-app/components/styles';

import { NON_DRAGGABLE_AREA_CLASS_NAME } from './constants';

type ReportCardNameProps = {
  name: string;
  isEditing: boolean;
  onChange: (newName: string) => void;
  onClose: () => void;
};

export const ReportCardName = ({
  name,
  isEditing,
  onChange,
  onClose,
}: ReportCardNameProps) => {
  if (isEditing) {
    return (
      <InitialFocus>
        <Input
          className={NON_DRAGGABLE_AREA_CLASS_NAME}
          defaultValue={name}
          onEnter={onChange}
          onUpdate={onChange}
          onEscape={onClose}
          style={{
            ...styles.mediumText,
            marginTop: -6,
            marginBottom: -1,
            marginLeft: -6,
            width: Math.max(20, name.length) + 'ch',
          }}
        />
      </InitialFocus>
    );
  }

  return (
    <h2
      style={{
        display: 'block',
        margin: 0,
        padding: 0,
        ...styles.mediumText,
        marginBottom: 5,
      }}
    >
      {name}
    </h2>
  );
};
