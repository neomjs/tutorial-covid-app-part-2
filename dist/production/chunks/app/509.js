(self.webpackChunkcovid=self.webpackChunkcovid||[]).push([[509],{509:(e,t,a)=>{"use strict";a.r(t),a.d(t,{onStart:()=>M});var n=a(405),o=a(541);class l extends o.Z{static getConfig(){return{className:"Covid.model.Country",fields:[{name:"active",type:"Integer"},{name:"cases",type:"Integer"},{name:"casesPerOneMillion",type:"Integer"},{name:"country",type:"String"},{name:"countryInfo",type:"Object"},{name:"critical",type:"Integer"},{name:"deaths",type:"Integer"},{name:"index",type:"Integer"},{name:"infected",type:"Integer"},{name:"recovered",type:"Integer"},{name:"tests",type:"Integer"},{name:"testsPerOneMillion",type:"Integer"},{name:"todayCases",type:"Integer"},{name:"todayDeaths",type:"Integer"}]}}}Neo.applyClassConfig(l);var i=a(471);class r extends i.Z{static getConfig(){return{className:"Covid.store.Countries",keyProperty:"country",model:l,sorters:[{property:"cases",direction:"DESC"}]}}}Neo.applyClassConfig(r);var s=a(643);class c extends s.Z{static getStaticConfig(){return{flagRegEx:/ /gi,locales:"default"}}static getConfig(){return{className:"Covid.Util"}}static formatInfected(e){let t=e.value;return Neo.isNumber(t)?(t=Math.round(t/100),t/=100,t=t.toFixed(2)+" %",t.toLocaleString(c.locales)):t||"N/A"}static formatNumber(e,t){let a=e.value;return Neo.isNumber(a)?(a=a.toLocaleString(c.locales),"string"!=typeof t?a:`<span style="color:${t};">${a}</span>`):a||"N/A"}static getCountryFlagUrl(e){let t=e.toLowerCase().replace(c.flagRegEx,"-");return t={bosnia:"bosnia-and-herzegovina","cabo-verde":"cape-verde",car:"central-african-republic","caribbean-netherlands":"netherlands","channel-islands":"jersey","côte-d'ivoire":"ivory-coast",congo:"republic-of-the-congo","congo,-the-democratic-republic-of-the":"democratic-republic-of-congo",curaçao:"curacao",czechia:"czech-republic","diamond-princess":"japan",drc:"democratic-republic-of-congo","el-salvador":"salvador",eswatini:"swaziland","faeroe-islands":"faroe-islands","falkland-islands-(malvinas)":"falkland-islands","french-guiana":"france",guadeloupe:"france","holy-see-(vatican-city-state)":"vatican-city","iran,-islamic-republic-of":"iran","lao-people's-democratic-republic":"laos","libyan-arab-jamahiriya":"libya",macedonia:"republic-of-macedonia","marshall-islands":"marshall-island",mayotte:"france","moldova,-republic-of":"moldova","ms-zaandam":"netherlands","new-caledonia":"france","palestinian-territory,-occupied":"palestine",poland:"republic-of-poland",réunion:"france","s.-korea":"south-korea","st.-barth":"st-barts","saint-lucia":"st-lucia","saint-martin":"sint-maarten","saint-pierre-miquelon":"france","saint-vincent-and-the-grenadines":"st-vincent-and-the-grenadines","syrian-arab-republic":"syria","tanzania,-united-republic-of":"tanzania","timor-leste":"east-timor","turks-and-caicos-islands":"turks-and-caicos","u.s.-virgin-islands":"virgin-islands",uae:"united-arab-emirates",uk:"united-kingdom",usa:"united-states-of-america",uzbekistan:"uzbekistn","venezuela,-bolivarian-republic-of":"venezuela","viet-nam":"vietnam","wallis-and-futuna":"france"}[t]||t,"https://raw.githubusercontent.com/neomjs/pages/master/resources/images/flaticon/country_flags/png/"+t+".png"}static indexRenderer(e){return{cls:["neo-index-column","neo-table-cell"],html:e.index+1}}}Neo.applyClassConfig(c);const d=c;class m extends n.Z{static getConfig(){return{className:"Covid.view.country.Table",cls:["covid-country-table","neo-table-container"],columnDefaults:{align:"right",defaultSortDirection:"DESC",renderer:d.formatNumber},columns:[{cls:["neo-index-column","neo-table-header-button"],dataField:"index",dock:"left",minWidth:40,text:"#",renderer:d.indexRenderer,width:40},{align:"left",dataField:"country",defaultSortDirection:"ASC",dock:"left",text:"Country",width:200,renderer:e=>({cls:["neo-country-column","neo-table-cell"],html:['<div style="display: flex; align-items: center">','<img style="height:20px; margin-right:10px; width:20px;" src="'+d.getCountryFlagUrl(e.value)+'">'+e.value,"</div>"].join("")})},{dataField:"cases",text:"Cases"},{dataField:"casesPerOneMillion",text:"Cases / 1M"},{dataField:"infected",text:"Infected",renderer:e=>d.formatInfected(e)},{dataField:"active",text:"Active",renderer:e=>d.formatNumber(e,"#64B5F6")},{dataField:"recovered",text:"Recovered",renderer:e=>d.formatNumber(e,"#28ca68")},{dataField:"critical",text:"Critical",renderer:e=>d.formatNumber(e,"orange")},{dataField:"deaths",text:"Deaths",renderer:e=>d.formatNumber(e,"#fb6767")},{dataField:"todayCases",text:"Cases today"},{dataField:"todayDeaths",text:"Deaths today",renderer:e=>d.formatNumber(e,"#fb6767")},{dataField:"tests",text:"Tests"},{dataField:"testsPerOneMillion",text:"Tests / 1M"}],store:r}}}Neo.applyClassConfig(m);var u=a(805);class g extends u.Z{static getConfig(){return{className:"Covid.view.FooterContainer",height:25,layout:{ntype:"hbox"},reference:"footer",itemDefaults:{ntype:"component",cls:["neo-link-color"],style:{fontSize:"13px",padding:"10px",paddingTop:0}},items:[{html:'App created with <a target="_blank" href="https://github.com/neomjs/neo">neo.mjs</a>.'},{flex:1},{html:'Data provided by <a target="_blank" href="https://github.com/disease-sh/API">disease.sh/API</a>.'},{flex:1},{html:['Country Flag Icons made by <a target="_blank" href="https://www.flaticon.com/authors/freepik" ','title="Freepik">Freepik</a> from <a target="_blank" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>.'].join("")},{ntype:"button",cls:["neo-button"],handler:"onRemoveFooterButtonClick",height:24,style:{margin:0,marginRight:"10px",marginTop:"-5px"},text:"Remove Footer"}]}}}Neo.applyClassConfig(g);var h=a(845),p=a(192);class y extends p.Z{static getConfig(){return{className:"Covid.view.country.Gallery",cls:["covid-country-gallery","neo-gallery","page","view"],imageHeight:280,imageWidth:340,itemTpl:{cls:["neo-gallery-item","image-wrap","view","neo-transition-1000"],tabIndex:"-1",cn:[{cls:["neo-item-wrapper"],style:{},cn:[{tag:"div",cls:["neo-country-gallery-item"],style:{},cn:[{cls:["neo-item-header"],cn:[{tag:"img",cls:["neo-flag"]},{}]},{tag:"table",cls:["neo-content-table"],cn:[{tag:"tr",cn:[{tag:"td",html:"Cases"},{tag:"td",cls:["neo-align-right"]},{tag:"td",style:{width:"100%"}},{tag:"td",html:"Cases today"},{tag:"td",cls:["neo-align-right"]}]},{tag:"tr",cn:[{tag:"td",html:"Deaths"},{tag:"td",cls:["neo-align-right","neo-content-deaths"]},{tag:"td",style:{width:"100%"}},{tag:"td",html:"Deaths today"},{tag:"td",cls:["neo-align-right","neo-content-deaths"]}]},{tag:"tr",cn:[{tag:"td",html:"Recovered"},{tag:"td",cls:["neo-align-right","neo-content-recovered"]},{tag:"td",style:{width:"100%"}},{tag:"td",html:"Critical"},{tag:"td",cls:["neo-align-right","neo-content-critical"]}]}]}]}]}]},keyProperty:"country",selectOnMount:!1,store:r}}createItem(e,t,a){let n=this,o=e.cn[0].cn[0],l=d.formatNumber,i=o.cn[1];return e.id=n.getItemVnodeId(t[n.keyProperty]),e.cn[0].style.height=n.imageHeight+"px",o.style.height=n.imageHeight-70+"px",o.style.width=n.imageWidth+"px",o.cn[0].cn[0].src=d.getCountryFlagUrl(t.country),o.cn[0].cn[1].html=t.country,i.cn[0].cn[1].html=l({value:t.cases}),i.cn[1].cn[1].html=l({value:t.deaths}),i.cn[2].cn[1].html=l({value:t.recovered}),i.cn[0].cn[4].html=l({value:t.todayCases}),i.cn[1].cn[4].html=l({value:t.todayDeaths}),i.cn[2].cn[4].html=l({value:t.critical}),e}getItemId(e){return e.split("__")[1]}onStoreLoad(e){super.onStoreLoad(e),setTimeout((()=>{this.selectOnMount=!0,this.afterSetMounted(!0,!1)}),200)}}Neo.applyClassConfig(y);var f=a(671);class x extends f.Z{static getConfig(){return{className:"Covid.view.GalleryContainerController",gallery_:null}}beforeGetGallery(e){return e||(this._gallery=e=this.getReference("gallery")),e}onCollapseButtonClick(e){const t=this.getReference("controls-panel"),a=40===t.width;t.width=a?250:40,e.component.text=a?"X":"+"}onOrderButtonClick(e){const t=this.gallery,a=!t.orderByRow;e.component.text=!0===a?"Order By Column":"Order by Row",t.orderByRow=a}onRangefieldChange(e){this.gallery[e.sender.name]=e.value}onRangefieldMounted(e){const t=Neo.getComponent(e);this.gallery.on("change"+Neo.capitalize(t.name),(function(e){e=Math.min(Math.max(e,t.minValue),t.maxValue),t.value=e}))}onSortButtonClick(e){this.gallery.store.sorters=[{property:e.component.field,direction:"DESC"}]}}Neo.applyClassConfig(x);var v=a(242),b=a(309);class C extends u.Z{static getConfig(){return{className:"Covid.view.GalleryContainer",autoMount:!0,cls:["neo-gallery-maincontainer","neo-viewport"],controller:x,gallery:null,galleryConfig:null,layout:{ntype:"hbox",align:"stretch"},items:[{ntype:"container",flex:1,layout:"fit",items:[]},{module:v.Z,cls:["neo-configuration-panel","neo-panel","neo-container"],layout:{ntype:"vbox",align:"stretch"},reference:"controls-panel",style:{backgroundColor:"#2b2b2b"},width:260,containerConfig:{style:{overflowY:"scroll"}},headers:[{dock:"top",items:[{ntype:"button",handler:"onCollapseButtonClick",text:"X"},{ntype:"label",text:"Gallery Controls"}]}],itemDefaults:{flex:"0 1 auto",labelWidth:"110px",style:{padding:"10px"},useInputEvent:!0},items:[{module:b.Z,labelText:"Translate X",maxValue:5e3,minValue:0,name:"translateX",value:0,listeners:{change:"onRangefieldChange",mounted:"onRangefieldMounted"}},{module:b.Z,labelText:"Translate Y",maxValue:1500,minValue:-1500,name:"translateY",value:0,listeners:{change:"onRangefieldChange"}},{module:b.Z,labelText:"Translate Z",maxValue:550,minValue:-4500,name:"translateZ",value:0,listeners:{change:"onRangefieldChange",mounted:"onRangefieldMounted"}},{module:b.Z,labelText:"Amount Rows",maxValue:15,minValue:1,name:"amountRows",value:3,listeners:{change:"onRangefieldChange"}},{ntype:"button",handler:"onOrderButtonClick",text:"Order by Row",style:{margin:"20px"}},{ntype:"label",text:"Sort By:"},{ntype:"container",layout:{ntype:"hbox",align:"stretch"},style:{minHeight:"134px",padding:"0"},items:[{ntype:"container",layout:{ntype:"vbox",align:"stretch"},itemDefaults:{ntype:"button",handler:"onSortButtonClick"},items:[{field:"cases",text:"Cases",style:{margin:"10px",marginTop:"0"}},{field:"deaths",text:"Deaths",style:{margin:"10px",marginBottom:"10px",marginTop:0}},{field:"country",text:"Country",style:{margin:"10px",marginTop:0}},{field:"recovered",text:"Recovered",style:{margin:"10px",marginTop:0}}]},{ntype:"container",layout:{ntype:"vbox",align:"stretch"},itemDefaults:{ntype:"button",handler:"onSortButtonClick"},items:[{field:"todayCases",text:"Cases today",style:{margin:"10px",marginTop:"0"}},{field:"todayDeaths",text:"Deaths today",style:{margin:"10px",marginBottom:"10px",marginTop:0}},{field:"critical",text:"Critical",style:{margin:"10px",marginBottom:"43px",marginTop:0}}]}]},{module:h.Z,text:["<b>Navigation Concept</b>","<p>You can use the Arrow Keys to walk through the items.</p>"].join("")}]}]}}constructor(e){super(e);const t=this;t.gallery=Neo.create({module:y,reference:"gallery",...t.galleryConfig||{}}),t.items[0].items.push(t.gallery)}destroy(...e){this.gallery=null,super.destroy(...e)}}Neo.applyClassConfig(C);var w=a(366),k=a(261);class T extends u.Z{static getConfig(){return{className:"Covid.view.HeaderContainer",cls:["covid-header-container"],layout:{ntype:"hbox",align:"stretch"},items:[{ntype:"component",minWidth:267,reference:"logo",style:{margin:"10px"},width:267,vdom:{tag:"img",src:"https://raw.githubusercontent.com/neomjs/pages/master/resources/images/apps/covid/covid_logo_dark.jpg"}},{ntype:"container",layout:{ntype:"vbox",align:"stretch"},items:[{ntype:"container",height:65,layout:{ntype:"hbox"},reference:"total-stats",itemDefaults:{ntype:"component"},items:[{cls:["covid-numberbox"],vdom:{cn:[{cls:["covid-numberbox-title","cases"],html:"Cases"},{cls:["covid-numberbox-number","cases"]}]}},{cls:["covid-numberbox"],vdom:{cn:[{cls:["covid-numberbox-title","active"],html:"Active"},{cls:["covid-numberbox-number","active"]}]}},{cls:["covid-numberbox"],vdom:{cn:[{cls:["covid-numberbox-title","recovered"],html:"Recovered"},{cls:["covid-numberbox-number","recovered"]}]}},{cls:["covid-numberbox"],vdom:{cn:[{cls:["covid-numberbox-title","deaths"],html:"Deaths"},{cls:["covid-numberbox-number","deaths"]}]}}]},{ntype:"container",layout:{ntype:"hbox"},itemDefaults:{ntype:"component"},items:[{module:w.Z,flex:"none",handler:"onSwitchThemeButtonClick",height:25,iconCls:"fa fa-sun",style:{marginLeft:"10px",marginTop:"15px"},text:"Theme Light"},{module:w.Z,flex:"none",handler:"onReloadDataButtonClick",height:25,iconCls:"fa fa-sync-alt",style:{marginLeft:"10px",marginTop:"15px"},text:"Reload Data"},{module:k.Z,height:25,reference:"last-update",style:{marginLeft:"10px",marginTop:"18px"},text:"Last Update:"}]}]}]}}}Neo.applyClassConfig(T);var N=a(859);class R extends N.Z{static getConfig(){return{className:"Covid.view.country.Helix",cls:["covid-country-helix","neo-helix"],deltaY:1.2,itemTpl:{cls:["surface","neo-helix-item"],style:{},tabIndex:"-1",cn:[{cls:["neo-item-wrapper"],style:{},cn:[{tag:"div",cls:["neo-country-helix-item"],style:{},cn:[{cls:["neo-item-header"],cn:[{tag:"img",cls:["neo-flag"]},{}]},{tag:"table",cls:["neo-content-table"],cn:[{tag:"tr",cn:[{tag:"td",html:"Cases"},{tag:"td",cls:["neo-align-right"]},{tag:"td",style:{width:"100%"}},{tag:"td",html:"Cases today"},{tag:"td",cls:["neo-align-right"]}]},{tag:"tr",cn:[{tag:"td",html:"Deaths"},{tag:"td",cls:["neo-align-right","neo-content-deaths"]},{tag:"td",style:{width:"100%"}},{tag:"td",html:"Deaths today"},{tag:"td",cls:["neo-align-right","neo-content-deaths"]}]},{tag:"tr",cn:[{tag:"td",html:"Recovered"},{tag:"td",cls:["neo-align-right","neo-content-recovered"]},{tag:"td",style:{width:"100%"}},{tag:"td",html:"Critical"},{tag:"td",cls:["neo-align-right","neo-content-critical"]}]}]}]}]}]},keyProperty:"country",radius:2500,rotationAngle:720,showCloneInfo:!1,store:r,translateY:500,translateZ:-2300}}createItem(e,t,a){let n=e.cn[0].cn[0],o=d.formatNumber,l=n.cn[1];return e.id=this.getItemVnodeId(t[this.keyProperty]),n.cn[0].cn[0].src=d.getCountryFlagUrl(t.country),n.cn[0].cn[1].html=t.country,l.cn[0].cn[1].html=o({value:t.cases}),l.cn[1].cn[1].html=o({value:t.deaths}),l.cn[2].cn[1].html=o({value:t.recovered}),l.cn[0].cn[4].html=o({value:t.todayCases}),l.cn[1].cn[4].html=o({value:t.todayDeaths}),l.cn[2].cn[4].html=o({value:t.critical}),e}getCloneTransform(){let e=this;return"matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,"+(e.offsetWidth-2800)/6+","+(e.offsetHeight-2700)/6+","+(100400+e.perspective/1.5)+",1)"}getItemId(e){return e.split("__")[1]}}Neo.applyClassConfig(R);class D extends f.Z{static getConfig(){return{className:"Covid.view.HelixContainerController",helix_:null}}beforeGetHelix(e){return e||(this._helix=e=this.getReference("helix")),e}onCollapseButtonClick(e){const t=this.getReference("controls-panel"),a=40===t.width;t.width=a?250:40,e.component.text=a?"X":"+"}onFlipItemsButtonClick(e){this.helix.flipped=!this.helix.flipped}onFollowSelectionButtonClick(e){const t=e.component;"fa fa-square"===t.iconCls?(this.helix.followSelection=!0,t.iconCls="fa fa-check-square"):(this.helix.followSelection=!1,t.iconCls="fa fa-square")}onRangefieldChange(e){const t=e.component.name;["deltaY","maxOpacity","minOpacity"].includes(t)&&(e.value/=100),this.helix[t]=e.value}onRangefieldMounted(e){const t=Neo.getComponent(e);this.helix.on(t.eventName,(function(e){e=Math.min(Math.max(e,t.minValue),t.maxValue),t.value=e}))}onSortButtonClick(e){this.helix.store.sorters=[{property:e.component.field,direction:"DESC"}]}}Neo.applyClassConfig(D);class I extends u.Z{static getConfig(){return{className:"Covid.view.HelixContainer",cls:["neo-helix-maincontainer","neo-viewport"],controller:D,helix:null,helixConfig:null,layout:{ntype:"hbox",align:"stretch"},items:[{ntype:"container",flex:1,items:[],layout:"fit"},{module:v.Z,cls:["neo-configuration-panel","neo-panel","neo-container"],layout:{ntype:"vbox",align:"stretch"},reference:"controls-panel",style:{backgroundColor:"#2b2b2b"},width:250,containerConfig:{style:{overflowY:"scroll"}},headers:[{dock:"top",items:[{ntype:"button",handler:"onCollapseButtonClick",text:"X"},{ntype:"label",text:"Helix Controls"}]}],itemDefaults:{ntype:"rangefield",flex:"0 1 auto",labelWidth:"100px",style:{padding:"10px"},useInputEvent:!0,listeners:{change:"onRangefieldChange"}},items:[{labelText:"Translate X",maxValue:2e3,minValue:-2e3,name:"translateX",value:400},{labelText:"Translate Y",maxValue:2500,minValue:-2500,name:"translateY",value:-350},{eventName:"changeTranslateZ",labelText:"Translate Z",maxValue:4500,minValue:-4500,name:"translateZ",value:-1500,listeners:{change:"onRangefieldChange",mounted:"onRangefieldMounted"}},{labelText:"Delta Y",labelAlign:"top",maxValue:600,minValue:-600,name:"deltaY",value:70},{eventName:"changeRotation",labelText:"Rotate",minValue:-720,maxValue:720,name:"rotationAngle",value:0,listeners:{change:"onRangefieldChange",mounted:"onRangefieldMounted"}},{labelText:"Radius",maxValue:3500,minValue:900,name:"radius",value:1500},{labelText:"Perspective",minValue:50,maxValue:3e3,name:"perspective",value:800},{labelText:"Item Angle",minValue:1,maxValue:36,name:"itemAngle",value:8},{labelText:"Max Opacity",name:"maxOpacity",minValue:0,maxValue:100,value:80},{labelText:"Min Opacity",name:"minOpacity",minValue:0,maxValue:100,value:30},{ntype:"button",handler:"onFlipItemsButtonClick",text:"Flip Items",listeners:{},style:{margin:"20px"}},{ntype:"label",text:"Sort By:"},{ntype:"container",layout:{ntype:"hbox",align:"stretch"},style:{minHeight:"134px",padding:"0"},items:[{ntype:"container",layout:{ntype:"vbox",align:"stretch"},itemDefaults:{ntype:"button",handler:"onSortButtonClick"},items:[{field:"cases",text:"Cases",style:{margin:"10px",marginTop:"0"}},{field:"deaths",text:"Deaths",style:{margin:"10px",marginBottom:"10px",marginTop:0}},{field:"country",text:"Country",style:{margin:"10px",marginTop:0}},{field:"recovered",text:"Recovered",style:{margin:"10px",marginTop:0}}]},{ntype:"container",layout:{ntype:"vbox",align:"stretch"},itemDefaults:{ntype:"button",handler:"onSortButtonClick"},items:[{field:"todayCases",text:"Cases today",style:{margin:"10px",marginTop:"0"}},{field:"todayDeaths",text:"Deaths today",style:{margin:"10px",marginBottom:"10px",marginTop:0}},{field:"critical",text:"Critical",style:{margin:"10px",marginBottom:"43px",marginTop:0}}]}]},{ntype:"button",handler:"onFollowSelectionButtonClick",iconCls:"fa fa-square",text:"Follow Selection",listeners:{},style:{margin:"20px",marginBottom:"10px"}},{module:h.Z,text:["<b>Navigation Concept</b>","<p>Click on an item to select it. Afterwards you can use the Arrow Keys to walk through the items.</p>","<p>Hit the Space Key to rotate the currently selected item to the front.</p>","<p>Hit the Enter Key to expand the currently selected item.</p>"].join("")}]}]}}constructor(e){super(e);const t=this;t.helix=Neo.create({module:R,reference:"helix",...t.helixConfig||{}}),t.items[0].items.push(t.helix)}}Neo.applyClassConfig(I);var S=a(926);class V extends f.Z{static getConfig(){return{className:"Covid.view.MainContainerController",activeMainTabIndex:0,apiSummaryUrl:"https://disease.sh/v2/all",apiUrl:"https://disease.sh/v2/countries",data:null,mainTabs:["table","helix","gallery"]}}onConstructed(){super.onConstructed(),this.loadData(),this.loadSummaryData()}addStoreItems(e){const t=this,a=t.mainTabs[t.activeMainTabIndex],n=t.getReference(a);e.forEach((e=>{e.country.includes('"')&&(e.country=e.country.replace('"',"'")),e.casesPerOneMillion=e.casesPerOneMillion>e.cases?"N/A":e.casesPerOneMillion||0,e.infected=e.casesPerOneMillion})),t.data=e,n.store.data=e}applySummaryData(e){let t=this,a=t.getReference("total-stats"),n=a.vdom;t.summaryData=e,n.cn[0].cn[1].html=d.formatNumber({value:e.cases}),n.cn[1].cn[1].html=d.formatNumber({value:e.active}),n.cn[2].cn[1].html=d.formatNumber({value:e.recovered}),n.cn[3].cn[1].html=d.formatNumber({value:e.deaths}),a.vdom=n,a=t.getReference("last-update"),n=a.vdom,n.html="Last Update: "+new Intl.DateTimeFormat("default",{hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date(e.updated)),a.vdom=n}getTabIndex(e){return e&&e.mainview?this.mainTabs.indexOf(e.mainview):0}getView(e){return this.getReference(this.mainTabs[e])}loadData(){const e=this;fetch(e.apiUrl).then((e=>e.json())).then((t=>e.addStoreItems(t))).catch((t=>console.log("Can’t access "+e.apiUrl,t)))}loadSummaryData(){const e=this;fetch(e.apiSummaryUrl).then((e=>e.json())).then((t=>e.applySummaryData(t))).catch((t=>console.log("Can’t access "+e.apiSummaryUrl,t)))}onHashChange(e,t){let a=this,n=a.getTabIndex(e.hash),o=a.getView(n);a.getReference("tab-container").activeIndex=n,a.activeMainTabIndex=n,"helix"===o.ntype&&o.getOffsetValues(),a.data&&o.store&&o.store.getCount()<1&&(o.store.data=a.data)}onReloadDataButtonClick(e){this.loadData(),this.loadSummaryData()}onRemoveFooterButtonClick(e){this.component.remove(this.getReference("footer"),!0)}onSwitchThemeButtonClick(e){let t,a,n,o,l,i=e.component,r=this.component,s=this.getReference("logo"),c=s.vdom;"Theme Light"===i.text?(t="Theme Dark",n="../dist/development/neo-theme-light-no-css-vars.css",o="fa fa-moon",l="neo-theme-light"):(t="Theme Light",n="../dist/development/neo-theme-dark-no-css-vars.css",o="fa fa-sun",l="neo-theme-dark"),c.src="https://raw.githubusercontent.com/neomjs/pages/master/resources/images/apps/covid/"+("neo-theme-dark"===l?"covid_logo_dark.jpg":"covid_logo_light.jpg"),s.vdom=c,Neo.config.useCssVars?(a=[...r.cls],r.cls.forEach((e=>{e.includes("neo-theme")&&S.Z.remove(a,e)})),S.Z.add(a,l),r.cls=a,i.set({iconCls:o,text:t})):Neo.main.addon.Stylesheet.swapStyleSheet({href:n,id:"neo-theme"}).then((e=>{i.text=t}))}}Neo.applyClassConfig(V);var B=a(886),F=a(748);class Z extends F.Z{static getConfig(){return{className:"Covid.view.MainContainer",ntype:"main-container",autoMount:!0,controller:V,layout:{ntype:"vbox",align:"stretch"},items:[{module:T,height:120},{module:B.Z,flex:1,reference:"tab-container",style:{margin:"10px",marginTop:0},items:[{module:m,reference:"table",tabButtonConfig:{iconCls:"fa fa-table",route:"mainview=table",text:"Table"}},{module:I,tabButtonConfig:{iconCls:"fa fa-dna",route:"mainview=helix",text:"Helix"}},{module:C,tabButtonConfig:{iconCls:"fa fa-images",route:"mainview=gallery",text:"Gallery"}}]},g]}}}Neo.applyClassConfig(Z);const M=()=>Neo.app({mainView:Z,name:"Covid"})}}]);