import React from 'react'
import ReferencePage from '../../reference-page'

const DatePickerPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: 'lib/components/date-picker/date-picker/date-picker.tsx',
    description: '',
    displayName: 'DatePicker',
    methods: [],
    props: {
      minValue: {
        defaultValue: null,
        description: 'The minimum allowed date that a user may select.',
        name: 'minValue',
        parent: {
          fileName: 'northlight/node_modules/@react-types/datepicker/src/index.d.ts',
          name: 'DatePickerBase',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/datepicker/src/index.d.ts',
            name: 'DatePickerBase',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'DateValue',
          value: [
            {
              value: 'CalendarDate',
              description: 'A CalendarDate represents a date without any time components in a specific calendar system.',
              fullComment: 'A CalendarDate represents a date without any time components in a specific calendar system.',
              tags: {},
            },
            {
              value: 'CalendarDateTime',
              description: 'A CalendarDateTime represents a date and time without a time zone, in a specific calendar system.',
              fullComment: 'A CalendarDateTime represents a date and time without a time zone, in a specific calendar system.',
              tags: {},
            },
            {
              value: 'ZonedDateTime',
              description: 'A ZonedDateTime represents a date and time in a specific time zone and calendar system.',
              fullComment: 'A ZonedDateTime represents a date and time in a specific time zone and calendar system.',
              tags: {},
            },
          ],
        },
      },
      maxValue: {
        defaultValue: null,
        description: 'The maximum allowed date that a user may select.',
        name: 'maxValue',
        parent: {
          fileName: 'northlight/node_modules/@react-types/datepicker/src/index.d.ts',
          name: 'DatePickerBase',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/datepicker/src/index.d.ts',
            name: 'DatePickerBase',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'DateValue',
          value: [
            {
              value: 'CalendarDate',
              description: 'A CalendarDate represents a date without any time components in a specific calendar system.',
              fullComment: 'A CalendarDate represents a date without any time components in a specific calendar system.',
              tags: {},
            },
            {
              value: 'CalendarDateTime',
              description: 'A CalendarDateTime represents a date and time without a time zone, in a specific calendar system.',
              fullComment: 'A CalendarDateTime represents a date and time without a time zone, in a specific calendar system.',
              tags: {},
            },
            {
              value: 'ZonedDateTime',
              description: 'A ZonedDateTime represents a date and time in a specific time zone and calendar system.',
              fullComment: 'A ZonedDateTime represents a date and time in a specific time zone and calendar system.',
              tags: {},
            },
          ],
        },
      },
      isDateUnavailable: {
        defaultValue: null,
        description: 'Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.',
        name: 'isDateUnavailable',
        parent: {
          fileName: 'northlight/node_modules/@react-types/datepicker/src/index.d.ts',
          name: 'DatePickerBase',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/datepicker/src/index.d.ts',
            name: 'DatePickerBase',
          },
        ],
        required: false,
        type: {
          name: '(date: DateValue) => boolean',
        },
      },
      placeholderValue: {
        defaultValue: null,
        description: "A placeholder date that influences the format of the placeholder shown when no value is selected. Defaults to today's date at midnight.",
        name: 'placeholderValue',
        parent: {
          fileName: 'northlight/node_modules/@react-types/datepicker/src/index.d.ts',
          name: 'DatePickerBase',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/datepicker/src/index.d.ts',
            name: 'DatePickerBase',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'DateValue',
          value: [
            {
              value: 'CalendarDate',
              description: 'A CalendarDate represents a date without any time components in a specific calendar system.',
              fullComment: 'A CalendarDate represents a date without any time components in a specific calendar system.',
              tags: {},
            },
            {
              value: 'CalendarDateTime',
              description: 'A CalendarDateTime represents a date and time without a time zone, in a specific calendar system.',
              fullComment: 'A CalendarDateTime represents a date and time without a time zone, in a specific calendar system.',
              tags: {},
            },
            {
              value: 'ZonedDateTime',
              description: 'A ZonedDateTime represents a date and time in a specific time zone and calendar system.',
              fullComment: 'A ZonedDateTime represents a date and time in a specific time zone and calendar system.',
              tags: {},
            },
          ],
        },
      },
      hourCycle: {
        defaultValue: null,
        description: "Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale.",
        name: 'hourCycle',
        parent: {
          fileName: 'northlight/node_modules/@react-types/datepicker/src/index.d.ts',
          name: 'DatePickerBase',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/datepicker/src/index.d.ts',
            name: 'DatePickerBase',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: '12 | 24',
          value: [
            {
              value: '12',
            },
            {
              value: '24',
            },
          ],
        },
      },
      granularity: {
        defaultValue: null,
        description: 'Determines the smallest unit that is displayed in the date picker. By default, this is `"day"` for dates, and `"minute"` for times.',
        name: 'granularity',
        parent: {
          fileName: 'northlight/node_modules/@react-types/datepicker/src/index.d.ts',
          name: 'DatePickerBase',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/datepicker/src/index.d.ts',
            name: 'DatePickerBase',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'Granularity',
          value: [
            {
              value: '"day"',
            },
            {
              value: '"hour"',
            },
            {
              value: '"minute"',
            },
            {
              value: '"second"',
            },
          ],
        },
      },
      hideTimeZone: {
        defaultValue: {
          value: 'false',
        },
        description: 'Whether to hide the time zone abbreviation.',
        name: 'hideTimeZone',
        parent: {
          fileName: 'northlight/node_modules/@react-types/datepicker/src/index.d.ts',
          name: 'DatePickerBase',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/datepicker/src/index.d.ts',
            name: 'DatePickerBase',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
          ],
        },
      },
      isDisabled: {
        defaultValue: null,
        description: 'Whether the input is disabled.',
        name: 'isDisabled',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
          name: 'InputBase',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
            name: 'InputBase',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
          ],
        },
      },
      isReadOnly: {
        defaultValue: null,
        description: 'Whether the input can be selected but not changed by the user.',
        name: 'isReadOnly',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
          name: 'InputBase',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
            name: 'InputBase',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
          ],
        },
      },
      validationState: {
        defaultValue: null,
        description: 'Whether the input should display its "valid" or "invalid" visual styling.',
        name: 'validationState',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
          name: 'Validation',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
            name: 'Validation',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ValidationState',
          value: [
            {
              value: '"valid"',
            },
            {
              value: '"invalid"',
            },
          ],
        },
      },
      isRequired: {
        defaultValue: null,
        description: 'Whether user input is required on the input before form submission.\nOften paired with the `necessityIndicator` prop to add a visual indicator to the input.',
        name: 'isRequired',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
          name: 'Validation',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
            name: 'Validation',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
          ],
        },
      },
      autoFocus: {
        defaultValue: null,
        description: 'Whether the element should receive focus on render.',
        name: 'autoFocus',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/events.d.ts',
          name: 'FocusableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/events.d.ts',
            name: 'FocusableProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
          ],
        },
      },
      onFocus: {
        defaultValue: null,
        description: 'Handler that is called when the element receives focus.',
        name: 'onFocus',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/events.d.ts',
          name: 'FocusEvents',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/events.d.ts',
            name: 'FocusEvents',
          },
        ],
        required: false,
        type: {
          name: '(e: FocusEvent<Element, Element>) => void',
        },
      },
      onBlur: {
        defaultValue: null,
        description: 'Handler that is called when the element loses focus.',
        name: 'onBlur',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/events.d.ts',
          name: 'FocusEvents',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/events.d.ts',
            name: 'FocusEvents',
          },
        ],
        required: false,
        type: {
          name: '(e: FocusEvent<Element, Element>) => void',
        },
      },
      onFocusChange: {
        defaultValue: null,
        description: "Handler that is called when the element's focus status changes.",
        name: 'onFocusChange',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/events.d.ts',
          name: 'FocusEvents',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/events.d.ts',
            name: 'FocusEvents',
          },
        ],
        required: false,
        type: {
          name: '(isFocused: boolean) => void',
        },
      },
      onKeyDown: {
        defaultValue: null,
        description: 'Handler that is called when a key is pressed.',
        name: 'onKeyDown',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/events.d.ts',
          name: 'KeyboardEvents',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/events.d.ts',
            name: 'KeyboardEvents',
          },
        ],
        required: false,
        type: {
          name: '(e: KeyboardEvent) => void',
        },
      },
      onKeyUp: {
        defaultValue: null,
        description: 'Handler that is called when a key is released.',
        name: 'onKeyUp',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/events.d.ts',
          name: 'KeyboardEvents',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/events.d.ts',
            name: 'KeyboardEvents',
          },
        ],
        required: false,
        type: {
          name: '(e: KeyboardEvent) => void',
        },
      },
      label: {
        defaultValue: null,
        description: 'The content to display as the label.',
        name: 'label',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/labelable.d.ts',
          name: 'LabelableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/labelable.d.ts',
            name: 'LabelableProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ReactNode',
          value: [
            {
              value: 'string',
            },
            {
              value: 'number',
            },
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: 'ReactElement<any, string | JSXElementConstructor<any>>',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'ReactFragment',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'ReactPortal',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      description: {
        defaultValue: null,
        description: 'A description for the field. Provides a hint such as specific requirements for what to choose.',
        name: 'description',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
          name: 'HelpTextProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
            name: 'HelpTextProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ReactNode',
          value: [
            {
              value: 'string',
            },
            {
              value: 'number',
            },
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: 'ReactElement<any, string | JSXElementConstructor<any>>',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'ReactFragment',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'ReactPortal',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      errorMessage: {
        defaultValue: null,
        description: 'An error message for the field.',
        name: 'errorMessage',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
          name: 'HelpTextProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
            name: 'HelpTextProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ReactNode',
          value: [
            {
              value: 'string',
            },
            {
              value: 'number',
            },
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: 'ReactElement<any, string | JSXElementConstructor<any>>',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'ReactFragment',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'ReactPortal',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      isOpen: {
        defaultValue: null,
        description: 'Whether the overlay is open by default (controlled).',
        name: 'isOpen',
        parent: {
          fileName: 'northlight/node_modules/@react-types/overlays/src/index.d.ts',
          name: 'OverlayTriggerProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/overlays/src/index.d.ts',
            name: 'OverlayTriggerProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
          ],
        },
      },
      defaultOpen: {
        defaultValue: null,
        description: 'Whether the overlay is open by default (uncontrolled).',
        name: 'defaultOpen',
        parent: {
          fileName: 'northlight/node_modules/@react-types/overlays/src/index.d.ts',
          name: 'OverlayTriggerProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/overlays/src/index.d.ts',
            name: 'OverlayTriggerProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
          ],
        },
      },
      onOpenChange: {
        defaultValue: null,
        description: "Handler that is called when the overlay's open state changes.",
        name: 'onOpenChange',
        parent: {
          fileName: 'northlight/node_modules/@react-types/overlays/src/index.d.ts',
          name: 'OverlayTriggerProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/overlays/src/index.d.ts',
            name: 'OverlayTriggerProps',
          },
        ],
        required: false,
        type: {
          name: '(isOpen: boolean) => void',
        },
      },
      'aria-label': {
        defaultValue: null,
        description: 'Defines a string value that labels the current element.',
        name: 'aria-label',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/dom.d.ts',
          name: 'AriaLabelingProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/dom.d.ts',
            name: 'AriaLabelingProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      'aria-labelledby': {
        defaultValue: null,
        description: 'Identifies the element (or elements) that labels the current element.',
        name: 'aria-labelledby',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/dom.d.ts',
          name: 'AriaLabelingProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/dom.d.ts',
            name: 'AriaLabelingProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      'aria-describedby': {
        defaultValue: null,
        description: 'Identifies the element (or elements) that describes the object.',
        name: 'aria-describedby',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/dom.d.ts',
          name: 'AriaLabelingProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/dom.d.ts',
            name: 'AriaLabelingProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      'aria-details': {
        defaultValue: null,
        description: 'Identifies the element (or elements) that provide a detailed, extended description for the object.',
        name: 'aria-details',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/dom.d.ts',
          name: 'AriaLabelingProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/dom.d.ts',
            name: 'AriaLabelingProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      id: {
        defaultValue: null,
        description: "The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",
        name: 'id',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/dom.d.ts',
          name: 'DOMProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/dom.d.ts',
            name: 'DOMProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      value: {
        defaultValue: null,
        description: 'The current value (controlled).',
        name: 'value',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
          name: 'ValueBase',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
            name: 'ValueBase',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'DateValue',
          value: [
            {
              value: 'CalendarDate',
              description: 'A CalendarDate represents a date without any time components in a specific calendar system.',
              fullComment: 'A CalendarDate represents a date without any time components in a specific calendar system.',
              tags: {},
            },
            {
              value: 'CalendarDateTime',
              description: 'A CalendarDateTime represents a date and time without a time zone, in a specific calendar system.',
              fullComment: 'A CalendarDateTime represents a date and time without a time zone, in a specific calendar system.',
              tags: {},
            },
            {
              value: 'ZonedDateTime',
              description: 'A ZonedDateTime represents a date and time in a specific time zone and calendar system.',
              fullComment: 'A ZonedDateTime represents a date and time in a specific time zone and calendar system.',
              tags: {},
            },
          ],
        },
      },
      defaultValue: {
        defaultValue: null,
        description: 'The default value (uncontrolled).',
        name: 'defaultValue',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
          name: 'ValueBase',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
            name: 'ValueBase',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'DateValue',
          value: [
            {
              value: 'CalendarDate',
              description: 'A CalendarDate represents a date without any time components in a specific calendar system.',
              fullComment: 'A CalendarDate represents a date without any time components in a specific calendar system.',
              tags: {},
            },
            {
              value: 'CalendarDateTime',
              description: 'A CalendarDateTime represents a date and time without a time zone, in a specific calendar system.',
              fullComment: 'A CalendarDateTime represents a date and time without a time zone, in a specific calendar system.',
              tags: {},
            },
            {
              value: 'ZonedDateTime',
              description: 'A ZonedDateTime represents a date and time in a specific time zone and calendar system.',
              fullComment: 'A ZonedDateTime represents a date and time in a specific time zone and calendar system.',
              tags: {},
            },
          ],
        },
      },
      onChange: {
        defaultValue: null,
        description: 'Handler that is called when the value changes.',
        name: 'onChange',
        parent: {
          fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
          name: 'ValueBase',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@react-types/shared/src/inputs.d.ts',
            name: 'ValueBase',
          },
        ],
        required: false,
        type: {
          name: '(value: DateValue) => void',
        },
      },
    },
  } }
  />
)

export default DatePickerPage