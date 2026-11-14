import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@universal-app/components/button';
import { SvgDotsHorizontalTriple } from '@universal-app/components/icons/v1';
import { Menu } from '@universal-app/components/menu';
import type { MenuItem } from '@universal-app/components/menu';
import { Popover } from '@universal-app/components/popover';
import { View } from '@universal-app/components/view';

type PageMenuButtonProps<Name extends string> = {
  items: Array<MenuItem<Name>>;
  onMenuSelect: (name: Name) => void;
};

export function PageMenuButton<Name extends string>({
  items,
  onMenuSelect,
}: PageMenuButtonProps<Name>) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <View style={{ flexShrink: 0 }}>
      <Button
        ref={triggerRef}
        variant="bare"
        aria-label={t('Menu')}
        onPress={() => setIsOpen(true)}
      >
        <SvgDotsHorizontalTriple width={17} height={17} />
      </Button>
      <Popover
        triggerRef={triggerRef}
        isOpen={isOpen}
        isNonModal
        onOpenChange={setIsOpen}
      >
        <Menu
          items={items}
          onMenuSelect={name => {
            setIsOpen(false);
            onMenuSelect(name);
          }}
        />
      </Popover>
    </View>
  );
}
