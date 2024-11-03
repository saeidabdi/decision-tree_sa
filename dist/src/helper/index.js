"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entropy = entropy;
exports.gain = gain;
exports.mode = mode;
function entropy(data, targetAttribute) {
    const targetValues = data.map(item => item[targetAttribute]);
    const uniqueValues = [...new Set(targetValues)];
    let ent = 0;
    uniqueValues.forEach(value => {
        const p = targetValues.filter(v => v === value).length / targetValues.length;
        ent -= p * Math.log2(p);
    });
    return ent;
}
function gain(data, targetAttribute, feature) {
    const featureValues = [...new Set(data.map(item => item[feature]))];
    let weightedEntropy = 0;
    featureValues.forEach(value => {
        const subset = data.filter(item => item[feature] === value);
        const ent = entropy(subset, targetAttribute);
        weightedEntropy += (subset.length / data.length) * ent;
    });
    return entropy(data, targetAttribute) - weightedEntropy;
}
function mode(array) {
    return array.sort((a, b) => array.filter(v => v === a).length - array.filter(v => v === b).length).pop();
}
//# sourceMappingURL=index.js.map