/* eslint-disable */
import { prop, sortBy } from 'ramda'
import { Page } from '../../app'

export const routes: Page[] = sortBy(prop('title'), [
  {
      "title": `AccordionButton`,
      "path": `/accordion-button`,
      "component": () => import(`../pages/accordion-button-page`),
    },{
      "title": `AccordionItem`,
      "path": `/accordion-item`,
      "component": () => import(`../pages/accordion-item-page`),
    },{
      "title": `AccordionPanel`,
      "path": `/accordion-panel`,
      "component": () => import(`../pages/accordion-panel-page`),
    },{
      "title": `Accordion`,
      "path": `/accordion`,
      "component": () => import(`../pages/accordion-page`),
    },{
      "title": `Alert`,
      "path": `/alert`,
      "component": () => import(`../pages/alert-page`),
    },{
      "title": `AspectRatio`,
      "path": `/aspect-ratio`,
      "component": () => import(`../pages/aspect-ratio-page`),
    },{
      "title": `AsyncError`,
      "path": `/async-error`,
      "component": () => import(`../pages/async-error-page`),
    },{
      "title": `AvatarGroup`,
      "path": `/avatar-group`,
      "component": () => import(`../pages/avatar-group-page`),
    },{
      "title": `Avatar`,
      "path": `/avatar`,
      "component": () => import(`../pages/avatar-page`),
    },{
      "title": `Badge`,
      "path": `/badge`,
      "component": () => import(`../pages/badge-page`),
    },{
      "title": `Blinker`,
      "path": `/blinker`,
      "component": () => import(`../pages/blinker-page`),
    },{
      "title": `Box`,
      "path": `/box`,
      "component": () => import(`../pages/box-page`),
    },{
      "title": `Button`,
      "path": `/button`,
      "component": () => import(`../pages/button-page`),
    },{
      "title": `Carousel`,
      "path": `/carousel`,
      "component": () => import(`../pages/carousel-page`),
    },{
      "title": `CheckboxField`,
      "path": `/checkbox-field`,
      "component": () => import(`../pages/checkbox-field-page`),
    },{
      "title": `Checkbox`,
      "path": `/checkbox`,
      "component": () => import(`../pages/checkbox-page`),
    },{
      "title": `Clickable`,
      "path": `/clickable`,
      "component": () => import(`../pages/clickable-page`),
    },{
      "title": `ClipboardInput`,
      "path": `/clipboard-input`,
      "component": () => import(`../pages/clipboard-input-page`),
    },{
      "title": `ColorPickerField`,
      "path": `/color-picker-field`,
      "component": () => import(`../pages/color-picker-field-page`),
    },{
      "title": `ColorPicker`,
      "path": `/color-picker`,
      "component": () => import(`../pages/color-picker-page`),
    },{
      "title": `DatePicker`,
      "path": `/date-picker`,
      "component": () => import(`../pages/date-picker-page`),
    },{
      "title": `DateRangePicker`,
      "path": `/date-range-picker`,
      "component": () => import(`../pages/date-range-picker-page`),
    },{
      "title": `DatePickerField`,
      "path": `/date-picker-field`,
      "component": () => import(`../pages/date-picker-field-page`),
    },{
      "title": `DateRangePickerField`,
      "path": `/date-range-picker-field`,
      "component": () => import(`../pages/date-range-picker-field-page`),
    },{
      "title": `DragAndDrop`,
      "path": `/drag-and-drop`,
      "component": () => import(`../pages/drag-and-drop-page`),
    },{
      "title": `DragHandle`,
      "path": `/drag-handle`,
      "component": () => import(`../pages/drag-handle-page`),
    },{
      "title": `DragItem`,
      "path": `/drag-item`,
      "component": () => import(`../pages/drag-item-page`),
    },{
      "title": `Draggable`,
      "path": `/draggable`,
      "component": () => import(`../pages/draggable-page`),
    },{
      "title": `DropZone`,
      "path": `/drop-zone`,
      "component": () => import(`../pages/drop-zone-page`),
    },{
      "title": `Droppable`,
      "path": `/droppable`,
      "component": () => import(`../pages/droppable-page`),
    },{
      "title": `MultiSort`,
      "path": `/multi-sort`,
      "component": () => import(`../pages/multi-sort-page`),
    },{
      "title": `SortableContainer`,
      "path": `/sortable-container`,
      "component": () => import(`../pages/sortable-container-page`),
    },{
      "title": `SortableItem`,
      "path": `/sortable-item`,
      "component": () => import(`../pages/sortable-item-page`),
    },{
      "title": `SortableList`,
      "path": `/sortable-list`,
      "component": () => import(`../pages/sortable-list-page`),
    },{
      "title": `Sortable`,
      "path": `/sortable`,
      "component": () => import(`../pages/sortable-page`),
    },{
      "title": `EditableText`,
      "path": `/editable-text`,
      "component": () => import(`../pages/editable-text-page`),
    },{
      "title": `FastGrid`,
      "path": `/fast-grid`,
      "component": () => import(`../pages/fast-grid-page`),
    },{
      "title": `FastList`,
      "path": `/fast-list`,
      "component": () => import(`../pages/fast-list-page`),
    },{
      "title": `FilePickerField`,
      "path": `/file-picker-field`,
      "component": () => import(`../pages/file-picker-field-page`),
    },{
      "title": `FilePicker`,
      "path": `/file-picker`,
      "component": () => import(`../pages/file-picker-page`),
    },{
      "title": `MultiFileList`,
      "path": `/multi-file-list`,
      "component": () => import(`../pages/multi-file-list-page`),
    },{
      "title": `MultiFilePickerField`,
      "path": `/multi-file-picker-field`,
      "component": () => import(`../pages/multi-file-picker-field-page`),
    },{
      "title": `MultiFilePicker`,
      "path": `/multi-file-picker`,
      "component": () => import(`../pages/multi-file-picker-page`),
    },{
      "title": `MultiFileUploader`,
      "path": `/multi-file-uploader`,
      "component": () => import(`../pages/multi-file-uploader-page`),
    },{
      "title": `FlipButtonGroupField`,
      "path": `/flip-button-group-field`,
      "component": () => import(`../pages/flip-button-group-field-page`),
    },{
      "title": `FlipButtonGroup`,
      "path": `/flip-button-group`,
      "component": () => import(`../pages/flip-button-group-page`),
    },{
      "title": `FlipButton`,
      "path": `/flip-button`,
      "component": () => import(`../pages/flip-button-page`),
    },{
      "title": `Field`,
      "path": `/field`,
      "component": () => import(`../pages/field-page`),
    },{
      "title": `Form`,
      "path": `/form`,
      "component": () => import(`../pages/form-page`),
    },{
      "title": `FormLabel`,
      "path": `/form-label`,
      "component": () => import(`../pages/form-label-page`),
    },{
      "title": `Icon`,
      "path": `/icon`,
      "component": () => import(`../pages/icon-page`),
    },{
      "title": `IconButton`,
      "path": `/icon-button`,
      "component": () => import(`../pages/icon-button-page`),
    },{
      "title": `MediatoolThemeProvider`,
      "path": `/mediatool-theme-provider`,
      "component": () => import(`../pages/mediatool-theme-provider-page`),
    },{
      "title": `Modal`,
      "path": `/modal`,
      "component": () => import(`../pages/modal-page`),
    },{
      "title": `NavbarItem`,
      "path": `/navbar-item`,
      "component": () => import(`../pages/navbar-item-page`),
    },{
      "title": `NotificationIconButton`,
      "path": `/notification-icon-button`,
      "component": () => import(`../pages/notification-icon-button-page`),
    },{
      "title": `NumberInputField`,
      "path": `/number-input-field`,
      "component": () => import(`../pages/number-input-field-page`),
    },{
      "title": `NumberInput`,
      "path": `/number-input`,
      "component": () => import(`../pages/number-input-page`),
    },{
      "title": `OrganizationLogo`,
      "path": `/organization-logo`,
      "component": () => import(`../pages/organization-logo-page`),
    },{
      "title": `OverflowGroup`,
      "path": `/overflow-group`,
      "component": () => import(`../pages/overflow-group-page`),
    },{
      "title": `PinInput`,
      "path": `/pin-input`,
      "component": () => import(`../pages/pin-input-page`),
    },{
      "title": `ProgressBar`,
      "path": `/progress-bar`,
      "component": () => import(`../pages/progress-bar-page`),
    },{
      "title": `RadioGroupField`,
      "path": `/radio-group-field`,
      "component": () => import(`../pages/radio-group-field-page`),
    },{
      "title": `Radio`,
      "path": `/radio`,
      "component": () => import(`../pages/radio-page`),
    },{
      "title": `SearchBarField`,
      "path": `/search-bar-field`,
      "component": () => import(`../pages/search-bar-field-page`),
    },{
      "title": `SearchBar`,
      "path": `/search-bar`,
      "component": () => import(`../pages/search-bar-page`),
    },{
      "title": `SelectField`,
      "path": `/select-field`,
      "component": () => import(`../pages/select-field-page`),
    },{
      "title": `Select`,
      "path": `/select`,
      "component": () => import(`../pages/select-page`),
    },{
      "title": `Spinner`,
      "path": `/spinner`,
      "component": () => import(`../pages/spinner-page`),
    },{
      "title": `PaneDivider`,
      "path": `/pane-divider`,
      "component": () => import(`../pages/pane-divider-page`),
    },{
      "title": `PaneItem`,
      "path": `/pane-item`,
      "component": () => import(`../pages/pane-item-page`),
    },{
      "title": `SplitPane`,
      "path": `/split-pane`,
      "component": () => import(`../pages/split-pane-page`),
    },{
      "title": `StatusBlock`,
      "path": `/status-block`,
      "component": () => import(`../pages/status-block-page`),
    },{
      "title": `StatusPin`,
      "path": `/status-pin`,
      "component": () => import(`../pages/status-pin-page`),
    },{
      "title": `StepStack`,
      "path": `/step-stack`,
      "component": () => import(`../pages/step-stack-page`),
    },{
      "title": `StepList`,
      "path": `/step-list`,
      "component": () => import(`../pages/step-list-page`),
    },{
      "title": `StepPanel`,
      "path": `/step-panel`,
      "component": () => import(`../pages/step-panel-page`),
    },{
      "title": `Step`,
      "path": `/step`,
      "component": () => import(`../pages/step-page`),
    },{
      "title": `Steps`,
      "path": `/steps`,
      "component": () => import(`../pages/steps-page`),
    },{
      "title": `SwitchField`,
      "path": `/switch-field`,
      "component": () => import(`../pages/switch-field-page`),
    },{
      "title": `Switch`,
      "path": `/switch`,
      "component": () => import(`../pages/switch-page`),
    },{
      "title": `TabPanel`,
      "path": `/tab-panel`,
      "component": () => import(`../pages/tab-panel-page`),
    },{
      "title": `Tabs`,
      "path": `/tabs`,
      "component": () => import(`../pages/tabs-page`),
    },{
      "title": `TagGroup`,
      "path": `/tag-group`,
      "component": () => import(`../pages/tag-group-page`),
    },{
      "title": `Tag`,
      "path": `/tag`,
      "component": () => import(`../pages/tag-page`),
    },{
      "title": `FormattedNumberInput`,
      "path": `/formatted-number-input`,
      "component": () => import(`../pages/formatted-number-input-page`),
    },{
      "title": `MaskedTextInput`,
      "path": `/masked-text-input`,
      "component": () => import(`../pages/masked-text-input-page`),
    },{
      "title": `TextField`,
      "path": `/text-field`,
      "component": () => import(`../pages/text-field-page`),
    },{
      "title": `TextareaField`,
      "path": `/textarea-field`,
      "component": () => import(`../pages/textarea-field-page`),
    },{
      "title": `Textarea`,
      "path": `/textarea`,
      "component": () => import(`../pages/textarea-page`),
    },{
      "title": `Toast`,
      "path": `/toast`,
      "component": () => import(`../pages/toast-page`),
    },{
      "title": `useToast`,
      "path": `/use-toast`,
      "component": () => import(`../pages/use-toast-page`),
    },{
      "title": `ToolboxContent`,
      "path": `/toolbox-content`,
      "component": () => import(`../pages/toolbox-content-page`),
    },{
      "title": `ToolboxFooter`,
      "path": `/toolbox-footer`,
      "component": () => import(`../pages/toolbox-footer-page`),
    },{
      "title": `ToolboxHeader`,
      "path": `/toolbox-header`,
      "component": () => import(`../pages/toolbox-header-page`),
    },{
      "title": `Toolbox`,
      "path": `/toolbox`,
      "component": () => import(`../pages/toolbox-page`),
    },{
      "title": `Collapse`,
      "path": `/collapse`,
      "component": () => import(`../pages/collapse-page`),
    },{
      "title": `Fade`,
      "path": `/fade`,
      "component": () => import(`../pages/fade-page`),
    },{
      "title": `ScaleFade`,
      "path": `/scale-fade`,
      "component": () => import(`../pages/scale-fade-page`),
    },{
      "title": `SlideFade`,
      "path": `/slide-fade`,
      "component": () => import(`../pages/slide-fade-page`),
    },{
      "title": `Slide`,
      "path": `/slide`,
      "component": () => import(`../pages/slide-page`),
    },{
      "title": `P`,
      "path": `/p`,
      "component": () => import(`../pages/p-page`),
    },{
      "title": `H1`,
      "path": `/h1`,
      "component": () => import(`../pages/h1-page`),
    },{
      "title": `H2`,
      "path": `/h2`,
      "component": () => import(`../pages/h2-page`),
    },{
      "title": `H3`,
      "path": `/h3`,
      "component": () => import(`../pages/h3-page`),
    },{
      "title": `H4`,
      "path": `/h4`,
      "component": () => import(`../pages/h4-page`),
    },{
      "title": `H5`,
      "path": `/h5`,
      "component": () => import(`../pages/h5-page`),
    },{
      "title": `H6`,
      "path": `/h6`,
      "component": () => import(`../pages/h6-page`),
    },{
      "title": `Label`,
      "path": `/label`,
      "component": () => import(`../pages/label-page`),
    },{
      "title": `Blockquote`,
      "path": `/blockquote`,
      "component": () => import(`../pages/blockquote-page`),
    },{
      "title": `Capitalized`,
      "path": `/capitalized`,
      "component": () => import(`../pages/capitalized-page`),
    },{
      "title": `Lead`,
      "path": `/lead`,
      "component": () => import(`../pages/lead-page`),
    },{
      "title": `Small`,
      "path": `/small`,
      "component": () => import(`../pages/small-page`),
    },{
      "title": `Tiny`,
      "path": `/tiny`,
      "component": () => import(`../pages/tiny-page`),
    },
])
