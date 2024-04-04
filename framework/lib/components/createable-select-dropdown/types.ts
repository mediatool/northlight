import { Variant } from 'chakra-react-select/dist/types/types'
import { Option } from '../select'

export interface CreationOption extends Option {
  isCreation: boolean
}

export interface CreatableSelectDropdownProps<T extends string = string> {
  /**
   * An array of "Option" objects that represents the initial options available in the dropdown.
   * Each "Option" object must have a "label" and a "value" property (both strings).
   */
  standardOptions: Option<T>[]

  /**
   * A callback function that is called whenever the selected option changes.
   * This function receives the newly selected "Option" object as its only argument.
   */
  onOptionChange: (option: Option) => void

  /**
   * Optional placeholder text displayed when no option is selected and the dropdown is not focused.
   * Defaults to 'Select or create...' if not provided.
   */
  initialPlaceholder?: string

  /**
   * Optional placeholder text displayed when the dropdown is
   * focused and the user is prompted to create a new option.
   * Defaults to 'Enter text...' if not provided.
   */
  addOptionPlaceholder?: string

  /**
   * Optional "Option" object representing the option to create a new item within the dropdown.
   * This option is typically displayed at the top of the dropdown list.
   * Defaults to "{ label: 'Add option...', value: 'Add option...' }" if not provided.
   */
  creationOption?: CreationOption

  /**
   * Optional CSS width property value for the dropdown container.
   * Specify the width of the dropdown. Defaults to '100%' if not provided.
   */
  width?: string

  /**
   * An optional string that determines the overall styling of the select field.
   * Accepted values are 'outline', 'filled', 'flushed', or 'unstyled'.
   * The default value is 'outline'.
   *
  */
  variant?: Variant

  /**
   * Value of the initially selected option.
   */
  defaultValue?: T

  /**
   * Selected value.
   */
  value?: T

  /**
   *
    Default placement of the menu in relation to the control. 'auto'
    will flip when there isn't enough space below the control. Defaults to "bottom".
   */
  menuPlacement?: 'top' | 'bottom' | 'auto'

  /**
   * If true, the CreatableSelectDropdown will be disabled.
   */
  isDisabled?: boolean
}
