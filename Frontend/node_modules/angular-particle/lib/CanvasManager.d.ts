import { ParticlesManager, ICanvasParams, IParams, ITmpParams } from './index';
export declare class CanvasManager {
    private _canvasParams;
    private _params;
    private _tmpParams;
    particlesManager: ParticlesManager;
    constructor(_canvasParams: ICanvasParams, _params: IParams, _tmpParams: ITmpParams);
    draw(): void;
    private _densityAutoParticles();
    private _retinaInit();
    private _canvasClear();
    private _canvasPaint();
    private _canvasSize();
    private _onWindowResize();
}
