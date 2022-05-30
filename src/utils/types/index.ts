export interface listData {
    icon: string;
    text: string;
    children?: listData[];
    value?: string;
}

export interface menuList {
    menuStore: listData[];
    menuShortCut: listData[]
}