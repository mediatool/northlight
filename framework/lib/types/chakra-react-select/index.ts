import type { ResponsiveObject } from '@chakra-ui/system'
import type {
  ChakraStylesConfig,
  GroupBase,
  SelectedOptionStyle,
  Size,
  TagVariant,
} from 'chakra-react-select'

/**
 * The `size` value accepted by the underlying chakra `Input`/`Select`.
 *
 * Structurally identical to `chakra-react-select`'s internal `SizeProp`
 * (`Size | ResponsiveObject<Size> | Size[]`), reconstructed here from the
 * root-exported `Size` because `SizeProp` itself is not exported from the
 * package entry. Keeping it identical to the type the removed module
 * augmentation put on react-select's `Props` avoids a "cannot simultaneously
 * extend" (TS2320) conflict for interfaces (`SelectProps`, `SearchBarProps`)
 * that still inherit `size` through their `Props` chain.
 */
export type SelectSize = Size | ResponsiveObject<Size> | Size[]

/**
 * The `variant` value forwarded to the underlying chakra `Input`/`Select`.
 *
 * Mirrors `chakra-react-select`'s internal `Variant` type, redeclared here so
 * `@northlight/ui` does not depend on the deep import
 * `chakra-react-select/dist/types/types`. That path is not listed in
 * `chakra-react-select`'s package `exports` map, so it only resolves under the
 * legacy `moduleResolution: "node"` and breaks under `"bundler"`/`node16`/
 * `nodenext` (TypeScript 7).
 */
export type SelectVariant =
  | 'outline'
  | 'filled'
  | 'flushed'
  | 'unstyled'
  | (string & {})

/**
 * The chakra-specific props that `chakra-react-select` adds to `react-select`'s
 * `Props` via module augmentation.
 *
 * We redeclare them explicitly here instead of relying on that augmentation.
 * The augmentation targets react-select's unbundled declaration path
 * (`react-select/dist/declarations/src/Select`), which only merges under
 * `moduleResolution: "node"`. Under `"bundler"`/`node16`/`nodenext` (TS7),
 * react-select resolves to its bundled declarations, the augmentation never
 * merges, and every chakra prop (`chakraStyles`, `colorScheme`, ...) silently
 * disappears from consumers' types. Declaring them here keeps `@northlight/ui`'s
 * select types self-contained and resolution-independent.
 *
 */
export interface ChakraReactSelectExtraProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> {
  /**
   * The size of the base control; matches the sizes of the chakra `Input`
   * component (`sm` | `md` | `lg`). A responsive array/object may also be passed.
   */
  size?: SelectSize
  /** Style transformation methods for each rendered chakra-react-select component. */
  chakraStyles?: ChakraStylesConfig<Option, IsMulti, Group>
  /** Chakra theme color key that styles the `MultiValue` tags. */
  colorScheme?: string
  /** Style the dropdown indicator like Chakra UI's native `Select`. */
  useBasicStyles?: boolean
  /** Main style variant forwarded to the underlying chakra `Input`. */
  variant?: SelectVariant
  /** Variant forwarded to the `MultiValue` chakra `Tag`. */
  tagVariant?: TagVariant
  /** Highlight the selected option with a solid color or a check mark. */
  selectedOptionStyle?: SelectedOptionStyle
  /** Color scheme used when `selectedOptionStyle="color"`. */
  selectedOptionColorScheme?: string
  /** @deprecated Replaced by `selectedOptionColorScheme`. */
  selectedOptionColor?: string
  /** Border color of the `Control` when the select is focused. */
  focusBorderColor?: string
  /** Border color of the `Control` when `isInvalid` is passed. */
  errorBorderColor?: string
  /** Style the input with the invalid border color. */
  isInvalid?: boolean
  /** Render the control as read-only. */
  isReadOnly?: boolean
  /** Mark the control as required (adds the `FormLabel` indicator + `aria-required`). */
  isRequired?: boolean
  /** Keep group headers stuck to the top while their group is in view. */
  hasStickyGroupHeaders?: boolean
}
