import { DataItem } from "src/types/id3.types";

export function entropy(data: DataItem[], targetAttribute: string): number {
    const targetValues = data.map(item => item[targetAttribute]);
    const uniqueValues = [...new Set(targetValues)];
    let ent = 0;

    uniqueValues.forEach(value => {
        const p = targetValues.filter(v => v === value).length / targetValues.length;
        ent -= p * Math.log2(p);
    });

    return ent;
}

export function gain(data: DataItem[], targetAttribute: string, feature: string): number {
    const featureValues = [...new Set(data.map(item => item[feature]))];
    let weightedEntropy = 0;

    featureValues.forEach(value => {
        const subset = data.filter(item => item[feature] === value);
        const ent = entropy(subset, targetAttribute);
        weightedEntropy += (subset.length / data.length) * ent;
    });

    return entropy(data, targetAttribute) - weightedEntropy;
}

export function mode(array: string[]): string {
    return array.sort((a, b) =>
        array.filter(v => v === a).length - array.filter(v => v === b).length
    ).pop()!;
}