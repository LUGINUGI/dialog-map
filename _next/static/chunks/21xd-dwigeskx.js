(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,56414,e=>{"use strict";var t=e.i(71645);function i(e){return Number.isFinite(e)?Math.min(Math.max(e,0),1):.6}function n(){return{a:1,b:0,c:0,d:1,e:0,f:0}}function r(e,t){return{a:e.a*t.a+e.c*t.b,b:e.b*t.a+e.d*t.b,c:e.a*t.c+e.c*t.d,d:e.b*t.c+e.d*t.d,e:e.a*t.e+e.c*t.f+e.e,f:e.b*t.e+e.d*t.f+e.f}}function s(e,t){return{a:1,b:0,c:0,d:1,e:e,f:t}}function a(e){let t=e.a*e.d-e.b*e.c;if(1e-6>Math.abs(t))return null;let i=1/t;return{a:e.d*i,b:-e.b*i,c:-e.c*i,d:e.a*i,e:(e.c*e.f-e.d*e.e)*i,f:(e.b*e.e-e.a*e.f)*i}}function o(e,t){return{a:e.a*t,b:e.b*t,c:e.c*t,d:e.d*t,e:e.e*t,f:e.f*t}}function l(e,t,i){return{x:e.a*t+e.c*i+e.e,y:e.b*t+e.d*i+e.f}}function h(e){return e?{r:e.r,g:e.g,b:e.b,a:e.a}:{r:0,g:0,b:0,a:0}}function c(e,t){if(t){var i;void 0!==t.x&&(e.x=t.x),void 0!==t.y&&(e.y=t.y),void 0!==t.scaleX&&(e.scaleX=t.scaleX),void 0!==t.scaleY&&(e.scaleY=t.scaleY),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.origin&&(e.origin=(i=t.origin)?{x:i.x,y:i.y}:{x:0,y:0})}}function d(e){let t=e instanceof S?e:e?._parent??null;for(;t;){if(t instanceof S)return t;t=t._parent}return null}function u(e){d(e)?._notifyMutation()}function p(e){let t=e._parent;if(!t)return;let i=d(e);t._children=t._children.filter(t=>t!==e),e._parent=null,i?._notifyMutation()}function g(e,t){if(e===t)throw Error("A Group cannot be added to itself.");let i=e;for(;i;){if(i===t)throw Error("A Group cannot be added to one of its descendants.");i="_parent"in i?i._parent:null}}function f(e,t){if(t&&!(e instanceof b)&&(!(t instanceof S)||!(e instanceof x)&&!(e instanceof v))&&(!(t instanceof x)||!(e instanceof y))&&(!(t instanceof y)||!(e instanceof v)))throw Error("A Group child must match the node type accepted by its nearest non-group parent.")}function m(e,t){for(let i of e._children)f(i,t),i instanceof b&&m(i,t)}var v=class{x=0;y=0;scaleX=1;scaleY=1;rotation=0;origin={x:0,y:0};host;_width=0;_height=0;_opacity=1;_blur=0;_zIndex=0;_element=null;_elementVersion=0;_parent=null;constructor(e={}){this.host=document.createElement("div"),this.host.style.position="absolute",this.host.style.left="0",this.host.style.top="0",this.host.style.display="block",this.host.style.overflow="hidden",this.host.style.transformOrigin="0 0",c(this,e),void 0!==e.width?this.width=e.width:this.syncHostSize(),void 0!==e.height?this.height=e.height:this.syncHostSize(),void 0!==e.opacity&&(this.opacity=e.opacity),void 0!==e.blur&&(this.blur=e.blur),void 0!==e.zIndex&&(this.zIndex=e.zIndex),void 0!==e.element&&this.setElement(e.element)}get width(){return this._width}set width(e){this._width!==e&&(this._width=e,this.syncHostSize(),u(this))}get height(){return this._height}set height(e){this._height!==e&&(this._height=e,this.syncHostSize(),u(this))}get opacity(){return this._opacity}set opacity(e){this._opacity!==e&&(this._opacity=e,u(this))}get blur(){return this._blur}set blur(e){this._blur!==e&&(this._blur=e,u(this))}get zIndex(){return this._zIndex}set zIndex(e){this._zIndex!==e&&(this._zIndex=e,u(this))}get element(){return this._element}setElement(e){this._element!==e&&(this._element=e,this._elementVersion+=1,this.host.replaceChildren(),e&&this.host.append(e),u(this))}remove(){p(this)}syncHostSize(){this.host.style.width=`${this._width}px`,this.host.style.height=`${this._height}px`}},y=class extends EventTarget{x=0;y=0;scaleX=1;scaleY=1;rotation=0;origin={x:0,y:0};_width=0;_height=0;get width(){return this._width}set width(e){this._width!==e&&(this._width=e,u(this))}get height(){return this._height}set height(e){this._height!==e&&(this._height=e,u(this))}_cornerRadius=0;_cornerSmoothing=.6;get cornerRadius(){return this._cornerRadius}set cornerRadius(e){let t=Number.isFinite(e)?Math.max(e,0):0;this._cornerRadius!==t&&(this._cornerRadius=t,u(this))}get cornerSmoothing(){return this._cornerSmoothing}set cornerSmoothing(e){let t=i(e);this._cornerSmoothing!==t&&(this._cornerSmoothing=t,u(this))}_pointerEvents=!1;_zIndex=0;get pointerEvents(){return this._pointerEvents}set pointerEvents(e){this._pointerEvents!==e&&(this._pointerEvents=e,u(this))}get zIndex(){return this._zIndex}set zIndex(e){this._zIndex!==e&&(this._zIndex=e,u(this))}_parent=null;_children=[];constructor(e={}){super(),c(this,e),void 0!==e.width&&(this.width=e.width),void 0!==e.height&&(this.height=e.height),void 0!==e.cornerRadius&&(this.cornerRadius=e.cornerRadius),void 0!==e.cornerSmoothing&&(this.cornerSmoothing=e.cornerSmoothing),void 0!==e.pointerEvents&&(this.pointerEvents=e.pointerEvents),void 0!==e.zIndex&&(this.zIndex=e.zIndex)}add(e){return e instanceof b&&(g(this,e),m(e,this)),p(e),this._children.push(e),e._parent=this,u(e),e}remove(){p(this)}addEventListener(e,t,i){super.addEventListener(e,t,i)}removeEventListener(e,t,i){super.removeEventListener(e,t,i)}},x=class{x=0;y=0;scaleX=1;scaleY=1;rotation=0;origin={x:0,y:0};opacity=1;spacing=12;blur=8;bezelWidth=14;thickness=90;displacementFactor=1;displacementBlur=6;normalDivergenceBlendPower=.5;normalDivergenceBlendEnabled=!0;ior=1.5;contentIor=1;contentDepth=0;dispersion=0;surfaceProfile="convex";lightDirection=-Math.PI/4;specularStrength=1;specularWidth=1;specularFalloff=1;oppositeSpecularStrength=1;specularSharpness=2;specularOpacity=.45;reflectionOffset=18;tint={r:1,g:1,b:1,a:.15};shadowColor={r:0,g:0,b:0,a:.12};shadowOffsetX=0;shadowOffsetY=10;shadowBlur=24;shadowSpread=0;debugDisplacement=!1;zIndex=0;_parent=null;_children=[];constructor(e={}){c(this,e),void 0!==e.opacity&&(this.opacity=e.opacity),void 0!==e.spacing&&(this.spacing=e.spacing),void 0!==e.blur&&(this.blur=e.blur),void 0!==e.bezelWidth&&(this.bezelWidth=e.bezelWidth),void 0!==e.thickness&&(this.thickness=e.thickness),void 0!==e.displacementFactor&&(this.displacementFactor=e.displacementFactor),void 0!==e.displacementBlur&&(this.displacementBlur=e.displacementBlur),void 0!==e.normalDivergenceBlendPower&&(this.normalDivergenceBlendPower=e.normalDivergenceBlendPower),void 0!==e.normalDivergenceBlendEnabled&&(this.normalDivergenceBlendEnabled=e.normalDivergenceBlendEnabled),void 0!==e.ior&&(this.ior=e.ior),void 0!==e.contentIor&&(this.contentIor=e.contentIor),void 0!==e.contentDepth&&(this.contentDepth=e.contentDepth),void 0!==e.dispersion&&(this.dispersion=e.dispersion),void 0!==e.surfaceProfile&&(this.surfaceProfile=e.surfaceProfile),void 0!==e.lightDirection&&(this.lightDirection=e.lightDirection),void 0!==e.specularStrength&&(this.specularStrength=e.specularStrength),void 0!==e.specularWidth&&(this.specularWidth=e.specularWidth),void 0!==e.specularFalloff&&(this.specularFalloff=e.specularFalloff),this.oppositeSpecularStrength=e.oppositeSpecularStrength??this.specularStrength,void 0!==e.specularSharpness&&(this.specularSharpness=e.specularSharpness),void 0!==e.specularOpacity&&(this.specularOpacity=e.specularOpacity),void 0!==e.reflectionOffset&&(this.reflectionOffset=e.reflectionOffset),void 0!==e.tint&&(this.tint=h(e.tint)),void 0!==e.shadowColor&&(this.shadowColor=h(e.shadowColor)),void 0!==e.shadowOffsetX&&(this.shadowOffsetX=e.shadowOffsetX),void 0!==e.shadowOffsetY&&(this.shadowOffsetY=e.shadowOffsetY),void 0!==e.shadowBlur&&(this.shadowBlur=e.shadowBlur),void 0!==e.shadowSpread&&(this.shadowSpread=e.shadowSpread),void 0!==e.debugDisplacement&&(this.debugDisplacement=e.debugDisplacement),void 0!==e.zIndex&&(this.zIndex=e.zIndex)}add(e){return e instanceof b&&(g(this,e),m(e,this)),p(e),this._children.push(e),e._parent=this,u(e),e}remove(){p(this)}},b=class e{x=0;y=0;scaleX=1;scaleY=1;rotation=0;origin={x:0,y:0};_parent=null;_children=[];constructor(e={}){c(this,e)}add(t){t instanceof e&&g(this,t);let i=function(e){let t=e;for(;t instanceof b;)t=t._parent;return t}(this);return f(t,i),t instanceof e&&m(t,i),p(t),this._children.push(t),t._parent=this,u(t),t}remove(){p(this)}},w=class extends b{_zIndex=0;constructor(e={}){super(e),void 0!==e.zIndex&&(this._zIndex=e.zIndex)}get zIndex(){return this._zIndex}set zIndex(e){this._zIndex!==e&&(this._zIndex=e,u(this))}},S=class{_children=[];_listeners=new Set;add(e){return e instanceof b&&(g(this,e),m(e,this)),p(e),this._children.push(e),e._parent=this,this._notifyMutation(),e}_subscribe(e){return this._listeners.add(e),()=>{this._listeners.delete(e)}}_notifyMutation(){for(let e of this._listeners)e()}};function C(e){let t=[];return!function e(i,n){let r={value:0},s=[];for(let a of(_(i,n,r,(e,t)=>{e instanceof y&&(s.push({child:e,transform:t,zIndex:e.zIndex,order:r.value}),r.value+=1)},(e,t)=>{s.push({child:e,transform:t,zIndex:e.zIndex,order:r.value}),r.value+=1}),s.sort((e,t)=>e.zIndex-t.zIndex||e.order-t.order),s)){if(a.child instanceof w){e(a.child._children,a.transform);continue}t.push({glass:a.child,transform:a.transform,traversalIndex:t.length})}}(e._children,n()),t}function _(e,t,i,n,a){for(let l of e){var o;let e=(o=function(e){var t;let i,n;return r(s(e.x,e.y),r(s(e.origin.x,e.origin.y),r((i=Math.cos(t=e.rotation),{a:i,b:n=Math.sin(t),c:-n,d:i,e:0,f:0}),r({a:e.scaleX,b:0,c:0,d:e.scaleY,e:0,f:0},s(-e.origin.x,-e.origin.y)))))}(l),r(t,o));if(l instanceof w){a(l,e);continue}if(l instanceof b){_(l._children,e,i,n,a);continue}n(l,e)}}var M=class extends Event{glass;renderer;nativeEvent;pointerId;pointerType;isPrimary;button;buttons;clientX;clientY;canvasX;canvasY;localX;localY;inside;constructor(e,t){super(e,{bubbles:!1,cancelable:!0,composed:!1}),this.glass=t.glass,this.renderer=t.renderer,this.nativeEvent=t.nativeEvent,this.pointerId=t.nativeEvent.pointerId,this.pointerType=t.nativeEvent.pointerType,this.isPrimary=t.nativeEvent.isPrimary,this.button=t.nativeEvent.button,this.buttons=t.nativeEvent.buttons,this.clientX=t.nativeEvent.clientX,this.clientY=t.nativeEvent.clientY,this.canvasX=t.canvasX,this.canvasY=t.canvasY,this.localX=t.localX,this.localY=t.localY,this.inside=t.inside}};function E(e){let t=1;for(;t<e;)t*=2;return t}function P(e,t=1/0){if(e>t)throw Error(`Texture size ${e} exceeds the maximum supported size ${t}.`);return Math.min(E(Math.max(1,e)),t)}var R=Float32Array.BYTES_PER_ELEMENT;function D(...e){if(e.length>4)throw Error("A vec4 layout lane cannot contain more than four fields.");return{type:"vec4f",fields:e}}function N(e){let t=Object.keys(e),i=4*t.length,n=(n,r,s)=>{let a=r*i;if(a<0||a+i>n.length)throw RangeError("GPU struct write is outside the target buffer.");n.fill(0,a,a+i);for(let i=0;i<t.length;i+=1){let r=t[i],o=e[r].fields,l=s[r],h=a+4*i;for(let e=0;e<o.length;e+=1)n[h+e]=l[o[e]]}};return{floatCount:i,byteSize:i*R,createArray:(e=1)=>new Float32Array(Math.max(e,1)*i),wgsl(e){let i=t.map(e=>`  ${e}: vec4f,`).join("\n");return`struct ${e} {
${i}
};`},write(e,t){n(e,0,t)},writeAt:n}}var B=class{constructor(e,t,i){this.device=e,this.layout=t,this.data=t.createArray(),this.buffer=e.createBuffer({size:t.byteSize,usage:i})}device;layout;data;buffer;get bindingResource(){return{buffer:this.buffer}}write(e){this.layout.write(this.data,e),this.device.queue.writeBuffer(this.buffer,0,this.data)}destroy(){this.buffer.destroy()}},k=class{constructor(e,t,i){this.device=e,this.layout=t,this.usage=i,this.data=t.createArray()}device;layout;usage;data;buffer=null;capacity=0;get bindingResource(){if(!this.buffer)throw Error("GPU struct array buffer has not been allocated.");return{buffer:this.buffer}}ensureCapacity(e){let t=Math.max(e,1);this.buffer&&t<=this.capacity||(this.buffer?.destroy(),this.buffer=this.device.createBuffer({size:t*this.layout.byteSize,usage:this.usage}),this.data=this.layout.createArray(t),this.capacity=t)}writeAt(e,t){this.layout.writeAt(this.data,e,t)}upload(e){this.buffer&&this.device.queue.writeBuffer(this.buffer,0,this.data,0,Math.max(e,1)*this.layout.floatCount)}destroy(){this.buffer?.destroy(),this.buffer=null,this.capacity=0}},T=N({params:D("directionX","directionY","radius")}),z=N({canvas:D("width","height"),container:D("opacity"),shape:D("smoothing","bezelWidth","shapeCount","surfaceProfile"),sdf:D("normalDivergenceBlendPower","normalDivergenceBlendEnabled"),glass:D("thickness","displacementFactor","ior","dispersion"),content:D("ior","depth"),lighting:D("x","y"),specular:D("strength","width","sharpness","opacity"),specularSecondary:D("oppositeStrength","falloff","reflectionOffset"),tint:D("r","g","b","a"),shadow:D("offsetX","offsetY","spread","blur"),shadowColor:D("r","g","b","a"),debug:D("displacement")}),I=N({inverse0:D("a","c","e","minimumScale"),inverse1:D("b","d","f","cornerRadius"),geometry:D("halfWidth","halfHeight","cornerSmoothing"),contentRange:D("start","count")}),H=N({inverse0:D("a","c","e","copiedWidth"),inverse1:D("b","d","f","copiedHeight"),atlasRect:D("u","v","uScale","vScale"),opacity:D("value")}),L=N({bounds:D("minX","minY","maxX","maxY")}),O=N({canvas:D("width","height","uScale","vScale"),inverse0:D("a","c","e","copiedWidth"),inverse1:D("b","d","f","copiedHeight"),opacity:D("value")}),F=`
struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
};

@vertex
fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
  var positions = array<vec2f, 3>(
    vec2f(-1.0, -3.0),
    vec2f(-1.0, 1.0),
    vec2f(3.0, 1.0),
  );

  let position = positions[vertexIndex];
  var output: VertexOutput;
  output.position = vec4f(position, 0.0, 1.0);
  output.uv = vec2f(position.x * 0.5 + 0.5, 0.5 - position.y * 0.5);
  return output;
}
`,A=`
${F}

@group(0) @binding(0) var downsampleSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;

@fragment
fn fragmentMain(in: VertexOutput) -> @location(0) vec4f {
  let textureSize = vec2f(textureDimensions(inputTexture));
  let texel = 1.0 / max(textureSize, vec2f(1.0));
  let clampedUv = clamp(in.uv, vec2f(0.0), vec2f(1.0));

  return (
    textureSampleLevel(inputTexture, downsampleSampler, clampedUv + texel * vec2f(-0.5, -0.5), 0.0) +
    textureSampleLevel(inputTexture, downsampleSampler, clampedUv + texel * vec2f(0.5, -0.5), 0.0) +
    textureSampleLevel(inputTexture, downsampleSampler, clampedUv + texel * vec2f(-0.5, 0.5), 0.0) +
    textureSampleLevel(inputTexture, downsampleSampler, clampedUv + texel * vec2f(0.5, 0.5), 0.0)
  ) * 0.25;
}
`,W=`
${F}

@group(0) @binding(0) var upsampleSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;

@fragment
fn fragmentMain(in: VertexOutput) -> @location(0) vec4f {
  return textureSampleLevel(inputTexture, upsampleSampler, in.uv, 0.0);
}
`,G=`
${F}

@group(0) @binding(0) var blitSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;

@fragment
fn fragmentMain(in: VertexOutput) -> @location(0) vec4f {
  return textureSampleLevel(inputTexture, blitSampler, in.uv, 0.0);
}
`,X=`
${T.wgsl("BlurParams")}
${F}

@group(0) @binding(0) var blurSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> blurParams: BlurParams;

const ADAPTIVE_BLUR_TAP_RADIUS: f32 = 6.0;
const ADAPTIVE_BLUR_CENTER_WEIGHT: f32 = 0.13702282;
const ADAPTIVE_BLUR_PAIR_OFFSETS: array<f32, 3> = array<f32, 3>(
  1.4584295,
  3.4039848,
  5.3518057,
);
const ADAPTIVE_BLUR_PAIR_WEIGHTS: array<f32, 3> = array<f32, 3>(
  0.23933733,
  0.1394403,
  0.052710965,
);

@fragment
fn fragmentMain(in: VertexOutput) -> @location(0) vec4f {
  let textureSize = vec2f(textureDimensions(inputTexture));
  let blurStep =
    blurParams.params.xy /
    max(textureSize, vec2f(1.0)) *
    (blurParams.params.z / ADAPTIVE_BLUR_TAP_RADIUS);
  let clampedUv = clamp(in.uv, vec2f(0.0), vec2f(1.0));

  var color = textureSampleLevel(inputTexture, blurSampler, clampedUv, 0.0) * ADAPTIVE_BLUR_CENTER_WEIGHT;

  for (var i = 0u; i < 3u; i = i + 1u) {
    let offset = blurStep * ADAPTIVE_BLUR_PAIR_OFFSETS[i];
    let weight = ADAPTIVE_BLUR_PAIR_WEIGHTS[i];
    color =
      color +
      (
        textureSampleLevel(inputTexture, blurSampler, clamp(clampedUv + offset, vec2f(0.0), vec2f(1.0)), 0.0) +
        textureSampleLevel(inputTexture, blurSampler, clamp(clampedUv - offset, vec2f(0.0), vec2f(1.0)), 0.0)
      ) *
      weight;
  }

  return color;
}
`,Y=`
${z.wgsl("Globals")}

${I.wgsl("ShapeData")}

struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
};

// Smooth union uses the classic polynomial smooth-min only after a normal gate.
// Nearly aligned normals are treated as duplicate or nested boundaries and fall
// back toward a hard union; diverging normals get the full blend radius so real
// corners can form a rounded transition.
// globals.sdf.x shapes a continuous ramp from aligned normals to opposed
// normals. A high power keeps smoothing very small until larger angle
// differences, without introducing a hard threshold in the blend radius.
// globals.sdf.y toggles that normal gate; when disabled, every pair receives
// the full configured smoothing distance.
const SDF_EPSILON: f32 = 0.0001;
const SDF_GRADIENT_STEP_PX: f32 = 1.0;
const DEBUG_DISPLACEMENT_ENCODE_SCALE: f32 = 0.01;
// Smooth blending can flatten the fused SDF so one distance unit covers
// more than one screen pixel. Specular is a screen-space rim effect, so it
// converts SDF distance back to pixels with derivatives and caps the correction
// when the local field becomes nearly flat.
const SPECULAR_DISTANCE_SCALE_FLOOR: f32 = 0.25;
// Width of the antialiased feather around the specular band edge in device
// pixels. This is separate from the configured specular band width.
const SPECULAR_EDGE_FEATHER_PX: f32 = 1.0;
const CIRCULAR_CORNER_EXPONENT: f32 = 2.00000000;
const CORNER_SMOOTHING_EXPONENT_DELTA: f32 = 3.33333333;

// Keep the SDF value and its local normal together. The normal is used to decide
// when smoothing is a real edge-to-edge blend instead of an overlap artifact.
struct SdfSample {
  distance: f32,
  gradient: vec2f,
};

fn normalizeSdfGradient(gradient: vec2f) -> vec2f {
  let magnitude = length(gradient);
  if (magnitude < SDF_EPSILON) {
    return vec2f(0.0, -1.0);
  }
  return gradient / magnitude;
}

fn hardUnion(left: SdfSample, right: SdfSample) -> SdfSample {
  if (left.distance <= right.distance) {
    return left;
  }
  return right;
}

fn smoothUnion(left: SdfSample, right: SdfSample, smoothing: f32) -> SdfSample {
  let normalAlignment = clamp(dot(left.gradient, right.gradient), -1.0, 1.0);
  let normalDivergenceBlendPower = max(globals.sdf.x, 0.0001);
  let gatedNormalDivergence = pow((1.0 - normalAlignment) * 0.5, normalDivergenceBlendPower);
  let normalDivergence = select(1.0, gatedNormalDivergence, globals.sdf.y > 0.5);
  let blendDistance = smoothing * normalDivergence;

  if (blendDistance <= SDF_EPSILON) {
    return hardUnion(left, right);
  }

  let h = clamp(0.5 + 0.5 * (right.distance - left.distance) / blendDistance, 0.0, 1.0);
  return SdfSample(
    mix(right.distance, left.distance, h) - blendDistance * h * (1.0 - h),
    normalizeSdfGradient(mix(right.gradient, left.gradient, h)),
  );
}

fn shapeLocalPos(shape: ShapeData, pos: vec2f) -> vec2f {
  return vec2f(
    shape.inverse0.x * pos.x + shape.inverse0.y * pos.y + shape.inverse0.z,
    shape.inverse1.x * pos.x + shape.inverse1.y * pos.y + shape.inverse1.z,
  );
}

fn superellipseLength(v: vec2f, exponent: f32) -> f32 {
  let a = abs(v);
  return pow(pow(a.x, exponent) + pow(a.y, exponent), 1.0 / exponent);
}

// CPU hit testing mirrors this in renderer/interaction.ts. If this p-norm
// approximation changes, update that path at the same time.
fn sdSmoothRoundRect(localPos: vec2f, halfSize: vec2f, radius: f32, cornerSmoothing: f32) -> f32 {
  let cornerLimit = min(halfSize.x, halfSize.y);
  let clampedRadius = min(max(radius, 0.0), cornerLimit);
  let q = abs(localPos) - halfSize + vec2f(clampedRadius);
  let maxSmoothingThatFits = select(
    0.0,
    max(cornerLimit / max(radius, SDF_EPSILON) - 1.0, 0.0),
    radius > SDF_EPSILON,
  );
  let effectiveSmoothing = min(clamp(cornerSmoothing, 0.0, 1.0), maxSmoothingThatFits);
  let exponent = CIRCULAR_CORNER_EXPONENT + effectiveSmoothing * CORNER_SMOOTHING_EXPONENT_DELTA;
  let cornerDistance = superellipseLength(max(q, vec2f(0.0)), exponent);
  return cornerDistance + min(max(q.x, q.y), 0.0) - clampedRadius;
}

fn shapeDistanceFromLocal(shape: ShapeData, localPos: vec2f) -> f32 {
  let halfSize = shape.geometry.xy;
  let localDistance = sdSmoothRoundRect(
    localPos - halfSize,
    halfSize,
    shape.inverse1.w,
    shape.geometry.z,
  );
  return localDistance * shape.inverse0.w;
}

fn shapeDistance(shape: ShapeData, pos: vec2f) -> f32 {
  return shapeDistanceFromLocal(shape, shapeLocalPos(shape, pos));
}

fn shapeGradient(shape: ShapeData, pos: vec2f) -> vec2f {
  let eps = SDF_GRADIENT_STEP_PX;
  return normalizeSdfGradient(vec2f(
    shapeDistance(shape, pos + vec2f(eps, 0.0)) - shapeDistance(shape, pos - vec2f(eps, 0.0)),
    shapeDistance(shape, pos + vec2f(0.0, eps)) - shapeDistance(shape, pos - vec2f(0.0, eps)),
  ));
}

fn shapeSdfSample(shape: ShapeData, pos: vec2f) -> SdfSample {
  return SdfSample(
    shapeDistance(shape, pos),
    shapeGradient(shape, pos),
  );
}

fn sceneSdfSample(pos: vec2f, shapeCount: u32, smoothing: f32) -> SdfSample {
  var result = SdfSample(1e5, vec2f(0.0, -1.0));
  var found = false;

  for (var i = 0u; i < shapeCount; i = i + 1u) {
    let nextSample = shapeSdfSample(shapes[i], pos);
    if (!found) {
      result = nextSample;
      found = true;
    } else {
      result = smoothUnion(result, nextSample, smoothing);
    }
  }

  return result;
}

fn smootherstep(value: f32) -> f32 {
  let x = clamp(value, 0.0, 1.0);
  return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
}

fn smootherstepDerivative(value: f32) -> f32 {
  let x = clamp(value, 0.0, 1.0);
  return 30.0 * x * x * (x * (x - 2.0) + 1.0);
}

fn convexSquircle(x: f32) -> vec2f {
  let u = 1.0 - clamp(x, 0.0, 1.0);
  let inside = max(1.0 - pow(u, 4.0), 0.0001);
  let height = sqrt(inside);
  let derivative = 2.0 * pow(u, 3.0) / sqrt(inside);
  return vec2f(height, derivative);
}

fn concaveCircle(x: f32) -> vec2f {
  let squircle = convexSquircle(x);
  return vec2f(1.0 - squircle.x, -squircle.y);
}

fn evaluateHeightProfile(profileIndex: f32, x: f32) -> vec2f {
  if (profileIndex < 0.5) {
    return convexSquircle(x);
  }

  if (profileIndex < 1.5) {
    return concaveCircle(x);
  }

  let convex = convexSquircle(x);
  let concave = concaveCircle(x);
  let blend = smootherstep(x);
  let blendDerivative = smootherstepDerivative(x);
  let height = mix(convex.x, concave.x, blend);
  let derivative = mix(convex.y, concave.y, blend) + (concave.x - convex.x) * blendDerivative;
  return vec2f(height, derivative);
}

@vertex
fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
  var positions = array<vec2f, 3>(
    vec2f(-1.0, -3.0),
    vec2f(-1.0, 1.0),
    vec2f(3.0, 1.0),
  );

  let position = positions[vertexIndex];
  var output: VertexOutput;
  output.position = vec4f(position, 0.0, 1.0);
  output.uv = vec2f(position.x * 0.5 + 0.5, 0.5 - position.y * 0.5);
  return output;
}
`,U=`
${Y}

@group(0) @binding(0) var<uniform> globals: Globals;
@group(0) @binding(1) var<storage, read> shapes: array<ShapeData>;

@fragment
fn fragmentMain(in: VertexOutput) -> @location(0) vec4f {
  let shapeCount = u32(globals.shape.z);
  let fragCoord = in.uv * globals.canvas.xy;
  let sdfSample = sceneSdfSample(fragCoord, shapeCount, globals.shape.x);
  let distance = sdfSample.distance;
  let fillMask = 1.0 - smoothstep(0.0, 1.4, distance);
  let pixelWidth = max(fwidth(distance), 0.75);
  let bezelWidth = max(globals.shape.y, pixelWidth * 2.0);
  let inwardDistance = max(-distance, 0.0);
  let bezelProgress = clamp(inwardDistance / bezelWidth, 0.0, 1.0);
  let surfaceDerivative = select(
    evaluateHeightProfile(globals.shape.w, bezelProgress).y,
    0.0,
    inwardDistance > bezelWidth,
  );
  let clampedSlope = min(surfaceDerivative, tan(1.4835298));
  let surfaceSlope = sdfSample.gradient * clampedSlope;

  return vec4f(surfaceSlope * fillMask, 0.0, fillMask);
}
`,V=`
${Y}

@group(0) @binding(0) var<uniform> globals: Globals;
@group(0) @binding(1) var<storage, read> shapes: array<ShapeData>;

@fragment
fn fragmentMain(in: VertexOutput) -> @location(0) vec4f {
  let shapeCount = u32(globals.shape.z);
  let fragCoord = in.uv * globals.canvas.xy;
  let shadowCoord = fragCoord - globals.shadow.xy;
  let distance = sceneSdfSample(shadowCoord, shapeCount, globals.shape.x).distance - globals.shadow.z;
  let pixelWidth = max(fwidth(distance), 0.75);
  let alpha = 1.0 - smoothstep(0.0, pixelWidth, distance);

  return vec4f(0.0, 0.0, 0.0, alpha);
}
`,j=`
${z.wgsl("Globals")}
${F}

@group(0) @binding(0) var shadowSampler: sampler;
@group(0) @binding(1) var sceneTexture: texture_2d<f32>;
@group(0) @binding(2) var shadowMaskTexture: texture_2d<f32>;
@group(0) @binding(3) var<uniform> globals: Globals;

@fragment
fn fragmentMain(in: VertexOutput) -> @location(0) vec4f {
  let sceneColor = textureSampleLevel(sceneTexture, shadowSampler, in.uv, 0.0);
  let shadowMask = textureSampleLevel(shadowMaskTexture, shadowSampler, in.uv, 0.0).a;
  let containerOpacity = clamp(globals.container.x, 0.0, 1.0);
  let shadowOpacity = clamp(shadowMask * globals.shadowColor.a * containerOpacity, 0.0, 1.0);
  let color = mix(sceneColor.rgb, globals.shadowColor.rgb, shadowOpacity);

  return vec4f(color, sceneColor.a);
}
`,q=`
${Y}

@group(0) @binding(0) var<uniform> globals: Globals;
@group(0) @binding(1) var<storage, read> shapes: array<ShapeData>;
@group(0) @binding(2) var backgroundSampler: sampler;
@group(0) @binding(3) var backgroundTextureSharp: texture_2d<f32>;
@group(0) @binding(4) var backgroundTextureBlurred: texture_2d<f32>;
@group(0) @binding(5) var glassContentTexture: texture_2d<f32>;

${H.wgsl("ContentData")}

@group(0) @binding(6) var<storage, read> contentEntries: array<ContentData>;
@group(0) @binding(7) var displacementFieldTexture: texture_2d<f32>;

fn sampleBackgroundSharp(uv: vec2f) -> vec3f {
  return textureSampleLevel(backgroundTextureSharp, backgroundSampler, uv, 0.0).rgb;
}

fn sampleBackgroundBlurred(uv: vec2f) -> vec3f {
  return textureSampleLevel(backgroundTextureBlurred, backgroundSampler, uv, 0.0).rgb;
}

fn sampleSurfaceSlope(uv: vec2f) -> vec2f {
  let field = textureSampleLevel(displacementFieldTexture, backgroundSampler, uv, 0.0);
  return select(vec2f(0.0), field.xy / max(field.a, SDF_EPSILON), field.a > SDF_EPSILON);
}

fn contentLocalPos(content: ContentData, glassLocalPos: vec2f) -> vec2f {
  return vec2f(
    content.inverse0.x * glassLocalPos.x + content.inverse0.y * glassLocalPos.y + content.inverse0.z,
    content.inverse1.x * glassLocalPos.x + content.inverse1.y * glassLocalPos.y + content.inverse1.z,
  );
}

fn sampleGlassContentAtlas(content: ContentData, localPos: vec2f) -> vec4f {
  let copiedSize = vec2f(content.inverse0.w, content.inverse1.w);
  if (
    any(copiedSize <= vec2f(0.0)) ||
    any(content.atlasRect.zw <= vec2f(0.0)) ||
    any(localPos < vec2f(0.0)) ||
    any(localPos > copiedSize)
  ) {
    return vec4f(0.0);
  }

  let atlasUv = content.atlasRect.xy + localPos * content.atlasRect.zw;
  let contentColor = textureSampleLevel(glassContentTexture, backgroundSampler, atlasUv, 0.0);
  return vec4f(contentColor.rgb, contentColor.a * clamp(content.opacity.x, 0.0, 1.0));
}

fn sampleGlassContentEntry(
  content: ContentData,
  glassLocalRed: vec2f,
  glassLocalGreen: vec2f,
  glassLocalBlue: vec2f,
  contentMask: f32,
) -> vec4f {
  if (contentMask <= 0.0) {
    return vec4f(0.0);
  }

  let contentRed = sampleGlassContentAtlas(content, contentLocalPos(content, glassLocalRed));
  let contentGreen = sampleGlassContentAtlas(content, contentLocalPos(content, glassLocalGreen));
  let contentBlue = sampleGlassContentAtlas(content, contentLocalPos(content, glassLocalBlue));
  let alpha = max(contentGreen.a, max(contentRed.a, contentBlue.a)) * contentMask;
  return vec4f(vec3f(contentRed.r, contentGreen.g, contentBlue.b), alpha);
}

@fragment
fn fragmentMain(in: VertexOutput) -> @location(0) vec4f {
  let shapeCount = u32(globals.shape.z);
  let fragCoord = in.uv * globals.canvas.xy;
  let background = sampleBackgroundSharp(in.uv);
  let containerOpacity = clamp(globals.container.x, 0.0, 1.0);

  let sdfSample = sceneSdfSample(fragCoord, shapeCount, globals.shape.x);
  let distance = sdfSample.distance;
  let fillMask = 1.0 - smoothstep(0.0, 1.4, distance);
  let gradient = sdfSample.gradient;
  let pixelWidth = max(fwidth(distance), 0.75);
  let specularDistanceUnitsPerPx = max(
    length(vec2f(dpdx(distance), dpdy(distance))),
    SPECULAR_DISTANCE_SCALE_FLOOR,
  );
  let specularDistancePx = distance / specularDistanceUnitsPerPx;
  let specularInwardDistancePx = max(-specularDistancePx, 0.0);
  let rimWidthPx = max(globals.specular.y, 0.0001);
  let specularOuterMask = 1.0 - smoothstep(0.0, SPECULAR_EDGE_FEATHER_PX, specularDistancePx);
  let specularInnerMask = 1.0 - smoothstep(
    rimWidthPx,
    rimWidthPx + SPECULAR_EDGE_FEATHER_PX,
    specularInwardDistancePx,
  );
  let rimBandMask = specularOuterMask * specularInnerMask;
  let rimNormal = gradient;
  let lightDir = normalize(
    select(vec2f(1.0, 0.0), globals.lighting.xy, dot(globals.lighting.xy, globals.lighting.xy) > 0.0001),
  );
  let mirroredLightDir = -lightDir;

  let bezelWidth = max(globals.shape.y, pixelWidth * 2.0);
  let inwardDistance = max(-distance, 0.0);
  let bezelProgress = clamp(inwardDistance / bezelWidth, 0.0, 1.0);
  let profileResult = evaluateHeightProfile(globals.shape.w, bezelProgress);
  let profileHeight = profileResult.x * bezelWidth;
  let flatHeight = evaluateHeightProfile(globals.shape.w, 1.0).x * bezelWidth;
  let surfaceHeight = globals.glass.x + select(profileHeight, flatHeight, inwardDistance > bezelWidth);
  let surfaceSlope = sampleSurfaceSlope(in.uv);

  // The displacement prepass filters the 2D bevel slope before we rebuild the
  // 3D surface normal. Keeping this as a surface field, rather than a final
  // pixel displacement, lets the glass and content refraction paths still use
  // their own IOR, depth, and dispersion settings.
  let surfaceNormal = normalize(vec3f(surfaceSlope, 1.0));
  let dispersion = max(globals.glass.w, 0.0);
  let baseIor = max(globals.glass.z, 1.0001);
  let refractedRayRed = refract(
    vec3f(0.0, 0.0, -1.0),
    surfaceNormal,
    1.0 / max(baseIor + dispersion, 1.0001),
  );
  let refractedRayGreen = refract(vec3f(0.0, 0.0, -1.0), surfaceNormal, 1.0 / baseIor);
  let refractedRayBlue = refract(
    vec3f(0.0, 0.0, -1.0),
    surfaceNormal,
    1.0 / max(baseIor - dispersion, 1.0001),
  );
  let displacementPxRed = select(
    refractedRayRed.xy / max(-refractedRayRed.z, 0.0001) * surfaceHeight * globals.glass.y,
    vec2f(0.0),
    fillMask <= 0.0,
  );
  let displacementPxGreen = select(
    refractedRayGreen.xy / max(-refractedRayGreen.z, 0.0001) * surfaceHeight * globals.glass.y,
    vec2f(0.0),
    fillMask <= 0.0,
  );
  let displacementPxBlue = select(
    refractedRayBlue.xy / max(-refractedRayBlue.z, 0.0001) * surfaceHeight * globals.glass.y,
    vec2f(0.0),
    fillMask <= 0.0,
  );
  if (globals.debug.x > 0.5) {
    // Signed pixel displacement is centered at 0.5 for display in the color target:
    // red/green hold x/y displacement, blue stays zero.
    let debugDisplacement = displacementPxGreen * DEBUG_DISPLACEMENT_ENCODE_SCALE + vec2f(0.5);
    let debugColor = mix(background, vec3f(debugDisplacement, 0.0), fillMask);
    return vec4f(mix(background, debugColor, containerOpacity), 1.0);
  }
  let contentBaseIor = max(globals.content.x, 1.0001);
  let contentRefractedRayRed = refract(
    vec3f(0.0, 0.0, -1.0),
    surfaceNormal,
    1.0 / max(contentBaseIor + dispersion, 1.0001),
  );
  let contentRefractedRayGreen = refract(vec3f(0.0, 0.0, -1.0), surfaceNormal, 1.0 / contentBaseIor);
  let contentRefractedRayBlue = refract(
    vec3f(0.0, 0.0, -1.0),
    surfaceNormal,
    1.0 / max(contentBaseIor - dispersion, 1.0001),
  );
  let contentDisplacementPxRed = select(
    contentRefractedRayRed.xy /
      max(-contentRefractedRayRed.z, 0.0001) *
      globals.content.y *
      globals.glass.y,
    vec2f(0.0),
    fillMask <= 0.0,
  );
  let contentDisplacementPxGreen = select(
    contentRefractedRayGreen.xy /
      max(-contentRefractedRayGreen.z, 0.0001) *
      globals.content.y *
      globals.glass.y,
    vec2f(0.0),
    fillMask <= 0.0,
  );
  let contentDisplacementPxBlue = select(
    contentRefractedRayBlue.xy /
      max(-contentRefractedRayBlue.z, 0.0001) *
      globals.content.y *
      globals.glass.y,
    vec2f(0.0),
    fillMask <= 0.0,
  );
  let refractedUvRed = in.uv + displacementPxRed / globals.canvas.xy;
  let refractedUvGreen = in.uv + displacementPxGreen / globals.canvas.xy;
  let refractedUvBlue = in.uv + displacementPxBlue / globals.canvas.xy;
  let refractedColor = vec3f(
    sampleBackgroundBlurred(refractedUvRed).r,
    sampleBackgroundBlurred(refractedUvGreen).g,
    sampleBackgroundBlurred(refractedUvBlue).b,
  );
  let reflectedUv = in.uv + rimNormal * globals.specularSecondary.z / globals.canvas.xy;
  let reflectedColor = sampleBackgroundBlurred(reflectedUv);
  let glass = mix(refractedColor, globals.tint.rgb, globals.tint.a);
  let refractedLuma = dot(refractedColor, vec3f(0.2126, 0.7152, 0.0722));
  let reflectedLuma = dot(reflectedColor, vec3f(0.2126, 0.7152, 0.0722));

  // Reflection only shows when the reflected sample is bright enough and the refracted sample
  // underneath is dark enough to accept it.
  let reflectionPresence = smoothstep(0.2, 0.85, reflectedLuma);
  let refractionAcceptance = 1.0 - smoothstep(0.35, 0.85, refractedLuma);
  let reflectionBlend = reflectionPresence * refractionAcceptance;
  let edgeSpecularColor = mix(refractedColor, reflectedColor, reflectionBlend);

  // Content rendered into per-glass canvas children is sampled from its own sharp atlas,
  // refracted with the same displacement field, and then layered over the tinted backdrop
  // before any specular contributions are applied.
  var glassInterior = glass;
  for (var i = 0u; i < shapeCount; i = i + 1u) {
    let shape = shapes[i];
    let contentStart = u32(shape.contentRange.x);
    let contentCount = u32(shape.contentRange.y);
    let shapeDistanceAtFrag = shapeDistance(shape, fragCoord);
    let contentBand = max(globals.shape.x, pixelWidth);
    let contentMask = 1.0 - smoothstep(contentBand, contentBand + pixelWidth, shapeDistanceAtFrag);
    let glassLocalRed = shapeLocalPos(shape, fragCoord + contentDisplacementPxRed);
    let glassLocalGreen = shapeLocalPos(shape, fragCoord + contentDisplacementPxGreen);
    let glassLocalBlue = shapeLocalPos(shape, fragCoord + contentDisplacementPxBlue);

    for (var contentOffset = 0u; contentOffset < contentCount; contentOffset = contentOffset + 1u) {
      let contentLayer = sampleGlassContentEntry(
        contentEntries[contentStart + contentOffset],
        glassLocalRed,
        glassLocalGreen,
        glassLocalBlue,
        contentMask,
      );
      glassInterior = mix(glassInterior, contentLayer.rgb, contentLayer.a);
    }
  }

  // White specular is a separate rim-only highlight driven by 2D normal/light alignment and
  // then masked back to the configured rim band. The mask uses derivative-scaled
  // screen-pixel distance so smooth SDF blends do not stretch hairline highlights.
  let primaryBandProgress = clamp(
    specularInwardDistancePx / max(rimWidthPx, SPECULAR_EDGE_FEATHER_PX),
    0.0,
    1.0,
  );
  let oppositeBandProgress = primaryBandProgress;
  let primaryStrength = globals.specular.x - globals.specularSecondary.y * primaryBandProgress * primaryBandProgress;
  let oppositeStrength =
    globals.specularSecondary.x - globals.specularSecondary.y * oppositeBandProgress * oppositeBandProgress;
  let oppositeRimBandMask = rimBandMask;
  let rimSpecular = pow(max(dot(rimNormal, lightDir), 0.0), globals.specular.z);
  let mirroredRimSpecular = pow(max(dot(rimNormal, mirroredLightDir), 0.0), globals.specular.z);
  let primarySpecularOpacity = clamp(rimSpecular * primaryStrength, 0.0, 1.0);
  let oppositeSpecularOpacity = clamp(mirroredRimSpecular * oppositeStrength, 0.0, 1.0);
  let combinedRimSpecularOpacity = clamp(
    primarySpecularOpacity * rimBandMask + oppositeSpecularOpacity * oppositeRimBandMask,
    0.0,
    1.0,
  );
  let whiteSpecularOpacity = combinedRimSpecularOpacity * globals.specular.w;
  let coloredEdgeOpacity = combinedRimSpecularOpacity;
  let whiteSpecular = vec3f(1.0) * whiteSpecularOpacity;

  var color = background;
  if (fillMask > 0.0) {
    color = mix(color, glassInterior, fillMask);
    color = mix(color, edgeSpecularColor, coloredEdgeOpacity);
    color = color + whiteSpecular;
  }

  return vec4f(mix(background, color, containerOpacity), 1.0);
}
`,$=`
${Y}

${L.wgsl("MetricsBounds")}

@group(0) @binding(0) var<uniform> globals: Globals;
@group(0) @binding(1) var<storage, read> shapes: array<ShapeData>;
@group(0) @binding(2) var metricsSampler: sampler;
@group(0) @binding(3) var blurredBackdrop: texture_2d<f32>;
@group(0) @binding(4) var<uniform> metricsBounds: MetricsBounds;

@fragment
fn fragmentMain(in: VertexOutput) -> @location(0) vec4f {
  let shapeCount = u32(globals.shape.z);
  let positionPx = mix(metricsBounds.bounds.xy, metricsBounds.bounds.zw, in.uv);
  let insideCanvas =
    all(positionPx >= vec2f(0.0)) &&
    all(positionPx <= globals.canvas.xy);
  let distance = sceneSdfSample(positionPx, shapeCount, globals.shape.x).distance;
  // This uses bezel width as the interior cutoff. For heavily fused shapes with
  // spacing wider than the bezel, the transition band can extend past this threshold,
  // but we accept that simplification for now because it does not occur in our target use cases.
  let isInterior = insideCanvas && distance <= -globals.shape.y;
  let color = textureSampleLevel(blurredBackdrop, metricsSampler, positionPx / globals.canvas.xy, 0.0).rgb;
  return vec4f(color, select(0.0, 1.0, isInterior));
}
`,K=`
${O.wgsl("HtmlCompositeParams")}

@group(0) @binding(0) var compositeSampler: sampler;
@group(0) @binding(1) var sceneTexture: texture_2d<f32>;
@group(0) @binding(2) var htmlTexture: texture_2d<f32>;
@group(0) @binding(3) var<uniform> params: HtmlCompositeParams;

struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
};

@vertex
fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
  var positions = array<vec2f, 3>(
    vec2f(-1.0, -3.0),
    vec2f(-1.0, 1.0),
    vec2f(3.0, 1.0),
  );

  let position = positions[vertexIndex];
  var output: VertexOutput;
  output.position = vec4f(position, 0.0, 1.0);
  output.uv = vec2f(position.x * 0.5 + 0.5, 0.5 - position.y * 0.5);
  return output;
}

@fragment
fn fragmentMain(in: VertexOutput) -> @location(0) vec4f {
  let sceneColor = textureSampleLevel(sceneTexture, compositeSampler, in.uv, 0.0);
  let fragCoord = in.uv * params.canvas.xy;
  let localPos = vec2f(
    params.inverse0.x * fragCoord.x + params.inverse0.y * fragCoord.y + params.inverse0.z,
    params.inverse1.x * fragCoord.x + params.inverse1.y * fragCoord.y + params.inverse1.z,
  );
  let copiedSize = vec2f(params.inverse0.w, params.inverse1.w);

  if (
    any(params.canvas.zw <= vec2f(0.0)) ||
    any(copiedSize <= vec2f(0.0)) ||
    any(localPos < vec2f(0.0)) ||
    any(localPos > copiedSize)
  ) {
    return sceneColor;
  }

  let htmlColor = textureSampleLevel(htmlTexture, compositeSampler, localPos * params.canvas.zw, 0.0);
  let htmlAlpha = htmlColor.a * clamp(params.opacity.x, 0.0, 1.0);
  return vec4f(mix(sceneColor.rgb, htmlColor.rgb, htmlAlpha), 1.0);
}
`,Z={r:0,g:0,b:0,a:1};function Q(e,t,i){return e.createBindGroup({layout:t.getBindGroupLayout(0),entries:i})}function J(e,t,i=Z){e.beginRenderPass({colorAttachments:[{clearValue:i,loadOp:"clear",storeOp:"store",view:t.createView()}]}).end()}function ee(e,{pipeline:t,bindGroup:i,target:n,clearValue:r=Z}){let s=e.beginRenderPass({colorAttachments:[{clearValue:r,loadOp:"clear",storeOp:"store",view:n.createView()}]});s.setPipeline(t),s.setBindGroup(0,i),s.draw(3),s.end()}var et=class{constructor(e,t){this.device=e,this.encoder=e.createCommandEncoder(),this.currentTexture=t.sceneA,this.nextTexture=t.sceneB,J(this.encoder,this.currentTexture)}device;encoder;currentTexture;nextTexture;get current(){return this.currentTexture}get next(){return this.nextTexture}submitAndSwap(){this.device.queue.submit([this.encoder.finish()]),this.encoder=this.device.createCommandEncoder();let e=this.currentTexture;this.currentTexture=this.nextTexture,this.nextTexture=e}submit(){this.device.queue.submit([this.encoder.finish()])}},ei={r:0,g:0,b:0,a:0};function en(e,t){let i=e.createShaderModule({code:A}),n=e.createShaderModule({code:X}),r=e.createShaderModule({code:W}),s=72;return{pipelines:{downsample:ea(e,t,i),blur:ea(e,t,n),upsample:ea(e,t,r)},horizontalBuffer:new B(e,T,s),verticalBuffer:new B(e,T,s)}}function er(e){e?.horizontalBuffer.destroy(),e?.verticalBuffer.destroy()}function es({device:e,sampler:t,encoder:i,source:n,radiusPx:r,chain:s,resources:a}){var o,l,h;let c;if(0===s.levels.length)return n;let d=function(e,t){let i=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,n=Number.isFinite(e)?Math.max(e,0):0;if(n<=0)return{skip:!0,level:0,scale:1,effectiveRadius:0};let r=Math.min(Math.max(Math.ceil(Math.log2(n/6)),0),i),s=2**r;return{skip:!1,level:r,scale:s,effectiveRadius:n/s}}(r,s.levels.length-1);if(d.skip)return n;let u=n;for(let n=1;n<=d.level;n+=1){let r=s.levels[n],o=Q(e,a.pipelines.downsample,[{binding:0,resource:t},{binding:1,resource:u.createView()}]);ee(i,{pipeline:a.pipelines.downsample,bindGroup:o,target:r.ping,clearValue:ei}),u=r.ping}let p=s.levels[d.level];o=d.effectiveRadius,l=a.horizontalBuffer,h=a.verticalBuffer,c=Math.max(o,0),l.write({params:{directionX:1,directionY:0,radius:c}}),h.write({params:{directionX:0,directionY:1,radius:c}});let g=Q(e,a.pipelines.blur,[{binding:0,resource:t},{binding:1,resource:u.createView()},{binding:2,resource:a.horizontalBuffer.bindingResource}]);ee(i,{pipeline:a.pipelines.blur,bindGroup:g,target:p.pong,clearValue:ei});let f=Q(e,a.pipelines.blur,[{binding:0,resource:t},{binding:1,resource:p.pong.createView()},{binding:2,resource:a.verticalBuffer.bindingResource}]);ee(i,{pipeline:a.pipelines.blur,bindGroup:f,target:p.ping,clearValue:ei}),u=p.ping;for(let n=d.level-1;n>=0;n-=1){let r=s.levels[n],o=Q(e,a.pipelines.upsample,[{binding:0,resource:t},{binding:1,resource:u.createView()}]);ee(i,{pipeline:a.pipelines.upsample,bindGroup:o,target:r.pong,clearValue:ei}),u=r.pong}return u}function ea(e,t,i){return e.createRenderPipeline({layout:"auto",vertex:{module:i,entryPoint:"vertexMain"},fragment:{module:i,entryPoint:"fragmentMain",targets:[{format:t}]},primitive:{topology:"triangle-list"}})}function eo(e,t,i,n){return e.createTexture({size:{width:i,height:n,depthOrArrayLayers:1},format:t,usage:23})}function el(e,t,i,n){let r=[],s=Math.max(Math.floor(i),1),a=Math.max(Math.floor(n),1);for(;r.push({ping:eo(e,t,s,a),pong:eo(e,t,s,a),width:s,height:a}),1!==s||1!==a;)s=Math.max(Math.ceil(s/2),1),a=Math.max(Math.ceil(a/2),1);return{format:t,levels:r}}function eh(e){if(e)for(let t of e.levels)t.ping.destroy(),t.pong.destroy()}function ec(e){e&&(eh(e.backdropBlur),eh(e.displacementBlur),eh(e.shadowBlur),e.sceneA.destroy(),e.sceneB.destroy())}function ed(e,t,i,n){let r=Math.floor(n.width),s=Math.floor(n.height);return!(r<=0)&&!(s<=0)&&(e.copyTextureToTexture({texture:t,origin:{x:Math.floor(n.sourceX),y:Math.floor(n.sourceY),z:0}},{texture:i,origin:{x:Math.floor(n.destinationX),y:Math.floor(n.destinationY),z:0}},{width:r,height:s,depthOrArrayLayers:1}),!0)}function eu(e){return`matrix(${e.a}, ${e.b}, ${e.c}, ${e.d}, ${e.e}, ${e.f})`}function ep(e,t,n){let r=l(e.inverseTransform,t,n),s=r.x-e.halfWidth,a=r.y-e.halfHeight;return{localX:r.x,localY:r.y,inside:0>=function(e,t,n,r,s,a){var o,l;let h=Math.min(n,r),c=Math.min(Math.max(s,0),h),d=Math.abs(e)-n+c,u=Math.abs(t)-r+c,p=2+3.3333333333333335*i(Math.min(Math.min(Math.max(a,0),1),s>1e-4?Math.max(h/Math.max(s,1e-4)-1,0):0));return o=Math.max(d,0),l=Math.max(u,0),(Math.abs(o)**p+Math.abs(l)**p)**(1/p)+Math.min(Math.max(d,u),0)-c}(s,a,e.halfWidth,e.halfHeight,e.cornerRadius,e.cornerSmoothing)}}function eg(e,t,i){for(let n=e.length-1;n>=0;n-=1){let r=e[n];if(ep(r,t,i).inside)return r}return null}function ef(e){let t;return t=[],!function e(i,n){let r={value:0},s=[];for(let a of(_(i,n,r,(e,t)=>{(e instanceof x||e instanceof v)&&(s.push({child:e,transform:t,zIndex:e.zIndex,order:r.value}),r.value+=1)},(e,t)=>{s.push({child:e,transform:t,zIndex:e.zIndex,order:r.value}),r.value+=1}),s.sort((e,t)=>e.zIndex-t.zIndex||e.order-t.order),s)){if(a.child instanceof w){e(a.child._children,a.transform);continue}t.push({child:a.child,transform:a.transform,traversalIndex:t.length})}}(e._children,n()),t}function em(e){let t;return t=[],!function e(i,n){let r={value:0},s=[];for(let a of(_(i,n,r,(e,t)=>{e instanceof v&&(s.push({child:e,transform:t,zIndex:e.zIndex,order:r.value}),r.value+=1)},(e,t)=>{s.push({child:e,transform:t,zIndex:e.zIndex,order:r.value}),r.value+=1}),s.sort((e,t)=>e.zIndex-t.zIndex||e.order-t.order),s)){if(a.child instanceof w){e(a.child._children,a.transform);continue}t.push({html:a.child,transform:a.transform,traversalIndex:t.length})}}(e._children,n()),t}function ev(e,t){for(let i of e)for(let e of t)if(i===e||e.contains(i))return!0;return!1}function ey(e,t,i,n){e.parentElement!==t&&t.append(e),e.style.transform!==i&&(e.style.transform=i),e.style.zIndex!==n&&(e.style.zIndex=n)}function ex(e,t,i){return e<=0||t<=0||i<=0?0:e/t*i}function eb(e,t,i){return e<=0||t<=0||i<=0?0:e/t/i}var ew=class{constructor(e){this.options=e}options;sceneHtmlHosts=new Set;glassContentHosts=new Set;device=null;presentationFormat=null;sceneHtmlEntries=new Map;glassContentEntries=new Map;glassContentRanges=new Map;glassContentOrder=[];needsSceneHtmlCopy=!1;needsSceneHtmlFilter=!1;needsContentCopy=!1;needsContentFilter=!1;contentEntriesBuffer=null;glassContentAtlas=null;glassContentAtlasWidth=0;glassContentAtlasHeight=0;sampler=null;htmlBlurResources=null;get atlasTexture(){return this.glassContentAtlas}get contentEntriesBindingResource(){return this.contentEntriesBuffer?.buffer?this.contentEntriesBuffer.bindingResource:null}setDevice(e,t){this.device=e,this.presentationFormat=t,this.sampler=e.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),er(this.htmlBlurResources),this.htmlBlurResources=en(e,t),this.contentEntriesBuffer?.destroy(),this.contentEntriesBuffer=new k(e,H,136),this.contentEntriesBuffer.ensureCapacity(0)}destroy(){for(let e of this.sceneHtmlEntries.values())e.texture?.destroy(),eh(e.blurTargetChain),e.html.host.remove();for(let e of(this.sceneHtmlEntries.clear(),this.sceneHtmlHosts.clear(),this.glassContentEntries.values()))e.sourceTexture?.destroy(),eh(e.blurTargetChain),e.html.host.remove();this.glassContentEntries.clear(),this.glassContentRanges.clear(),this.glassContentOrder=[],this.glassContentHosts.clear(),this.glassContentAtlas?.destroy(),this.glassContentAtlas=null,this.glassContentAtlasWidth=0,this.glassContentAtlasHeight=0,this.contentEntriesBuffer?.destroy(),this.contentEntriesBuffer=null,er(this.htmlBlurResources),this.htmlBlurResources=null,this.sampler=null}handlePaintEvent(e){if(!this.device)return;let t=e.changedElements,i=Array.isArray(t),n=this.needsSceneHtmlCopy||!i||ev(t,this.sceneHtmlHosts),r=this.needsContentCopy||!i||ev(t,this.glassContentHosts);n&&this.copySceneHtmlTextures(),this.needsSceneHtmlFilter&&this.filterSceneHtmlTextures(),r&&this.copyGlassContentAtlas(),this.needsContentFilter&&this.filterGlassContentAtlas()}copyPending(){this.needsSceneHtmlCopy&&this.copySceneHtmlTextures(),this.needsSceneHtmlFilter&&this.filterSceneHtmlTextures(),this.needsContentCopy&&this.copyGlassContentAtlas(),this.needsContentFilter&&this.filterGlassContentAtlas()}sync(e,t,i){this.syncSceneHtml(e,i),this.syncGlassContent(t,i),function(e,t){let i=[...t.entries()].sort((e,t)=>e[1]-t[1]).map(([e])=>e.host).filter(t=>t.parentElement===e),n=new Set(i),r=Array.from(e.children).filter(e=>n.has(e));if(!(r.length===i.length&&r.every((e,t)=>e===i[t])))for(let t of i)e.append(t)}(this.options.targetCanvas,i)}getSceneHtmlEntry(e){return this.sceneHtmlEntries.get(e)??null}getGlassContentRange(e){return this.glassContentRanges.get(e)??null}removeSceneHtmlEntry(e,t){let i=this.sceneHtmlEntries.get(e);i&&(i.texture?.destroy(),eh(i.blurTargetChain),this.sceneHtmlHosts.delete(e.host),this.sceneHtmlEntries.delete(e),t||e.host.remove())}removeGlassContentEntry(e,t){let i=this.glassContentEntries.get(e);i&&(i.sourceTexture?.destroy(),eh(i.blurTargetChain),this.glassContentHosts.delete(e.host),this.glassContentEntries.delete(e),t||e.host.remove())}syncSceneHtml(e,t){let i=new Set,n=!1,r=!1,s=this.options.getCurrentDpr();for(let l of e){if(!(l.child instanceof v)||l.child.width<=0||l.child.height<=0)continue;let e=l.child;i.add(e);let h=this.sceneHtmlEntries.get(e);h||(h={html:e,texture:null,filteredTexture:null,elementVersion:-1,blur:-1,width:-1,height:-1,deviceWidth:0,deviceHeight:0,copiedDeviceWidth:0,copiedDeviceHeight:0,textureWidth:0,textureHeight:0,blurTargetChain:null,transform:l.transform,inverseTransform:null},this.sceneHtmlEntries.set(e,h),n=!0,r=!0),h.transform=l.transform,h.inverseTransform=a(o(l.transform,s)),h.elementVersion!==e._elementVersion&&(h.elementVersion=e._elementVersion,r=!0),h.blur!==e.blur&&(h.blur=e.blur,this.needsSceneHtmlFilter=!0);let c=h.deviceWidth,d=h.deviceHeight,u=Math.max(1,Math.round(e.width*s)),p=Math.max(1,Math.round(e.height*s)),g=h.textureWidth,f=h.textureHeight,m=!1;this.device&&(g=P(u,this.device.limits.maxTextureDimension2D),f=P(p,this.device.limits.maxTextureDimension2D),m=h.textureWidth!==g||h.textureHeight!==f);let y=h.deviceWidth!==u||h.deviceHeight!==p;if((h.width!==e.width||h.height!==e.height||y)&&(h.width=e.width,h.height=e.height,h.deviceWidth=u,h.deviceHeight=p,n=!0,r=!0),this.device&&this.presentationFormat&&(!h.texture||m)){let e=h.texture,t=this.device.createTexture({size:{width:g,height:f,depthOrArrayLayers:1},format:this.presentationFormat,usage:23});if(e){let i=this.device.createCommandEncoder(),n=Math.min(h.copiedDeviceWidth,c,g),r=Math.min(h.copiedDeviceHeight,d,f);ed(i,e,t,{sourceX:0,sourceY:0,destinationX:0,destinationY:0,width:n,height:r})&&this.device.queue.submit([i.finish()]),h.copiedDeviceWidth=n,h.copiedDeviceHeight=r}else h.copiedDeviceWidth=0,h.copiedDeviceHeight=0;e?.destroy(),eh(h.blurTargetChain),h.texture=t,h.filteredTexture=null,h.blurTargetChain=null,h.textureWidth=g,h.textureHeight=f,n=!0,r=!0}h.texture&&(this.sceneHtmlHosts.add(e.host),ey(e.host,this.options.targetCanvas,eu(l.transform),String(t.get(e)??0)))}for(let e of[...this.sceneHtmlEntries.keys()])i.has(e)||(this.removeSceneHtmlEntry(e,t.has(e)),n=!0,r=!0);if(0===i.size){this.needsSceneHtmlCopy=!1,this.needsSceneHtmlFilter=!1;return}(n||r)&&(this.needsSceneHtmlCopy=!0)}syncGlassContent(e,t){let i=new Set,n=[],s=new Map,o=this.glassContentAtlas,l=new Map,h=this.options.getCurrentDpr(),c=!1,d=!1;if(o)for(let e of this.glassContentEntries.values())l.set(e.html,{copiedDeviceWidth:e.copiedDeviceWidth,copiedDeviceHeight:e.copiedDeviceHeight,atlasX:e.atlasX,atlasY:e.atlasY});for(let o of e){let e=o.transform;for(let l of C(o.container)){let o=l.glass;if(o.width<=0||o.height<=0)continue;let u=r(e,l.transform),p=n.length;for(let e of em(o)){let s=e.html;if(s.width<=0||s.height<=0)continue;let l=a(e.transform);if(this.glassContentHosts.add(s.host),ey(s.host,this.options.targetCanvas,eu(r(u,e.transform)),String(t.get(s)??0)),!l)continue;i.add(s);let p=this.glassContentEntries.get(s);p||(p={html:s,glass:o,elementVersion:-1,blur:-1,width:-1,height:-1,deviceWidth:0,deviceHeight:0,copiedDeviceWidth:0,copiedDeviceHeight:0,sourceTexture:null,sourceTextureWidth:0,sourceTextureHeight:0,filteredTexture:null,blurTargetChain:null,atlasX:0,atlasY:0,inverseTransform:l},this.glassContentEntries.set(s,p),c=!0,d=!0),p.glass!==o&&(p.glass=o,c=!0),p.inverseTransform=l,p.elementVersion!==s._elementVersion&&(p.elementVersion=s._elementVersion,d=!0);let g=Math.max(1,Math.round(s.width*h)),f=Math.max(1,Math.round(s.height*h)),m=p.sourceTextureWidth,v=p.sourceTextureHeight,y=!1;this.device&&(m=P(g,this.device.limits.maxTextureDimension2D),v=P(f,this.device.limits.maxTextureDimension2D),y=p.sourceTextureWidth!==m||p.sourceTextureHeight!==v),(p.width!==s.width||p.height!==s.height||p.deviceWidth!==g||p.deviceHeight!==f)&&(p.width=s.width,p.height=s.height,p.deviceWidth=g,p.deviceHeight=f,c=!0,d=!0),p.blur!==s.blur&&(p.blur=s.blur,this.needsContentFilter=!0),this.device&&this.presentationFormat&&(!p.sourceTexture||y)&&(p.sourceTexture?.destroy(),eh(p.blurTargetChain),p.sourceTexture=eo(this.device,this.presentationFormat,m,v),p.sourceTextureWidth=m,p.sourceTextureHeight=v,p.filteredTexture=null,p.blurTargetChain=null,p.copiedDeviceWidth=0,p.copiedDeviceHeight=0,d=!0),n.push(p)}let g=n.length-p;g>0&&s.set(o,{start:p,count:g})}}for(let e of[...this.glassContentEntries.keys()])i.has(e)||(this.removeGlassContentEntry(e,t.has(e)),c=!0,d=!0);for(let[e,t]of(this.glassContentOrder=n,this.glassContentRanges.clear(),s))this.glassContentRanges.set(e,t);if(!this.device){this.needsContentCopy=!1;return}if(0===n.length){this.glassContentAtlas?.destroy(),this.glassContentAtlas=null,this.glassContentAtlasWidth=0,this.glassContentAtlasHeight=0,this.needsContentCopy=!1,this.needsContentFilter=!1;return}if(c||!this.glassContentAtlas){let e=function(e,t){if(0===e.length)throw Error("Cannot build a glass content atlas without any content entries.");let i=1;for(let t of e)i=Math.max(i,P(t.deviceWidth)+2);let n=E(i);for(;n<=t;){let i=function(e,t){let i=new Map,n=0,r=0,s=0;for(let a of e){let e=P(a.deviceWidth)+2,o=P(a.deviceHeight)+2;if(e>t)return null;n>0&&n+e>t&&(n=0,r+=s,s=0),i.set(a.html,{x:n,y:r}),n+=e,s=Math.max(s,o)}return{width:t,height:r+s,rects:i}}(e,n);if(i){let e=E(i.height);if(e<=t)return{...i,height:e}}n*=2}throw Error("Glass content atlas exceeds the maximum supported texture size.")}(n,this.device.limits.maxTextureDimension2D),t=e.width,i=e.height,r=this.glassContentAtlasWidth,s=this.glassContentAtlasHeight;if(!this.glassContentAtlas||t!==this.glassContentAtlasWidth||i!==this.glassContentAtlasHeight||n.some(t=>{let i=e.rects.get(t.html);return t.atlasX!==i.x||t.atlasY!==i.y})){let a=this.device.createTexture({size:{width:t,height:i,depthOrArrayLayers:1},format:this.presentationFormat??"bgra8unorm",usage:23});if(o){let h=this.device.createCommandEncoder(),c=!1;for(let d of n){let n=l.get(d.html),u=e.rects.get(d.html);if(!n){d.copiedDeviceWidth=0,d.copiedDeviceHeight=0;continue}let p=n.atlasX+1,g=n.atlasY+1,f=u.x+1,m=u.y+1,v=Math.min(n.copiedDeviceWidth,r-p,t-f),y=Math.min(n.copiedDeviceHeight,s-g,i-m);c=ed(h,o,a,{sourceX:p,sourceY:g,destinationX:f,destinationY:m,width:v,height:y})||c,d.copiedDeviceWidth=Math.max(0,v),d.copiedDeviceHeight=Math.max(0,y)}c&&this.device.queue.submit([h.finish()])}else for(let e of n)e.copiedDeviceWidth=0,e.copiedDeviceHeight=0;o?.destroy(),this.glassContentAtlas=a,this.glassContentAtlasWidth=t,this.glassContentAtlasHeight=i}for(let t of n){let i=e.rects.get(t.html);t.atlasX=i.x,t.atlasY=i.y}this.needsContentCopy=!0,this.needsContentFilter=!0}else d&&(this.needsContentCopy=!0);this.writeContentEntries(n)}writeContentEntries(e){if(this.contentEntriesBuffer){this.contentEntriesBuffer.ensureCapacity(e.length);for(let t=0;t<e.length;t+=1){let i=e[t],n=i.inverseTransform;this.contentEntriesBuffer.writeAt(t,{inverse0:{a:n.a,c:n.c,e:n.e,copiedWidth:ex(i.copiedDeviceWidth,i.deviceWidth,i.width)},inverse1:{b:n.b,d:n.d,f:n.f,copiedHeight:ex(i.copiedDeviceHeight,i.deviceHeight,i.height)},atlasRect:{u:(i.atlasX+1)/this.glassContentAtlasWidth,v:(i.atlasY+1)/this.glassContentAtlasHeight,uScale:eb(i.deviceWidth,i.width,this.glassContentAtlasWidth),vScale:eb(i.deviceHeight,i.height,this.glassContentAtlasHeight)},opacity:{value:i.html.opacity}})}this.contentEntriesBuffer.upload(e.length)}}copySceneHtmlTextures(){if(!this.device||0===this.sceneHtmlEntries.size)return this.needsSceneHtmlCopy=!1,!0;let e=!0,t=!1;for(let i of this.sceneHtmlEntries.values()){if(!i.texture){e=!1;continue}try{this.device.queue.copyElementImageToTexture(i.html.host,i.deviceWidth,i.deviceHeight,{texture:i.texture}),i.copiedDeviceWidth=i.deviceWidth,i.copiedDeviceHeight=i.deviceHeight,t=!0}catch(t){e=!1,t instanceof DOMException&&"InvalidStateError"===t.name||console.error(t)}}return t&&(this.needsSceneHtmlFilter=!0),this.needsSceneHtmlCopy=!e,e}filterSceneHtmlTextures(){if(!this.device||!this.sampler||!this.htmlBlurResources)return this.needsSceneHtmlFilter=!1,!0;let e=this.device.createCommandEncoder(),t=!1;for(let i of this.sceneHtmlEntries.values()){if(i.filteredTexture=null,!i.texture||i.copiedDeviceWidth<=0||i.copiedDeviceHeight<=0)continue;let n=i.html.blur*this.options.getCurrentDpr();n<=0||(i.blurTargetChain&&i.blurTargetChain.levels[0]?.width===i.textureWidth&&i.blurTargetChain.levels[0]?.height===i.textureHeight||(eh(i.blurTargetChain),i.blurTargetChain=el(this.device,this.presentationFormat??"bgra8unorm",i.textureWidth,i.textureHeight)),i.filteredTexture=es({device:this.device,sampler:this.sampler,encoder:e,source:i.texture,radiusPx:n,chain:i.blurTargetChain,resources:this.htmlBlurResources}),t=!0)}return t&&this.device.queue.submit([e.finish()]),this.needsSceneHtmlFilter=!1,!0}copyGlassContentAtlas(){if(!this.device||0===this.glassContentOrder.length)return this.needsContentCopy=!1,!0;let e=!0,t=!1;for(let i of this.glassContentOrder){if(!i.sourceTexture){e=!1;continue}try{this.device.queue.copyElementImageToTexture(i.html.host,i.deviceWidth,i.deviceHeight,{texture:i.sourceTexture}),i.copiedDeviceWidth=i.deviceWidth,i.copiedDeviceHeight=i.deviceHeight,t=!0}catch(t){e=!1,t instanceof DOMException&&"InvalidStateError"===t.name||console.error(t)}}return t&&(this.needsContentFilter=!0),this.needsContentCopy=!e,e}filterGlassContentAtlas(){if(!this.device||!this.sampler||!this.htmlBlurResources||!this.glassContentAtlas||0===this.glassContentOrder.length)return this.needsContentFilter=!1,!0;let e=this.device.createCommandEncoder(),t=!1;for(let i of this.glassContentOrder){if(!i.sourceTexture||i.copiedDeviceWidth<=0||i.copiedDeviceHeight<=0)continue;let n=i.sourceTexture,r=i.html.blur*this.options.getCurrentDpr();i.filteredTexture=null,r>0&&(i.blurTargetChain&&i.blurTargetChain.levels[0]?.width===i.sourceTextureWidth&&i.blurTargetChain.levels[0]?.height===i.sourceTextureHeight||(eh(i.blurTargetChain),i.blurTargetChain=el(this.device,this.presentationFormat??"bgra8unorm",i.sourceTextureWidth,i.sourceTextureHeight)),i.filteredTexture=es({device:this.device,sampler:this.sampler,encoder:e,source:i.sourceTexture,radiusPx:r,chain:i.blurTargetChain,resources:this.htmlBlurResources}),n=i.filteredTexture),t=ed(e,n,this.glassContentAtlas,{sourceX:0,sourceY:0,destinationX:i.atlasX+1,destinationY:i.atlasY+1,width:i.copiedDeviceWidth,height:i.copiedDeviceHeight})||t}return t&&(this.writeContentEntries(this.glassContentOrder),this.device.queue.submit([e.finish()])),this.needsContentFilter=!1,!0}};function eS(e,t){let i=e.composedPath();for(let e of t)if(i.includes(e))return!0;return!1}var eC=class{constructor(e){this.options=e}options;glassInteractionEntries=new Map;glassInteractionOrder=[];pointerStates=new Map;handlePointerMove=e=>{this.handleNativePointerEvent("pointermove",e)};handlePointerDown=e=>{this.handleNativePointerEvent("pointerdown",e)};handlePointerUp=e=>{this.handleNativePointerEvent("pointerup",e)};handlePointerCancel=e=>{this.handleNativePointerEvent("pointercancel",e)};handlePointerLeave=e=>{this.isTargetCanvasLeave(e)&&this.handleNativePointerEvent("pointerleave",e)};syncInteractions(e){let t=this.glassInteractionEntries,{entriesByGlass:i,orderedEntries:n}=function(e){let t=new Map,i=[];for(let n=0;n<e.length;n+=1){let s=e[n];for(let e of C(s.container)){let o=e.glass;if(!o.pointerEvents||o.width<=0||o.height<=0)continue;let l=r(s.transform,e.transform),h=a(l);if(!h)continue;let c={glass:o,container:s.container,containerOrder:n,glassOrder:e.traversalIndex,transform:l,inverseTransform:h,halfWidth:.5*o.width,halfHeight:.5*o.height,cornerRadius:o.cornerRadius,cornerSmoothing:o.cornerSmoothing};t.set(o,c),i.push(c)}}return i.sort((e,t)=>e.containerOrder-t.containerOrder||e.glassOrder-t.glassOrder),{entriesByGlass:t,orderedEntries:i}}(e);this.glassInteractionEntries=i,this.glassInteractionOrder=n,this.handleRemovedInteractionTargets(t)}clear(){this.glassInteractionEntries.clear(),this.glassInteractionOrder=[],this.pointerStates.clear()}getPointerState(e){let t=this.pointerStates.get(e);return t||(t={hoveredGlass:null,capturedGlass:null,capturedWithNativePointerCapture:!1,pressedGlass:null,lastSnapshot:null},this.pointerStates.set(e,t)),t}createPointerSnapshot(e){let t=this.options.targetCanvas.getBoundingClientRect();return{nativeEvent:e,canvasX:e.clientX-t.left,canvasY:e.clientY-t.top}}isTargetCanvasLeave(e){if(e.target!==this.options.targetCanvas)return!1;let t=e.relatedTarget;return!(t instanceof Node&&this.options.targetCanvas.contains(t))}dispatchGlassPointerEvent(e,t,i,n,r){let s=i?ep(i,n.canvasX,n.canvasY):{localX:0,localY:0},a=new M(e,{glass:t,renderer:this.options.renderer,nativeEvent:n.nativeEvent,canvasX:n.canvasX,canvasY:n.canvasY,localX:s.localX,localY:s.localY,inside:r});t.dispatchEvent(a),a.defaultPrevented&&n.nativeEvent.preventDefault()}updateHoveredGlass(e,t,i){let n=e.hoveredGlass,r=t?.glass??null;if(n!==r){if(n){let e=this.glassInteractionEntries.get(n)??null;this.dispatchGlassPointerEvent("pointerleave",n,e,i,!1)}e.hoveredGlass=r,t&&this.dispatchGlassPointerEvent("pointerenter",t.glass,t,i,!0)}}releaseNativePointerCapture(e){if(this.options.targetCanvas.hasPointerCapture(e))try{this.options.targetCanvas.releasePointerCapture(e)}catch{}}cleanupPointerState(e,t){t.hoveredGlass||t.capturedGlass||t.pressedGlass||this.pointerStates.delete(e)}finishPointerEvent(e,t){this.options.flushSceneContentSync(),this.cleanupPointerState(e,t)}handleRemovedInteractionTargets(e){for(let[t,i]of this.pointerStates){let n=i.lastSnapshot,r=i.capturedGlass;if(r&&!this.glassInteractionEntries.has(r)){let s=e.get(r)??null;n&&this.dispatchGlassPointerEvent("pointercancel",r,s,n,!1),i.capturedGlass=null,i.capturedWithNativePointerCapture=!1,i.pressedGlass=null,this.releaseNativePointerCapture(t)}let s=i.hoveredGlass;if(s&&!this.glassInteractionEntries.has(s)){let t=e.get(s)??null;n&&this.dispatchGlassPointerEvent("pointerleave",s,t,n,!1),i.hoveredGlass=null}!i.capturedGlass&&n&&this.updateHoveredGlass(i,eg(this.glassInteractionOrder,n.canvasX,n.canvasY),n),this.cleanupPointerState(t,i)}}handleNativePointerEvent(e,t){if(this.options.isDestroyed())return;this.options.flushSceneContentSync();let i=this.getPointerState(t.pointerId),n=this.createPointerSnapshot(t);i.lastSnapshot=n;let r=i.capturedGlass?this.glassInteractionEntries.get(i.capturedGlass)??null:null;if(r){if("pointerleave"===e){i.capturedWithNativePointerCapture||(this.dispatchGlassPointerEvent("pointercancel",r.glass,r,n,!1),i.capturedGlass=null,i.capturedWithNativePointerCapture=!1,i.pressedGlass=null,this.updateHoveredGlass(i,null,n),this.cleanupPointerState(t.pointerId,i));return}let s=ep(r,n.canvasX,n.canvasY);this.dispatchGlassPointerEvent(e,r.glass,r,n,s.inside),("pointerup"===e||"pointercancel"===e)&&("pointerup"===e&&0===t.button&&i.pressedGlass===r.glass&&s.inside&&this.dispatchGlassPointerEvent("click",r.glass,r,n,!0),i.capturedGlass=null,i.capturedWithNativePointerCapture=!1,i.pressedGlass=null,this.releaseNativePointerCapture(t.pointerId),this.updateHoveredGlass(i,eg(this.glassInteractionOrder,n.canvasX,n.canvasY),n)),this.finishPointerEvent(t.pointerId,i);return}if("pointerleave"===e){if(i.hoveredGlass){let e=this.glassInteractionEntries.get(i.hoveredGlass)??null;this.dispatchGlassPointerEvent("pointerleave",i.hoveredGlass,e,n,!1),i.hoveredGlass=null}this.finishPointerEvent(t.pointerId,i);return}let s=eg(this.glassInteractionOrder,n.canvasX,n.canvasY);if(this.updateHoveredGlass(i,s,n),s&&(this.dispatchGlassPointerEvent(e,s.glass,s,n,!0),"pointerdown"===e&&(i.pressedGlass=s.glass,this.options.flushSceneContentSync(),this.glassInteractionEntries.has(s.glass)))&&(i.capturedGlass=s.glass,i.capturedWithNativePointerCapture=!1,!eS(t,this.options.getSceneHtmlHosts())&&!eS(t,this.options.getGlassContentHosts())))try{this.options.targetCanvas.setPointerCapture(t.pointerId),i.capturedWithNativePointerCapture=!0}catch{i.capturedGlass=null,i.pressedGlass=null}this.finishPointerEvent(t.pointerId,i)}};function e_(e,t,i){e.minX=Math.min(e.minX,t),e.minY=Math.min(e.minY,i),e.maxX=Math.max(e.maxX,t),e.maxY=Math.max(e.maxY,i)}function eM(e,t){if(0===e.length)return 0;if(1===e.length)return e[0];let i=Math.min(Math.max((e.length-1)*t,0),e.length-1),n=Math.floor(i),r=Math.ceil(i);return e[n]+(e[r]-e[n])*(i-n)}var eE=class{constructor(e){this.isDestroyed=e}isDestroyed;device=null;stateByContainer=new WeakMap;trackedContainers=new Set;pendingStates=new Set;setDevice(e){for(let t of(this.device=e,this.trackedContainers)){let e=this.stateByContainer.get(t);e&&this.ensureResources(e)}}setTracking(e,t){if(t){let t=this.getOrCreateState(e);t.cleanupAfterPending=!1,this.trackedContainers.add(e),this.ensureResources(t);return}this.trackedContainers.delete(e);let i=this.stateByContainer.get(e);if(i){if(i.metrics=null,i.inScene=!1,i.pendingReadback){i.cleanupAfterPending=!0;return}this.cleanupState(i)}}getMetrics(e){if(!this.trackedContainers.has(e))return null;let t=this.stateByContainer.get(e);return t&&t.inScene?t.metrics:null}getTrackedState(e){return this.trackedContainers.has(e)?this.getOrCreateState(e):null}ensureResources(e){this.device&&!e.readbackBuffer&&(e.readbackBuffer=this.device.createBuffer({size:8192,usage:9}))}markSceneMembership(e){for(let t of this.trackedContainers){let i=this.stateByContainer.get(t);i&&(i.inScene=e.has(t),i.inScene||(i.metrics=null))}}scheduleReadback(e){let t=e.readbackBuffer;t&&!e.pendingReadback&&(e.pendingReadback=!0,this.pendingStates.add(e),t.mapAsync(GPUMapMode.READ).then(()=>{if(this.isDestroyed()||!this.trackedContainers.has(e.container)||!e.inScene){e.metrics=null;return}let i=function(e){let t=new Uint8Array(e.getMappedRange()),i=[],n=0,r=0,s=0;for(let e=0;e<32;e+=1){let a=256*e;for(let e=0;e<32;e+=1){let o=a+4*e;if(t[o+3]/255<=.5)continue;let l=t[o]/255,h=t[o+1]/255,c=t[o+2]/255,d=.2126*l+.7152*h+.0722*c;n+=l,r+=h,s+=c,i.push(d)}}if(0===i.length)return null;i.sort((e,t)=>e-t);let a=i.length;return{averageLinearColor:{r:n/a,g:r/a,b:s/a},averageLuminance:i.reduce((e,t)=>e+t,0)/a,luminanceP10:eM(i,.1),luminanceP50:eM(i,.5),luminanceP90:eM(i,.9)}}(t);if(!i){e.metrics=null;return}e.metrics=i}).catch(t=>{this.isDestroyed()||e.cleanupAfterPending||console.error(t),e.metrics=null}).finally(()=>{"mapped"===t.mapState&&t.unmap(),e.pendingReadback=!1,this.pendingStates.delete(e),(this.isDestroyed()||e.cleanupAfterPending)&&this.cleanupState(e)}))}destroy(){for(let e of this.trackedContainers){let t=this.stateByContainer.get(e);t&&(t.pendingReadback?t.cleanupAfterPending=!0:this.cleanupState(t))}for(let e of(this.trackedContainers.clear(),this.pendingStates))e.cleanupAfterPending=!0}getOrCreateState(e){let t=this.stateByContainer.get(e);return t||(t={container:e,readbackBuffer:null,metrics:null,pendingReadback:!1,inScene:!1,cleanupAfterPending:!1},this.stateByContainer.set(e,t)),t}cleanupState(e){if(e.pendingReadback){e.cleanupAfterPending=!0;return}e.metrics=null,e.inScene=!1,e.cleanupAfterPending=!1,this.pendingStates.delete(e),e.readbackBuffer?.destroy(),e.readbackBuffer=null}},eP="rgba16float",eR="rgba8unorm",eD=class{backdropMetrics=new eE(()=>this.destroyed);destroyed=!1;currentDpr=1;width=1;height=1;contentSource=null;device;format;globalsBuffer;shapesBuffer=null;backdropMetricsBoundsBuffer;htmlCompositeParamsBuffer;emptyContentEntriesBuffer;sampler;backdropBlurResources;displacementBlurResources;shadowBlurResources;displacementFieldPipeline;shadowMaskPipeline;shadowCompositePipeline;glassPipeline;htmlCompositePipeline;backdropMetricsPipeline;blitPipeline;targets=null;backdropMetricsTarget;constructor({device:e,format:t}){this.device=e,this.format=t,this.sampler=e.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});const i=72;this.globalsBuffer=new B(e,z,i),this.backdropMetricsBoundsBuffer=new B(e,L,i),this.htmlCompositeParamsBuffer=new B(e,O,i),this.emptyContentEntriesBuffer=new k(e,H,136),this.emptyContentEntriesBuffer.ensureCapacity(0),this.backdropBlurResources=en(e,t),this.displacementBlurResources=en(e,eP),this.shadowBlurResources=en(e,eR),this.displacementFieldPipeline=e.createRenderPipeline({layout:"auto",vertex:{module:e.createShaderModule({code:U}),entryPoint:"vertexMain"},fragment:{module:e.createShaderModule({code:U}),entryPoint:"fragmentMain",targets:[{format:eP}]},primitive:{topology:"triangle-list"}}),this.glassPipeline=e.createRenderPipeline({layout:"auto",vertex:{module:e.createShaderModule({code:q}),entryPoint:"vertexMain"},fragment:{module:e.createShaderModule({code:q}),entryPoint:"fragmentMain",targets:[{format:t}]},primitive:{topology:"triangle-list"}}),this.shadowMaskPipeline=e.createRenderPipeline({layout:"auto",vertex:{module:e.createShaderModule({code:V}),entryPoint:"vertexMain"},fragment:{module:e.createShaderModule({code:V}),entryPoint:"fragmentMain",targets:[{format:eR}]},primitive:{topology:"triangle-list"}}),this.shadowCompositePipeline=e.createRenderPipeline({layout:"auto",vertex:{module:e.createShaderModule({code:j}),entryPoint:"vertexMain"},fragment:{module:e.createShaderModule({code:j}),entryPoint:"fragmentMain",targets:[{format:t}]},primitive:{topology:"triangle-list"}}),this.htmlCompositePipeline=e.createRenderPipeline({layout:"auto",vertex:{module:e.createShaderModule({code:K}),entryPoint:"vertexMain"},fragment:{module:e.createShaderModule({code:K}),entryPoint:"fragmentMain",targets:[{format:t}]},primitive:{topology:"triangle-list"}}),this.backdropMetricsPipeline=e.createRenderPipeline({layout:"auto",vertex:{module:e.createShaderModule({code:$}),entryPoint:"vertexMain"},fragment:{module:e.createShaderModule({code:$}),entryPoint:"fragmentMain",targets:[{format:"rgba8unorm"}]},primitive:{topology:"triangle-list"}}),this.blitPipeline=e.createRenderPipeline({layout:"auto",vertex:{module:e.createShaderModule({code:G}),entryPoint:"vertexMain"},fragment:{module:e.createShaderModule({code:G}),entryPoint:"fragmentMain",targets:[{format:t}]},primitive:{topology:"triangle-list"}}),this.backdropMetricsTarget=e.createTexture({size:{width:32,height:32,depthOrArrayLayers:1},format:"rgba8unorm",usage:17}),this.backdropMetrics.setDevice(e)}setBackdropMetricsTracking(e,t){this.backdropMetrics.setTracking(e,t)}getBackdropMetrics(e){return this.backdropMetrics.getMetrics(e)}render(e){if(this.destroyed)return;this.width=Math.max(1,Math.floor(e.width)),this.height=Math.max(1,Math.floor(e.height)),this.currentDpr=Math.max(e.dpr,1e-4),this.contentSource=e.contentSource??null,this.syncTargets();let t=e.layers??(e.scene?ef(e.scene):[]);try{this.drawFrame(t,e.outputTexture,e.backdropTexture??null)}finally{this.contentSource=null}}destroy(){this.destroyed||(this.destroyed=!0,ec(this.targets),this.targets=null,this.backdropMetricsTarget.destroy(),this.globalsBuffer.destroy(),this.shapesBuffer?.destroy(),this.emptyContentEntriesBuffer.destroy(),er(this.backdropBlurResources),er(this.displacementBlurResources),er(this.shadowBlurResources),this.backdropMetricsBoundsBuffer.destroy(),this.htmlCompositeParamsBuffer.destroy(),this.backdropMetrics.destroy())}syncTargets(){this.targets&&this.targets.backdropBlur.levels[0]?.width===this.width&&this.targets.backdropBlur.levels[0]?.height===this.height||(ec(this.targets),this.targets={backdropBlur:el(this.device,this.format,this.width,this.height),displacementBlur:el(this.device,eP,this.width,this.height),shadowBlur:el(this.device,eR,this.width,this.height),sceneA:eo(this.device,this.format,this.width,this.height),sceneB:eo(this.device,this.format,this.width,this.height)})}ensureShapesBuffer(e){this.shapesBuffer||(this.shapesBuffer=new k(this.device,I,136)),this.shapesBuffer.ensureCapacity(e)}writeGlobals(e,t){var i,n;let r=this.currentDpr;this.globalsBuffer.write({canvas:{width:this.width,height:this.height},container:{opacity:e.opacity},shape:{smoothing:e.spacing*r,bezelWidth:e.bezelWidth*r,shapeCount:t,surfaceProfile:"convex"===(i=e.surfaceProfile)?0:"concave"===i?1:2},sdf:{normalDivergenceBlendPower:e.normalDivergenceBlendPower,normalDivergenceBlendEnabled:+!!e.normalDivergenceBlendEnabled},glass:{thickness:e.thickness*r,displacementFactor:e.displacementFactor,ior:e.ior,dispersion:e.dispersion},content:{ior:e.contentIor,depth:e.contentDepth*r},lighting:{x:Math.sin(e.lightDirection),y:-Math.cos(e.lightDirection)},specular:{strength:e.specularStrength,width:(n=e.specularWidth,"hairline"===n?1:n*r),sharpness:e.specularSharpness,opacity:e.specularOpacity},specularSecondary:{oppositeStrength:e.oppositeSpecularStrength,falloff:e.specularFalloff,reflectionOffset:e.reflectionOffset*r},tint:{r:e.tint.r,g:e.tint.g,b:e.tint.b,a:e.tint.a},shadow:{offsetX:e.shadowOffsetX*r,offsetY:e.shadowOffsetY*r,spread:e.shadowSpread*r,blur:e.shadowBlur*r},shadowColor:{r:e.shadowColor.r,g:e.shadowColor.g,b:e.shadowColor.b,a:e.shadowColor.a},debug:{displacement:+!!e.debugDisplacement}})}writeBackdropMetricsBounds(e){this.backdropMetricsBoundsBuffer.write({bounds:{minX:e.minX,minY:e.minY,maxX:e.maxX,maxY:e.maxY}})}packShapes(e,t){let i=this.currentDpr,n=C(e),s={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0},h=0;this.ensureShapesBuffer(n.length);let c=this.shapesBuffer;for(let e of n){var d;let n=e.glass;if(n.width<=0||n.height<=0)continue;let u=o(r(t,e.transform),i),p=a(u);if(!p)continue;let g=l(u,0,0),f=l(u,n.width,0),m=l(u,0,n.height),v=l(u,n.width,n.height);e_(s,g.x,g.y),e_(s,f.x,f.y),e_(s,m.x,m.y),e_(s,v.x,v.y);let y=this.contentSource?.getGlassContentRange?.(n),x=.5*n.width,b=.5*n.height;c?.writeAt(h,{inverse0:{a:p.a,c:p.c,e:p.e,minimumScale:Math.max(Math.min(Math.hypot((d=u).a,d.b),Math.hypot(d.c,d.d)),1e-4)},inverse1:{b:p.b,d:p.d,f:p.f,cornerRadius:n.cornerRadius},geometry:{halfWidth:x,halfHeight:b,cornerSmoothing:n.cornerSmoothing},contentRange:{start:y?.start??0,count:y?.count??0}}),h+=1}return c?.upload(h),{shapeCount:h,bounds:Number.isFinite(s.minX)&&Number.isFinite(s.minY)&&Number.isFinite(s.maxX)&&Number.isFinite(s.maxY)&&s.maxX>s.minX&&s.maxY>s.minY?s:null}}renderDisplacementField(e,t){if(!this.shapesBuffer?.buffer||!this.targets)return null;let i=this.targets.displacementBlur.levels[0],n=Q(this.device,this.displacementFieldPipeline,[{binding:0,resource:this.globalsBuffer.bindingResource},{binding:1,resource:this.shapesBuffer.bindingResource}]);return ee(e,{pipeline:this.displacementFieldPipeline,bindGroup:n,target:i.ping,clearValue:{r:0,g:0,b:0,a:0}}),es({device:this.device,sampler:this.sampler,encoder:e,source:i.ping,radiusPx:t.displacementBlur*this.currentDpr,chain:this.targets.displacementBlur,resources:this.displacementBlurResources})}renderShadow(e,t,i,n){if(n.opacity<=0||n.shadowColor.a<=0||!this.shapesBuffer?.buffer||!this.targets)return!1;let r=this.targets.shadowBlur.levels[0],s=Q(this.device,this.shadowMaskPipeline,[{binding:0,resource:this.globalsBuffer.bindingResource},{binding:1,resource:this.shapesBuffer.bindingResource}]);ee(e,{pipeline:this.shadowMaskPipeline,bindGroup:s,target:r.ping,clearValue:{r:0,g:0,b:0,a:0}});let a=es({device:this.device,sampler:this.sampler,encoder:e,source:r.ping,radiusPx:n.shadowBlur*this.currentDpr,chain:this.targets.shadowBlur,resources:this.shadowBlurResources}),o=Q(this.device,this.shadowCompositePipeline,[{binding:0,resource:this.sampler},{binding:1,resource:t.createView()},{binding:2,resource:a.createView()},{binding:3,resource:this.globalsBuffer.bindingResource}]);return ee(e,{pipeline:this.shadowCompositePipeline,bindGroup:o,target:i}),!0}shouldRenderShadow(e){return e.opacity>0&&e.shadowColor.a>0&&!!this.shapesBuffer?.buffer&&!!this.targets}renderBackdropMetrics(e,t,i,n){if(!this.shapesBuffer?.buffer||!i||t.pendingReadback)return i||t.pendingReadback||(t.metrics=null),!1;if(this.backdropMetrics.ensureResources(t),!t.readbackBuffer)return!1;this.writeBackdropMetricsBounds(i);let r=Q(this.device,this.backdropMetricsPipeline,[{binding:0,resource:this.globalsBuffer.bindingResource},{binding:1,resource:this.shapesBuffer.bindingResource},{binding:2,resource:this.sampler},{binding:3,resource:n.createView()},{binding:4,resource:this.backdropMetricsBoundsBuffer.bindingResource}]);return ee(e,{pipeline:this.backdropMetricsPipeline,bindGroup:r,target:this.backdropMetricsTarget,clearValue:{r:0,g:0,b:0,a:0}}),e.copyTextureToBuffer({texture:this.backdropMetricsTarget},{buffer:t.readbackBuffer,bytesPerRow:256,rowsPerImage:32},{width:32,height:32,depthOrArrayLayers:1}),!0}renderContainer(e,t,i,n,r){if(!this.shapesBuffer?.buffer)return;let s=this.contentSource?.contentEntriesBindingResource??this.emptyContentEntriesBuffer.bindingResource,a=this.contentSource?.atlasTexture??t,o=Q(this.device,this.glassPipeline,[{binding:0,resource:this.globalsBuffer.bindingResource},{binding:1,resource:this.shapesBuffer.bindingResource},{binding:2,resource:this.sampler},{binding:3,resource:t.createView()},{binding:4,resource:i.createView()},{binding:5,resource:a.createView()},{binding:6,resource:s},{binding:7,resource:n.createView()}]);ee(e,{pipeline:this.glassPipeline,bindGroup:o,target:r})}writeHtmlCompositeParams(e){if(!e.inverseTransform)return;let t=e.inverseTransform;this.htmlCompositeParamsBuffer.write({canvas:{width:this.width,height:this.height,uScale:eb(e.deviceWidth,e.width,e.textureWidth),vScale:eb(e.deviceHeight,e.height,e.textureHeight)},inverse0:{a:t.a,c:t.c,e:t.e,copiedWidth:ex(e.copiedDeviceWidth,e.deviceWidth,e.width)},inverse1:{b:t.b,d:t.d,f:t.f,copiedHeight:ex(e.copiedDeviceHeight,e.deviceHeight,e.height)},opacity:{value:e.html.opacity}})}compositeHtmlLayer(e,t,i,n){if(!n.filteredTexture&&!n.texture||!n.inverseTransform)return;this.writeHtmlCompositeParams(n);let r=Q(this.device,this.htmlCompositePipeline,[{binding:0,resource:this.sampler},{binding:1,resource:t.createView()},{binding:2,resource:(n.filteredTexture??n.texture).createView()},{binding:3,resource:this.htmlCompositeParamsBuffer.bindingResource}]);ee(e,{pipeline:this.htmlCompositePipeline,bindGroup:r,target:i})}blitTexture(e,t,i){let n=Q(this.device,this.blitPipeline,[{binding:0,resource:this.sampler},{binding:1,resource:t.createView()}]);ee(e,{pipeline:this.blitPipeline,bindGroup:n,target:i})}drawFrame(e,t,i){if(this.destroyed||!this.targets)return;let n=new Set,r=new et(this.device,this.targets);for(let t of(i&&this.blitTexture(r.encoder,i,r.current),e)){if(t.child instanceof v){if(t.child.opacity<=0)continue;let e=this.contentSource?.getSceneHtmlEntry?.(t.child);if(!e||!e.texture||!e.inverseTransform)continue;this.compositeHtmlLayer(r.encoder,r.current,r.next,e),r.submitAndSwap();continue}if(t.child.opacity<=0)continue;let e=this.packShapes(t.child,t.transform);this.writeGlobals(t.child,e.shapeCount);let i=t.child.blur*this.currentDpr,s=es({device:this.device,sampler:this.sampler,encoder:r.encoder,source:r.current,radiusPx:i,chain:this.targets.backdropBlur,resources:this.backdropBlurResources});i<=0&&this.shouldRenderShadow(t.child)&&(s=this.targets.backdropBlur.levels[0].pong,this.blitTexture(r.encoder,r.current,s));let a=this.renderDisplacementField(r.encoder,t.child);if(!a)continue;let o=this.backdropMetrics.getTrackedState(t.child),l=!1;o&&(n.add(t.child),l=this.renderBackdropMetrics(r.encoder,o,e.bounds,s)),this.renderShadow(r.encoder,r.current,r.next,t.child)&&r.submitAndSwap(),this.renderContainer(r.encoder,r.current,s,a,r.next),r.submitAndSwap(),o&&l&&this.backdropMetrics.scheduleReadback(o)}this.backdropMetrics.markSceneMembership(n),this.blitTexture(r.encoder,r.current,t),r.submit()}},eN=class{scene;canvas;maxDpr;targetCanvas;domContent;pointerController;unsubscribeSceneMutations=null;initError=null;destroyed=!1;initialized=!1;pendingSceneContentSync=!0;sceneContentSyncQueued=!1;currentDpr=1;resizeObserver=null;device=null;context=null;presentationFormat=null;core=null;canvasConfigured=!1;lastFrameTexture=null;handlePaintEvent=e=>{!this.destroyed&&this.core&&this.domContent.handlePaintEvent(e)};handleSceneMutation=()=>{this.queueSceneContentSync()};constructor(e={}){this.scene=e.scene??new S,this.maxDpr=e.maxDpr??2,this.targetCanvas=document.createElement("canvas"),this.targetCanvas.setAttribute("layoutsubtree","true"),this.targetCanvas.style.display="block",this.domContent=new ew({targetCanvas:this.targetCanvas,getCurrentDpr:()=>this.currentDpr}),this.pointerController=new eC({targetCanvas:this.targetCanvas,renderer:this,isDestroyed:()=>this.destroyed,flushSceneContentSync:()=>this.flushSceneContentSync(),getSceneHtmlHosts:()=>this.domContent.sceneHtmlHosts,getGlassContentHosts:()=>this.domContent.glassContentHosts}),this.targetCanvas.addEventListener("paint",this.handlePaintEvent),this.targetCanvas.addEventListener("pointermove",this.pointerController.handlePointerMove,!0),this.targetCanvas.addEventListener("pointerdown",this.pointerController.handlePointerDown,!0),this.targetCanvas.addEventListener("pointerup",this.pointerController.handlePointerUp,!0),this.targetCanvas.addEventListener("pointercancel",this.pointerController.handlePointerCancel,!0),this.targetCanvas.addEventListener("pointerleave",this.pointerController.handlePointerLeave,!0),this.unsubscribeSceneMutations=this.scene._subscribe(this.handleSceneMutation),this.canvas=this.targetCanvas,this.initialize().catch(e=>{this.initError=e,console.error(e)})}setBackdropMetricsTracking(e,t){this.core?.setBackdropMetricsTracking(e,t)}getBackdropMetrics(e){return this.core?.getBackdropMetrics(e)??null}render(){if(this.destroyed)return;if(this.initError)throw this.initError;let e=this.syncSceneNow();this.initialized&&this.drawFrame(e)}destroy(){this.destroyed||(this.destroyed=!0,this.targetCanvas.removeEventListener("paint",this.handlePaintEvent),this.targetCanvas.removeEventListener("pointermove",this.pointerController.handlePointerMove,!0),this.targetCanvas.removeEventListener("pointerdown",this.pointerController.handlePointerDown,!0),this.targetCanvas.removeEventListener("pointerup",this.pointerController.handlePointerUp,!0),this.targetCanvas.removeEventListener("pointercancel",this.pointerController.handlePointerCancel,!0),this.targetCanvas.removeEventListener("pointerleave",this.pointerController.handlePointerLeave,!0),this.unsubscribeSceneMutations?.(),this.unsubscribeSceneMutations=null,this.resizeObserver?.disconnect(),this.core?.destroy(),this.core=null,this.lastFrameTexture?.destroy(),this.lastFrameTexture=null,this.domContent.destroy(),this.pointerController.clear())}async initialize(){let e=navigator;if(!e.gpu)throw Error("WebGPU is not available in this browser.");let t=await e.gpu.requestAdapter();if(!t)throw Error("No compatible GPU adapter was returned.");let i=await t.requestDevice(),n=this.targetCanvas.getContext("webgpu");if(!n)throw Error("Unable to acquire a WebGPU canvas context.");let r=e.gpu.getPreferredCanvasFormat();this.device=i,this.context=n,this.presentationFormat=r,this.core=new eD({device:i,format:r}),this.domContent.setDevice(i,r),this.initialized=!0,this.syncCanvasSize(),this.resizeObserver=new ResizeObserver(()=>{this.syncCanvasSize()}),this.resizeObserver.observe(this.targetCanvas),this.queueSceneContentSync()}syncCanvasSize(){if(!this.device||!this.context||!this.presentationFormat)return;let e=this.targetCanvas.getBoundingClientRect(),t=Math.min(window.devicePixelRatio||1,this.maxDpr),i=Math.max(1,Math.round(e.width*t)),n=Math.max(1,Math.round(e.height*t));if(this.currentDpr=t,!this.canvasConfigured||this.targetCanvas.width!==i||this.targetCanvas.height!==n){let e=this.lastFrameTexture,t=this.targetCanvas.width,r=this.targetCanvas.height;this.targetCanvas.width=i,this.targetCanvas.height=n,this.context.configure({device:this.device,format:this.presentationFormat,usage:19,alphaMode:"opaque"}),this.canvasConfigured=!0,this.lastFrameTexture=eo(this.device,this.presentationFormat,i,n),this.preservePreviousFrameAfterResize(e,t,r),e?.destroy()}this.syncSceneNow()}preservePreviousFrameAfterResize(e,t,i){if(!e||!this.device||!this.context||!this.lastFrameTexture||t<=0||i<=0)return;let n=Math.min(t,this.targetCanvas.width),r=Math.min(i,this.targetCanvas.height),s=this.device.createCommandEncoder(),a=this.context.getCurrentTexture(),o={sourceX:0,sourceY:0,destinationX:0,destinationY:0,width:n,height:r};J(s,this.lastFrameTexture),J(s,a),ed(s,e,this.lastFrameTexture,o),ed(s,e,a,o),this.device.queue.submit([s.finish()])}queueSceneContentSync(){this.pendingSceneContentSync=!0,this.sceneContentSyncQueued||this.destroyed||(this.sceneContentSyncQueued=!0,queueMicrotask(()=>{this.sceneContentSyncQueued=!1,!this.destroyed&&this.pendingSceneContentSync&&this.syncSceneNow()}))}syncSceneNow(){let e=ef(this.scene),t=e.filter(e=>e.child instanceof x).map(e=>({container:e.child,transform:e.transform})),i=function(e){let t=new Map,i=1;for(let n of e){if(n.child instanceof v){n.child.width>0&&n.child.height>0&&(t.set(n.child,i),i+=1);continue}for(let e of C(n.child))for(let n of em(e.glass)){let e=n.html;e.width>0&&e.height>0&&(t.set(e,i),i+=1)}}return t}(e);return this.pointerController.syncInteractions(t),this.domContent.sync(e,t,i),this.domContent.copyPending(),this.pendingSceneContentSync=!1,e}flushSceneContentSync(){this.pendingSceneContentSync&&this.syncSceneNow()}drawFrame(e=ef(this.scene)){if(this.destroyed||!this.context||!this.core||!this.device||!this.lastFrameTexture||this.targetCanvas.width<=0||this.targetCanvas.height<=0)return;this.core.render({layers:e,width:this.targetCanvas.width,height:this.targetCanvas.height,dpr:this.currentDpr,outputTexture:this.lastFrameTexture,contentSource:this.domContent});let t=this.device.createCommandEncoder();ed(t,this.lastFrameTexture,this.context.getCurrentTexture(),{sourceX:0,sourceY:0,destinationX:0,destinationY:0,width:this.targetCanvas.width,height:this.targetCanvas.height}),this.device.queue.submit([t.finish()])}},eB=0,ek=class{__liquidDomLayout=!0;id;kind;_parent=null;_children=[];_layout;_measureRevision=0;_subtreeMeasureRevision=0;_structureRevision=0;_disposed=!1;invalidationListeners=new Set;layoutOwners=new Set;isSpacer=!1;constructor(e,t={}){this.id=`node:${++eB}`,this.kind=e,this.isSpacer=t.isSpacer??!1}get parent(){return this._parent}get children(){return this._children}get layout(){return this._layout}get measureRevision(){return this._measureRevision}get subtreeMeasureRevision(){return this._subtreeMeasureRevision}get structureRevision(){return this._structureRevision}get disposed(){return this._disposed}isLayoutActive(){return this.layoutOwners.size>0}append(...e){for(let t of ez(e))this.insertAt(this._children.length,t);return this}prepend(...e){let t=0;for(let i of ez(e))this.insertAt(t,i),t+=1;return this}insertBefore(e,t){let i=eT(t),n=this._children.indexOf(i);if(-1===n)throw Error("insertBefore expected the reference node to be a child of this layout node.");let r=n;for(let t of ez([e]))this.insertAt(r,t),r+=1;return this}replaceChildren(...e){for(let e of this._children)e._parent=null;for(let t of(this._children=[],ez(e)))this.insertAt(this._children.length,t,!1);return this.markStructureDirty("children"),this}remove(){this._parent?.detachChild(this)}dispose(){if(!this._disposed){for(let e of(this.remove(),[...this._children]))e.dispose();this._disposed=!0,this.markStructureDirty("dispose")}}setLayout(e){this._layout=e}placeChildren(e){}getMeasureKey(){}addInvalidationListener(e){return this.invalidationListeners.add(e),()=>{this.invalidationListeners.delete(e)}}markMeasureDirty(e){this._measureRevision+=1,this.markSubtreeMeasureDirty(),this.emitInvalidation("measure",e)}markPlacementDirty(e){this._structureRevision+=1,this.emitInvalidation("placement",e)}activateLayout(e){if(this._disposed||this.layoutOwners.has(e))return;let t=0===this.layoutOwners.size;this.layoutOwners.add(e),t&&this.onLayoutActive()}deactivateLayout(e){this.layoutOwners.delete(e)&&0===this.layoutOwners.size&&this.onLayoutInactive()}onLayoutActive(){}onLayoutInactive(){}emitInvalidation(e,t){let i=void 0===t?{id:this.id,node:this,kind:e}:{id:this.id,node:this,kind:e,cause:t};this.emitInvalidationRecord(i)}emitInvalidationRecord(e){for(let t of this.invalidationListeners)t(e);this._parent?.emitInvalidationRecord(e)}insertAt(e,t,i=!0){let n=eT(t);this.assertCanAdopt(n);let r=Math.max(0,Math.min(e,this._children.length));if(n._parent===this){let e=this._children.indexOf(n);if(-1===e)return;this._children.splice(e,1),e<r&&(r-=1)}else n._parent?.detachChild(n);this._children.splice(r,0,n),n._parent=this,this.markStructureDirty("children",i)}detachChild(e){let t=this._children.indexOf(e);-1!==t&&(this._children.splice(t,1),e._parent=null,this.markStructureDirty("children"))}assertCanAdopt(e){if(e===this)throw Error("A layout node cannot be inserted into itself.");let t=this;for(;t;){if(t===e)throw Error("A layout node cannot be inserted into one of its descendants.");t=t._parent}}markStructureDirty(e,t=!0){this._structureRevision+=1,this._measureRevision+=1,this.markSubtreeMeasureDirty(),t&&this.emitInvalidation("structure",e)}markSubtreeMeasureDirty(){this._subtreeMeasureRevision+=1,this._parent?.markSubtreeMeasureDirty()}};function eT(e){if(e instanceof ek)return e;throw Error("Expected a layout node.")}function ez(e){let t=[];for(let i of e)if(null!==i&&!1!==i&&void 0!==i)if(Array.isArray(i))for(let e of i)null!==e&&!1!==e&&void 0!==e&&t.push(e);else i&&"object"==typeof i&&!0===i.__liquidDomLayout&&t.push(i);return t}function eI(e){return"number"==typeof e&&Number.isFinite(e)}function eH(e){if(void 0!==e)return"infinity"===e?1/0:e}function eL(e){return{width:eq(e.width),height:eq(e.height)}}function eO(e){return{x:eq(e.x),y:eq(e.y),width:Math.max(0,eq(e.width)),height:Math.max(0,eq(e.height))}}function eF(e){let t={};return eI(e.width)&&(t.width=Math.max(0,e.width)),eI(e.height)&&(t.height=Math.max(0,e.height)),t}function eA(e){return{width:e.width,height:e.height}}function eW(e,t,i){let n=e;return void 0!==t&&(n=Math.max(t,n)),void 0!==i&&Number.isFinite(i)&&(n=Math.min(i,n)),eq(n)}function eG(e){if(void 0===e)return{top:0,right:0,bottom:0,left:0};if("number"==typeof e)return{top:e,right:e,bottom:e,left:e};let t=e.horizontal,i=e.vertical;return{top:e.top??i??0,right:e.right??t??0,bottom:e.bottom??i??0,left:e.left??t??0}}function eX(e,t){let i={};return void 0!==e.width&&(i.width=Math.max(0,e.width-t.left-t.right)),void 0!==e.height&&(i.height=Math.max(0,e.height-t.top-t.bottom)),i}function eY(e,t,i){let n=function(e){if(e&&"object"==typeof e)return{x:e.x??"center",y:e.y??"center"};switch(e){case"top":return{x:"center",y:"start"};case"bottom":return{x:"center",y:"end"};case"leading":return{x:"start",y:"center"};case"trailing":return{x:"end",y:"center"};case"topLeading":return{x:"start",y:"start"};case"topTrailing":return{x:"end",y:"start"};case"bottomLeading":return{x:"start",y:"end"};case"bottomTrailing":return{x:"end",y:"end"};case"center":case void 0:return{x:"center",y:"center"}}}(i);return eO({x:t.x+ej(t.width,e.width,n.x),y:t.y+ej(t.height,e.height,n.y),width:e.width,height:e.height})}function eU(e,t,i){switch(i){case"center":return(e-t)/2;case"end":case"trailing":case"bottom":return e-t;case"start":case"leading":case"top":case void 0:return 0}}function eV(e){return void 0===e?"undefined":null===e?"null":"number"==typeof e||"boolean"==typeof e||"string"==typeof e?JSON.stringify(e):Array.isArray(e)?`[${e.map(eV).join(",")}]`:"object"==typeof e?`{${Object.keys(e).sort().map(t=>`${JSON.stringify(t)}:${eV(e[t])}`).join(",")}}`:"function"==typeof e?`[function:${e.name||"anonymous"}]`:String(e)}function ej(e,t,i){switch(i){case"start":return 0;case"center":return(e-t)/2;case"end":return e-t}}function eq(e){return Number.isFinite(e)?e:0}var e$=class extends ek{_measureKey;constructor(e={}){super("leaf"),this._measureKey=e.measureKey}get measureKey(){return this._measureKey}set measureKey(e){Object.is(this._measureKey,e)||(this._measureKey=e,this.markMeasureDirty("measureKey"))}measureSelf(e){return eL(this.measureLeaf(e.proposal))}getMeasureKey(){return this._measureKey}invalidateMeasure(e){this.markMeasureDirty(e)}},eK=class extends ek{_minLength;constructor(e={}){super("spacer",{isSpacer:!0}),this._minLength=e.minLength??0}get minLength(){return this._minLength}set minLength(e){let t=ti(e);this._minLength!==t&&(this._minLength=t,this.markMeasureDirty("minLength"))}measureSelf(){return{width:this._minLength,height:this._minLength}}},eZ=class extends ek{axis;_spacing;_alignment;constructor(e,t={}){super("horizontal"===e?"hstack":"vstack"),this.axis=e,this._spacing=t.spacing??0,this._alignment=t.alignment??"center"}get spacing(){return this._spacing}set spacing(e){let t=ti(e);this._spacing!==t&&(this._spacing=t,this.markMeasureDirty("spacing"))}get alignment(){return this._alignment}set alignment(e){this._alignment!==e&&(this._alignment=e,this.markPlacementDirty("alignment"))}measureSelf(e){var t,i,n,r;let s,a,o,l;return t=this.axis,i=e.proposal,n=e.children,r={spacing:this._spacing,alignment:this._alignment},s=e8(t,i,n),a=r.spacing*Math.max(0,n.length-1),o=s.reduce((e,i)=>e+tt(t,i),0)+a,l=s.reduce((e,i)=>{var n,r;return Math.max(e,(n=t,r=i,"horizontal"===n?r.height:r.width))},0),"horizontal"===t?{width:te(n)&&void 0!==i.width?Math.max(o,i.width):o,height:void 0!==i.height&&te(n)?Math.max(l,i.height):l}:{width:void 0!==i.width&&te(n)?Math.max(l,i.width):l,height:te(n)&&void 0!==i.height?Math.max(o,i.height):o}}placeChildren(e){!function(e,t,i,n,r){let s=e8(e,i,n),a=r.spacing*Math.max(0,n.length-1),o=s.reduce((t,i)=>t+tt(e,i),0)+a,l=n.filter(e=>e.isSpacer).length,h=l>0?Math.max(0,tt(e,t)-o)/l:0,c="horizontal"===e?t.x:t.y;for(let[i,a]of n.entries()){var d,u,p,g,f,m,v,y;let n=s[i];if(!n)continue;let o=a.isSpacer?(d=e,u=n,p=tt(e,n)+h,"horizontal"===d?{width:p,height:u.height}:{width:u.width,height:p}):n,l=(g=e,f=t,m=c,v=o,y=r.alignment,"horizontal"===g?{x:m,y:f.y+eU(f.height,v.height,y),width:v.width,height:v.height}:{x:f.x+eU(f.width,v.width,y),y:m,width:v.width,height:v.height});a.place(l,eA(o)),c+=tt(e,o)+r.spacing}}(this.axis,e.bounds,e.proposal,e.children,{spacing:this._spacing,alignment:this._alignment})}},eQ=class extends eZ{constructor(e={}){super("horizontal",e)}},eJ=class extends eZ{constructor(e={}){super("vertical",e)}},e0=class extends ek{_alignment;constructor(e={}){super("zstack"),this._alignment=e.alignment??"center"}get alignment(){return this._alignment}set alignment(e){eV(this._alignment)!==eV(e)&&(this._alignment=e,this.markPlacementDirty("alignment"))}measureSelf(e){let t=0,i=0;for(let n of e.children){let r=n.measure(e.proposal);t=Math.max(t,r.width),i=Math.max(i,r.height)}return{width:t,height:i}}placeChildren(e){for(let t of e.children){let i=t.measure(e.proposal);t.place(eY(i,e.bounds,this._alignment),eA(i))}}},e1=class extends ek{_width;_height;_minWidth;_minHeight;_idealWidth;_idealHeight;_maxWidth;_maxHeight;_alignment;constructor(e={}){super("frame"),this._width=tn(e.width),this._height=tn(e.height),this._minWidth=tn(e.minWidth),this._minHeight=tn(e.minHeight),this._idealWidth=tn(e.idealWidth),this._idealHeight=tn(e.idealHeight),this._maxWidth=e.maxWidth,this._maxHeight=e.maxHeight,this._alignment=e.alignment??"center"}get width(){return this._width}set width(e){let t=tn(e);Object.is(this._width,t)||(this._width=t,this.markMeasureDirty("width"))}get height(){return this._height}set height(e){let t=tn(e);Object.is(this._height,t)||(this._height=t,this.markMeasureDirty("height"))}get minWidth(){return this._minWidth}set minWidth(e){let t=tn(e);Object.is(this._minWidth,t)||(this._minWidth=t,this.markMeasureDirty("minWidth"))}get minHeight(){return this._minHeight}set minHeight(e){let t=tn(e);Object.is(this._minHeight,t)||(this._minHeight=t,this.markMeasureDirty("minHeight"))}get idealWidth(){return this._idealWidth}set idealWidth(e){let t=tn(e);Object.is(this._idealWidth,t)||(this._idealWidth=t,this.markMeasureDirty("idealWidth"))}get idealHeight(){return this._idealHeight}set idealHeight(e){let t=tn(e);Object.is(this._idealHeight,t)||(this._idealHeight=t,this.markMeasureDirty("idealHeight"))}get maxWidth(){return this._maxWidth}set maxWidth(e){Object.is(this._maxWidth,e)||(this._maxWidth=e,this.markMeasureDirty("maxWidth"))}get maxHeight(){return this._maxHeight}set maxHeight(e){Object.is(this._maxHeight,e)||(this._maxHeight=e,this.markMeasureDirty("maxHeight"))}get alignment(){return this._alignment}set alignment(e){eV(this._alignment)!==eV(e)&&(this._alignment=e,this.markPlacementDirty("alignment"))}measureSelf(e){var t,i,n,r,s,a,o,l,h;let c=e.children[0],d=this.runtimeProps(),u=e7(e.proposal,d);return i=c?.measure(u)??{width:(t=d).idealWidth??0,height:t.idealHeight??0},n=e.proposal,s={width:(r=d).width??(r.maxWidth===1/0&&void 0!==n.width?Math.max(i.width,n.width):i.width),height:r.height??(r.maxHeight===1/0&&void 0!==n.height?Math.max(i.height,n.height):i.height)},a=r.minWidth,o=r.minHeight,l=r.maxWidth,h=r.maxHeight,{width:eW(s.width,a,l),height:eW(s.height,o,h)}}placeChildren(e){let t=e.children[0];if(!t)return;let i=this.runtimeProps(),n=e7(e.proposal,i),r=t.measure(n);t.place(eY(r,e.bounds,i.alignment),eA(r))}runtimeProps(){return{width:this._width,height:this._height,minWidth:this._minWidth,minHeight:this._minHeight,idealWidth:this._idealWidth,idealHeight:this._idealHeight,maxWidth:eH(this._maxWidth),maxHeight:eH(this._maxHeight),alignment:this._alignment}}},e2=class extends ek{_insets;constructor(e=0){super("padding"),this._insets=eG(function(e){return e&&"object"==typeof e&&"insets"in e?e:{insets:e}}(e).insets)}get insets(){return this._insets}set insets(e){let t=eG(e);eV(this._insets)!==eV(t)&&(this._insets=t,this.markMeasureDirty("insets"))}measureSelf(e){var t,i;let n=e.children[0];return n?(t=n.measure(eX(e.proposal,this._insets)),i=this._insets,{width:t.width+i.left+i.right,height:t.height+i.top+i.bottom}):{width:0,height:0}}placeChildren(e){let t=e.children[0];if(t){var i,n;t.place((i=e.bounds,n=this._insets,eO({x:i.x+n.left,y:i.y+n.top,width:i.width-n.left-n.right,height:i.height-n.top-n.bottom})),eX(e.proposal,this._insets))}}},e3=class extends ek{constructor(){super("noop")}measureSelf(e){return e.children[0]?.measure(e.proposal)??{width:e.proposal.width??0,height:e.proposal.height??0}}placeChildren(e){e.children[0]?.place(e.bounds,e.proposal)}},e5=class extends ek{_alignment;constructor(e,t={}){super(e),this._alignment=t.alignment??"center"}get alignment(){return this._alignment}set alignment(e){eV(this._alignment)!==eV(e)&&(this._alignment=e,this.markPlacementDirty("alignment"))}measureSelf(e){return e.children[0]?.measure(e.proposal)??{width:0,height:0}}placeChildren(e){let t=e.children[0],i=e.children[1];if(!t||(t.place(e.bounds,eA(e.bounds)),!i))return;let n={width:e.bounds.width,height:e.bounds.height},r=i.measure(n);i.place(eY(r,e.bounds,this._alignment),eA(r))}},e4=class extends e5{constructor(e={}){super("background",e)}},e6=class extends e5{constructor(e={}){super("overlay",e)}};function e8(e,t,i){let n="horizontal"===e?eF({height:t.height}):eF({width:t.width});return i.map(e=>e.measure(n))}function e7(e,t){let i={},n=t.width??t.idealWidth??e9(e.width,t.minWidth,t.maxWidth),r=t.height??t.idealHeight??e9(e.height,t.minHeight,t.maxHeight);return void 0!==n&&(i.width=n),void 0!==r&&(i.height=r),eF(i)}function e9(e,t,i){if(void 0===e)return;let n=e;return void 0!==t&&(n=Math.max(t,n)),void 0!==i&&Number.isFinite(i)&&(n=Math.min(i,n)),n}function te(e){return e.some(e=>e.isSpacer)}function tt(e,t){return"horizontal"===e?t.width:t.height}function ti(e){return Number.isFinite(e)?Math.max(0,e):0}function tn(e){if(void 0!==e)return ti(e)}var tr={measureCalls:0,cacheHits:0,cacheMisses:0,invalidations:0,nodes:0},ts=class{layoutOwner={};rootNode;onInvalidate;maxCachedMeasurements;measureCache=new Map;reachableNodes=new Map;objectIds=new WeakMap;objectIdCounter=0;invalidationCount=0;lastStats={...tr};cleanupRootListener;constructor(e={}){this.onInvalidate=e.onInvalidate,this.maxCachedMeasurements=e.maxCachedMeasurements??5e4,this.root=e.root}get root(){return this.rootNode}set root(e){let t=e?eT(e):void 0;this.rootNode!==t&&(this.cleanupRootListener?.(),this.cleanupRootListener=void 0,this.rootNode=t,t&&(this.cleanupRootListener=t.addInvalidationListener(e=>this.handleInvalidation(e))),this.syncReachableNodes())}layout(e){if(!this.rootNode||this.rootNode.disposed)throw Error("layout() called before assigning engine.root.");this.syncReachableNodes();let t={...tr,invalidations:this.invalidationCount},i=eF(e),n=this.measureNode(this.rootNode,i,t);return this.placeNode(this.rootNode,{x:0,y:0,width:n.width,height:n.height},i,t,{x:0,y:0}),this.lastStats=t,t}getDebugStats(){return{...this.lastStats,invalidations:this.invalidationCount}}dispose(){this.cleanupRootListener?.(),this.cleanupRootListener=void 0,this.rootNode=void 0,this.syncReachableNodes(),this.measureCache.clear()}measureNode(e,t,i){let n=this.measureCacheKey(e,t);if(this.maxCachedMeasurements>0){let e=this.measureCache.get(n);if(e)return i.cacheHits+=1,e}i.cacheMisses+=1,i.measureCalls+=1;let r=this.childrenFor(e,i),s=eL(e.measureSelf({proposal:t,children:r,node:e}));return this.setCachedMeasurement(n,s),s}placeNode(e,t,i,n,r){let s=eO(t),a={x:r.x+s.x,y:r.y+s.y,width:s.width,height:s.height};e.setLayout({rect:s,absoluteRect:a}),n.nodes+=1;let o=this.childrenFor(e,n,{x:a.x,y:a.y}),l={x:0,y:0,width:s.width,height:s.height};e.placeChildren({bounds:l,proposal:eF(i),children:o,node:e})}childrenFor(e,t,i={x:0,y:0}){return e.children.map(e=>{let n=eT(e);return{node:e,id:e.id,kind:e.kind,isSpacer:n.isSpacer,measure:e=>this.measureNode(n,eF(e),t),place:(e,r)=>this.placeNode(n,e,eF(r??e),t,i)}})}handleInvalidation(e){"structure"===e.kind&&this.syncReachableNodes(),this.invalidationCount+=1,this.onInvalidate?.(e)}syncReachableNodes(){let e=new Map;for(let[t,i]of(this.rootNode&&!this.rootNode.disposed&&this.collectReachable(this.rootNode,e),this.reachableNodes))e.has(t)||i.deactivateLayout(this.layoutOwner);for(let[t,i]of e)this.reachableNodes.has(t)||i.activateLayout(this.layoutOwner);this.reachableNodes=e}collectReachable(e,t){if(!e.disposed)for(let i of(t.set(e.id,e),e.children))this.collectReachable(eT(i),t)}measureCacheKey(e,t){return[e.id,`${t.width??"u"}x${t.height??"u"}`,e.measureRevision,e.subtreeMeasureRevision,this.valueSignature(e.getMeasureKey())].join("|")}setCachedMeasurement(e,t){this.maxCachedMeasurements<=0||(this.measureCache.size>=this.maxCachedMeasurements&&this.measureCache.clear(),this.measureCache.set(e,t))}valueSignature(e){return null==e?String(e):"object"==typeof e||"function"==typeof e?`object:${this.objectId(e)}`:eV(e)}objectId(e){let t=this.objectIds.get(e);if(void 0!==t)return t;let i=++this.objectIdCounter;return this.objectIds.set(e,i),i}},ta=class extends e${_element;_sizing;cleanup;constructor(e){super({measureKey:e.measureKey??function(e,t){return{sizing:t.sizing??"intrinsic",className:e.className,textContent:e.textContent,inlineStyle:e.getAttribute("style"),childCount:e.childElementCount}}(e.element,e)}),this._element=e.element,this._sizing=e.sizing??"intrinsic"}get element(){return this._element}set element(e){this._element!==e&&(this.stopObserving(),this._element=e,this.isLayoutActive()&&this.startObserving(),this.invalidateMeasure("element"))}get sizing(){return this._sizing}set sizing(e){let t=e??"intrinsic";this._sizing!==t&&(this._sizing=t,this.invalidateMeasure("sizing"))}dispose(){this.stopObserving(),super.dispose()}measureLeaf(e){return function(e,t={},i={}){let n=i.sizing??"intrinsic",r=t.width,s=t.height,a=("constrained-width"===n||"fill"===n)&&void 0!==r?Math.max(0,r):void 0,o="fill"===n&&void 0!==s?Math.max(0,s):void 0,l=document.createElement("div"),h=e.cloneNode(!0);if(h.removeAttribute("id"),l.style.position="absolute",l.style.visibility="hidden",l.style.pointerEvents="none",l.style.contain="layout style paint",l.style.left="-100000px",l.style.top="0",l.style.display="inline-block",l.style.width="max-content",l.style.maxWidth="none",l.style.height="auto",l.style.maxHeight="none",h.style.pointerEvents="none",h.style.transform="none",void 0!==a){let e=`${a}px`;l.style.width=e,l.style.maxWidth=e,h.style.width=e,h.style.maxWidth=e}if(void 0!==o){let e=`${o}px`;l.style.height=e,l.style.maxHeight=e,h.style.height=e,h.style.maxHeight=e}else("constrained-width"===n||void 0!==a)&&(h.style.height="auto",h.style.minHeight=e.style.minHeight,h.style.maxHeight="none");h.style.boxSizing="border-box",l.append(h),document.body.append(l);let c=h.getBoundingClientRect(),d=l.getBoundingClientRect(),u={width:void 0!==a?a:c.width||h.offsetWidth||h.scrollWidth||d.width||0,height:void 0!==o?o:c.height||h.offsetHeight||h.scrollHeight||d.height||0};return l.remove(),u}(this._element,e,{sizing:this._sizing})}onLayoutActive(){this.startObserving()}onLayoutInactive(){this.stopObserving()}startObserving(){this.cleanup||(this.cleanup=function(e,t){let i=[],n=to(e);if("ResizeObserver"in globalThis){let r=new ResizeObserver(i=>{var r,s;let a=to(e,i[0]);r=n,s=a,(Math.abs(r.width-s.width)>.5||Math.abs(r.height-s.height)>.5)&&(n=a,t("resize"))});r.observe(e),i.push(()=>r.disconnect())}if("MutationObserver"in globalThis){let n=new MutationObserver(()=>t("mutation"));n.observe(e,{attributes:!0,attributeFilter:["class","style"],characterData:!0,childList:!0,subtree:!0}),i.push(()=>n.disconnect())}for(let n of e instanceof HTMLImageElement?[e]:[...e.querySelectorAll("img")]){let e=()=>t("image");n.addEventListener("load",e),n.addEventListener("error",e),i.push(()=>{n.removeEventListener("load",e),n.removeEventListener("error",e)})}let r=document.fonts;if(r&&(r.ready.then(()=>t("font")),"addEventListener"in r&&"removeEventListener"in r)){let e=()=>t("font");r.addEventListener("loadingdone",e),r.addEventListener("loadingerror",e),i.push(()=>{r.removeEventListener("loadingdone",e),r.removeEventListener("loadingerror",e)})}return()=>{for(let e of i)e()}}(this._element,e=>this.invalidateMeasure(e)))}stopObserving(){this.cleanup?.(),this.cleanup=void 0}};function to(e,t){let i=t?.borderBoxSize,n=Array.isArray(i)?i[0]:i;if(n)return{width:n.inlineSize,height:n.blockSize};if(t?.contentRect)return{width:t.contentRect.width,height:t.contentRect.height};let r=e.getBoundingClientRect();return{width:r.width||e.offsetWidth||e.scrollWidth,height:r.height||e.offsetHeight||e.scrollHeight}}function tl(e){return e?{x:e.x,y:e.y}:{x:0,y:0}}function th(e,t){e.x=t.x,e.y=t.y,e.scaleX=1,e.scaleY=1,e.rotation=0,e.origin={x:0,y:0}}function tc(e,t){if("fill"===t){e.style.display="block",e.style.width="100%",e.style.height="100%",e.style.boxSizing="border-box";return}e.style.display="",e.style.width="",e.style.height="",e.style.boxSizing=""}function td(e,t,i){let n=e[t];return e[t]=i,!Object.is(e[t],n)}function tu(e,t){if(e instanceof S){if(t instanceof x||t instanceof v||t instanceof b)return void e.add(t)}else if(e instanceof x){if(t instanceof y||t instanceof b)return void e.add(t)}else if(e instanceof y){if(t instanceof v||t instanceof b)return void e.add(t)}else if(e instanceof b)return void e.add(t);throw Error("This layout child cannot be attached to the nearest liquid-glass scene parent.")}function tp(e,t){if(e===t)throw Error("A layout UI node cannot be inserted into itself.");let i=e;for(;i instanceof tg;){if(i===t)throw Error("A layout UI node cannot be inserted into one of its descendants.");i=i._parent}}var tg=class{layoutNode;sceneNode;_parent=null;_children=[];constructor(e,t){this.layoutNode=e,this.sceneNode=t}get children(){return this._children}add(e){return this.addChild(e)}remove(){this._parent?._detachChild(this)}_detachChild(e){let t=this._children.indexOf(e);-1!==t&&(this._children.splice(t,1),e.layoutNode.remove(),e.sceneNode?.remove(),e._parent=null)}_applyLayoutTree(){let e=this.layoutNode.layout?.rect;for(let t of(e&&this.applyLayoutRect(e),this._children))t._applyLayoutTree()}addChild(e){return e._parent===this&&this._children.includes(e)||(tp(this,e),this.assertCanAddChild(e),e._parent?._detachChild(e),this._children.push(e),e._parent=this,this.layoutNode.append(e.layoutNode),this.attachChildScene(e)),e}_emitInvalidation(e){this._parent?._emitInvalidation(e)}invalidateLayout(e){this._emitInvalidation({kind:"layout",node:this,cause:e})}invalidateFrame(e){this._emitInvalidation({kind:"frame",node:this,cause:e})}assertCanAddChild(e){}attachChildScene(e){this.sceneNode&&e.sceneNode&&tu(this.sceneNode,e.sceneNode)}applyLayoutRect(e){this.sceneNode&&th(this.sceneNode,e)}},tf=class extends tg{add(e){return this.addChild(e)}assertCanAddChild(e){if(this._children.length>0&&this._children[0]!==e)throw Error(`${this.constructor.name} accepts exactly one child.`)}},tm=class{scene=new S;engine;_root=null;invalidationListeners=new Set;constructor(e={}){const{root:t,onInvalidate:i,...n}=e;this.engine=new ts({...n,onInvalidate:e=>{i?.(e),this._emitInvalidation({kind:"layout",cause:e})}}),t&&this.add(t)}get root(){return this._root}addInvalidationListener(e){return this.invalidationListeners.add(e),()=>{this.invalidationListeners.delete(e)}}add(e){if(this._root===e)return e;if(this._root)throw Error("LayoutScene accepts exactly one root node.");return e._parent?._detachChild(e),this._root=e,e._parent=this,this.engine.root=e.layoutNode,e.sceneNode&&tu(this.scene,e.sceneNode),this._emitInvalidation({kind:"layout",node:e,cause:"root"}),e}layout(e){let t=this.engine.layout(e);return this._root?._applyLayoutTree(),t}getDebugStats(){return this.engine.getDebugStats()}dispose(){this._root&&this._detachChild(this._root),this.engine.dispose()}_detachChild(e){this._root===e&&(e.layoutNode.remove(),e.sceneNode?.remove(),e._parent=null,this._root=null,this.engine.root=void 0,this._emitInvalidation({kind:"layout",node:e,cause:"root"}))}_emitInvalidation(e){for(let t of this.invalidationListeners)t(e)}},tv=class extends tg{constructor(e={}){super(new eQ(e),new b)}get spacing(){return this.layoutNode.spacing}set spacing(e){this.layoutNode.spacing=e}get alignment(){return this.layoutNode.alignment}set alignment(e){this.layoutNode.alignment=e}},ty=class extends tg{constructor(e={}){super(new eJ(e),new b)}get spacing(){return this.layoutNode.spacing}set spacing(e){this.layoutNode.spacing=e}get alignment(){return this.layoutNode.alignment}set alignment(e){this.layoutNode.alignment=e}},tx=class extends tg{sceneSlots=new Map;constructor(e={}){super(new e0(e),new w)}get alignment(){return this.layoutNode.alignment}set alignment(e){this.layoutNode.alignment=e}_detachChild(e){let t=this.sceneSlots.get(e);super._detachChild(e),t?.remove(),this.sceneSlots.delete(e),this.syncSlotZIndices()}addChild(e){let t=super.addChild(e);return this.syncSlotZIndices(),t}attachChildScene(e){if(!e.sceneNode)return;let t=new w;this.sceneSlots.set(e,t),tu(this.sceneNode,t),tu(t,e.sceneNode)}syncSlotZIndices(){for(let[e,t]of this._children.entries()){let i=this.sceneSlots.get(t);i&&(i.zIndex=e)}}},tb=class extends tf{constructor(e={}){super(new e1(e),new b)}get width(){return this.layoutNode.width}set width(e){this.layoutNode.width=e}get height(){return this.layoutNode.height}set height(e){this.layoutNode.height=e}get minWidth(){return this.layoutNode.minWidth}set minWidth(e){this.layoutNode.minWidth=e}get minHeight(){return this.layoutNode.minHeight}set minHeight(e){this.layoutNode.minHeight=e}get idealWidth(){return this.layoutNode.idealWidth}set idealWidth(e){this.layoutNode.idealWidth=e}get idealHeight(){return this.layoutNode.idealHeight}set idealHeight(e){this.layoutNode.idealHeight=e}get maxWidth(){return this.layoutNode.maxWidth}set maxWidth(e){this.layoutNode.maxWidth=e}get maxHeight(){return this.layoutNode.maxHeight}set maxHeight(e){this.layoutNode.maxHeight=e}get alignment(){return this.layoutNode.alignment}set alignment(e){this.layoutNode.alignment=e}},tw=class extends tf{constructor(e={}){super(new e2(e),new b)}get insets(){return this.layoutNode.insets}set insets(e){this.layoutNode.insets=e}},tS=class extends tg{constructor(e,t){super(e,new w),this.sceneOrder=t,this.syncSlotZIndices(),tu(this.sceneNode,this.contentSlot),tu(this.sceneNode,this.decorationSlot)}sceneOrder;emptyContent=new e3;emptyDecoration=new e3;contentSlot=new w;decorationSlot=new w;content=null;decoration=null;add(e){if(!this.content)return this.setContent(e);if(!this.decoration)return this.setDecoration(e);throw Error(`${this.constructor.name} accepts content and decoration children only.`)}setContent(e){return this.replaceSlot("content",e),e}setDecoration(e){return this.replaceSlot("decoration",e),e}get alignment(){return this.layoutNode.alignment}set alignment(e){this.layoutNode.alignment=e}_detachChild(e){(this.content===e||this.decoration===e)&&(this.content===e?this.content=null:this.decoration=null,this._children.splice(this._children.indexOf(e),1),e.layoutNode.remove(),e.sceneNode?.remove(),e._parent=null,this.syncLayoutSlots())}replaceSlot(e,t){tp(this,t);let i="content"===e?this.content:this.decoration;i!==t&&(i&&this._detachChild(i),t._parent?._detachChild(t),"content"===e?this.content=t:this.decoration=t,this._children.push(t),t._parent=this,this.syncLayoutSlots(),this.syncSceneSlots())}syncLayoutSlots(){this.layoutNode.replaceChildren(this.content?.layoutNode??this.emptyContent,this.decoration?.layoutNode??this.emptyDecoration)}syncSceneSlots(){this.content?.sceneNode?.remove(),this.decoration?.sceneNode?.remove(),this.content?.sceneNode&&tu(this.contentSlot,this.content.sceneNode),this.decoration?.sceneNode&&tu(this.decorationSlot,this.decoration.sceneNode)}syncSlotZIndices(){this.contentSlot.zIndex=+("background"===this.sceneOrder),this.decorationSlot.zIndex=+("background"!==this.sceneOrder)}},tC=class extends tS{constructor(e={}){const t=new e3,i=new e3;super(new e4(e).append(t,i),"background")}},t_=class extends tS{constructor(e={}){const t=new e3,i=new e3;super(new e6(e).append(t,i),"overlay")}},tM=class extends tf{_x=0;_y=0;_scaleX=1;_scaleY=1;_rotation=0;_origin={x:0,y:0};constructor(e={}){super(new e3,new b),this._x=e.x??0,this._y=e.y??0,this._scaleX=e.scaleX??1,this._scaleY=e.scaleY??1,this._rotation=e.rotation??0,this._origin=tl(e.origin)}get x(){return this._x}set x(e){Object.is(this._x,e)||(this._x=e,this.syncSceneTransform(),this.invalidateFrame("x"))}get y(){return this._y}set y(e){Object.is(this._y,e)||(this._y=e,this.syncSceneTransform(),this.invalidateFrame("y"))}get scaleX(){return this._scaleX}set scaleX(e){Object.is(this._scaleX,e)||(this._scaleX=e,this.syncSceneTransform(),this.invalidateFrame("scaleX"))}get scaleY(){return this._scaleY}set scaleY(e){Object.is(this._scaleY,e)||(this._scaleY=e,this.syncSceneTransform(),this.invalidateFrame("scaleY"))}get rotation(){return this._rotation}set rotation(e){Object.is(this._rotation,e)||(this._rotation=e,this.syncSceneTransform(),this.invalidateFrame("rotation"))}get origin(){return this._origin}set origin(e){(this._origin.x!==e.x||this._origin.y!==e.y)&&(this._origin=tl(e),this.syncSceneTransform(),this.invalidateFrame("origin"))}applyLayoutRect(e){this.syncSceneTransform(e)}syncSceneTransform(e=this.layoutNode.layout?.rect){let t=e?.x??0,i=e?.y??0;this.sceneNode.x=t+this._x,this.sceneNode.y=i+this._y,this.sceneNode.scaleX=this._scaleX,this.sceneNode.scaleY=this._scaleY,this.sceneNode.rotation=this._rotation,this.sceneNode.origin={x:this._origin.x*(e?.width??0),y:this._origin.y*(e?.height??0)}}},tE=class extends tf{constructor(e={}){super(new e3,new x(e))}get opacity(){return this.sceneNode.opacity}set opacity(e){td(this.sceneNode,"opacity",e)&&this.invalidateFrame("opacity")}get spacing(){return this.sceneNode.spacing}set spacing(e){td(this.sceneNode,"spacing",e)&&this.invalidateFrame("spacing")}get blur(){return this.sceneNode.blur}set blur(e){td(this.sceneNode,"blur",e)&&this.invalidateFrame("blur")}get bezelWidth(){return this.sceneNode.bezelWidth}set bezelWidth(e){td(this.sceneNode,"bezelWidth",e)&&this.invalidateFrame("bezelWidth")}get thickness(){return this.sceneNode.thickness}set thickness(e){td(this.sceneNode,"thickness",e)&&this.invalidateFrame("thickness")}get displacementFactor(){return this.sceneNode.displacementFactor}set displacementFactor(e){td(this.sceneNode,"displacementFactor",e)&&this.invalidateFrame("displacementFactor")}get displacementBlur(){return this.sceneNode.displacementBlur}set displacementBlur(e){td(this.sceneNode,"displacementBlur",e)&&this.invalidateFrame("displacementBlur")}get normalDivergenceBlendPower(){return this.sceneNode.normalDivergenceBlendPower}set normalDivergenceBlendPower(e){td(this.sceneNode,"normalDivergenceBlendPower",e)&&this.invalidateFrame("normalDivergenceBlendPower")}get normalDivergenceBlendEnabled(){return this.sceneNode.normalDivergenceBlendEnabled}set normalDivergenceBlendEnabled(e){td(this.sceneNode,"normalDivergenceBlendEnabled",e)&&this.invalidateFrame("normalDivergenceBlendEnabled")}get ior(){return this.sceneNode.ior}set ior(e){td(this.sceneNode,"ior",e)&&this.invalidateFrame("ior")}get contentIor(){return this.sceneNode.contentIor}set contentIor(e){td(this.sceneNode,"contentIor",e)&&this.invalidateFrame("contentIor")}get contentDepth(){return this.sceneNode.contentDepth}set contentDepth(e){td(this.sceneNode,"contentDepth",e)&&this.invalidateFrame("contentDepth")}get dispersion(){return this.sceneNode.dispersion}set dispersion(e){td(this.sceneNode,"dispersion",e)&&this.invalidateFrame("dispersion")}get surfaceProfile(){return this.sceneNode.surfaceProfile}set surfaceProfile(e){td(this.sceneNode,"surfaceProfile",e)&&this.invalidateFrame("surfaceProfile")}get lightDirection(){return this.sceneNode.lightDirection}set lightDirection(e){td(this.sceneNode,"lightDirection",e)&&this.invalidateFrame("lightDirection")}get specularStrength(){return this.sceneNode.specularStrength}set specularStrength(e){td(this.sceneNode,"specularStrength",e)&&this.invalidateFrame("specularStrength")}get specularWidth(){return this.sceneNode.specularWidth}set specularWidth(e){td(this.sceneNode,"specularWidth",e)&&this.invalidateFrame("specularWidth")}get specularFalloff(){return this.sceneNode.specularFalloff}set specularFalloff(e){td(this.sceneNode,"specularFalloff",e)&&this.invalidateFrame("specularFalloff")}get oppositeSpecularStrength(){return this.sceneNode.oppositeSpecularStrength}set oppositeSpecularStrength(e){td(this.sceneNode,"oppositeSpecularStrength",e)&&this.invalidateFrame("oppositeSpecularStrength")}get specularSharpness(){return this.sceneNode.specularSharpness}set specularSharpness(e){td(this.sceneNode,"specularSharpness",e)&&this.invalidateFrame("specularSharpness")}get specularOpacity(){return this.sceneNode.specularOpacity}set specularOpacity(e){td(this.sceneNode,"specularOpacity",e)&&this.invalidateFrame("specularOpacity")}get reflectionOffset(){return this.sceneNode.reflectionOffset}set reflectionOffset(e){td(this.sceneNode,"reflectionOffset",e)&&this.invalidateFrame("reflectionOffset")}get tint(){return this.sceneNode.tint}set tint(e){td(this.sceneNode,"tint",e)&&this.invalidateFrame("tint")}get shadowColor(){return this.sceneNode.shadowColor}set shadowColor(e){td(this.sceneNode,"shadowColor",e)&&this.invalidateFrame("shadowColor")}get shadowOffsetX(){return this.sceneNode.shadowOffsetX}set shadowOffsetX(e){td(this.sceneNode,"shadowOffsetX",e)&&this.invalidateFrame("shadowOffsetX")}get shadowOffsetY(){return this.sceneNode.shadowOffsetY}set shadowOffsetY(e){td(this.sceneNode,"shadowOffsetY",e)&&this.invalidateFrame("shadowOffsetY")}get shadowBlur(){return this.sceneNode.shadowBlur}set shadowBlur(e){td(this.sceneNode,"shadowBlur",e)&&this.invalidateFrame("shadowBlur")}get shadowSpread(){return this.sceneNode.shadowSpread}set shadowSpread(e){td(this.sceneNode,"shadowSpread",e)&&this.invalidateFrame("shadowSpread")}get debugDisplacement(){return this.sceneNode.debugDisplacement}set debugDisplacement(e){td(this.sceneNode,"debugDisplacement",e)&&this.invalidateFrame("debugDisplacement")}get zIndex(){return this.sceneNode.zIndex}set zIndex(e){td(this.sceneNode,"zIndex",e)&&this.invalidateFrame("zIndex")}},tP=class extends tf{constructor(e={}){super(new e3,new y(e))}get cornerRadius(){return this.sceneNode.cornerRadius}set cornerRadius(e){td(this.sceneNode,"cornerRadius",e)&&this.invalidateFrame("cornerRadius")}get cornerSmoothing(){return this.sceneNode.cornerSmoothing}set cornerSmoothing(e){td(this.sceneNode,"cornerSmoothing",e)&&this.invalidateFrame("cornerSmoothing")}get pointerEvents(){return this.sceneNode.pointerEvents}set pointerEvents(e){td(this.sceneNode,"pointerEvents",e)&&this.invalidateFrame("pointerEvents")}get zIndex(){return this.sceneNode.zIndex}set zIndex(e){td(this.sceneNode,"zIndex",e)&&this.invalidateFrame("zIndex")}applyLayoutRect(e){th(this.sceneNode,e),this.sceneNode.width=e.width,this.sceneNode.height=e.height}},tR=class extends tg{ownedElement;constructor(e={}){const t=document.createElement("div"),i=e.element??t,n=e.sizing??"constrained-width";tc(t,n);const r=new v({opacity:e.opacity,blur:e.blur,zIndex:e.zIndex,element:i});super(new ta({element:i,sizing:n}),r),this.ownedElement=t}add(e){throw Error("Html is a leaf node and cannot accept children.")}get sizing(){return this.layoutNode.sizing}set sizing(e){let t=e??"constrained-width";this.layoutNode.sizing!==t&&(tc(this.ownedElement,t),this.layoutNode.sizing=t)}get opacity(){return this.sceneNode.opacity}set opacity(e){td(this.sceneNode,"opacity",e)&&this.invalidateFrame("opacity")}get blur(){return this.sceneNode.blur}set blur(e){td(this.sceneNode,"blur",e)&&this.invalidateFrame("blur")}get zIndex(){return this.sceneNode.zIndex}set zIndex(e){td(this.sceneNode,"zIndex",e)&&this.invalidateFrame("zIndex")}get element(){return this.sceneNode.element}set element(e){this.setElement(e)}setElement(e){let t=e??this.ownedElement;this.layoutNode.element!==t&&(this.sceneNode.setElement(t),t===this.ownedElement&&tc(this.ownedElement,this.sizing),this.layoutNode.element=t)}applyLayoutRect(e){th(this.sceneNode,e),this.sceneNode.width=e.width,this.sceneNode.height=e.height}},tD=class extends tg{constructor(e={}){super(new eK(e),null)}add(e){throw Error("Spacer is a leaf node and cannot accept children.")}get minLength(){return this.layoutNode.minLength}set minLength(e){this.layoutNode.minLength=e}};function tN(){return{type:"spring",stiffness:300,damping:30,mass:1,velocity:0,restSpeed:.01,restDelta:.01}}function tB(e){return Math.min(Math.max(Number.isFinite(e)?e:0,0),1)}function tk(e,t,i){let n=1-e;return 3*n*n*e*t+3*n*e*e*i+e*e*e}var tT={linear:e=>e,easeIn:e=>e*e,easeOut:e=>1-(1-e)*(1-e),easeInOut:e=>e<.5?2*e*e:1-(-2*e+2)*(-2*e+2)/2,bezier:(e,t,i,n)=>{let r=tB(e),s=tB(i);return e=>{let i=tB(e);if(0===i||1===i)return i;let a=i,o=!1;for(let e=0;e<8;e+=1){let e=tk(a,r,s)-i,t=function(e,t,i){let n=1-e;return 3*n*n*t+6*n*e*(i-t)+3*e*e*(1-i)}(a,r,s);if(1e-6>Math.abs(e)){o=!0;break}if(1e-6>Math.abs(t))break;let n=a-e/t;if(n<0||n>1)break;a=n}if(!o){let e=0,t=1;a=i;for(let n=0;n<16;n+=1){let n=tk(a,r,s);if(1e-6>Math.abs(n-i))break;n<i?e=a:t=a,a=(e+t)/2}}return tk(a,t,n)}}};function tz(e){return null!==e&&"object"==typeof e&&("easing"===e.type||"duration"in e||"ease"in e)}function tI(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}function tH(e){let t={};for(let[i,n]of Object.entries(e))t[i]="number"==typeof n?n:tH(n);return t}function tL(e,t="",i=new Map){for(let[n,r]of Object.entries(e)){let e=t?`${t}.${n}`:n;if("number"==typeof r)i.set(e,r);else if(!tI(r))return null;else if(!tL(r,e,i))return null}return i}function tO(e,t,i){return 0===i||e===t?0:Math.abs(i)*Math.sign(t-e)}function tF(e){if("number"===e.kind)return e.channel.current;let t=tH(e.template);for(let[i,n]of e.channels)!function(e,t,i){let n=t.split("."),r=e;for(let e=0;e<n.length-1;e+=1)r=r[n[e]];r[n[n.length-1]]=i}(t,i,n.current);return t}function tA(e){return"number"===e.kind?[e.channel]:[...e.channels.values()]}function tW(e,t){return Math.abs(e.velocity)<=t.restSpeed&&Math.abs(e.target-e.current)<=t.restDelta}var tG=class{animations=new Set;animationsByTarget=new WeakMap;get active(){return this.animations.size>0}animate(e,t,i=!0,n={}){let r=i?!0===i?tN():tz(i)?{...{type:"easing",duration:.25,ease:tT.easeInOut},...i,type:"easing"}:{...tN(),...i,type:"spring"}:null;if(!e||!r)return{finished:Promise.resolve(),stop:()=>void 0};let s=0,a=()=>void 0,o=new Promise(e=>{a=e}),l=[];for(let[i,o]of Object.entries(t)){let t=e[i],h=this.getTargetAnimations(e),c=h.get(i);if("easing"===r.type&&r.duration<=0){c&&this.finishAnimation(c,!1),e[i]=o;continue}let d="spring"===r.type?r.velocity:0;if(c&&function(e,t,i,n){if("number"===e.kind)return"number"==typeof t&&(e.channel.target=t,n?(e.channel.origin=e.channel.current,e.channel.velocity=0):0!==i&&(e.channel.velocity=tO(e.channel.current,t,i)),!0);if(!tI(t))return!1;let r=tL(t);if(!r||r.size!==e.channels.size)return!1;for(let[t,s]of e.channels){let e=r.get(t);if(void 0===e)return!1;s.target=e,n?(s.origin=s.current,s.velocity=0):0!==i&&(s.velocity=tO(s.current,e,i))}return e.template=tH(t),!0}(c.value,o,d,"easing"===r.type)){c.config=r,c.elapsed=0,c.timeScaleRef=n.timeScaleRef,s+=1;let e=()=>{0==(s-=1)&&a()};c.listeners.add(e),l.push(()=>c.listeners.delete(e));continue}c&&this.finishAnimation(c,!1);let u=function(e,t,i){if("number"==typeof e&&"number"==typeof t)return{kind:"number",channel:{current:e,origin:e,target:t,velocity:tO(e,t,i)}};if(!tI(e)||!tI(t))return null;let n=tL(e),r=tL(t);if(!n||!r||0===n.size||n.size!==r.size)return null;let s=new Map;for(let[e,t]of r){let r=n.get(e);if(void 0===r)return null;s.set(e,{current:r,origin:r,target:t,velocity:tO(r,t,i)})}return{kind:"object",template:tH(t),channels:s}}(t,o,d);if(!u){e[i]=o;continue}let p={target:e,property:i,value:u,config:r,elapsed:0,timeScaleRef:n.timeScaleRef,listeners:new Set};s+=1;let g=()=>{0==(s-=1)&&a()};p.listeners.add(g),l.push(()=>p.listeners.delete(g)),this.animations.add(p),h.set(i,p)}return 0===s&&a(),{finished:o,stop:()=>{for(let e of l)e();for(let[i]of Object.entries(t)){let t=this.animationsByTarget.get(e)?.get(i);t&&this.finishAnimation(t,!1)}a()}}}stop(e,t){let i=this.animationsByTarget.get(e);if(i)for(let e of t??[...i.keys()]){let t=i.get(e);t&&this.finishAnimation(t,!1)}}tick(e){if(0===this.animations.size)return!1;let t=Math.max(0,e/1e3);for(let e of[...this.animations]){var i,n,r;let s=t*function(e){let t=e?.current??1;return Number.isFinite(t)&&t>0?t:1}(e.timeScaleRef),a=Math.min(.064,s),o=Math.max(1,Math.ceil(a/(1/60))),l=a/o,h=!1;if("spring"===e.config.type){let t=e.config;for(let i=0;i<o;i+=1)for(let i of tA(e.value))!function(e,t,i){let n=e.current-e.target,r=(-t.stiffness*n+-t.damping*e.velocity)/t.mass;e.velocity+=r*i,e.current+=e.velocity*i,tW(e,t)&&(e.current=e.target,e.velocity=0)}(i,t,l);h=tA(e.value).every(e=>tW(e,t))}else{e.elapsed+=s;let t=tB(e.elapsed/e.config.duration),i=e.config.ease(t);for(let t of tA(e.value))t.current=t.origin+(t.target-t.origin)*i;h=t>=1}i=e.target,n=e.property,r=tF(e.value),i[n]=r,h&&this.finishAnimation(e,!0)}return!0}getTargetAnimations(e){let t=this.animationsByTarget.get(e);if(t)return t;let i=new Map;return this.animationsByTarget.set(e,i),i}finishAnimation(e,t){if(t){var i,n,r;for(let t of tA(e.value))t.current=t.target,t.origin=t.target,t.velocity=0;i=e.target,n=e.property,r=tF(e.value),i[n]=r}for(let t of(this.animations.delete(e),this.animationsByTarget.get(e.target)?.delete(e.property),[...e.listeners]))t();e.listeners.clear()}},tX=class{steps=[];manager;requestFrame;defaultTransition;timeScaleRef;currentControls=null;stopped=!1;constructor(e,t,i=!0,n){this.manager=e,this.requestFrame=t,this.defaultTransition=i,this.timeScaleRef=n}to(e,t,i){return e&&this.steps.push({kind:"to",target:e,values:t,transition:i}),this}call(e){return this.steps.push({kind:"call",callback:e}),this}play(){return this.stopped=!1,{finished:this.run(),stop:()=>this.stop()}}stop(){this.stopped=!0,this.currentControls?.stop(),this.currentControls=null}async run(){for(let e of this.steps){if(this.stopped)return;if("call"===e.kind){e.callback();continue}this.currentControls=this.manager.animate(e.target,e.values,e.transition??this.defaultTransition,{timeScaleRef:this.timeScaleRef}),this.requestFrame(),await this.currentControls.finished,this.currentControls=null}}},tY=e.i(43476),tU=e.i(74080),tV=(0,t.createContext)({timeScaleRef:{current:1}});function tj({children:e,timeScale:i=1}){let n=(0,t.useContext)(tV),r=(0,t.useRef)(1);r.current=n.timeScaleRef.current*("number"==typeof i&&Number.isFinite(i)&&i>0?i:1);let s=(0,t.useMemo)(()=>({timeScaleRef:r}),[]);return(0,tY.jsx)(tV.Provider,{value:s,children:e})}function tq(){return(0,t.useContext)(tV).timeScaleRef}var t$=(0,t.createContext)(null),tK=(0,t.createContext)(null),tZ=(0,t.createContext)(0);function tQ(e,t){if((e instanceof tm||e instanceof tb||e instanceof tw||e instanceof tM||e instanceof tE||e instanceof tP)&&t.length>1)throw Error(`${e.constructor.name} accepts exactly one child.`);let i=e instanceof tm?e.root?[e.root]:[]:[...e.children];if(!(i.length===t.length&&i.every((e,i)=>e===t[i]))){for(let e of i)t.includes(e)||e.remove();for(let e of i)t.includes(e)&&e.remove();for(let i of t)e.add(i)}}function tJ(e){let i=(0,t.useRef)([]),n=(0,t.useRef)(0),r=(0,t.useRef)(e);return r.current=e,(0,t.useMemo)(()=>{let e=()=>{let e=[...i.current].sort((e,t)=>e.order-t.order||e.sequence-t.sequence).map(e=>e.node);r.current(e)};return{registerChild(t,r){let s={node:t,order:r,sequence:n.current};return n.current+=1,i.current.push(s),e(),()=>{i.current=i.current.filter(e=>e!==s),t.remove(),e()}}}},[])}function t0({children:e}){return t.Children.map(e,(e,t)=>(0,tY.jsx)(tZ.Provider,{value:t,children:e}))}function t1(){let e=(0,t.useContext)(t$);if(!e)throw Error("@liquid-dom/react components must be rendered inside LiquidCanvas or LiquidScene.");return e}function t2(e){let i=(0,t.useRef)(null);return i.current||(i.current=e()),i.current}function t3(e,i){(0,t.useImperativeHandle)(e,()=>i,[i])}function t5(e){let i=function(){let e=(0,t.useContext)(tK);if(!e)throw Error("Layout node components must be rendered inside a layout parent.");return e}(),n=(0,t.useContext)(tZ);(0,t.useLayoutEffect)(()=>i.registerChild(e,n),[e,n,i])}function t4(e){return tJ((0,t.useCallback)(t=>tQ(e,t),[e]))}function t6(e,t){return(0,tY.jsx)(tK.Provider,{value:e,children:(0,tY.jsx)(t0,{children:t})})}function t8(e,i){let n=(0,t.useRef)(null);return tJ((0,t.useCallback)(t=>(function(e,t,i,n){if(n.length>1)throw Error(`${e.constructor.name} ${t} slot accepts exactly one child.`);let r=n[0]??null;i.current===r||(i.current?.remove(),i.current=r,r&&("content"===t?e.setContent(r):e.setDecoration(r)))})(e,i,n,t),[e,i]))}function t7(e,t){t&&Object.assign(e.style,t)}function t9({ref:e,children:i,onInvalidateFrame:n,onInvalidateLayout:r}){let s=t2(()=>new tm),a=t2(()=>new tG),o=(0,t.useRef)(!0),l=(0,t.useRef)(!0),h=(0,t.useRef)(null),c=(0,t.useRef)(n),d=(0,t.useRef)(r);c.current=n,d.current=r;let u=(0,t.useCallback)(()=>{l.current=!0,c.current?.()},[]),p=(0,t.useCallback)(()=>{o.current=!0,l.current=!0,d.current?.()},[]),g=tJ((0,t.useCallback)(e=>tQ(s,e),[s])),f=(0,t.useMemo)(()=>({layoutScene:s,animationManager:a,getRenderer:()=>null,invalidateLayout:p,invalidateFrame:u,registerFrame:()=>()=>void 0}),[s,a,p,u]);return(0,t.useImperativeHandle)(e,()=>({layoutScene:s,scene:s.scene,update(e,t=0){a.tick(t);let i=!h.current||h.current.width!==e.width||h.current.height!==e.height;(o.current||i)&&(s.layout(e),h.current=e,o.current=!1),l.current=!1,a.active&&c.current?.()},invalidateLayout:p,invalidateFrame:u}),[s,a,p,u]),(0,t.useLayoutEffect)(()=>s.addInvalidationListener(e=>{"layout"===e.kind?p():u()}),[s,p,u]),(0,tY.jsx)(t$.Provider,{value:f,children:t6(g,i)})}function ie({ref:e,children:i,className:n,style:r,canvasClassName:s,canvasStyle:a,maxDpr:o=2,proposal:l,frameloop:h="always",onError:c}){let d,u=(0,t.useRef)(null),p=(0,t.useRef)(null),g=t2(()=>new tm),f=t2(()=>new tG),[m,v]=(0,t.useState)(!1),y=(0,t.useRef)({width:0,height:0}),x=(0,t.useRef)(!0),b=(0,t.useRef)(!0),w=(0,t.useRef)(new Set),S=(0,t.useRef)(0),C=(0,t.useRef)(h),_=(0,t.useRef)(null),M=(0,t.useRef)(null),E=(0,t.useRef)(c),P=((d=(0,t.useRef)(a)).current=a,d);E.current=c,C.current=h;let R=(0,t.useCallback)(()=>p.current,[]),D=(0,t.useMemo)(()=>()=>{let e=p.current;if(!e)throw Error("LiquidCanvas renderer is not available until the component is mounted.");return e},[]),N=(0,t.useRef)(()=>void 0),B=(0,t.useCallback)(()=>{null===_.current&&(_.current=requestAnimationFrame(e=>N.current(e)))},[]),k=(0,t.useCallback)(()=>{b.current=!0,B()},[B]),T=(0,t.useCallback)(()=>{x.current=!0,b.current=!0,B()},[B]),z=(0,t.useCallback)((e,t)=>{let i={callbackRef:e,priority:t,order:S.current};return S.current+=1,w.current.add(i),k(),()=>{w.current.delete(i)}},[k]);N.current=e=>{_.current=null;let t=p.current;if(!t)return;let i=M.current??e;M.current=e;let n={layoutScene:g,renderer:t,scene:g.scene,canvas:t.canvas,time:e,delta:e-i,invalidateLayout:T,invalidateFrame:k},r=[...w.current].sort((e,t)=>e.priority-t.priority||e.order-t.order);try{let s=f.tick(e-i);for(let e of r)e.callbackRef.current(n);let a=x.current;a&&(g.layout(y.current),x.current=!1),("always"===C.current||b.current||a||s)&&(t.render(),b.current=!1)}catch(e){if(E.current?.(e),!E.current)throw e}("always"===C.current||b.current||x.current||f.active)&&B()};let I=tJ((0,t.useCallback)(e=>tQ(g,e),[g])),H=(0,t.useMemo)(()=>({layoutScene:g,animationManager:f,getRenderer:R,invalidateLayout:T,invalidateFrame:k,registerFrame:z}),[g,f,R,T,k,z]);return(0,t.useImperativeHandle)(e,()=>({layoutScene:g,scene:g.scene,get renderer(){return D()},get canvas(){return D().canvas},invalidateLayout:T,invalidateFrame:k}),[g,D,T,k]),(0,t.useLayoutEffect)(()=>g.addInvalidationListener(e=>{"layout"===e.kind?T():k()}),[g,T,k]),(0,t.useLayoutEffect)(()=>{let e=u.current;if(!e)return;let t=new eN({scene:g.scene,maxDpr:o});return p.current=t,t.canvas.className=s??"",t7(t.canvas,P.current),e.append(t.canvas),v(!0),T(),()=>{null!==_.current&&(cancelAnimationFrame(_.current),_.current=null),t.destroy(),t.canvas.remove(),p.current=null}},[]),(0,t.useLayoutEffect)(()=>{let e=p.current;e&&(e.maxDpr=o,e.canvas.className=s??"",t7(e.canvas,a),k())},[o,s,a,k]),(0,t.useLayoutEffect)(()=>{if(l){y.current=l,T();return}let e=u.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect();y.current={width:t.width,height:t.height},T()};t();let i=new ResizeObserver(t);return i.observe(e),()=>i.disconnect()},[l?.width,l?.height,T]),(0,t.useEffect)(()=>{"always"===h&&B()},[h,m,B]),(0,tY.jsx)("div",{ref:u,className:n,style:r,children:m?(0,tY.jsx)(t$.Provider,{value:H,children:t6(I,i)}):null})}function it(e,i=0){let n=t1(),r=(0,t.useRef)(e);r.current=e,(0,t.useEffect)(()=>n.registerFrame(r,i),[n,i])}function ii(){return t1().layoutScene}function ir(){let e=t1().getRenderer();if(!e)throw Error("Renderer is not available until LiquidCanvas is mounted.");return e}function is(){return t1().invalidateLayout}function ia(){return t1().invalidateFrame}function io(){let e=t1(),i=tq();return(0,t.useCallback)((t,n,r)=>{let s=e.animationManager.animate(t,n,r,{timeScaleRef:i});return e.invalidateFrame(),s},[e,i])}function il(e){let i=t1(),n=tq();return(0,t.useCallback)(()=>new tX(i.animationManager,i.invalidateFrame,e,n),[i,e,n])}function ih(e,i,n,r={}){let s=t1(),a=tq(),o=(0,t.useRef)(!1),l=(0,t.useRef)(null),h=r.assignUndefined??!0;(0,t.useLayoutEffect)(()=>{let t=l.current;for(let[r,c]of(l.current=i,Object.entries(i))){if(void 0===c&&!h||t&&function e(t,i){if(Object.is(t,i))return!0;if(!t||!i||"object"!=typeof t||"object"!=typeof i)return!1;let n=Object.keys(t),r=Object.keys(i);return n.length===r.length&&n.every(n=>e(t[n],i[n]))}(t[r],c))continue;let i=o.current?function(e,t){var i;return null==e||!1===e?e:!0===e||!0===(i=e)||null!==i&&"object"==typeof i&&("spring"===i.type||"stiffness"in i||"damping"in i||"mass"in i||"velocity"in i||"restSpeed"in i||"restDelta"in i)||tz(e)?e:e[t]??e.default}(n,r):void 0;if(i)s.animationManager.animate(e,{[r]:c},i,{timeScaleRef:a}),s.invalidateFrame();else s.animationManager.stop(e,[r]),e[r]=c}o.current=!0}),(0,t.useLayoutEffect)(()=>()=>{s.animationManager.stop(e)},[s,e])}function ic({ref:e,children:t,spacing:i=0,alignment:n="center",transition:r}){let s=t2(()=>new tv({spacing:i,alignment:n}));return t3(e,s),t5(s),ih(s,{spacing:i,alignment:n},r),t6(t4(s),t)}function id({ref:e,children:t,spacing:i=0,alignment:n="center",transition:r}){let s=t2(()=>new ty({spacing:i,alignment:n}));return t3(e,s),t5(s),ih(s,{spacing:i,alignment:n},r),t6(t4(s),t)}function iu({ref:e,children:t,alignment:i="center",transition:n}){let r=t2(()=>new tx({alignment:i}));return t3(e,r),t5(r),ih(r,{alignment:i},n),t6(t4(r),t)}function ip({ref:e,children:t,width:i,height:n,minWidth:r,minHeight:s,idealWidth:a,idealHeight:o,maxWidth:l,maxHeight:h,alignment:c="center",transition:d}){let u=t2(()=>new tb({width:i,height:n,minWidth:r,minHeight:s,idealWidth:a,idealHeight:o,maxWidth:l,maxHeight:h,alignment:c}));return t3(e,u),t5(u),ih(u,{width:i,height:n,minWidth:r,minHeight:s,idealWidth:a,idealHeight:o,maxWidth:l,maxHeight:h,alignment:c},d),t6(t4(u),t)}function ig({ref:e,children:t,insets:i=0,transition:n}){let r=t2(()=>new tw({insets:i}));return t3(e,r),t5(r),ih(r,{insets:i},n),t6(t4(r),t)}function im({ref:e,children:t,overlay:i,alignment:n="center",transition:r}){let s=t2(()=>new t_({alignment:n})),a=t8(s,"content"),o=t8(s,"decoration");return t3(e,s),t5(s),ih(s,{alignment:n},r),(0,tY.jsxs)(tY.Fragment,{children:[t6(a,t),t6(o,i)]})}function iv({ref:e,children:t,background:i,alignment:n="center",transition:r}){let s=t2(()=>new tC({alignment:n})),a=t8(s,"content"),o=t8(s,"decoration");return t3(e,s),t5(s),ih(s,{alignment:n},r),(0,tY.jsxs)(tY.Fragment,{children:[t6(a,t),t6(o,i)]})}function iy({ref:e,children:t,x:i=0,y:n=0,scaleX:r=1,scaleY:s=1,rotation:a=0,origin:o,transition:l}){let h=t2(()=>new tM({x:i,y:n,scaleX:r,scaleY:s,rotation:a,origin:o}));return t3(e,h),t5(h),ih(h,{x:i,y:n,scaleX:r,scaleY:s,rotation:a,origin:o??{x:0,y:0}},l),t6(t4(h),t)}function ix({ref:e,children:t,opacity:i,spacing:n,blur:r,bezelWidth:s,thickness:a,displacementFactor:o,displacementBlur:l,normalDivergenceBlendPower:h,normalDivergenceBlendEnabled:c,ior:d,contentIor:u,contentDepth:p,dispersion:g,surfaceProfile:f,lightDirection:m,specularStrength:v,specularWidth:y,specularFalloff:x,oppositeSpecularStrength:b,specularSharpness:w,specularOpacity:S,reflectionOffset:C,tint:_,shadowColor:M,shadowOffsetX:E,shadowOffsetY:P,shadowBlur:R,shadowSpread:D,debugDisplacement:N,zIndex:B,transition:k}){let T=t2(()=>new tE({spacing:n,opacity:i,blur:r,bezelWidth:s,thickness:a,displacementFactor:o,displacementBlur:l,normalDivergenceBlendPower:h,normalDivergenceBlendEnabled:c,ior:d,contentIor:u,contentDepth:p,dispersion:g,surfaceProfile:f,lightDirection:m,specularStrength:v,specularWidth:y,specularFalloff:x,oppositeSpecularStrength:b,specularSharpness:w,specularOpacity:S,reflectionOffset:C,tint:_,shadowColor:M,shadowOffsetX:E,shadowOffsetY:P,shadowBlur:R,shadowSpread:D,debugDisplacement:N,zIndex:B}));return t3(e,T),t5(T),ih(T,{spacing:n,opacity:i,blur:r,bezelWidth:s,thickness:a,displacementFactor:o,displacementBlur:l,normalDivergenceBlendPower:h,normalDivergenceBlendEnabled:c,ior:d,contentIor:u,contentDepth:p,dispersion:g,surfaceProfile:f,lightDirection:m,specularStrength:v,specularWidth:y,specularFalloff:x,oppositeSpecularStrength:b,specularSharpness:w,specularOpacity:S,reflectionOffset:C,tint:_,shadowColor:M,shadowOffsetX:E,shadowOffsetY:P,shadowBlur:R,shadowSpread:D,debugDisplacement:N,zIndex:B},k,{assignUndefined:!1}),t6(t4(T),t)}function ib({ref:e,children:i,cornerRadius:n,cornerSmoothing:r,pointerEvents:s,zIndex:a,onClick:o,onHover:l,onPress:h,onPointerEnter:c,onPointerLeave:d,onPointerMove:u,onPointerDown:p,onPointerUp:g,onPointerCancel:f,transition:m}){let v=(0,t.useRef)(!1),y=(0,t.useRef)(!1),x=!!(o||l||h||c||d||u||p||g||f),b=s??x,w=t2(()=>new tP({cornerRadius:n,cornerSmoothing:r,pointerEvents:b,zIndex:a}));return t3(e,w),t5(w),ih(w,{cornerRadius:n,cornerSmoothing:r,pointerEvents:b,zIndex:a},m,{assignUndefined:!1}),(0,t.useEffect)(()=>{let e=e=>{v.current!==e&&(v.current=e,l?.(e))},t=e=>{y.current!==e&&(y.current=e,h?.(e))},i=[["click",o],["pointerenter",l||c?t=>{e(!0),c?.(t)}:void 0],["pointerleave",l||h||d?i=>{e(!1),t(!1),d?.(i)}:void 0],["pointermove",u],["pointerdown",h||p?e=>{t(!0),p?.(e)}:void 0],["pointerup",h||g?e=>{t(!1),g?.(e)}:void 0],["pointercancel",h||f?e=>{t(!1),f?.(e)}:void 0]];for(let[e,t]of i)t&&w.sceneNode.addEventListener(e,t);return()=>{for(let[e,t]of i)t&&w.sceneNode.removeEventListener(e,t)}},[w,o,l,h,c,d,u,p,g,f]),t6(t4(w),i)}function iw({ref:e,children:t,opacity:i,blur:n,zIndex:r,sizing:s,transition:a}){let o=t2(()=>new tR({opacity:i,blur:n,zIndex:r,sizing:s}));return t3(e,o),t5(o),ih(o,{sizing:s},a),ih(o,{opacity:i,blur:n,zIndex:r},a,{assignUndefined:!1}),o.element?(0,tU.createPortal)(t,o.element):null}function iS({ref:e,minLength:t,transition:i}){let n=t2(()=>new tD({minLength:t}));return t3(e,n),t5(n),ih(n,{minLength:t},i,{assignUndefined:!1}),null}e.s(["AnimationConfigProvider",0,tj,"Background",0,iv,"Frame",0,ip,"Glass",0,ib,"GlassContainer",0,ix,"HStack",0,ic,"Html",0,iw,"LiquidCanvas",0,ie,"LiquidScene",0,t9,"Overlay",0,im,"Padding",0,ig,"Spacer",0,iS,"Transform",0,iy,"VStack",0,id,"ZStack",0,iu,"useAnimate",0,io,"useFrame",0,it,"useInvalidateFrame",0,ia,"useInvalidateLayout",0,is,"useLiquidScene",0,ii,"useRenderer",0,ir,"useTimeline",0,il],4028),e.i(4028),e.s(["AnimationConfigProvider",0,tj,"AnimationManager",0,tG,"AnimationTimeline",0,tX,"Background",0,iv,"Easing",0,tT,"Frame",0,ip,"Glass",0,ib,"GlassContainer",0,ix,"HStack",0,ic,"Html",0,iw,"LiquidCanvas",0,ie,"LiquidScene",0,t9,"Overlay",0,im,"Padding",0,ig,"Spacer",0,iS,"Transform",0,iy,"VStack",0,id,"ZStack",0,iu,"easing",0,function(e={}){return{type:"easing",...e}},"spring",0,function(e={}){return{type:"spring",...e}},"useAnimate",0,io,"useFrame",0,it,"useInvalidateFrame",0,ia,"useInvalidateLayout",0,is,"useLiquidScene",0,ii,"useRenderer",0,ir,"useTimeline",0,il],56414)},98797,e=>{e.n(e.i(56414))}]);