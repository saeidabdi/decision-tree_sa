
# Project Title

Use of decision tree algorithms

## prerequisite
node.js & npm & npx

## run
```npm install -g ts-node```

```npm install typescript```

```npm install -g ts-node-dev```

```npm install```

## test

```npm run test```


## use
```js
import {c45, id3, treeView} from 'decision-tree_sa'
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

const treeId3 = c45(data, features, targetAttribute);

console.log('c45 =>');
treeView(treeId3)
```

