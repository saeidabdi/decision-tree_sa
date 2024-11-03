"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c45 = c45;
const index_1 = require("../helper/index");
function splitInfo(data, feature) {
    const featureValues = [...new Set(data.map(item => item[feature]))];
    let splitInformation = 0;
    featureValues.forEach(value => {
        const subset = data.filter(item => item[feature] === value);
        const p = subset.length / data.length;
        splitInformation -= p * Math.log2(p);
    });
    return splitInformation;
}
function gainRatio(data, targetAttribute, feature) {
    const featureGain = (0, index_1.gain)(data, targetAttribute, feature);
    const splitInformation = splitInfo(data, feature);
    return splitInformation === 0 ? 0 : featureGain / splitInformation;
}
function c45(data, features, targetAttribute) {
    const uniqueTargets = [...new Set(data.map(item => item[targetAttribute]))];
    if (uniqueTargets.length === 1) {
        return uniqueTargets[0];
    }
    if (features.length === 0) {
        return (0, index_1.mode)(data.map(item => item[targetAttribute]));
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
    const tree = { [bestFeature]: {} };
    const featureValues = [...new Set(data.map(item => item[bestFeature]))];
    featureValues.forEach(value => {
        const subset = data.filter(item => item[bestFeature] === value);
        const remainingFeatures = features.filter(f => f !== bestFeature);
        tree[bestFeature][value] = c45(subset, remainingFeatures, targetAttribute);
    });
    return tree;
}
//# sourceMappingURL=c4.5.js.map