interface Module {
    id: number;
    idParent: number;
    name: string;
    description: string;
    abbreviation: string;
    value: number;
    norms: Array<Norm>;
    submodules?: Array<Module>;
}