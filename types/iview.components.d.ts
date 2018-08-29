import { PluginFunction } from "vue";

import { Affix } from "./affix";
import { Alert } from "./alert";
import { Anchor, AnchorLink } from "./anchor";
import { AutoComplete } from "./auto-complete";
import { Avatar } from "./avatar";
import { BackTop } from "./back-top";
import { Badge } from "./badge";
import { Breadcrumb, BreadcrumbItem } from "./breadcrumb";
import { Button, ButtonGroup } from "./button";
import { Card } from "./card";
import { Carousel } from "./carousel";
import { Cascader } from "./cascader";
import { Cell, CellGroup } from "./cell";
import { Checkbox, CheckboxGroup } from "./checkbox";
import { Circle } from "./circle";
import { Collapse, CollapsePanel } from "./collapse";
import { ColorPicker } from "./color-picker";
import { DatePicker, DatePickerOptions } from "./date-picker";
import { Divider } from "./divider";
import { Dropdown, DropdownItem } from "./dropdown";
import { Form, FormItem } from "./form";
import { GridRow, GridCol } from "./grid";
import { Icon } from "./icon";
import { Input } from "./input";
import { InputNumber } from "./input-number";
import { Layout } from "./layout";
import { LoadingBarInstance, LoadingBarConfig } from "./loading-bar";
import { Menu, MenuItem, Submenu, MenuGroup } from "./menu";
import { MessageInstance, MessageConfig } from "./message";
import { Modal, ModalInstance, ModalConfig } from "./modal";
import { NoticeInstance, NoticeConfig, NoticeGlobalConfig } from "./notice";
import { Page } from "./page";
import { Poptip } from "./poptip";
import { Progress } from "./progress";
import { Radio, RadioGroup } from "./radio";
import { Rate } from "./rate";
import { Scroll } from "./scroll";
import { Select, SelectOption, SelectOptionGroup } from "./select";
import { Spin } from "./spin";
import { Split } from "./split";
import { Steps, Step } from "./steps";
import { Switch } from "./switch";
import {
  Table,
  TableColumn,
  TableRenderCreateElementData,
  TableRenderCreateElementResult,
  TableColumnRenderParams,
  TableExportCsvParams
} from "./table";
import { Tabs, TabPane } from "./tabs";
import { Tag } from "./tag";
import { Time } from "./time";
import { Timeline, TimelineItem } from "./timeline";
import { TimePicker } from "./time-picker";
import { Tooltip } from "./tooltip";
import { Transfer } from "./transfer";
import { Tree, TreeChild } from "./tree";
import { Upload } from "./upload";

declare interface IView extends PluginFunction<any> {
  readonly IAffix: Affix;
  readonly IAlert: Alert;
  readonly IAnchor: Anchor;
  readonly IAnchorLink: AnchorLink;
  readonly IAutoComplete: AutoComplete;
  readonly IAvatar: Avatar;
  readonly IBackTop: BackTop;
  readonly IBadge: Badge;
  readonly IBreadcrumb: Breadcrumb;
  readonly IBreadcrumbItem: BreadcrumbItem;
  readonly IButton: Button;
  readonly IButtonGroup: ButtonGroup;
  readonly ICard: Card;
  readonly ICarousel: Carousel;
  readonly ICascader: Cascader;
  readonly ICell: Cell;
  readonly ICellGroup: CellGroup;
  readonly ICheckbox: Checkbox;
  readonly ICheckboxGroup: CheckboxGroup;
  readonly ICircle: Circle;
  readonly ICollapse: Collapse;
  readonly ICollapsePanel: CollapsePanel;
  readonly IColorPicker: ColorPicker;
  readonly IDatePicker: DatePicker;
  readonly IDatePickerOptions: DatePickerOptions;
  readonly IDivider: Divider;
  readonly IDropdown: Dropdown;
  readonly IDropdownItem: DropdownItem;
  readonly IForm: Form;
  readonly IFormItem: FormItem;
  readonly IGridCol: GridCol;
  readonly IGridRow: GridRow;
  readonly IIcon: Icon;
  readonly IInput: Input;
  readonly IInputNumber: InputNumber;
  readonly ILayout: Layout;
  readonly ILoadingBarInstance: LoadingBarInstance;
  readonly ILoadingBarConfig: LoadingBarConfig;
  readonly IMenu: Menu;
  readonly IMenuGroup: MenuGroup;
  readonly IMenuItem: MenuItem;
  readonly IMessageConfig: MessageConfig;
  readonly IMessageInstance: MessageInstance;
  readonly IModal: Modal;
  readonly IModalConfig: ModalConfig;
  readonly IModalInstance: ModalInstance;
  readonly INoticeConfig: NoticeConfig;
  readonly INoticeGlobalConfig: NoticeGlobalConfig;
  readonly INoticeInstance: NoticeInstance;
  readonly IPage: Page;
  readonly IPoptip: Poptip;
  readonly IProgress: Progress;
  readonly IRadio: Radio;
  readonly IRadioGroup: RadioGroup;
  readonly IRate: Rate;
  readonly IScroll: Scroll;
  readonly ISelect: Select;
  readonly ISelectOption: SelectOption;
  readonly ISelectOptionGroup: SelectOptionGroup;
  readonly ISpin: Spin;
  readonly ISplit: Split;
  readonly IStep: Step;
  readonly ISteps: Steps;
  readonly ISubmenu: Submenu;
  readonly ISwitch: Switch;
  readonly ITable: Table;
  readonly ITableColumn: TableColumn;
  readonly ITableColumnRenderParams: TableColumnRenderParams;
  readonly ITableExportCsvParams: TableExportCsvParams;
  readonly ITableRenderCreateElementData: TableRenderCreateElementData;
  readonly ITableRenderCreateElementResult: TableRenderCreateElementResult;
  readonly ITabPane: TabPane;
  readonly ITabs: Tabs;
  readonly ITag: Tag;
  readonly ITime: Time;
  readonly ITimeline: Timeline;
  readonly ITimelineItem: TimelineItem;
  readonly ITimePicker: TimePicker;
  readonly ITooltip: Tooltip;
  readonly ITransfer: Transfer;
  readonly ITree: Tree;
  readonly ITreeChild: TreeChild;
  readonly IUpload: Upload;
}

