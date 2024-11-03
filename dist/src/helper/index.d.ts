import { DataItem } from "src/types/id3.types";
export declare function entropy(data: DataItem[], targetAttribute: string): number;
export declare function gain(data: DataItem[], targetAttribute: string, feature: string): number;
export declare function mode(array: string[]): string;
