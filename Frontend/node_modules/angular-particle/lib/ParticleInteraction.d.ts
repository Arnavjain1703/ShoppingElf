import { Particle, IParams, ICanvasParams } from './index';
export declare class ParticleInteraction {
    constructor();
    linkParticles(p1: Particle, p2: Particle, params: IParams, canvasParams: ICanvasParams): void;
    attractParticles(p1: Particle, p2: Particle, params: IParams): void;
    bounceParticles(p1: Particle, p2: Particle): void;
}
