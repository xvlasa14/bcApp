interface Result {
    id: number;
    moduleId: number;
    value: number;
}

interface Module {
    id: number;
    parentId: number;
    name: string;
    description: string;
    abbreviation: string;
    norms: Array<Norm>;
    submodules?: Array<Module>;
}

interface Test {
    id: number;
    name: string;
    abbreviation: string;
    description: string;

    index: Array<Module>;
}