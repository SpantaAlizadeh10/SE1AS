import type { ReactElement } from "react";
export interface LinkItem {
  id: number;
  url: string;
  text: string;
}
export interface SocialItem {
  id: number;
  url: string;
  icon: ReactElement;
}
