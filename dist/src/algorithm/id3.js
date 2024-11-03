"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.id3 = id3;
const index_1 = require("../helper/index");
function id3(data, features, targetAttribute) {
    const uniqueTargets = [...new Set(data.map(item => item[targetAttribute]))];
    if (uniqueTargets.length === 1) {
        return uniqueTargets[0];
    }
    if (features.length === 0) {
        return (0, index_1.mode)(data.map(item => item[targetAttribute]));
    }
    let bestFeature = features[0];
    let maxGain = (0, index_1.gain)(data, targetAttribute, bestFeature);
    features.forEach(feature => {
        const featureGain = (0, index_1.gain)(data, targetAttribute, feature);
        if (featureGain > maxGain) {
            maxGain = featureGain;
            bestFeature = feature;
        }
    });
    const tree = { [bestFeature]: {} };
    const featureValues = [...new Set(data.map(item => item[bestFeature]))];
    featureValues.forEach(value => {
        const subset = data.filter(item => item[bestFeature] === value);
        const remainingFeatures = features.filter(f => f !== bestFeature);
        tree[bestFeature][value] = id3(subset, remainingFeatures, targetAttribute);
    });
    return tree;
}
//# sourceMappingURL=id3.js.map