import { forwardRef, useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { Trans, useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

import { Button } from '@universal-app/components/button';
import { SvgHelp } from '@universal-app/components/icons/v2';
import { Menu } from '@universal-app/components/menu';
import { Popover } from '@universal-app/components/popover';
import { SpaceBetween } from '@universal-app/components/space-between';
import { useToggle } from 'usehooks-ts';

import { useFeatureFlag } from '#hooks/useFeatureFlag';
import { pushModal } from '#modals/modalsSlice';
import { useDispatch } from '#redux';

import { useTour } from './tour/TourProvider';

const getPageDocs = (page: string) => {
  switch (page) {
    case '/budget':
      return 'https://universalbudget.org/docs/getting-started/envelope-budgeting';
    case '/reports':
      return 'https://universalbudget.org/docs/reports/';
    case '/schedules':
    case '/settings/schedules':
      return 'https://universalbudget.org/docs/schedules';
    case '/payees':
    case '/settings/payees':
      return 'https://universalbudget.org/docs/transactions/payees';
    case '/rules':
    case '/settings/rules':
      return 'https://universalbudget.org/docs/budgeting/rules';
    case '/tags':
    case '/settings/tags':
      return 'https://universalbudget.org/docs/transactions/tags';
    case '/bank-sync':
    case '/settings/bank-sync':
      return 'https://universalbudget.org/docs/advanced/bank-sync';
    case '/settings/experimental':
      return 'https://universalbudget.org/docs/experimental';
    case '/settings':
    case '/settings/general':
    case '/settings/advanced':
      return 'https://universalbudget.org/docs/settings';
    case '/notifications':
      return 'https://universalbudget.org/docs/notifications';
    default:
      // All pages under /accounts, plus any missing pages
      return 'https://universalbudget.org/docs';
  }
};

function openDocsForCurrentPage() {
  window.Actual.openURLInBrowser(getPageDocs(window.location.pathname));
}

type HelpMenuItem =
  | 'docs'
  | 'discord'
  | 'keyboard-shortcuts'
  | 'start-tour'
  | 'goal-templates';

type HelpButtonProps = {
  onPress?: () => void;
};

const HelpButton = forwardRef<HTMLButtonElement, HelpButtonProps>(
  ({ onPress }, ref) => {
    const size = 15;
    return (
      <Button
        variant="bare"
        ref={ref}
        onPress={onPress}
        data-testid="help-menu-button"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <SvgHelp width={size} height={size} />
        <Trans>Help</Trans>
      </Button>
    );
  },
);

HelpButton.displayName = 'HelpButton';

export const HelpMenu = () => {
  const showGoalTemplates = useFeatureFlag('goalTemplatesEnabled');
  const { t } = useTranslation();
  const [isMenuOpen, toggleMenuOpen, setMenuOpen] = useToggle();
  const menuButtonRef = useRef(null);

  const dispatch = useDispatch();
  const page = useLocation().pathname;
  const { startTour } = useTour();

  const handleItemSelect = (item: HelpMenuItem) => {
    switch (item) {
      case 'docs':
        openDocsForCurrentPage();
        break;
      case 'discord':
        window.Actual.openURLInBrowser('https://discord.gg/pRYNYr4W5A');
        break;
      case 'keyboard-shortcuts':
        dispatch(pushModal({ modal: { name: 'keyboard-shortcuts' } }));
        break;
      case 'start-tour':
        startTour();
        break;
      case 'goal-templates':
        dispatch(pushModal({ modal: { name: 'goal-templates' } }));
        break;
      default:
        throw new Error(`Unrecognized menu option: ${String(item)}`);
    }
  };

  useHotkeys('?', () => setMenuOpen(true), { useKey: true });

  return (
    <SpaceBetween>
      <HelpButton ref={menuButtonRef} onPress={toggleMenuOpen} />

      <Popover
        placement="bottom end"
        offset={8}
        triggerRef={menuButtonRef}
        isOpen={isMenuOpen}
        onOpenChange={() => setMenuOpen(false)}
      >
        <Menu
          onMenuSelect={(item: HelpMenuItem) => {
            setMenuOpen(false);
            handleItemSelect(item);
          }}
          items={[
            {
              name: 'docs',
              text: t('Documentation'),
            },
            {
              name: 'discord',
              text: t('Community support (Discord)'),
            },
            { name: 'keyboard-shortcuts', text: t('Keyboard shortcuts') },
            { name: 'start-tour', text: t('Take a tour') },
            ...(showGoalTemplates && page === '/budget'
              ? [{ name: 'goal-templates', text: t('Goal templates') }]
              : []),
          ]}
        />
      </Popover>
    </SpaceBetween>
  );
};
