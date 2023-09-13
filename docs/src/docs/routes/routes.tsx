import { prop, sortBy } from 'ramda'
import { Page } from '../../app'

export const routes: Page[] = [
  {
    title: 'Quick Start',
    path: '/quick-start',
    component: () => import('../pages/quick-start-page'),
  },
  ...sortBy(prop('title'), [
    {
      title: 'Input',
      path: '/input',
      component: () => import('../pages/input-page'),
    },
    {
      title: 'Search Bar',
      path: '/search-bar',
      component: () => import('../pages/search-bar-page'),
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
      title: 'Drag and Drop',
      path: '/drag-and-drop',
      component: () => import('../pages/drag-and-drop-page'),
    },
    {
      title: 'Breadcrumbs',
      path: '/breadcrumbs',
      component: () => import('../pages/breadcrumbs-page'),
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
      title: 'Number Input',
      path: '/number-input',
      component: () => import('../pages/number-input-page'),
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
      title: 'Radio',
      path: '/radio',
      component: () => import('../pages/radio-button-page'),
    },
    {
      title: 'Modal',
      path: '/modal',
      component: () => import('../pages/modal-page'),
    },
    {
      title: 'Split pane',
      path: '/split',
      component: () => import('../pages/split-page'),
    },
    {
      title: 'Typography',
      path: '/typography',
      component: () => import('../pages/typography-page'),
    },
  ]),
]