export default IView;

export class IAffix extends Affix {}
export class IAlert extends Alert {}
export class IAnchor extends Anchor {}
export class IAnchorLink extends AnchorLink {}
export class IAutoComplete extends AutoComplete {}
export class IAvatar extends Avatar {}
export class IBackTop extends BackTop {}
export class IBadge extends Badge {}
export class IBreadcrumb extends Breadcrumb {}
export class IBreadcrumbItem extends BreadcrumbItem {}
export class IButton extends Button {}
export class IButtonGroup extends ButtonGroup {}
export class ICard extends Card {}
export class ICarousel extends Carousel {}
export class ICascader extends Cascader {}
export class ICell extends Cell {}
export class ICellGroup extends CellGroup {}
export class ICheckbox extends Checkbox {}
export class ICheckboxGroup extends CheckboxGroup {}
export class ICircle extends Circle {}
export class ICollapse extends Collapse {}
export class ICollapsePanel extends CollapsePanel {}
export class IColorPicker extends ColorPicker {}
export class IDatePicker extends DatePicker {}
export class IDatePickerOptions extends DatePickerOptions {}
export class IDivider extends Divider {}
export class IDropdown extends Dropdown {}
export class IDropdownItem extends DropdownItem {}
export class IForm extends Form {}
export class IFormItem extends FormItem {}
export class IGridCol extends GridCol {}
export class IGridRow extends GridRow {}
export class IIcon extends Icon {}
export class IInput extends Input {}
export class IInputNumber extends InputNumber {}
export class ILayout extends Layout {}
export class ILoadingBarInstance extends LoadingBarInstance {}
export class ILoadingBarConfig extends LoadingBarConfig {}
export class IMenu extends Menu {}
export class IMenuGroup extends MenuGroup {}
export class IMenuItem extends MenuItem {}
export class IMessageConfig extends MessageConfig {}
export class IMessageInstance extends MessageInstance {}
export class IModal extends Modal {}
export class IModalConfig extends ModalConfig {}
export class IModalInstance extends ModalInstance {}
export class INoticeConfig extends NoticeConfig {}
export class INoticeGlobalConfig extends NoticeGlobalConfig {}
export class INoticeInstance extends NoticeInstance {}
export class IPage extends Page {}
export class IPoptip extends Poptip {}
export class IProgress extends Progress {}
export class IRadio extends Radio {}
export class IRadioGroup extends RadioGroup {}
export class IRate extends Rate {}
export class IScroll extends Scroll {}
export class ISelect extends Select {}
export class ISelectOption extends SelectOption {}
export class ISelectOptionGroup extends SelectOptionGroup {}
export class ISpin extends Spin {}
export class ISplit extends Split {}
export class IStep extends Step {}
export class ISteps extends Steps {}
export class ISubmenu extends Submenu {}
export class ISwitch extends Switch {}
export class ITable extends Table {}
export class ITableColumn extends TableColumn {}
export class ITableColumnRenderParams extends TableColumnRenderParams {}
export class ITableExportCsvParams extends TableExportCsvParams {}
export class ITableRenderCreateElementData extends TableRenderCreateElementData {}
export class ITableRenderCreateElementResult extends TableRenderCreateElementResult {}
export class ITabPane extends TabPane {}
export class ITabs extends Tabs {}
export class ITag extends Tag {}
export class ITime extends Time {}
export class ITimeline extends Timeline {}
export class ITimelineItem extends TimelineItem {}
export class ITimePicker extends TimePicker {}
export class ITooltip extends Tooltip {}
export class ITransfer extends Transfer {}
export class ITree extends Tree {}
export class ITreeChild extends TreeChild {}
export class IUpload extends Upload {}
