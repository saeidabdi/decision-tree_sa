import { DataItem, TreeNode } from "src/types/id3.types";
import { gain, mode } from "../helper/index";

export function id3(data: DataItem[], features: string[], targetAttribute: string): TreeNode | string {
    const uniqueTargets = [...new Set(data.map(item => item[targetAttribute]))];

    if (uniqueTargets.length === 1) {
        return uniqueTargets[0];
    }

    if (features.length === 0) {
        return mode(data.map(item => item[targetAttribute]));
    }

    let bestFeature = features[0];
    let maxGain = gain(data, targetAttribute, bestFeature);

    features.forEach(feature => {
        const featureGain = gain(data, targetAttribute, feature);
        if (featureGain > maxGain) {
            maxGain = featureGain;
            bestFeature = feature;
        }
    });

    const tree: TreeNode = { [bestFeature]: {} };
    const featureValues = [...new Set(data.map(item => item[bestFeature]))];

    featureValues.forEach(value => {
        const subset = data.filter(item => item[bestFeature] === value);
        const remainingFeatures = features.filter(f => f !== bestFeature);
        tree[bestFeature][value] = id3(subset, remainingFeatures, targetAttribute);
    });

    return tree;
}