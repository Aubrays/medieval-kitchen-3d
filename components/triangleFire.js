// Adapted from https://github.com/markusneuy/campfire_vr/blob/master/fire.js

import vertexShader from '../shaders/triangleFireVert.glsl';
import fragmentShader from '../shaders/triangleFireFrag.glsl';

const createSparks = (count) => {
    const positions = [];
    const directions = [];
    const offsets = [];
    const verticesCount = count * 3;

    for (let i = 0; i < count; i += 1) {
        const direction = [
            Math.random() - 0.5,
            (Math.random() + 0.3),
            Math.random() - 0.5];
        const offset = Math.random() * Math.PI;

        const xFactor = 1;
        const zFactor = 1;

        for (let j = 0; j < 3; j += 1) {
            const x = Math.random() - 0.5;
            const y = Math.random() - 0.2;
            const z = Math.random() - 0.5;

            positions.push(x, y, z);
            directions.push(...direction);
            offsets.push(offset);
        }
    }

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('direction', new THREE.Float32BufferAttribute(directions, 3));
    geometry.setAttribute('offset', new THREE.Float32BufferAttribute(offsets, 1));

    return geometry;
};

AFRAME.registerComponent('triangle-fire', {
    schema: {
        particles: {
            type: 'number',
            default: 1
        },
        size: {
            type: 'number',
            default: 0.5,
        },
    },
    init() {
        const size = this.data.size;

        this.material = new THREE.RawShaderMaterial({
            uniforms: {
                time: { value: 0.0 },
                size: { value: size },
                yMax: { value: 0.3 + Math.PI * size },
            },
            vertexShader,
            fragmentShader,
            side: THREE.DoubleSide,
            transparent: true,
        });

        this.object3D = new THREE.Object3D();
        this.el.setObject3D('mesh', this.object3D);
    },
    update() {
        const data = this.data;
        const size = data.size;

        if (this.mesh) {
            this.object3D.remove(this.mesh);
        }

        this.material.uniforms.size.value = size;

        const geometry = createSparks(data.particles);
        this.mesh = new THREE.Mesh(geometry, this.material);

        this.object3D.add(this.mesh);
    },
    remove() {
        const curr = this.el.getObject3D('mesh')
        if (curr) {
            this.object3D.remove(curr);
        }
    },
    tick(time) {
        this.material.uniforms.time.value = time * 0.0005;
    },
});