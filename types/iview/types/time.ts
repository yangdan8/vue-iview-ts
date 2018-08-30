// Type definitions for iview 3.0.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from 'vue';

export declare class Time extends Vue {
  /**
   * 需要对比的时间，可以是时间戳或 Date 类型
   */
  public time?: number |Date |string;
  /**
   * 类型，可选值为 relative、date 或 datetime
   * @default relative
   */
  public type?: 'relative'|'date'|'datetime';
  /**
   * 自动更新的间隔，单位：秒
   * @default 60
   */
  public interval?: number;
  /**
   * 填写该值，点击会定位锚点
   * @default false
   */
  public hash?: string;
}
