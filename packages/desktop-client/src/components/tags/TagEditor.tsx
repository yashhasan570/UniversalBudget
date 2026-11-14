import type { RefObject } from 'react';

import { Button } from '@universal-app/components/button';
import { ColorPicker } from '@universal-app/components/color-picker';
import type { TagEntity } from '@universal-app/core/types/models';

import { useTagCSS } from '#hooks/useTagCSS';
import { useUpdateTagMutation } from '#tags';

type TagEditorProps = {
  tag: TagEntity;
  ref: RefObject<HTMLButtonElement | null>;
};

export const TagEditor = ({ tag, ref }: TagEditorProps) => {
  const getTagCSS = useTagCSS({ ellipsis: true });
  const { mutate: updateTag } = useUpdateTagMutation();

  const formattedTag = <>#{tag.tag}</>;

  return (
    <ColorPicker
      value={tag.color ?? undefined}
      onChange={color => {
        updateTag({ tag: { ...tag, color: color.toString('hex') } });
      }}
    >
      <Button variant="bare" className={getTagCSS(tag.tag)} ref={ref}>
        {formattedTag}
      </Button>
    </ColorPicker>
  );
};
