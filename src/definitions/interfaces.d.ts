
interface IModuleProgrammable{
    module: string,
    responsables: string[],
    sousModules: string[],
    description?: ModuleDescription,
}

interface INestedModuleList{
    main: string,
    subMod: (string | INestedModuleList)[]
}