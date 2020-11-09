import _ from 'lodash';
import { useSetOpenedTabs } from '../utility/globalState';
import { openNewTab } from '../utility/common';

export default function useNewFreeTable() {
  const setOpenedTabs = useSetOpenedTabs();

  return ({ title = undefined, ...props } = {}) =>
    openNewTab(setOpenedTabs, {
      title: title || 'Table',
      icon: 'mdi mdi-table color-green-icon',
      tabComponent: 'FreeTableTab',
      props,
    });
}
