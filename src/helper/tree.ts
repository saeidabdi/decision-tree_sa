import ololog from 'ololog';
const log = ololog.configure({ locate: false, time: false });
import {asTree} from 'treeify'

const treeView = (arrayOrObject) => {
    return (
        log.green(asTree(arrayOrObject, true, true))

    )
}

export default treeView