(self.webpackChunkcd_shell=self.webpackChunkcd_shell||[]).push([[9593],{41974:(le,M,x)=>{x.r(M),x.d(M,{DayGridView:()=>ie,DayTable:()=>j,DayTableSlicer:()=>F,Table:()=>A,TableDateProfileGenerator:()=>re,TableRows:()=>B,TableView:()=>k,buildDayTableModel:()=>L,buildDayTableRenderRange:()=>G});var i=x(58043),l=x(18323);class k extends i.DateComponent{constructor(){super(...arguments),this.headerElRef=(0,l.createRef)()}renderSimpleLayout(e,t){let{props:n,context:a}=this,r=[],o=(0,i.getStickyHeaderDates)(a.options);return e&&r.push({type:"header",key:"header",isSticky:o,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),r.push({type:"body",key:"body",liquid:!0,chunk:{content:t}}),(0,l.createElement)(i.ViewContainer,{elClasses:["fc-daygrid"],viewSpec:a.viewSpec},(0,l.createElement)(i.SimpleScrollGrid,{liquid:!n.isHeightAuto&&!n.forPrint,collapsibleWidth:n.forPrint,cols:[],sections:r}))}renderHScrollLayout(e,t,n,a){let r=this.context.pluginHooks.scrollGridImpl;if(!r)throw new Error("No ScrollGrid implementation");let{props:o,context:d}=this,p=!o.forPrint&&(0,i.getStickyHeaderDates)(d.options),h=!o.forPrint&&(0,i.getStickyFooterScrollbar)(d.options),g=[];return e&&g.push({type:"header",key:"header",isSticky:p,chunks:[{key:"main",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),g.push({type:"body",key:"body",liquid:!0,chunks:[{key:"main",content:t}]}),h&&g.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"main",content:i.renderScrollShim}]}),(0,l.createElement)(i.ViewContainer,{elClasses:["fc-daygrid"],viewSpec:d.viewSpec},(0,l.createElement)(r,{liquid:!o.isHeightAuto&&!o.forPrint,forPrint:o.forPrint,collapsibleWidth:o.forPrint,colGroups:[{cols:[{span:n,minWidth:a}]}],sections:g}))}}function D(s,e){let t=[];for(let n=0;n<e;n+=1)t[n]=[];for(let n of s)t[n.row].push(n);return t}function w(s,e){let t=[];for(let n=0;n<e;n+=1)t[n]=[];for(let n of s)t[n.firstCol].push(n);return t}function T(s,e){let t=[];if(s){for(let n=0;n<e;n+=1)t[n]={affectedInstances:s.affectedInstances,isEvent:s.isEvent,segs:[]};for(let n of s.segs)t[n.row].segs.push(n)}else for(let n=0;n<e;n+=1)t[n]=null;return t}const P=(0,i.createFormatter)({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"});function H(s){let{display:e}=s.eventRange.ui;return"list-item"===e||"auto"===e&&!s.eventRange.def.allDay&&s.firstCol===s.lastCol&&s.isStart&&s.isEnd}class N extends i.BaseComponent{render(){let{props:e}=this;return(0,l.createElement)(i.StandardEvent,Object.assign({},e,{elClasses:["fc-daygrid-event","fc-daygrid-block-event","fc-h-event"],defaultTimeFormat:P,defaultDisplayEventEnd:e.defaultDisplayEventEnd,disableResizing:!e.seg.eventRange.def.allDay}))}}class z extends i.BaseComponent{render(){let{props:e,context:t}=this,{options:n}=t,{seg:a}=e,o=(0,i.buildSegTimeText)(a,n.eventTimeFormat||P,t,!0,e.defaultDisplayEventEnd);return(0,l.createElement)(i.EventContainer,Object.assign({},e,{elTag:"a",elClasses:["fc-daygrid-event","fc-daygrid-dot-event"],elAttrs:(0,i.getSegAnchorAttrs)(e.seg,t),defaultGenerator:_,timeText:o,isResizing:!1,isDateSelecting:!1}))}}function _(s){return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"fc-daygrid-event-dot",style:{borderColor:s.borderColor||s.backgroundColor}}),s.timeText&&(0,l.createElement)("div",{className:"fc-event-time"},s.timeText),(0,l.createElement)("div",{className:"fc-event-title"},s.event.title||(0,l.createElement)(l.Fragment,null,"\xa0")))}class V extends i.BaseComponent{constructor(){super(...arguments),this.compileSegs=(0,i.memoize)(U)}render(){let{props:e}=this,{allSegs:t,invisibleSegs:n}=this.compileSegs(e.singlePlacements);return(0,l.createElement)(i.MoreLinkContainer,{elClasses:["fc-daygrid-more-link"],dateProfile:e.dateProfile,todayRange:e.todayRange,allDayDate:e.allDayDate,moreCnt:e.moreCnt,allSegs:t,hiddenSegs:n,alignmentElRef:e.alignmentElRef,alignGridTop:e.alignGridTop,extraDateSpan:e.extraDateSpan,popoverContent:()=>{let a=(e.eventDrag?e.eventDrag.affectedInstances:null)||(e.eventResize?e.eventResize.affectedInstances:null)||{};return(0,l.createElement)(l.Fragment,null,t.map(r=>{let o=r.eventRange.instance.instanceId;return(0,l.createElement)("div",{className:"fc-daygrid-event-harness",key:o,style:{visibility:a[o]?"hidden":""}},H(r)?(0,l.createElement)(z,Object.assign({seg:r,isDragging:!1,isSelected:o===e.eventSelection,defaultDisplayEventEnd:!1},(0,i.getSegMeta)(r,e.todayRange))):(0,l.createElement)(N,Object.assign({seg:r,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:o===e.eventSelection,defaultDisplayEventEnd:!1},(0,i.getSegMeta)(r,e.todayRange))))}))}})}}function U(s){let e=[],t=[];for(let n of s)e.push(n.seg),n.isVisible||t.push(n.seg);return{allSegs:e,invisibleSegs:t}}const q=(0,i.createFormatter)({week:"narrow"});class K extends i.DateComponent{constructor(){super(...arguments),this.rootElRef=(0,l.createRef)(),this.state={dayNumberId:(0,i.getUniqueDomId)()},this.handleRootEl=e=>{(0,i.setRef)(this.rootElRef,e),(0,i.setRef)(this.props.elRef,e)}}render(){let{context:e,props:t,state:n,rootElRef:a}=this,{options:r,dateEnv:o}=e,{date:d,dateProfile:p}=t;const h=t.showDayNumber&&function $(s,e,t){const{start:n,end:a}=e,r=(0,i.addMs)(a,-1),o=t.getYear(n),d=t.getMonth(n),p=t.getYear(r),h=t.getMonth(r);return!(o===p&&d===h)&&(s.valueOf()===n.valueOf()||1===t.getDay(s)&&s.valueOf()<a.valueOf())}(d,p.currentRange,o);return(0,l.createElement)(i.DayCellContainer,{elTag:"td",elRef:this.handleRootEl,elClasses:["fc-daygrid-day",...t.extraClassNames||[]],elAttrs:Object.assign(Object.assign(Object.assign({},t.extraDataAttrs),t.showDayNumber?{"aria-labelledby":n.dayNumberId}:{}),{role:"gridcell"}),defaultGenerator:Y,date:d,dateProfile:p,todayRange:t.todayRange,showDayNumber:t.showDayNumber,isMonthStart:h,extraRenderProps:t.extraRenderProps},(g,v)=>(0,l.createElement)("div",{ref:t.innerElRef,className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",style:{minHeight:t.minHeight}},t.showWeekNumber&&(0,l.createElement)(i.WeekNumberContainer,{elTag:"a",elClasses:["fc-daygrid-week-number"],elAttrs:(0,i.buildNavLinkAttrs)(e,d,"week"),date:d,defaultFormat:q}),!v.isDisabled&&(t.showDayNumber||(0,i.hasCustomDayCellContent)(r)||t.forceDayTop)?(0,l.createElement)("div",{className:"fc-daygrid-day-top"},(0,l.createElement)(g,{elTag:"a",elClasses:["fc-daygrid-day-number",h&&"fc-daygrid-month-start"],elAttrs:Object.assign(Object.assign({},(0,i.buildNavLinkAttrs)(e,d)),{id:n.dayNumberId})})):t.showDayNumber?(0,l.createElement)("div",{className:"fc-daygrid-day-top",style:{visibility:"hidden"}},(0,l.createElement)("a",{className:"fc-daygrid-day-number"},"\xa0")):void 0,(0,l.createElement)("div",{className:"fc-daygrid-day-events",ref:t.fgContentElRef},t.fgContent,(0,l.createElement)("div",{className:"fc-daygrid-day-bottom",style:{marginTop:t.moreMarginTop}},(0,l.createElement)(V,{allDayDate:d,singlePlacements:t.singlePlacements,moreCnt:t.moreCnt,alignmentElRef:a,alignGridTop:!t.showDayNumber,extraDateSpan:t.extraDateSpan,dateProfile:t.dateProfile,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,todayRange:t.todayRange}))),(0,l.createElement)("div",{className:"fc-daygrid-day-bg"},t.bgContent)))}}function Y(s){return s.dayNumberText||(0,l.createElement)(l.Fragment,null,"\xa0")}function I(s){return s.eventRange.instance.instanceId+":"+s.firstCol}function W(s){return I(s)+":"+s.lastCol}function C(s,e,t,n){if(s.firstCol===e&&s.lastCol===t-1)return s;let a=s.eventRange,r=a.range,o=(0,i.intersectRanges)(r,{start:n[e].date,end:(0,i.addDays)(n[t-1].date,1)});return Object.assign(Object.assign({},s),{firstCol:e,lastCol:t-1,eventRange:{def:a.def,ui:Object.assign(Object.assign({},a.ui),{durationEditable:!1}),instance:a.instance,range:o},isStart:s.isStart&&o.start.valueOf()===r.start.valueOf(),isEnd:s.isEnd&&o.end.valueOf()===r.end.valueOf()})}class X extends i.SegHierarchy{constructor(){super(...arguments),this.hiddenConsumes=!1,this.forceHidden={}}addSegs(e){const t=super.addSegs(e),{entriesByLevel:n}=this,a=r=>!this.forceHidden[(0,i.buildEntryKey)(r)];for(let r=0;r<n.length;r+=1)n[r]=n[r].filter(a);return t}handleInvalidInsertion(e,t,n){const{entriesByLevel:a,forceHidden:r}=this,{touchingEntry:o,touchingLevel:d,touchingLateral:p}=e;if(this.hiddenConsumes&&o){const h=(0,i.buildEntryKey)(o);if(!r[h])if(this.allowReslicing){const g=Object.assign(Object.assign({},o),{span:(0,i.intersectSpans)(o.span,t.span)});r[(0,i.buildEntryKey)(g)]=!0,a[d][p]=g,n.push(g),this.splitEntry(o,t,n)}else r[h]=!0,n.push(o)}super.handleInvalidInsertion(e,t,n)}}class O extends i.DateComponent{constructor(){super(...arguments),this.cellElRefs=new i.RefMap,this.frameElRefs=new i.RefMap,this.fgElRefs=new i.RefMap,this.segHarnessRefs=new i.RefMap,this.rootElRef=(0,l.createRef)(),this.state={framePositions:null,maxContentHeight:null,segHeights:{}},this.handleResize=e=>{e&&this.updateSizing(!0)}}render(){let{props:e,state:t,context:n}=this,{options:a}=n,r=e.cells.length,o=w(e.businessHourSegs,r),d=w(e.bgEventSegs,r),p=w(this.getHighlightSegs(),r),h=w(this.getMirrorSegs(),r),{singleColPlacements:g,multiColPlacements:v,moreCnts:R,moreMarginTops:c}=function Z(s,e,t,n,a,r,o){let d=new X(u=>a[s[u.index].eventRange.instance.instanceId+":"+u.span.start+":"+(u.span.end-1)]||1);d.allowReslicing=!0,d.strictOrder=n,!0===e||!0===t?(d.maxCoord=r,d.hiddenConsumes=!0):"number"==typeof e?d.maxStackCnt=e:"number"==typeof t&&(d.maxStackCnt=t,d.hiddenConsumes=!0);let p=[],h=[];for(let u=0;u<s.length;u+=1){let b=s[u],E=W(b);null!=a[E]?p.push({index:u,span:{start:b.firstCol,end:b.lastCol+1}}):h.push(b)}let g=d.addSegs(p),v=d.toRects(),{singleColPlacements:R,multiColPlacements:c,leftoverMargins:m}=function J(s,e,t){let n=function Q(s,e){let t=[];for(let n=0;n<e;n+=1)t.push([]);for(let n of s)for(let a=n.span.start;a<n.span.end;a+=1)t[a].push(n);return t}(s,t.length),a=[],r=[],o=[];for(let d=0;d<t.length;d+=1){let p=n[d],h=[],g=0,v=0;for(let c of p)h.push({seg:C(e[c.index],d,d+1,t),isVisible:!0,isAbsolute:!1,absoluteTop:c.levelCoord,marginTop:c.levelCoord-g}),g=c.levelCoord+c.thickness;let R=[];g=0,v=0;for(let c of p){let m=e[c.index],y=c.span.start===d;v+=c.levelCoord-g,g=c.levelCoord+c.thickness,c.span.end-c.span.start>1?(v+=c.thickness,y&&R.push({seg:C(m,c.span.start,c.span.end,t),isVisible:!0,isAbsolute:!0,absoluteTop:c.levelCoord,marginTop:0})):y&&(R.push({seg:C(m,c.span.start,c.span.end,t),isVisible:!0,isAbsolute:!1,absoluteTop:c.levelCoord,marginTop:v}),v=0)}a.push(h),r.push(R),o.push(v)}return{singleColPlacements:a,multiColPlacements:r,leftoverMargins:o}}(v,s,o),f=[],y=[];for(let u of h){c[u.firstCol].push({seg:u,isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let b=u.firstCol;b<=u.lastCol;b+=1)R[b].push({seg:C(u,b,b+1,o),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let u=0;u<o.length;u+=1)f.push(0);for(let u of g){let b=s[u.index],E=u.span;c[E.start].push({seg:C(b,E.start,E.end,o),isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let S=E.start;S<E.end;S+=1)f[S]+=1,R[S].push({seg:C(b,S,S+1,o),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let u=0;u<o.length;u+=1)y.push(m[u]);return{singleColPlacements:R,multiColPlacements:c,moreCnts:f,moreMarginTops:y}}((0,i.sortEventSegs)(e.fgEventSegs,a.eventOrder),e.dayMaxEvents,e.dayMaxEventRows,a.eventOrderStrict,t.segHeights,t.maxContentHeight,e.cells),m=e.eventDrag&&e.eventDrag.affectedInstances||e.eventResize&&e.eventResize.affectedInstances||{};return(0,l.createElement)("tr",{ref:this.rootElRef,role:"row"},e.renderIntro&&e.renderIntro(),e.cells.map((f,y)=>{let u=this.renderFgSegs(y,e.forPrint?g[y]:v[y],e.todayRange,m),b=this.renderFgSegs(y,function ee(s,e){if(!s.length)return[];let t=function te(s){let e={};for(let t of s)for(let n of t)e[n.seg.eventRange.instance.instanceId]=n.absoluteTop;return e}(e);return s.map(n=>({seg:n,isVisible:!0,isAbsolute:!0,absoluteTop:t[n.eventRange.instance.instanceId],marginTop:0}))}(h[y],v),e.todayRange,{},!!e.eventDrag,!!e.eventResize,!1);return(0,l.createElement)(K,{key:f.key,elRef:this.cellElRefs.createRef(f.key),innerElRef:this.frameElRefs.createRef(f.key),dateProfile:e.dateProfile,date:f.date,showDayNumber:e.showDayNumbers,showWeekNumber:e.showWeekNumbers&&0===y,forceDayTop:e.showWeekNumbers,todayRange:e.todayRange,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,extraRenderProps:f.extraRenderProps,extraDataAttrs:f.extraDataAttrs,extraClassNames:f.extraClassNames,extraDateSpan:f.extraDateSpan,moreCnt:R[y],moreMarginTop:c[y],singlePlacements:g[y],fgContentElRef:this.fgElRefs.createRef(f.key),fgContent:(0,l.createElement)(l.Fragment,null,(0,l.createElement)(l.Fragment,null,u),(0,l.createElement)(l.Fragment,null,b)),bgContent:(0,l.createElement)(l.Fragment,null,this.renderFillSegs(p[y],"highlight"),this.renderFillSegs(o[y],"non-business"),this.renderFillSegs(d[y],"bg-event")),minHeight:e.cellMinHeight})}))}componentDidMount(){this.updateSizing(!0),this.context.addResizeHandler(this.handleResize)}componentDidUpdate(e,t){this.updateSizing(!(0,i.isPropsEqual)(e,this.props))}componentWillUnmount(){this.context.removeResizeHandler(this.handleResize)}getHighlightSegs(){let{props:e}=this;return e.eventDrag&&e.eventDrag.segs.length?e.eventDrag.segs:e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:e.dateSelectionSegs}getMirrorSegs(){let{props:e}=this;return e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:[]}renderFgSegs(e,t,n,a,r,o,d){let{context:p}=this,{eventSelection:h}=this.props,{framePositions:g}=this.state,v=1===this.props.cells.length,R=r||o||d,c=[];if(g)for(let m of t){let{seg:f}=m,{instanceId:y}=f.eventRange.instance,u=m.isVisible&&!a[y],b=m.isAbsolute,E="",S="";b&&(p.isRtl?(S=0,E=g.lefts[f.lastCol]-g.lefts[f.firstCol]):(E=0,S=g.rights[f.firstCol]-g.rights[f.lastCol])),c.push((0,l.createElement)("div",{className:"fc-daygrid-event-harness"+(b?" fc-daygrid-event-harness-abs":""),key:I(f),ref:R?null:this.segHarnessRefs.createRef(W(f)),style:{visibility:u?"":"hidden",marginTop:b?"":m.marginTop,top:b?m.absoluteTop:"",left:E,right:S}},H(f)?(0,l.createElement)(z,Object.assign({seg:f,isDragging:r,isSelected:y===h,defaultDisplayEventEnd:v},(0,i.getSegMeta)(f,n))):(0,l.createElement)(N,Object.assign({seg:f,isDragging:r,isResizing:o,isDateSelecting:d,isSelected:y===h,defaultDisplayEventEnd:v},(0,i.getSegMeta)(f,n)))))}return c}renderFillSegs(e,t){let{isRtl:n}=this.context,{todayRange:a}=this.props,{framePositions:r}=this.state,o=[];if(r)for(let d of e){let p=n?{right:0,left:r.lefts[d.lastCol]-r.lefts[d.firstCol]}:{left:0,right:r.rights[d.firstCol]-r.rights[d.lastCol]};o.push((0,l.createElement)("div",{key:(0,i.buildEventRangeKey)(d.eventRange),className:"fc-daygrid-bg-harness",style:p},"bg-event"===t?(0,l.createElement)(i.BgEvent,Object.assign({seg:d},(0,i.getSegMeta)(d,a))):(0,i.renderFill)(t)))}return(0,l.createElement)(l.Fragment,{},...o)}updateSizing(e){let{props:t,state:n,frameElRefs:a}=this;if(!t.forPrint&&null!==t.clientWidth){if(e){let p=t.cells.map(h=>a.currentMap[h.key]);if(p.length){let h=this.rootElRef.current,g=new i.PositionCache(h,p,!0,!1);(!n.framePositions||!n.framePositions.similarTo(g))&&this.setState({framePositions:new i.PositionCache(h,p,!0,!1)})}}const r=this.state.segHeights,o=this.querySegHeights(),d=!0===t.dayMaxEvents||!0===t.dayMaxEventRows;this.safeSetState({segHeights:Object.assign(Object.assign({},r),o),maxContentHeight:d?this.computeMaxContentHeight():null})}}querySegHeights(){let e=this.segHarnessRefs.currentMap,t={};for(let n in e){let a=Math.round(e[n].getBoundingClientRect().height);t[n]=Math.max(t[n]||0,a)}return t}computeMaxContentHeight(){let e=this.props.cells[0].key,n=this.fgElRefs.currentMap[e];return this.cellElRefs.currentMap[e].getBoundingClientRect().bottom-n.getBoundingClientRect().top}getCellEls(){let e=this.cellElRefs.currentMap;return this.props.cells.map(t=>e[t.key])}}O.addStateEquality({segHeights:i.isPropsEqual});class B extends i.DateComponent{constructor(){super(...arguments),this.splitBusinessHourSegs=(0,i.memoize)(D),this.splitBgEventSegs=(0,i.memoize)(D),this.splitFgEventSegs=(0,i.memoize)(D),this.splitDateSelectionSegs=(0,i.memoize)(D),this.splitEventDrag=(0,i.memoize)(T),this.splitEventResize=(0,i.memoize)(T),this.rowRefs=new i.RefMap}render(){let{props:e,context:t}=this,n=e.cells.length,a=this.splitBusinessHourSegs(e.businessHourSegs,n),r=this.splitBgEventSegs(e.bgEventSegs,n),o=this.splitFgEventSegs(e.fgEventSegs,n),d=this.splitDateSelectionSegs(e.dateSelectionSegs,n),p=this.splitEventDrag(e.eventDrag,n),h=this.splitEventResize(e.eventResize,n),g=n>=7&&e.clientWidth?e.clientWidth/t.options.aspectRatio/6:null;return(0,l.createElement)(i.NowTimer,{unit:"day"},(v,R)=>(0,l.createElement)(l.Fragment,null,e.cells.map((c,m)=>(0,l.createElement)(O,{ref:this.rowRefs.createRef(m),key:c.length?c[0].date.toISOString():m,showDayNumbers:n>1,showWeekNumbers:e.showWeekNumbers,todayRange:R,dateProfile:e.dateProfile,cells:c,renderIntro:e.renderRowIntro,businessHourSegs:a[m],eventSelection:e.eventSelection,bgEventSegs:r[m].filter(ne),fgEventSegs:o[m],dateSelectionSegs:d[m],eventDrag:p[m],eventResize:h[m],dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,clientWidth:e.clientWidth,clientHeight:e.clientHeight,cellMinHeight:g,forPrint:e.forPrint}))))}componentDidMount(){this.registerInteractiveComponent()}componentDidUpdate(){this.registerInteractiveComponent()}registerInteractiveComponent(){if(!this.rootEl){const e=this.rowRefs.currentMap[0].getCellEls()[0],t=e?e.closest(".fc-daygrid-body"):null;t&&(this.rootEl=t,this.context.registerInteractiveComponent(this,{el:t,isHitComboAllowed:this.props.isHitComboAllowed}))}}componentWillUnmount(){this.rootEl&&(this.context.unregisterInteractiveComponent(this),this.rootEl=null)}prepareHits(){this.rowPositions=new i.PositionCache(this.rootEl,this.rowRefs.collect().map(e=>e.getCellEls()[0]),!1,!0),this.colPositions=new i.PositionCache(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)}queryHit(e,t){let{colPositions:n,rowPositions:a}=this,r=n.leftToIndex(e),o=a.topToIndex(t);if(null!=o&&null!=r){let d=this.props.cells[o][r];return{dateProfile:this.props.dateProfile,dateSpan:Object.assign({range:this.getCellRange(o,r),allDay:!0},d.extraDateSpan),dayEl:this.getCellEl(o,r),rect:{left:n.lefts[r],right:n.rights[r],top:a.tops[o],bottom:a.bottoms[o]},layer:0}}return null}getCellEl(e,t){return this.rowRefs.currentMap[e].getCellEls()[t]}getCellRange(e,t){let n=this.props.cells[e][t].date;return{start:n,end:(0,i.addDays)(n,1)}}}function ne(s){return s.eventRange.def.allDay}class A extends i.DateComponent{constructor(){super(...arguments),this.elRef=(0,l.createRef)(),this.needsScrollReset=!1}render(){let{props:e}=this,{dayMaxEventRows:t,dayMaxEvents:n,expandRows:a}=e,r=!0===n||!0===t;return r&&!a&&(r=!1,t=null,n=null),(0,l.createElement)("div",{ref:this.elRef,className:["fc-daygrid-body",r?"fc-daygrid-body-balanced":"fc-daygrid-body-unbalanced",a?"":"fc-daygrid-body-natural"].join(" "),style:{width:e.clientWidth,minWidth:e.tableMinWidth}},(0,l.createElement)("table",{role:"presentation",className:"fc-scrollgrid-sync-table",style:{width:e.clientWidth,minWidth:e.tableMinWidth,height:a?e.clientHeight:""}},e.colGroupNode,(0,l.createElement)("tbody",{role:"presentation"},(0,l.createElement)(B,{dateProfile:e.dateProfile,cells:e.cells,renderRowIntro:e.renderRowIntro,showWeekNumbers:e.showWeekNumbers,clientWidth:e.clientWidth,clientHeight:e.clientHeight,businessHourSegs:e.businessHourSegs,bgEventSegs:e.bgEventSegs,fgEventSegs:e.fgEventSegs,dateSelectionSegs:e.dateSelectionSegs,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,dayMaxEvents:n,dayMaxEventRows:t,forPrint:e.forPrint,isHitComboAllowed:e.isHitComboAllowed}))))}componentDidMount(){this.requestScrollReset()}componentDidUpdate(e){e.dateProfile!==this.props.dateProfile?this.requestScrollReset():this.flushScrollReset()}requestScrollReset(){this.needsScrollReset=!0,this.flushScrollReset()}flushScrollReset(){if(this.needsScrollReset&&this.props.clientWidth){const e=function se(s,e){let t;return e.currentRangeUnit.match(/year|month/)&&(t=s.querySelector(`[data-date="${(0,i.formatIsoMonthStr)(e.currentDate)}-01"]`)),t||(t=s.querySelector(`[data-date="${(0,i.formatDayString)(e.currentDate)}"]`)),t}(this.elRef.current,this.props.dateProfile);if(e){const t=e.closest(".fc-daygrid-body"),n=t.closest(".fc-scroller"),a=e.getBoundingClientRect().top-t.getBoundingClientRect().top;n.scrollTop=a?a+1:0}this.needsScrollReset=!1}}}class F extends i.Slicer{constructor(){super(...arguments),this.forceDayIfListItem=!0}sliceRange(e,t){return t.sliceRange(e)}}class j extends i.DateComponent{constructor(){super(...arguments),this.slicer=new F,this.tableRef=(0,l.createRef)()}render(){let{props:e,context:t}=this;return(0,l.createElement)(A,Object.assign({ref:this.tableRef},this.slicer.sliceProps(e,e.dateProfile,e.nextDayThreshold,t,e.dayTableModel),{dateProfile:e.dateProfile,cells:e.dayTableModel.cells,colGroupNode:e.colGroupNode,tableMinWidth:e.tableMinWidth,renderRowIntro:e.renderRowIntro,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.showWeekNumbers,expandRows:e.expandRows,headerAlignElRef:e.headerAlignElRef,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint}))}}class ie extends k{constructor(){super(...arguments),this.buildDayTableModel=(0,i.memoize)(L),this.headerRef=(0,l.createRef)(),this.tableRef=(0,l.createRef)()}render(){let{options:e,dateProfileGenerator:t}=this.context,{props:n}=this,a=this.buildDayTableModel(n.dateProfile,t),r=e.dayHeaders&&(0,l.createElement)(i.DayHeader,{ref:this.headerRef,dateProfile:n.dateProfile,dates:a.headerDates,datesRepDistinctDays:1===a.rowCnt}),o=d=>(0,l.createElement)(j,{ref:this.tableRef,dateProfile:n.dateProfile,dayTableModel:a,businessHours:n.businessHours,dateSelection:n.dateSelection,eventStore:n.eventStore,eventUiBases:n.eventUiBases,eventSelection:n.eventSelection,eventDrag:n.eventDrag,eventResize:n.eventResize,nextDayThreshold:e.nextDayThreshold,colGroupNode:d.tableColGroupNode,tableMinWidth:d.tableMinWidth,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.weekNumbers,expandRows:!n.isHeightAuto,headerAlignElRef:this.headerElRef,clientWidth:d.clientWidth,clientHeight:d.clientHeight,forPrint:n.forPrint});return e.dayMinWidth?this.renderHScrollLayout(r,o,a.colCnt,e.dayMinWidth):this.renderSimpleLayout(r,o)}}function L(s,e){let t=new i.DaySeriesModel(s.renderRange,e);return new i.DayTableModel(t,/year|month|week/.test(s.currentRangeUnit))}class re extends i.DateProfileGenerator{buildRenderRange(e,t,n){let a=super.buildRenderRange(e,t,n),{props:r}=this;return G({currentRange:a,snapToWeek:/^(year|month)$/.test(t),fixedWeekCount:r.fixedWeekCount,dateEnv:r.dateEnv})}}function G(s){let r,{dateEnv:e,currentRange:t}=s,{start:n,end:a}=t;if(s.snapToWeek&&(n=e.startOfWeek(n),r=e.startOfWeek(a),r.valueOf()!==a.valueOf()&&(a=(0,i.addWeeks)(r,1))),s.fixedWeekCount){let o=e.startOfWeek(e.startOfMonth((0,i.addDays)(t.end,-1))),d=Math.ceil((0,i.diffWeeks)(o,a));a=(0,i.addWeeks)(a,6-d)}return{start:n,end:a}}(0,i.injectStyles)(':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}')}}]);