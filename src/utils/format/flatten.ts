const treeFlatten = (tree: listData[] | undefined): listData[] => {
    return tree?.reduce((acc: listData[], cur: listData) => {
        return [...acc, cur, ...(cur.children || []).length ? treeFlatten(cur.children) : []]
    }, []) || []
}

export default treeFlatten