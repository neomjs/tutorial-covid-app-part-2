(self.webpackChunkcovid=self.webpackChunkcovid||[]).push([[768],{262:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var s=o(968);class n extends s.Z{static getConfig(){return{className:"Neo.form.field.Search",ntype:"searchfield",cls:["neo-searchfield","neo-textfield"],hideLabel:!0,placeholderText:"Search"}}}Neo.applyClassConfig(n)},112:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var s=o(300),n=o(249),l=o(982);class i extends l.Z{static getConfig(){return{className:"Neo.selection.ListModel",ntype:"selection-listmodel",stayInList:!0}}onKeyDownDown(e){this.view.disableSelection||this.onNavKey(e,1)}onKeyDownLeft(e){this.onKeyDownUp(e)}onKeyDownRight(e){this.onKeyDownDown(e)}onKeyDownUp(e){this.view.disableSelection||this.onNavKey(e,-1)}onNavKey(e,t){let o,s,n,l,i=this,r=e.path[0],a=i.view,c=a.store,d=c.getCount(),p=!1;r.cls.includes(a.itemCls)?(l=a.getItemRecordId(r.id),o=c.indexOf(l)+t,o<0?i.stayInList?o=d-1:(p=!0,a.fire("selectPreFirstItem")):o>=d&&(i.stayInList?o=0:(p=!0,a.fire("selectPostLastItem")))):o=0,p?i.deselectAll():(n=c.getAt(o),s=a.getItemId(n[i.view.getKeyProperty()]),i.select(s),a.focus(s),a.fire("itemNavigate",n))}register(e){super.register(e);let t=this.id,o=this.view;o.keys&&o.keys._keys.push({fn:"onKeyDownDown",key:"Down",scope:t},{fn:"onKeyDownLeft",key:"Left",scope:t},{fn:"onKeyDownRight",key:"Right",scope:t},{fn:"onKeyDownUp",key:"Up",scope:t})}selectAt(e){let t=this.view,o=t.store.getKeyAt(e),s=o&&t.getItemId(o);s&&(this.select(s),t.focus(s))}unregister(){let e=this.id,t=this.view;t.keys&&t.keys.removeKeys([{fn:"onKeyDownDown",key:"Down",scope:e},{fn:"onKeyDownLeft",key:"Left",scope:e},{fn:"onKeyDownRight",key:"Right",scope:e},{fn:"onKeyDownUp",key:"Up",scope:e}]),super.unregister()}}Neo.applyClassConfig(i);var r=o(926);o(471);class a extends n.Z{static getConfig(){return{className:"Neo.list.Base",ntype:"list",autoDestroyStore:!0,cls:["neo-list-container","neo-list"],disableSelection_:!1,displayField:"name",draggable_:!1,dragZone:null,dragZoneConfig:null,highlightFilterValue:!0,itemCls:"neo-list-item",keys:{},selectionModel_:null,silentSelect:!1,store_:null,useCheckBoxes_:!1,_vdom:{tag:"ul",cn:[]}}}constructor(e){super(e);let t=this,o=t.domListeners;o.push({click:{fn:t.onClick,scope:t}}),t.domListeners=o}afterSetDisableSelection(e,t){let o=this;e&&o.rendered&&o.selectionModel&&o.selectionModel.deselectAll()}afterSetDraggable(e,t){let s=this;e&&!s.dragZone&&o.e(861).then(o.bind(o,804)).then((e=>{s.dragZone=Neo.create({module:e.default,appName:s.appName,owner:s,...s.dragZoneConfig||{}})}))}afterSetSelectionModel(e,t){this.rendered&&e.register(this)}afterSetStore(e,t){let o=this;e&&(e.on({filter:o.onStoreFilter,load:o.onStoreLoad,scope:o}),e.getCount()>0&&o.onStoreLoad())}afterSetUseCheckBoxes(e,t){let o=this.cls;r.Z[e?"add":"remove"](o,"neo-use-checkicons"),this.cls=o}beforeSetSelectionModel(e,t){return t&&t.destroy(),s.Z.beforeSetInstance(e,i)}beforeSetStore(e,t){return t&&t.destroy(),s.Z.beforeSetInstance(e)}createItem(e){let t=this,o=t.createItemContent(e);const s={tag:"li",cls:[t.itemCls],id:t.getItemId(e[t.getKeyProperty()]),tabIndex:-1};return s["string"==typeof o?"html":"cn"]=o,s}createItemContent(e){let t,o=this,s=e[this.displayField];return o.highlightFilterValue&&(t=o.store.getFilter(o.displayField),t&&null!==t.value&&""!==t.value&&(s=s.replace(new RegExp(t.value,"gi"),(function(e){return'<span class="neo-highlight-search">'+e+"</span>"})))),s}createItems(e=!1){let t=this,o=t.vdom;o.cn=[],t.store.items.forEach((e=>{o.cn.push(t.createItem(e))})),e?t._vdom=o:t.promiseVdomUpdate().then((()=>{t.fire("createItems")}))}destroy(){let e=this;e.selectionModel&&e.selectionModel.destroy(),e.store&&e.autoDestroyStore&&e.store.destroy(),super.destroy()}focus(e){super.focus(e),e&&Neo.main.DomAccess.scrollIntoView({behavior:"auto",id:e||this.id})}getItemId(e){return this.id+"__"+e}getItemRecordId(e){let t=e.split("__")[1],o=this.store.model,s=o&&o.getField(o.keyProperty);return!s||"integer"!==s.type.toLowerCase()&&"number"!==s.type.toLowerCase()||(t=parseInt(t)),t}getKeyProperty(){return this.store.keyProperty||this.store.model.keyProperty}onClick(e){let t=this;e.path[0].id===t.id?t.onContainerClick(e):e.path[0].cls.includes(t.itemCls)&&t.onItemClick(e)}onConstructed(){super.onConstructed();let e=this;e.selectionModel&&e.selectionModel.register(e)}onContainerClick(e){this.fire("containerClick",e)}onItemClick(e){let t=this,o=e.path[0].id;!t.disableSelection&&t.selectionModel&&t.selectionModel.select(o),t.fire("itemClick",t.store.get(t.getItemRecordId(o)))}onStoreFilter(){this.createItems()}onStoreLoad(){let e=this;if(!e.mounted&&e.rendering){const t=e.on("rendered",(()=>{e.un("rendered",t),e.createItems()}))}else e.createItems()}selectItem(e){let t=this;!t.disableSelection&&t.selectionModel&&t.selectionModel.selectAt(e)}}Neo.applyClassConfig(a)},462:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var s=o(112),n=o(971),l=o(926);class i extends s.Z{static getConfig(){return{className:"Neo.tree.List",ntype:"treelist",cls:["neo-tree-list"],disableSelection:!0,dragZone:null,showCollapseExpandAllIcons:!0,sortable_:!1,sortZone:null,sortZoneConfig:null,_vdom:{cn:[{tag:"ul",cls:["neo-list-container","neo-list"],cn:[]}]}}}afterSetDraggable(e,t){let s=this;e&&(s.sortable?console.error("tree.List can be either draggable or sortable, not both.",s.id):s.dragZone||o.e(488).then(o.bind(o,124)).then((e=>{s.dragZone=Neo.create({module:e.default,appName:s.appName,owner:s,...s.dragZoneConfig||{}})})))}afterSetSortable(e,t){let s=this;e&&(s.draggable?console.error("tree.List can be either draggable or sortable, not both.",s.id):s.sortZone||o.e(387).then(o.bind(o,860)).then((e=>{s.sortZone=Neo.create({module:e.default,appName:s.appName,boundaryContainerId:s.id,owner:s,...s.sortZoneConfig||{}})})))}beforeSetStore(e,t){return e||(e=Neo.create(n.Z,{keyProperty:"id"})),super.beforeSetStore(e,t)}collapseAll(e=!1){let t,o=this,s=o.vdom,n=!1;o.store.items.forEach((e=>{e.isLeaf||(t=o.getVdomChild(o.getItemId(e.id),s),t.cls.includes("neo-folder-open")&&(l.Z.remove(t.cls,"neo-folder-open"),n=!0))})),n&&(o[e?"_vdom":"vdom"]=s)}createItems(e,t,o){let s,n,l=this,i=l.store.find("parentId",e);return i.length>0&&(t.cn||(t.cn=[]),null!==e?(t.cn.push({tag:"ul",cls:["neo-list"],cn:[],style:{paddingLeft:"15px"}}),n=t.cn[t.cn.length-1]):n=t,i.forEach((e=>{s=["neo-list-item"],e.isLeaf?s.push(e.singleton?"neo-list-item-leaf-singleton":"neo-list-item-leaf"):(s.push("neo-list-folder"),e.collapsed||s.push("neo-folder-open")),n.cn.push({tag:"li",cls:s,id:l.getItemId(e.id),cn:[{tag:"span",cls:["neo-list-item-content"],innerHTML:e.name,style:{pointerEvents:"none"}}],style:{padding:"10px",position:e.isLeaf?null:"sticky",top:e.isLeaf?null:38*o+"px",zIndex:e.isLeaf?null:20/(o+1)}}),n=l.createItems(e.id,n,o+1)}))),t}expandAll(e=!1){let t,o=this,s=o.vdom,n=!1;o.store.items.forEach((e=>{e.isLeaf||(t=o.getVdomChild(o.getItemId(e.id),s),t.cls.includes("neo-folder-open")||(l.Z.add(t.cls,"neo-folder-open"),n=!0))})),n&&(o[e?"_vdom":"vdom"]=s)}filter(e,t,o,s=!1){let n,l,i,r=this,a=!0,c=new RegExp(t,"gi"),d=r.vdom;return t||(t=""),r.store.items.forEach((p=>{p.parentId===o&&(l=!1,i=r.getVdomChild(r.getItemId(p.id),d),i.cn[0].innerHTML=p[e].replace(c,(e=>(l=!0,`<span class="neo-highlight-search">${e}</span>`))),n=!!p.isLeaf||r.filter(e,t,p.id,l||s),(l||s||!1===n||""===t)&&(a=!1),i.style.display=a?"none":"list-item")})),null===o&&(r.expandAll(!0),r.vdom=d),a}getListItemsRoot(){return this.vdom.cn[this.showCollapseExpandAllIcons?2:0]}onClick(e){e.target.cls.includes("neo-treelist-menu-item")?this.onMenuItemClick(e.target.cls):super.onClick(e)}onConstructed(){super.onConstructed();let e=this,t=e.vdom;e.showCollapseExpandAllIcons&&(t.cn.unshift({cls:["neo-treelist-menu-item","neo-treelist-collapse-all-icon"],cn:[{tag:"span",cls:["neo-treelist-menu-item-content"]}]},{cls:["neo-treelist-menu-item","neo-treelist-expand-all-icon"],cn:[{tag:"span",cls:["neo-treelist-menu-item-content"]}]}),e.vdom=t)}onItemClick(e){let t,o,s,n,i=this,r=i.vdom,a=i.store.items,c=0,d=a.length,p=e.path.map((e=>e.id));for(;c<d;c++)if(s=a[c],n=i.getItemId(s.id),p.includes(n)){o=s,t=i.getVdomChild(n);break}t&&(t.cls&&t.cls.includes("neo-list-folder")?(l.Z.toggle(t.cls,"neo-folder-open"),i.vdom=r):(i.onLeafItemClick(o),i.fire("leafItemClick",o)),super.onItemClick(e))}onLeafItemClick(e){}onMenuItemClick(e){e.includes("neo-treelist-collapse-all-icon")?this.collapseAll():this.expandAll()}}Neo.applyClassConfig(i)}}]);