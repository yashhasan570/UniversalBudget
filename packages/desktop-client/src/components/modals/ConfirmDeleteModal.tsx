import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Button } from '@universal-app/components/button';
import { useResponsive } from '@universal-app/components/hooks/useResponsive';
import { InitialFocus } from '@universal-app/components/initial-focus';
import { Paragraph } from '@universal-app/components/paragraph';
import { styles } from '@universal-app/components/styles';
import { View } from '@universal-app/components/view';

import { Modal, ModalCloseButton, ModalHeader } from '#components/common/Modal';
import type { Modal as ModalType } from '#modals/modalsSlice';

type ConfirmDeleteModalProps = Extract<
  ModalType,
  { name: 'confirm-delete' }
>['options'];

export function ConfirmDeleteModal({
  message,
  onConfirm,
}: ConfirmDeleteModalProps) {
  const { t } = useTranslation();
  const { isNarrowWidth } = useResponsive();
  const narrowButtonStyle = isNarrowWidth
    ? {
        height: styles.mobileMinHeight,
      }
    : {};

  return (
    <Modal name="confirm-delete">
      {({ state }) => (
        <>
          <ModalHeader
            title={t('Confirm Delete')}
            rightContent={<ModalCloseButton onPress={() => state.close()} />}
          />
          <View style={{ lineHeight: 1.5 }}>
            <Paragraph>{message}</Paragraph>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                style={{
                  marginRight: 10,
                  ...narrowButtonStyle,
                }}
                onPress={() => state.close()}
              >
                <Trans>Cancel</Trans>
              </Button>
              <InitialFocus>
                <Button
                  variant="primary"
                  style={narrowButtonStyle}
                  onPress={() => {
                    onConfirm();
                    state.close();
                  }}
                >
                  <Trans>Delete</Trans>
                </Button>
              </InitialFocus>
            </View>
          </View>
        </>
      )}
    </Modal>
  );
}
