(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function v(){}function ne(t){return t()}function J(){return Object.create(null)}function j(t){t.forEach(ne)}function re(t){return typeof t=="function"}function P(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let B;function D(t,e){return B||(B=document.createElement("a")),B.href=e,t===B.href}function ae(t){return Object.keys(t).length===0}function ue(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function fe(t,e,n){t.$$.on_destroy.push(ue(e,n))}function d(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function de(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function w(){return S(" ")}function q(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function me(t){return Array.from(t.childNodes)}let G;function H(t){G=t}const M=[],Q=[];let A=[];const W=[],_e=Promise.resolve();let X=!1;function pe(){X||(X=!0,_e.then(se))}function F(t){A.push(t)}const U=new Set;let V=0;function se(){if(V!==0)return;const t=G;do{try{for(;V<M.length;){const e=M[V];V++,H(e),ge(e.$$)}}catch(e){throw M.length=0,V=0,e}for(H(null),M.length=0,V=0;Q.length;)Q.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];U.has(n)||(U.add(n),n())}A.length=0}while(M.length);for(;W.length;)W.pop()();X=!1,U.clear(),H(t)}function ge(t){if(t.fragment!==null){t.update(),j(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}function ve(t){const e=[],n=[];A.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),A=e}const R=new Set;let I;function le(){I={r:0,c:[],p:I}}function oe(){I.r||j(I.c),I=I.p}function h(t,e){t&&t.i&&(R.delete(t),t.i(e))}function k(t,e,n,r){if(t&&t.o){if(R.has(t))return;R.add(t),I.c.push(()=>{R.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const $e=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function E(t){t&&t.c()}function C(t,e,n,r){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),r||F(()=>{const o=t.$$.on_mount.map(ne).filter(re);t.$$.on_destroy?t.$$.on_destroy.push(...o):j(o),t.$$.on_mount=[]}),s.forEach(F)}function N(t,e){const n=t.$$;n.fragment!==null&&(ve(n.after_update),j(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function be(t,e){t.$$.dirty[0]===-1&&(M.push(t),pe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(t,e,n,r,i,s,o,u=[-1]){const c=G;H(t);const a=t.$$={fragment:null,ctx:[],props:s,update:v,not_equal:i,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};o&&o(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(l,p,...f)=>{const $=f.length?f[0]:p;return a.ctx&&i(a.ctx[l],a.ctx[l]=$)&&(!a.skip_bound&&a.bound[l]&&a.bound[l]($),_&&be(t,l)),p}):[],a.update(),_=!0,j(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const l=me(e.target);a.fragment&&a.fragment.l(l),l.forEach(b)}else a.fragment&&a.fragment.c();e.intro&&h(t.$$.fragment),C(t,e.target,e.anchor,e.customElement),se()}H(c)}class O{$destroy(){N(this,1),this.$destroy=v}$on(e,n){if(!re(n))return v;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!ae(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ie="/Polygonag-Interview/vim-logo.svg";function ye(t){let e,n,r,i,s,o;return{c(){e=m("main"),n=m("div"),r=m("img"),s=w(),o=m("p"),o.textContent="La correcta instalacion de vidrio es crucial para el exito de un diseno arquitectonico. Utilizamos tecnicas avanzadas y herramientas de ultima generacion para cumplir con los requisitos de diseno y las necesidades de nuestros clientes, asegurando una instalacion segura y precisa.",D(r.src,i=ie)||g(r,"src",i),g(r,"alt","Vim"),g(r,"class","svelte-cm10zd"),g(n,"class","home-container svelte-cm10zd")},m(u,c){y(u,e,c),d(e,n),d(n,r),d(n,s),d(n,o)},p:v,i:v,o:v,d(u){u&&b(e)}}}class he extends O{constructor(e){super(),L(this,e,null,ye,P,{})}}const T=[];function we(t,e=v){let n;const r=new Set;function i(u){if(P(t,u)&&(t=u,n)){const c=!T.length;for(const a of r)a[1](),T.push(a,t);if(c){for(let a=0;a<T.length;a+=2)T[a][0](T[a+1]);T.length=0}}}function s(u){i(u(t))}function o(u,c=v){const a=[u,c];return r.add(a),r.size===1&&(n=e(i)||v),u(t),()=>{r.delete(a),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}const x=we(0);function ke(t){let e,n,r,i,s,o,u,c,a,_;return{c(){e=m("main"),n=m("div"),r=m("div"),i=m("img"),o=w(),u=m("div"),c=m("span"),c.textContent="menu",D(i.src,s=ie)||g(i,"src",s),g(i,"alt","Vim"),g(i,"class","svelte-wj3izf"),g(c,"class","material-symbols-outlined svelte-wj3izf"),g(n,"class","navbar-contianer svelte-wj3izf")},m(l,p){y(l,e,p),d(e,n),d(n,r),d(r,i),d(n,o),d(n,u),d(u,c),a||(_=q(c,"click",t[0]),a=!0)},p:v,i:v,o:v,d(l){l&&b(e),a=!1,_()}}}function xe(t){return[()=>{x.set(1)}]}class K extends O{constructor(e){super(),L(this,e,xe,ke,P,{})}}const qe="/Polygonag-Interview/Enmascarar grupo 1@2x.png",Ce="/Polygonag-Interview/Enmascarar grupo 2@2x.png",Ne="/Polygonag-Interview/Enmascarar grupo 3@2x.png";function Z(t,e,n){const r=t.slice();return r[2]=e[n],r}function ee(t){let e,n,r,i,s,o,u=t[2].name+"",c,a;return{c(){e=m("div"),n=m("img"),i=w(),s=m("div"),o=m("p"),c=S(u),a=w(),D(n.src,r=t[2].img)||g(n,"src",r),g(n,"alt",t[2].name),g(n,"class","svelte-1wtim0i"),g(o,"class","svelte-1wtim0i"),g(s,"class","proyect-title-container svelte-1wtim0i"),g(e,"class","proyect-container svelte-1wtim0i")},m(_,l){y(_,e,l),d(e,n),d(e,i),d(e,s),d(s,o),d(o,c),d(e,a)},p:v,d(_){_&&b(e)}}}function Ee(t){let e,n,r,i=t[1],s=[];for(let o=0;o<i.length;o+=1)s[o]=ee(Z(t,i,o));return{c(){e=m("main"),n=m("div");for(let o=0;o<s.length;o+=1)s[o].c();g(n,"class",r="main-container "+(t[0]==0?"home-margin":"proyects-margin")+" svelte-1wtim0i")},m(o,u){y(o,e,u),d(e,n);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(n,null)},p(o,[u]){if(u&2){i=o[1];let c;for(c=0;c<i.length;c+=1){const a=Z(o,i,c);s[c]?s[c].p(a,u):(s[c]=ee(a),s[c].c(),s[c].m(n,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=i.length}u&1&&r!==(r="main-container "+(o[0]==0?"home-margin":"proyects-margin")+" svelte-1wtim0i")&&g(n,"class",r)},i:v,o:v,d(o){o&&b(e),de(s,o)}}}function ze(t,e,n){let r;return fe(t,x,s=>n(0,r=s)),[r,[{id:1,name:"Valle de Bravo",img:qe},{id:2,name:"Ciudad de Mexico",img:Ce},{id:3,name:"Ciudad de Mexico",img:Ne}]]}class ce extends O{constructor(e){super(),L(this,e,ze,Ee,P,{})}}function Pe(t){let e,n,r,i,s,o,u,c,a,_,l,p;return{c(){e=m("main"),n=m("div"),r=m("span"),r.textContent="close",i=w(),s=m("div"),o=m("p"),o.textContent="Nosotros",u=w(),c=m("p"),c.textContent="Proyectos",a=w(),_=m("p"),_.textContent="Contacto",g(r,"class","material-symbols-outlined svelte-1qladbq"),g(n,"class","close-container svelte-1qladbq"),g(o,"class","svelte-1qladbq"),g(c,"class","svelte-1qladbq"),g(_,"class","svelte-1qladbq"),g(s,"class","menu-container svelte-1qladbq")},m(f,$){y(f,e,$),d(e,n),d(n,r),d(e,i),d(e,s),d(s,o),d(s,u),d(s,c),d(s,a),d(s,_),l||(p=[q(r,"click",t[0]),q(o,"click",t[1]),q(c,"click",t[2]),q(_,"click",t[3])],l=!0)},p:v,i:v,o:v,d(f){f&&b(e),l=!1,j(p)}}}function Ie(t){return[()=>x.set(0),()=>{document.body.scrollIntoView(),x.set(3)},()=>{document.body.scrollIntoView(),x.set(2)},()=>{document.body.scrollIntoView(),x.set(4)}]}class je extends O{constructor(e){super(),L(this,e,Ie,Pe,P,{})}}function Le(t){let e;return{c(){e=m("main"),e.innerHTML=`<div class="container svelte-1xc5zaz"><h1 class="svelte-1xc5zaz">Nosotros</h1> 
    <p class="svelte-1xc5zaz">Nuestro equipo de expertos en instalacion de vidrio trabaja en colaboracion con los arquitectos y disenadores para lograr la vision del proyecto. Comenzamos evaluando los requisitos del diseno y las necesidades de los clientes para determinar que tipo de vidrio es el mas adecuado para el proyecto. Luego, trabajamos en conjunto con los ingenieros para determinar la resistencia y las especificaciones necesarias para cumplir con las normas de seguridad.</p></div>`},m(n,r){y(n,e,r)},p:v,i:v,o:v,d(n){n&&b(e)}}}class Oe extends O{constructor(e){super(),L(this,e,null,Le,P,{})}}function Ve(t){let e;return{c(){e=m("main"),e.innerHTML=`<div class="container svelte-1k34251"><h1 class="svelte-1k34251">Contactanos</h1> 

     <input type="text" placeholder="Nombre" class="svelte-1k34251"/> 
     <input type="text" placeholder="Correo" class="svelte-1k34251"/> 
     <textarea placeholder="Mensaje" class="mensaje-input svelte-1k34251"></textarea> 
     <button type="button" class="svelte-1k34251">Enviar</button></div>`},m(n,r){y(n,e,r)},p:v,i:v,o:v,d(n){n&&b(e)}}}class Te extends O{constructor(e){super(),L(this,e,null,Ve,P,{})}}const{window:Y}=$e;function Me(t){let e,n,r,i,s,o,u,c,a,_;return e=new K({}),r=new Te({}),{c(){E(e.$$.fragment),n=w(),E(r.$$.fragment),i=w(),s=m("div"),o=m("span"),o.textContent="arrow_back",u=S(" Regresar"),g(o,"class","material-symbols-outlined"),g(s,"class","footer svelte-2lbo8b")},m(l,p){C(e,l,p),y(l,n,p),C(r,l,p),y(l,i,p),y(l,s,p),d(s,o),d(s,u),c=!0,a||(_=q(o,"click",t[7]),a=!0)},p:v,i(l){c||(h(e.$$.fragment,l),h(r.$$.fragment,l),c=!0)},o(l){k(e.$$.fragment,l),k(r.$$.fragment,l),c=!1},d(l){N(e,l),l&&b(n),N(r,l),l&&b(i),l&&b(s),a=!1,_()}}}function Ae(t){let e,n,r,i,s,o,u,c,a,_;return e=new K({}),r=new Oe({}),{c(){E(e.$$.fragment),n=w(),E(r.$$.fragment),i=w(),s=m("div"),o=m("span"),o.textContent="arrow_back",u=S(" Regresar"),g(o,"class","material-symbols-outlined"),g(s,"class","footer svelte-2lbo8b")},m(l,p){C(e,l,p),y(l,n,p),C(r,l,p),y(l,i,p),y(l,s,p),d(s,o),d(s,u),c=!0,a||(_=q(o,"click",t[6]),a=!0)},p:v,i(l){c||(h(e.$$.fragment,l),h(r.$$.fragment,l),c=!0)},o(l){k(e.$$.fragment,l),k(r.$$.fragment,l),c=!1},d(l){N(e,l),l&&b(n),N(r,l),l&&b(i),l&&b(s),a=!1,_()}}}function Se(t){let e,n,r,i,s,o,u,c,a,_;return e=new K({}),r=new ce({}),{c(){E(e.$$.fragment),n=w(),E(r.$$.fragment),i=w(),s=m("div"),o=m("span"),o.textContent="arrow_back",u=S(" Regresar"),g(o,"class","material-symbols-outlined"),g(s,"class","footer svelte-2lbo8b")},m(l,p){C(e,l,p),y(l,n,p),C(r,l,p),y(l,i,p),y(l,s,p),d(s,o),d(s,u),c=!0,a||(_=q(o,"click",t[5]),a=!0)},p:v,i(l){c||(h(e.$$.fragment,l),h(r.$$.fragment,l),c=!0)},o(l){k(e.$$.fragment,l),k(r.$$.fragment,l),c=!1},d(l){N(e,l),l&&b(n),N(r,l),l&&b(i),l&&b(s),a=!1,_()}}}function He(t){let e,n;return e=new je({}),{c(){E(e.$$.fragment)},m(r,i){C(e,r,i),n=!0},p:v,i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Be(t){let e,n,r,i,s,o,u,c,a,_,l,p,f=t[0]>300&&te();return r=new he({}),s=new ce({}),{c(){f&&f.c(),e=w(),n=m("div"),E(r.$$.fragment),i=w(),E(s.$$.fragment),o=w(),u=m("div"),c=S("Ver mas proyectos "),a=m("span"),a.textContent="arrow_forward",g(a,"class","material-symbols-outlined"),g(u,"class","footer svelte-2lbo8b")},m($,z){f&&f.m($,z),y($,e,z),y($,n,z),C(r,n,null),d(n,i),C(s,n,null),d(n,o),d(n,u),d(u,c),d(u,a),_=!0,l||(p=q(a,"click",t[4]),l=!0)},p($,z){$[0]>300?f?z&1&&h(f,1):(f=te(),f.c(),h(f,1),f.m(e.parentNode,e)):f&&(le(),k(f,1,1,()=>{f=null}),oe())},i($){_||(h(f),h(r.$$.fragment,$),h(s.$$.fragment,$),_=!0)},o($){k(f),k(r.$$.fragment,$),k(s.$$.fragment,$),_=!1},d($){f&&f.d($),$&&b(e),$&&b(n),N(r),N(s),l=!1,p()}}}function te(t){let e,n;return e=new K({}),{c(){E(e.$$.fragment)},m(r,i){C(e,r,i),n=!0},i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Re(t){let e=!1,n=()=>{e=!1},r,i,s,o,u,c,a;F(t[3]);const _=[Be,He,Se,Ae,Me],l=[];function p(f,$){return f[1]===0?0:f[1]===1?1:f[1]===2?2:f[1]===3?3:f[1]===4?4:-1}return~(s=p(t))&&(o=l[s]=_[s](t)),{c(){i=m("main"),o&&o.c()},m(f,$){y(f,i,$),~s&&l[s].m(i,null),u=!0,c||(a=[q(Y,"scroll",t[2]),q(Y,"scroll",()=>{e=!0,clearTimeout(r),r=setTimeout(n,100),t[3]()})],c=!0)},p(f,[$]){$&1&&!e&&(e=!0,clearTimeout(r),scrollTo(Y.pageXOffset,f[0]),r=setTimeout(n,100));let z=s;s=p(f),s===z?~s&&l[s].p(f,$):(o&&(le(),k(l[z],1,1,()=>{l[z]=null}),oe()),~s?(o=l[s],o?o.p(f,$):(o=l[s]=_[s](f),o.c()),h(o,1),o.m(i,null)):o=null)},i(f){u||(h(o),u=!0)},o(f){k(o),u=!1},d(f){f&&b(i),~s&&l[s].d(),c=!1,j(a)}}}function Ye(t,e,n){let r;function i(l){n(0,r=window.scrollY)}let s;x.subscribe(l=>{n(1,s=l)});function o(){n(0,r=Y.pageYOffset)}return[r,s,i,o,()=>{document.body.scrollIntoView(),x.set(2)},()=>{document.body.scrollIntoView(),x.set(0)},()=>{document.body.scrollIntoView(),x.set(0)},()=>{document.body.scrollIntoView(),x.set(0)}]}class Fe extends O{constructor(e){super(),L(this,e,Ye,Re,P,{})}}new Fe({target:document.getElementById("app")});
