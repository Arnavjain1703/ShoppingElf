import { IParams, ITmpParams, Particle } from './index';
export declare type RGB = {
    r: number;
    g: number;
    b: number;
};
export declare type HSL = {
    h: number;
    s: number;
    l: number;
};
export declare const hexToRgb: (hex: string) => RGB;
export declare const clamp: (number: number, min: number, max: number) => number;
export declare const isInArray: (value: any, array: any) => boolean;
export declare const deepExtend: (destination: any, source: any) => any;
export declare const getColor: (colorObject: any) => {
    rgb?: RGB;
    hsl?: HSL;
};
export declare const getDefaultParams: () => IParams;
export declare function loadImg(params: IParams, tmp: ITmpParams): void;
export declare function createSvgImg(particle: Particle, tmp: ITmpParams): void;
