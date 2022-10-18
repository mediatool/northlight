import { Page } from '../../app'

export const routes: Page[] = [
  {
    title: 'Textarea Field Test Page',
    path: '/textarea-field-test-page',
    component: () => import('../pages/textarea-field-test-page'),
  },
  {
    title: 'Number Field Test Page',
    path: '/number-field-test-page',
    component: () => import('../pages/number-field-test-page'),
  },
  {
    title: 'Checkbox Field Test Page',
    path: '/checkbox-field-test-page',
    component: () => import('../pages/checkbox-field-test-page'),
  },
  {
    title: 'Text Field Test Page',
    path: '/text-field-test-page',
    component: () => import('../pages/text-field-test-page'),
  },
  {
    title: 'Switch Field Test Page',
    path: '/switch-field-test-page',
    component: () => import('../pages/switch-field-test-page'),
  },
  {
    title: 'Select Field Test Page',
    path: '/select-field-test-page',
    component: () => import('../pages/select-field-test-page'),
  },
  {
    title: 'Multi Select Field Test Page',
    path: '/multi-select-field-test-page',
    component: () => import('../pages/multi-select-field-test-page'),
  },
  {
    title: 'Tooltip Test Page',
    path: '/tooltip-test-page',
    component: () => import('../pages/tooltip-test-page'),
  },
]
