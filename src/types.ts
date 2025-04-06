export interface FooterTitleMenuType {
  name: string;
  subMenu: FooterMenuType[];
}

export interface FooterMenuType {
  name: string;
  url: string;
  src?: string;
}
