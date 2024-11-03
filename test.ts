import { c45, id3 } from "./src/index";
import treeView from "./src/helper/tree";
import { DataItem } from "./src/types/id3.types";

// const data: DataItem[] = [
//     { outlook: 'sunny', temp: 'hot', humidity: 'high', windy: 'false', play: 'no' },
//     { outlook: 'sunny', temp: 'hot', humidity: 'high', windy: 'true', play: 'no' },
//     { outlook: 'overcast', temp: 'hot', humidity: 'high', windy: 'false', play: 'yes' },
//     // سایر داده‌ها...
// ];

const data: DataItem[] = [
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

// const tree = id3(data, features, targetAttribute);
const tree = c45(data, features, targetAttribute);

treeView(tree)