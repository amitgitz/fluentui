import * as React from 'react';
import { renderAvatarGroupPopover_unstable } from './renderAvatarGroupPopover';
import { useAvatarGroupPopoverContextValues } from './useAvatarGroupPopoverContextValues';
import { useCustomStyleHooks_unstable } from '@fluentui/react-shared-contexts';
import { useAvatarGroupPopover_unstable } from './useAvatarGroupPopover';
import { useAvatarGroupPopoverStyles_unstable } from './useAvatarGroupPopoverStyles';
import type { AvatarGroupPopoverProps } from './AvatarGroupPopover.types';

/**
 * The AvatarGroupPopover component provides a button with a Popover containing the children provided.
 */
export const AvatarGroupPopover: React.FC<AvatarGroupPopoverProps> = props => {
  const state = useAvatarGroupPopover_unstable(props);
  const contextValues = useAvatarGroupPopoverContextValues(state);

  useAvatarGroupPopoverStyles_unstable(state);

  const { useAvatarGroupPopoverStyles_unstable: useCustomStyles } = useCustomStyleHooks_unstable();
  useCustomStyles(state);

  return renderAvatarGroupPopover_unstable(state, contextValues);
};

AvatarGroupPopover.displayName = 'AvatarGroupPopover';
