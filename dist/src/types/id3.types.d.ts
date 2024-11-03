export type DataItem = {
    [key: string]: string;
};
export type TreeNode = {
    [feature: string]: {
        [value: string]: TreeNode | string;
    };
};
