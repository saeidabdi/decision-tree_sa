"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./src/index");
const tree_1 = require("./src/helper/tree");
const data = [
    { outlook: 'sunny', temp: 'hot', humidity: 'high', windy: 'false', play: 'no' },
    { outlook: 'sunny', temp: 'hot', humidity: 'high', windy: 'true', play: 'no' },
    { outlook: 'overcast', temp: 'hot', humidity: 'high', windy: 'false', play: 'yes' },
    { outlook: 'rainy', temp: 'mild', humidity: 'high', windy: 'false', play: 'yes' },
    { outlook: 'rainy', temp: 'cool', humidity: 'normal', windy: 'false', play: 'yes' },
    { outlook: 'rainy', temp: 'cool', humidity: 'normal', windy: 'true', play: 'no' },
    { outlook: 'overcast', temp: 'cool', humidity: 'normal', windy: 'true', play: 'yes' },
    { outlook: 'sunny', temp: 'mild', humidity: 'high', windy: 'false', play: 'no' },
    { outlook: 'sunny', temp: 'cool', humidity: 'normal', windy: 'false', play: 'yes' },
    { outlook: 'rainy', temp: 'mild', humidity: 'normal', windy: 'false', play: 'yes' },
    { outlook: 'sunny', temp: 'mild', humidity: 'normal', windy: 'true', play: 'yes' },
    { outlook: 'overcast', temp: 'mild', humidity: 'high', windy: 'true', play: 'yes' },
    { outlook: 'overcast', temp: 'hot', humidity: 'normal', windy: 'false', play: 'yes' },
    { outlook: 'rainy', temp: 'mild', humidity: 'high', windy: 'true', play: 'no' }
];
const features = ['outlook', 'temp', 'humidity', 'windy'];
const targetAttribute = 'play';
const treeId3 = (0, index_1.id3)(data, features, targetAttribute);
const tree = (0, index_1.c45)(data, features, targetAttribute);
console.log('id3 =>');
(0, tree_1.default)(treeId3);
console.log('\n\nc4.5 =>');
(0, tree_1.default)(tree);
//# sourceMappingURL=test.js.map