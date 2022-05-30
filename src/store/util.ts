interface storeModule {
    [key: string]: Object
}
const modules = import.meta.globEager('./modules/*.ts')

let storeModule: storeModule = {}
for (const path in modules) {
    const name = path.replace(/[^]*[\/]([^]*).ts/, '$1')
    storeModule[name] = modules[path].default
}

export default storeModule