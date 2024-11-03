import { gain, mode } from "../helper/index";
import { DataItem, TreeNode } from "../types/id3.types";


function splitInfo(data: DataItem[], feature: string): number {
    const featureValues = [...new Set(data.map(item => item[feature]))];
    let splitInformation = 0;

    featureValues.forEach(value => {
        const subset = data.filter(item => item[feature] === value);
        const p = subset.length / data.length;
        splitInformation -= p * Math.log2(p);
    });

    return splitInformation;
}

function gainRatio(data: DataItem[], targetAttribute: string, feature: string): number {
    const featureGain = gain(data, targetAttribute, feature);
    const splitInformation = splitInfo(data, feature);
    
    return splitInformation === 0 ? 0 : featureGain / splitInformation;
}

export function c45(data: DataItem[], features: string[], targetAttribute: string): TreeNode | string {
    const uniqueTargets = [...new Set(data.map(item => item[targetAttribute]))];

    if (uniqueTargets.length === 1) {
        return uniqueTargets[0];
    }

    if (features.length === 0) {
        return mode(data.map(item => item[targetAttribute]));
    }

    let bestFeature = features[0];
    let maxGainRatio = gainRatio(data, targetAttribute, bestFeature);

    features.forEach(feature => {
        const featureGainRatio = gainRatio(data, targetAttribute, feature);
        if (featureGainRatio > maxGainRatio) {
            maxGainRatio = featureGainRatio;
            bestFeature = feature;
        }
    });

    const tree: TreeNode = { [bestFeature]: {} };
    const featureValues = [...new Set(data.map(item => item[bestFeature]))];

    featureValues.forEach(value => {
        const subset = data.filter(item => item[bestFeature] === value);
        const remainingFeatures = features.filter(f => f !== bestFeature);
        tree[bestFeature][value] = c45(subset, remainingFeatures, targetAttribute);
    });

    return tree;
}
