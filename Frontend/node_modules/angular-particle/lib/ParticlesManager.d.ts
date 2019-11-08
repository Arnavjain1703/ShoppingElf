import { IParams, ICanvasParams, IMouseParams, ITmpParams } from './index';
export declare class ParticlesManager {
    private _canvasParams;
    private _params;
    private _tmpParams;
    private _interaction;
    constructor(_canvasParams: ICanvasParams, _params: IParams, _tmpParams: ITmpParams);
    particlesCreate(): void;
    private _particlesUpdate();
    particlesDraw(): void;
    particlesEmpty(): void;
    removeParticles(nb: number): void;
    pushParticles(nb: number, pos?: IMouseParams): void;
    private _bubbleParticle(particle);
    private _repulseParticle(particle);
    private _grabParticle(particle);
}
