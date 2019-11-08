import { IParams, ICanvasParams, ITmpParams } from './index';
export declare class Particle {
    private _canvasParams;
    private _params;
    private _tmpParams;
    radius: number;
    radius_bubble: number;
    size_status: boolean;
    vs: number;
    x: number;
    y: number;
    color: any;
    opacity: number;
    opacity_bubble: number;
    opacity_status: boolean;
    vo: number;
    vx: number;
    vy: number;
    vx_i: number;
    vy_i: number;
    shape: string;
    img: {
        src: string;
        ratio: number;
        loaded?: boolean;
        obj?: any;
    };
    constructor(_canvasParams: ICanvasParams, _params: IParams, _tmpParams: ITmpParams, color?: any, opacity?: any, position?: {
        x: number;
        y: number;
    });
    private _setupSize();
    private _setupPosition(position?);
    private _checkOverlap(p1, position?);
    private _setupColor(color?);
    private _setupOpacity();
    private _setupAnimation();
    private _drawShape(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator);
    draw(): void;
}
