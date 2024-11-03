"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ololog_1 = require("ololog");
const log = ololog_1.default.configure({ locate: false, time: false });
const treeify_1 = require("treeify");
const treeView = (arrayOrObject) => {
    return (log.green((0, treeify_1.asTree)(arrayOrObject, true, true)));
};
exports.default = treeView;
//# sourceMappingURL=tree.js.map