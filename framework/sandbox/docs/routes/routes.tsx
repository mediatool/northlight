import { prop, sortBy } from 'ramda'
import { Page } from '../../app'

export const routes: Page[] = sortBy(prop('title'), [
  {
    title: 'Input',
    path: '/input',
    component: () => import('../pages/input-page'),
  },
  {
    title: 'Step stack',
    path: '/step-stack',
    component: () => import('../pages/step-stack-page'),
  },
  {
    title: 'Search Bar',
    path: '/search-bar',
    component: () => import('../pages/search-bar-page'),
  },
  {
    title: 'Flip Button',
    path: '/flip-button',
    component: () => import('../pages/flip-button-page'),
  },
  {
    title: 'Overflow Group',
    path: '/overflow-group',
    component: () => import('../pages/overflow-group-page'),
  },
  {
    title: 'Transitions',
    path: '/transitions',
    component: () => import('../pages/transitions-page'),
  },
  {
    title: 'File Picker',
    path: '/file picker',
    component: () => import('../pages/file-picker-page'),
  },
  {
    title: 'Organization Logo',
    path: '/organization-logo',
    component: () => import('../pages/organization-logo-page'),
  },
  {
    title: 'Drag and Drop',
    path: '/drag-and-drop',
    component: () => import('../pages/drag-and-drop-page'),
  },
  {
    title: 'Sortable List',
    path: '/sortable-list',
    component: () => import('../pages/sortable-list-page'),
  },
  {
    title: 'Multi Sort',
    path: '/multi-sort',
    component: () => import('../pages/multi-sort-page'),
  },
  {
    title: 'Toolbox',
    path: '/toolbox',
    component: () => import('../pages/toolbox-page'),
  },
  {
    title: 'Clickable',
    path: '/clickable',
    component: () => import('../pages/clickable-page'),
  },
  {
    title: 'Blinker',
    path: '/blinker',
    component: () => import('../pages/blinker-page'),
  },
  {
    title: 'Color Picker',
    path: '/color-picker',
    component: () => import('../pages/color-picker-page'),
  },
  {
    title: 'Breadcrumbs',
    path: '/breadcrumbs',
    component: () => import('../pages/breadcrumbs-page'),
  },
  {
    title: 'Fast List',
    path: '/fast-list',
    component: () => import('../pages/fast-list-page'),
  },
  {
    title: 'Fast Grid',
    path: '/fast-grid',
    component: () => import('../pages/fast-grid-page'),
  },
  {
    title: 'Button',
    path: '/button',
    component: () => import('../pages/button-page'),
  },
  {
    title: 'Card',
    path: '/card',
    component: () => import('../pages/card-page'),
  },
  {
    title: 'Checkbox',
    path: '/checkbox',
    component: () => import('../pages/checkbox-page'),
  },
  {
    title: 'Carousel',
    path: '/carousel',
    component: () => import('../pages/carousel-page'),
  },
  {
    title: 'Close Button',
    path: '/close-button',
    component: () => import('../pages/close-button-page'),
  },
  {
    title: 'Date Picker',
    path: '/date-picker',
    component: () => import('../pages/date-picker-page'),
  },
  {
    title: 'Date Range Picker',
    path: '/date-range-picker',
    component: () => import('../pages/date-range-picker-page'),
  },
  {
    title: 'Form',
    path: '/form',
    component: () => import('../pages/form-page'),
  },
  {
    title: 'Form Example',
    path: '/form-example',
    component: () => import('../pages/form-demo-page'),
  },
  {
    title: 'Form Field',
    path: '/form-field',
    component: () => import('../pages/field-page'),
  },
  {
    title: 'Progress Bar',
    path: '/progress-bar',
    component: () => import('../pages/progress-bar-page'),
  },
  {
    title: 'Formatted Number Input',
    path: '/formatted-number-input',
    component: () => import('../pages/formatted-number-input-page'),
  },
  {
    title: 'Number Input',
    path: '/number-input',
    component: () => import('../pages/number-input-page'),
  },
  {
    title: 'Icon Button',
    path: '/icon-button',
    component: () => import('../pages/icon-button-page'),
  },
  {
    title: 'Notification Icon Button',
    path: '/notification-icon-button',
    component: () => import('../pages/notification-icon-button-page'),
  },
  {
    title: 'Palette',
    path: '/palette',
    component: () => import('../pages/palette-page'),
  },
  {
    title: 'Pin Input',
    path: '/pin-input',
    component: () => import('../pages/pin-input-page'),
  },
  {
    title: 'Radio',
    path: '/radio',
    component: () => import('../pages/radio-button-page'),
  },
  {
    title: 'Select',
    path: '/select',
    component: () => import('../pages/select-page'),
  },
  {
    title: 'Switch',
    path: '/switch',
    component: () => import('../pages/switch-page'),
  },
  {
    title: 'Spinner',
    path: '/spinner',
    component: () => import('../pages/spinner-page'),
  },
  {
    title: 'Tag',
    path: '/tag',
    component: () => import('../pages/tag-page'),
  },
  {
    title: 'Toast',
    path: '/toast',
    component: () => import('../pages/toast-page'),
  },
  {
    title: 'Textarea',
    path: '/textarea',
    component: () => import('../pages/textarea-page'),
  },
  {
    title: 'Status Pin',
    path: '/status-pin',
    component: () => import('../pages/status-pin-page'),
  },
  {
    title: 'Navbar Item',
    path: '/navbar-item',
    component: () => import('../pages/navbar-item-page'),
  },
  {
    title: 'Status Block',
    path: '/status-block',
    component: () => import('../pages/status-block-page'),
  },
  {
    title: 'Modal',
    path: '/modal',
    component: () => import('../pages/modal-page'),
  },
  {
    title: 'Tabs',
    path: '/tabs',
    component: () => import('../pages/tabs-page'),
  },
  {
    title: 'Clipboard Input',
    path: '/clipboard-input',
    component: () => import('../pages/clipboard-input-page'),
  },
  {
    title: 'Split pane',
    path: '/split',
    component: () => import('../pages/split-page'),
  },
  {
    title: 'Steps',
    path: '/steps',
    component: () => import('../pages/steps-page'),
  },
  {
    title: 'Typography',
    path: '/typography',
    component: () => import('../pages/typography-page'),
  },
  {
    title: 'Editable text',
    path: '/editable-text',
    component: () => import('../pages/editable-text-page'),
  },
])
