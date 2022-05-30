import treeFlatten from "@/utils/format/flatten"

const getters = {
    menustore: (state: any) => state.menu?.menuStore || [],
    defaultMenu: (state: any) => treeFlatten(state.menu?.menuStore)?.filter((menu: listData) => menu.isDefault),
    showCutMenu: (state: any) => treeFlatten(state.menu?.menuStore)?.filter((menu: listData) => menu.isShortCut || menu.isDefault),
}

export default getters