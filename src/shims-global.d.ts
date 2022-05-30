export { }
declare global {
    interface listData {
        icon: string;
        text: string;
        children?: listData[];
        value?: string
        isDefault?: boolean;
        isShortCut?: boolean
    }

    interface menuList {
        menuStore: listData[];
        menuShortCut: listData[]
    }

    interface user {
        name: string;
        role: string;
        token: string;
    }
}