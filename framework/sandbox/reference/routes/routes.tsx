
import { prop, sortBy } from 'ramda'
import { Page } from '../../app'

export const routes: Page[] = sortBy(prop('title'), [
  {
    "title": `Alert`,
    "path": `/Alert`,
    "component": () => import(`../pages/Alert-page`),
  },{
    "title": `AsyncError`,
    "path": `/AsyncError`,
    "component": () => import(`../pages/AsyncError-page`),
  },{
    "title": `AvatarBadge`,
    "path": `/AvatarBadge`,
    "component": () => import(`../pages/AvatarBadge-page`),
  },{
    "title": `AvatarGroup`,
    "path": `/AvatarGroup`,
    "component": () => import(`../pages/AvatarGroup-page`),
  },{
    "title": `Avatar`,
    "path": `/Avatar`,
    "component": () => import(`../pages/Avatar-page`),
  },{
    "title": `Blinker`,
    "path": `/Blinker`,
    "component": () => import(`../pages/Blinker-page`),
  },{
    "title": `Button`,
    "path": `/Button`,
    "component": () => import(`../pages/Button-page`),
  },{
    "title": `Carousel`,
    "path": `/Carousel`,
    "component": () => import(`../pages/Carousel-page`),
  },{
    "title": `CheckboxField`,
    "path": `/CheckboxField`,
    "component": () => import(`../pages/CheckboxField-page`),
  },{
    "title": `Checkbox`,
    "path": `/Checkbox`,
    "component": () => import(`../pages/Checkbox-page`),
  },{
    "title": `Clickable`,
    "path": `/Clickable`,
    "component": () => import(`../pages/Clickable-page`),
  },{
    "title": `ClipboardInput`,
    "path": `/ClipboardInput`,
    "component": () => import(`../pages/ClipboardInput-page`),
  },{
    "title": `ColorPickerField`,
    "path": `/ColorPickerField`,
    "component": () => import(`../pages/ColorPickerField-page`),
  },{
    "title": `ColorPicker`,
    "path": `/ColorPicker`,
    "component": () => import(`../pages/ColorPicker-page`),
  },{
    "title": `DatePicker`,
    "path": `/DatePicker`,
    "component": () => import(`../pages/DatePicker-page`),
  },{
    "title": `DateRangePicker`,
    "path": `/DateRangePicker`,
    "component": () => import(`../pages/DateRangePicker-page`),
  },{
    "title": `DatePickerField`,
    "path": `/DatePickerField`,
    "component": () => import(`../pages/DatePickerField-page`),
  },{
    "title": `DateRangePickerField`,
    "path": `/DateRangePickerField`,
    "component": () => import(`../pages/DateRangePickerField-page`),
  },{
    "title": `DragAndDrop`,
    "path": `/DragAndDrop`,
    "component": () => import(`../pages/DragAndDrop-page`),
  },{
    "title": `DragHandle`,
    "path": `/DragHandle`,
    "component": () => import(`../pages/DragHandle-page`),
  },{
    "title": `DragItem`,
    "path": `/DragItem`,
    "component": () => import(`../pages/DragItem-page`),
  },{
    "title": `Draggable`,
    "path": `/Draggable`,
    "component": () => import(`../pages/Draggable-page`),
  },{
    "title": `DropZone`,
    "path": `/DropZone`,
    "component": () => import(`../pages/DropZone-page`),
  },{
    "title": `Droppable`,
    "path": `/Droppable`,
    "component": () => import(`../pages/Droppable-page`),
  },{
    "title": `MultiSort`,
    "path": `/MultiSort`,
    "component": () => import(`../pages/MultiSort-page`),
  },{
    "title": `SortableContainer`,
    "path": `/SortableContainer`,
    "component": () => import(`../pages/SortableContainer-page`),
  },{
    "title": `SortableItem`,
    "path": `/SortableItem`,
    "component": () => import(`../pages/SortableItem-page`),
  },{
    "title": `SortableList`,
    "path": `/SortableList`,
    "component": () => import(`../pages/SortableList-page`),
  },{
    "title": `Sortable`,
    "path": `/Sortable`,
    "component": () => import(`../pages/Sortable-page`),
  },{
    "title": `EditableText`,
    "path": `/EditableText`,
    "component": () => import(`../pages/EditableText-page`),
  },{
    "title": `FastGrid`,
    "path": `/FastGrid`,
    "component": () => import(`../pages/FastGrid-page`),
  },{
    "title": `FastList`,
    "path": `/FastList`,
    "component": () => import(`../pages/FastList-page`),
  },{
    "title": `FilePickerField`,
    "path": `/FilePickerField`,
    "component": () => import(`../pages/FilePickerField-page`),
  },{
    "title": `FilePicker`,
    "path": `/FilePicker`,
    "component": () => import(`../pages/FilePicker-page`),
  },{
    "title": `MultiFileList`,
    "path": `/MultiFileList`,
    "component": () => import(`../pages/MultiFileList-page`),
  },{
    "title": `MultiFilePickerField`,
    "path": `/MultiFilePickerField`,
    "component": () => import(`../pages/MultiFilePickerField-page`),
  },{
    "title": `MultiFilePicker`,
    "path": `/MultiFilePicker`,
    "component": () => import(`../pages/MultiFilePicker-page`),
  },{
    "title": `MultiFileUploader`,
    "path": `/MultiFileUploader`,
    "component": () => import(`../pages/MultiFileUploader-page`),
  },{
    "title": `FlipButtonGroupField`,
    "path": `/FlipButtonGroupField`,
    "component": () => import(`../pages/FlipButtonGroupField-page`),
  },{
    "title": `FlipButtonGroup`,
    "path": `/FlipButtonGroup`,
    "component": () => import(`../pages/FlipButtonGroup-page`),
  },{
    "title": `FlipButton`,
    "path": `/FlipButton`,
    "component": () => import(`../pages/FlipButton-page`),
  },{
    "title": `Field`,
    "path": `/Field`,
    "component": () => import(`../pages/Field-page`),
  },{
    "title": `Form`,
    "path": `/Form`,
    "component": () => import(`../pages/Form-page`),
  },{
    "title": `FormLabel`,
    "path": `/FormLabel`,
    "component": () => import(`../pages/FormLabel-page`),
  },{
    "title": `Icon`,
    "path": `/Icon`,
    "component": () => import(`../pages/Icon-page`),
  },{
    "title": `IconButton`,
    "path": `/IconButton`,
    "component": () => import(`../pages/IconButton-page`),
  },{
    "title": `MediatoolThemeProvider`,
    "path": `/MediatoolThemeProvider`,
    "component": () => import(`../pages/MediatoolThemeProvider-page`),
  },{
    "title": `Modal`,
    "path": `/Modal`,
    "component": () => import(`../pages/Modal-page`),
  },{
    "title": `NavbarItem`,
    "path": `/NavbarItem`,
    "component": () => import(`../pages/NavbarItem-page`),
  },{
    "title": `NotificationIconButton`,
    "path": `/NotificationIconButton`,
    "component": () => import(`../pages/NotificationIconButton-page`),
  },{
    "title": `NumberInputField`,
    "path": `/NumberInputField`,
    "component": () => import(`../pages/NumberInputField-page`),
  },{
    "title": `NumberInputStepper`,
    "path": `/NumberInputStepper`,
    "component": () => import(`../pages/NumberInputStepper-page`),
  },{
    "title": `NumberInput`,
    "path": `/NumberInput`,
    "component": () => import(`../pages/NumberInput-page`),
  },{
    "title": `OrganizationLogo`,
    "path": `/OrganizationLogo`,
    "component": () => import(`../pages/OrganizationLogo-page`),
  },{
    "title": `OverflowGroup`,
    "path": `/OverflowGroup`,
    "component": () => import(`../pages/OverflowGroup-page`),
  },{
    "title": `PinInput`,
    "path": `/PinInput`,
    "component": () => import(`../pages/PinInput-page`),
  },{
    "title": `ProgressBar`,
    "path": `/ProgressBar`,
    "component": () => import(`../pages/ProgressBar-page`),
  },{
    "title": `RadioGroupField`,
    "path": `/RadioGroupField`,
    "component": () => import(`../pages/RadioGroupField-page`),
  },{
    "title": `Radio`,
    "path": `/Radio`,
    "component": () => import(`../pages/Radio-page`),
  },{
    "title": `SearchBarField`,
    "path": `/SearchBarField`,
    "component": () => import(`../pages/SearchBarField-page`),
  },{
    "title": `SearchBar`,
    "path": `/SearchBar`,
    "component": () => import(`../pages/SearchBar-page`),
  },{
    "title": `SelectField`,
    "path": `/SelectField`,
    "component": () => import(`../pages/SelectField-page`),
  },{
    "title": `Select`,
    "path": `/Select`,
    "component": () => import(`../pages/Select-page`),
  },{
    "title": `Spinner`,
    "path": `/Spinner`,
    "component": () => import(`../pages/Spinner-page`),
  },{
    "title": `PaneDivider`,
    "path": `/PaneDivider`,
    "component": () => import(`../pages/PaneDivider-page`),
  },{
    "title": `PaneItem`,
    "path": `/PaneItem`,
    "component": () => import(`../pages/PaneItem-page`),
  },{
    "title": `SplitPane`,
    "path": `/SplitPane`,
    "component": () => import(`../pages/SplitPane-page`),
  },{
    "title": `StatusBlock`,
    "path": `/StatusBlock`,
    "component": () => import(`../pages/StatusBlock-page`),
  },{
    "title": `StatusPin`,
    "path": `/StatusPin`,
    "component": () => import(`../pages/StatusPin-page`),
  },{
    "title": `StepStack`,
    "path": `/StepStack`,
    "component": () => import(`../pages/StepStack-page`),
  },{
    "title": `StepList`,
    "path": `/StepList`,
    "component": () => import(`../pages/StepList-page`),
  },{
    "title": `StepPanel`,
    "path": `/StepPanel`,
    "component": () => import(`../pages/StepPanel-page`),
  },{
    "title": `Step`,
    "path": `/Step`,
    "component": () => import(`../pages/Step-page`),
  },{
    "title": `Steps`,
    "path": `/Steps`,
    "component": () => import(`../pages/Steps-page`),
  },{
    "title": `SwitchField`,
    "path": `/SwitchField`,
    "component": () => import(`../pages/SwitchField-page`),
  },{
    "title": `Switch`,
    "path": `/Switch`,
    "component": () => import(`../pages/Switch-page`),
  },{
    "title": `TabPanel`,
    "path": `/TabPanel`,
    "component": () => import(`../pages/TabPanel-page`),
  },{
    "title": `Tabs`,
    "path": `/Tabs`,
    "component": () => import(`../pages/Tabs-page`),
  },{
    "title": `TagGroup`,
    "path": `/TagGroup`,
    "component": () => import(`../pages/TagGroup-page`),
  },{
    "title": `Tag`,
    "path": `/Tag`,
    "component": () => import(`../pages/Tag-page`),
  },{
    "title": `FormattedNumberInput`,
    "path": `/FormattedNumberInput`,
    "component": () => import(`../pages/FormattedNumberInput-page`),
  },{
    "title": `MaskedTextInput`,
    "path": `/MaskedTextInput`,
    "component": () => import(`../pages/MaskedTextInput-page`),
  },{
    "title": `TextField`,
    "path": `/TextField`,
    "component": () => import(`../pages/TextField-page`),
  },{
    "title": `TextareaField`,
    "path": `/TextareaField`,
    "component": () => import(`../pages/TextareaField-page`),
  },{
    "title": `Textarea`,
    "path": `/Textarea`,
    "component": () => import(`../pages/Textarea-page`),
  },{
    "title": `Toast`,
    "path": `/Toast`,
    "component": () => import(`../pages/Toast-page`),
  },{
    "title": `useToast`,
    "path": `/useToast`,
    "component": () => import(`../pages/useToast-page`),
  },{
    "title": `ToolboxContent`,
    "path": `/ToolboxContent`,
    "component": () => import(`../pages/ToolboxContent-page`),
  },{
    "title": `ToolboxFooter`,
    "path": `/ToolboxFooter`,
    "component": () => import(`../pages/ToolboxFooter-page`),
  },{
    "title": `ToolboxHeader`,
    "path": `/ToolboxHeader`,
    "component": () => import(`../pages/ToolboxHeader-page`),
  },{
    "title": `Toolbox`,
    "path": `/Toolbox`,
    "component": () => import(`../pages/Toolbox-page`),
  },{
    "title": `Collapse`,
    "path": `/Collapse`,
    "component": () => import(`../pages/Collapse-page`),
  },{
    "title": `Fade`,
    "path": `/Fade`,
    "component": () => import(`../pages/Fade-page`),
  },{
    "title": `ScaleFade`,
    "path": `/ScaleFade`,
    "component": () => import(`../pages/ScaleFade-page`),
  },{
    "title": `SlideFade`,
    "path": `/SlideFade`,
    "component": () => import(`../pages/SlideFade-page`),
  },{
    "title": `Slide`,
    "path": `/Slide`,
    "component": () => import(`../pages/Slide-page`),
  },{
    "title": `P`,
    "path": `/P`,
    "component": () => import(`../pages/P-page`),
  },{
    "title": `H1`,
    "path": `/H1`,
    "component": () => import(`../pages/H1-page`),
  },{
    "title": `H2`,
    "path": `/H2`,
    "component": () => import(`../pages/H2-page`),
  },{
    "title": `H3`,
    "path": `/H3`,
    "component": () => import(`../pages/H3-page`),
  },{
    "title": `H4`,
    "path": `/H4`,
    "component": () => import(`../pages/H4-page`),
  },{
    "title": `H5`,
    "path": `/H5`,
    "component": () => import(`../pages/H5-page`),
  },{
    "title": `H6`,
    "path": `/H6`,
    "component": () => import(`../pages/H6-page`),
  },{
    "title": `Label`,
    "path": `/Label`,
    "component": () => import(`../pages/Label-page`),
  },{
    "title": `Blockquote`,
    "path": `/Blockquote`,
    "component": () => import(`../pages/Blockquote-page`),
  },{
    "title": `Capitalized`,
    "path": `/Capitalized`,
    "component": () => import(`../pages/Capitalized-page`),
  },{
    "title": `Lead`,
    "path": `/Lead`,
    "component": () => import(`../pages/Lead-page`),
  },{
    "title": `Small`,
    "path": `/Small`,
    "component": () => import(`../pages/Small-page`),
  },{
    "title": `Tiny`,
    "path": `/Tiny`,
    "component": () => import(`../pages/Tiny-page`),
  },
])
