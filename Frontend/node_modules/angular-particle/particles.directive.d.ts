import { ElementRef, AfterViewInit } from "@angular/core";
import { IParams } from './lib/index';
export declare class ParticlesDirective implements AfterViewInit {
    private el;
    params: IParams;
    constructor(el: ElementRef);
    private _canvasParams;
    private _params;
    private _tmpParams;
    private _canvasManager;
    ngAfterViewInit(): void;
    /**
     * Mouse move event
     * @param event
     */
    onMouseMove(event: any): void;
    /**
     * Mouse leave event
     */
    onMouseLeave(): void;
    /**
     * Click event
     */
    onClick(): void;
}
