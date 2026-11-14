import { SvgCheck } from '@universal-app/components/icons/v2';
import { theme } from '@universal-app/components/theme';

type SelectedIndicatorProps = {
  selected: boolean;
};

export function SelectedIndicator({ selected }: SelectedIndicatorProps) {
  return (
    <SvgCheck
      style={{
        width: 13,
        height: 13,
        flexShrink: 0,
        color: selected ? theme.noticeText : 'transparent',
      }}
    />
  );
}
