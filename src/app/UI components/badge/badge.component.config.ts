export interface BadgeConfig {
  text: string; //badge's content
  styles?:{
    [property: string]: string | number;
  },
  class: string // custom styles. Define in badge and apply class in the config, where you use the component
} 