import { withInstall } from '../shared/';
import LocalDropdownMenu from './dropdown-menu.vue';
import LocalDropdownItem from './dropdown-item.vue';

import './style/';

export const DropdownMenu = withInstall(LocalDropdownMenu);
export const DropdownItem = withInstall(LocalDropdownItem);
