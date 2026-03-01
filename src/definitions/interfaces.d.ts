
interface IModuleProgrammable{
    module: string,
    responsables: string[],
    sousModules: string[],
    description?: ModuleDescription
}

interface INestedModuleList{
    main: string,
    subMod: (string | INestedModuleList)[]
}

interface IPropDetail{
    id: string,
    titre: string,
    contenu?: string
}