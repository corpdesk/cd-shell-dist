(self.webpackChunkcd_shell=self.webpackChunkcd_shell||[]).push([[9079,1460],{89079:(g,b,c)=>{c.r(b),c.d(b,{outputFromObservable:()=>D,outputToObservable:()=>O,takeUntilDestroyed:()=>d,toObservable:()=>_,toSignal:()=>y});var t=c(72264),l=c(44866),v=c(32778);function d(r){r||((0,t.assertInInjectionContext)(d),r=(0,t.inject)(t.DestroyRef));const e=new l.Observable(n=>r.onDestroy(n.next.bind(n)));return n=>n.pipe((0,v.takeUntil)(e))}class h{constructor(e){this.source=e,this.destroyed=!1,this.destroyRef=(0,t.inject)(t.DestroyRef),this.destroyRef.onDestroy(()=>{this.destroyed=!0})}subscribe(e){if(this.destroyed)throw new t.\u0275RuntimeError(953,!1);const n=this.source.pipe(d(this.destroyRef)).subscribe({next:s=>e(s)});return{unsubscribe:()=>n.unsubscribe()}}}function D(r,e){return new h(r)}function O(r){const e=(0,t.\u0275getOutputDestroyRef)(r);return new l.Observable(n=>{e?.onDestroy(()=>n.complete());const s=r.subscribe(i=>n.next(i));return()=>s.unsubscribe()})}function _(r,e){!e?.injector&&(0,t.assertInInjectionContext)(_);const n=e?.injector??(0,t.inject)(t.Injector),s=new l.ReplaySubject(1),i=(0,t.effect)(()=>{let o;try{o=r()}catch(a){return void(0,t.untracked)(()=>s.error(a))}(0,t.untracked)(()=>s.next(o))},{injector:n,manualCleanup:!0});return n.get(t.DestroyRef).onDestroy(()=>{i.destroy(),s.complete()}),s.asObservable()}function y(r,e){const n=!e?.manualCleanup;n&&!e?.injector&&(0,t.assertInInjectionContext)(y);const s=n?e?.injector?.get(t.DestroyRef)??(0,t.inject)(t.DestroyRef):null,i=function f(r=Object.is){return(e,n)=>1===e.kind&&1===n.kind&&r(e.value,n.value)}(e?.equal);let o;o=(0,t.signal)(e?.requireSync?{kind:0}:{kind:1,value:e?.initialValue},{equal:i});const a=r.subscribe({next:u=>o.set({kind:1,value:u}),error:u=>{if(e?.rejectErrors)throw u;o.set({kind:2,error:u})}});return s?.onDestroy(a.unsubscribe.bind(a)),(0,t.computed)(()=>{const u=o();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new t.\u0275RuntimeError(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}},{equal:e?.equal})}}}]);