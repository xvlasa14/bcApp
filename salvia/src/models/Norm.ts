interface Values {
    range: [number, number];
    mean: number;
    percentile: number;
    sd: number;
}

interface Norm {
    id: number;
    education: string;
    gender: string;

    values: Array<Values>;
}