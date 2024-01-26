(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();var g=`precision highp float;

#define PI 3.1415926535897932384626433832795

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float time;
uniform float size;

attribute vec3 position;
attribute vec3 direction;
attribute float offset;

varying vec3 vUv;

void main() {
    float sawTime = mod(time * offset, PI);
    float sineTime = (sawTime * abs(sin(time * offset)));

    vec3 timeVec = vec3(sineTime, sawTime, sineTime);

    vUv = ((normalize(position) * 0.2) + (timeVec * direction)) * size;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( vUv, 1.0 );
}`,b=`precision highp float;
uniform float time;
uniform float yMax;

varying vec3 vUv;

float random(vec2 ab) {
    float f = (cos(dot(ab ,vec2(21.9898,78.233))) * 43758.5453);
    return fract(f);
}

void main() {
    float alpha = (yMax - vUv.y) * 0.8;
    float red = 1.0;
    float green = 0.3 + (0.7 * mix(((yMax - vUv.y) * 0.5) + 0.5, 0.5 - abs(max(vUv.x, vUv.y)), 0.5));
    float blueMin = abs(max(max(vUv.x, vUv.z), (vUv.y / yMax)));
    float blue = (1.0 / (blueMin + 0.5)) - 1.0;

    gl_FragColor = vec4(red, green, blue, alpha);
}`;const v=t=>{const e=[],i=[],o=[];for(let s=0;s<t;s+=1){const r=[Math.random()-.5,Math.random()+.3,Math.random()-.5],f=Math.random()*Math.PI;for(let u=0;u<3;u+=1){const m=Math.random()-.5,p=Math.random()-.2,h=Math.random()-.5;e.push(m,p,h),i.push(...r),o.push(f)}}const n=new THREE.BufferGeometry;return n.setAttribute("position",new THREE.Float32BufferAttribute(e,3)),n.setAttribute("direction",new THREE.Float32BufferAttribute(i,3)),n.setAttribute("offset",new THREE.Float32BufferAttribute(o,1)),n};AFRAME.registerComponent("triangle-fire",{schema:{particles:{type:"number",default:1},size:{type:"number",default:.5}},init(){const t=this.data.size;this.material=new THREE.RawShaderMaterial({uniforms:{time:{value:0},size:{value:t},yMax:{value:.3+Math.PI*t}},vertexShader:g,fragmentShader:b,side:THREE.DoubleSide,transparent:!0}),this.object3D=new THREE.Object3D,this.el.setObject3D("mesh",this.object3D)},update(){const t=this.data,e=t.size;this.mesh&&this.object3D.remove(this.mesh),this.material.uniforms.size.value=e;const i=v(t.particles);this.mesh=new THREE.Mesh(i,this.material),this.object3D.add(this.mesh)},remove(){const t=this.el.getObject3D("mesh");t&&this.object3D.remove(t)},tick(t){this.material.uniforms.time.value=t*5e-4}});AFRAME.registerComponent("logs",{init:function(){this.el.classList.add("logs");let t=document.createElement("a-gltf-model");t.setAttribute("src","#log"),t.setAttribute("shadow","receive: false; cast: false;");let e=t.cloneNode(),i=t.cloneNode(),o=t.cloneNode();e.setAttribute("position","0 0 0.027"),e.setAttribute("rotation","0 90 0"),e.setAttribute("scale","0.75 1 0.9"),i.setAttribute("position","0.183 0.069 -0.072"),i.setAttribute("rotation","2 75 -15"),o.setAttribute("position","0.305 0 0.118"),o.setAttribute("rotation","0 69 0"),this.el.appendChild(e),this.el.appendChild(i),this.el.appendChild(o)}});AFRAME.registerComponent("floor",{init:function(){this.el.setAttribute("id","floor");for(let t=0;t<=4;t++)for(let e=0;e<=4;e++){let i=document.createElement("a-entity");i.setAttribute("gltf-model","#floor_tile_large"),i.setAttribute("position",{x:4*t,y:0,z:4*e}),i.setAttribute("shadow","receive: true; cast: false;"),this.el.appendChild(i)}}});AFRAME.registerComponent("pillars",{init:function(){this.el.setAttribute("id","pillars");let t=2;for(let e=0;e<=2;e++)for(let i=0;i<=2;i++){if(i===1&&e===1)continue;let o=document.createElement("a-entity");o.setAttribute("gltf-model","#pillar"),o.setAttribute("position",{x:6*e+t,y:0,z:6*i+t}),o.setAttribute("shadow","receive: false; cast: true;"),this.el.appendChild(o)}}});AFRAME.registerComponent("guyde",{schema:{offset:{type:"string"}},init:function(){let t=this.el.getAttribute("id"),e=this.data.offset,i=document.createElement("a-entity");i.setAttribute("checkpoint",`offset: ${e}`),i.setAttribute("gltf-model","#guyde"),i.setAttribute("id",`checkpoint-${t}`);let o=document.createElement("a-entity");o.setAttribute("light",`type: spot; target: #${t}; angle: 2; intensity: 0.6;`),o.setAttribute("position","0 20 0"),this.el.classList.add("guyde"),this.el.appendChild(i),this.el.appendChild(o)}});AFRAME.registerComponent("play-audio-guide",{schema:{type:"string",default:"#ping"},init:function(){this.el.setAttribute("sound",`src: ${this.data}; autoplay:true; volume: 1.5;`)}});const y=document.getElementById("start-exp"),A=document.getElementById("UI");let l;window.onload=function(){l=THREE.AudioContext.getContext(),y.addEventListener("click",()=>{l.state!=="running"&&l.resume().then(()=>{console.log("Playback resumed successfully")}),A.style.display="none";let t=document.getElementById("point-start").parentNode;t.setAttribute("sound","src: #welcome; autoplay:true; volume: 1.5;"),t.addEventListener("sound-ended",()=>{let e=document.createElement("a-entity");e.setAttribute("add-next-guyde",""),c.appendChild(e)})})};const c=document.getElementById("checkpoints"),d=[{id:"point-1",position:"0.5 0 9",offset:"0 0 1",rotation:"0 -12 0"},{id:"point-2",position:"0.5 0 2",offset:"0 0 2",rotation:"0 30 0",sound:"#hit_on_table"},{id:"point-3",position:"6 0 2",offset:"-1 0 1",rotation:"0 -50 0",sound:"#cutting_sound"},{id:"point-4",position:"12 0 4",offset:"-2 0 1",rotation:"0 -75 0",sound:"#beer"},{id:"end-point",position:"12 0 17",offset:"-1 0 -1",rotation:"0 225 0",sound:"#bye"}];let a=0;AFRAME.registerComponent("add-next-guyde",{init:function(){let t=d[a];this.el.setAttribute("id",t.id),this.el.setAttribute("position",t.position),this.el.setAttribute("guyde",`offset: ${t.offset}`),this.el.setAttribute("rotation",t.rotation)}});AFRAME.registerComponent("remove-previous-guyde",{init:function(){if(a-1>=0){let t=d[a-1],e=document.getElementById(t.id);e.parentNode.removeChild(e)}}});window.addEventListener("navigation-end",function(t){let e=d[a],i=t.detail.checkpoint;if(i.parentNode.setAttribute("play-audio-guide",e.sound),a++,i.id!=="checkpoint-end-point"){let o=document.createElement("a-entity");o.setAttribute("add-next-guyde",""),o.setAttribute("remove-previous-guyde",""),c.appendChild(o),i.parentNode.removeChild(i)}});
