(()=>{var e,a={219:(e,a,n)=>{"use strict";const t=window.wp.domReady;var o=n.n(t);const l=window.React,i=window.wp.hooks,s=window.wp.blocks,r=window.wp.compose,c=window.wp.i18n,m=window.wp.element,u=window.wp.blockEditor,b=window.wp.components,d=window.wp.data,f=window.wp.notices,_=window.wp.keycodes,p=window.wp.primitives,h=(0,l.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(p.Path,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"})),k=(0,l.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(p.Path,{d:"m7 6.5 4 2.5-4 2.5z"}),(0,l.createElement)(p.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"m5 3c-1.10457 0-2 .89543-2 2v14c0 1.1046.89543 2 2 2h14c1.1046 0 2-.8954 2-2v-14c0-1.10457-.8954-2-2-2zm14 1.5h-14c-.27614 0-.5.22386-.5.5v10.7072l3.62953-2.6465c.25108-.1831.58905-.1924.84981-.0234l2.92666 1.8969 3.5712-3.4719c.2911-.2831.7545-.2831 1.0456 0l2.9772 2.8945v-9.3568c0-.27614-.2239-.5-.5-.5zm-14.5 14.5v-1.4364l4.09643-2.987 2.99567 1.9417c.2936.1903.6798.1523.9307-.0917l3.4772-3.3806 3.4772 3.3806.0228-.0234v2.5968c0 .2761-.2239.5-.5.5h-14c-.27614 0-.5-.2239-.5-.5z"})),v=(0,l.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(p.Path,{d:"M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zm-13.5 0V4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1v11.8c0 .1-.1.1-.1.1H4.6l-.1-.1z"})),w=(0,l.createElement)(p.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(p.Path,{d:"M16 4.2v1.5h2.5v12.5H16v1.5h4V4.2h-4zM4.2 19.8h4v-1.5H5.8V5.8h2.5V4.2h-4l-.1 15.6zm5.1-3.1l1.4.6 4-10-1.4-.6-4 10z"})),g=(0,l.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(p.Path,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"})),E=(0,l.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(p.Path,{d:"m19 7.5h-7.628c-.3089-.87389-1.1423-1.5-2.122-1.5-.97966 0-1.81309.62611-2.12197 1.5h-2.12803v1.5h2.12803c.30888.87389 1.14231 1.5 2.12197 1.5.9797 0 1.8131-.62611 2.122-1.5h7.628z"}),(0,l.createElement)(p.Path,{d:"m19 15h-2.128c-.3089-.8739-1.1423-1.5-2.122-1.5s-1.8131.6261-2.122 1.5h-7.628v1.5h7.628c.3089.8739 1.1423 1.5 2.122 1.5s1.8131-.6261 2.122-1.5h2.128z"})),y=(0,l.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(p.Path,{d:"M5 11.25h14v1.5H5z"}));var C=n(184),S=n.n(C);const x=e=>{const{id:a,label:n,hideLabelFromVision:t=!1,help:o,className:i,options:s=[],value:c=[],onChange:m,pills:u=!1,fluid:d=!1,isSmall:f=!1}=e,_=(0,r.useInstanceId)(s,"wsd-anfb-button-group",a);return(0,l.createElement)(b.BaseControl,{id:_,className:S()("wsd-anfb__button-group",{"wsd-anfb__button-group--fluid":d,"wsd-anfb__button-group--pills":u},i),label:n,help:o,hideLabelFromVision:t},(0,l.createElement)(b.ButtonGroup,null,s.map((({label:e,value:a})=>{const n=c.includes(a);return(0,l.createElement)(b.Button,{key:a,isSmall:f,variant:n?"primary":"secondary",children:e,...m&&{onClick:()=>{m(n?c.filter((e=>e!==a)):c.concat(a))}}})}))))};x.Radio=({className:e,value:a,onChange:n,...t})=>(0,l.createElement)(x,{className:S()("wsd-anfb__button-group-radio",e),value:a?[a]:[],...n&&{onChange:e=>{n(e.length>0?e[e.length-1]:"")}},...t});const B=x,F=[{label:"0",value:0},{label:`500${(0,c._x)("ms","Milliseconds","animations-for-blocks")}`,value:500},{label:`1${(0,c._x)("s","Seconds","animations-for-blocks")}`,value:1e3},{label:`1.5${(0,c._x)("s","Seconds","animations-for-blocks")}`,value:1500},{label:`2${(0,c._x)("s","Seconds","animations-for-blocks")}`,value:2500},{label:`2.5${(0,c._x)("s","Seconds","animations-for-blocks")}`,value:2e3},{label:`3${(0,c._x)("s","Seconds","animations-for-blocks")}`,value:3e3}],P=e=>`${e}${(0,c._x)("ms","Milliseconds","animations-for-blocks")}`,A=({label:e,value:a,onChange:n})=>(0,l.createElement)(b.RangeControl,{className:"wsd-anfb__range-control",label:e,value:a,onChange:n,min:0,step:50,max:3e3,withInputField:!1,marks:F,renderTooltipContent:P,__nextHasNoMarginBottom:!0}),M=({onRequestClose:e})=>(0,l.createElement)(b.Modal,{className:"wsd-anfb__help",title:(0,c.__)("Animations for Blocks help","animations-for-blocks"),onRequestClose:e},(0,l.createElement)("div",{className:"wsd-anfb__help__content"},(0,l.createElement)("h3",null,(0,c.__)("Options","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Animation","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("Allows to select the type of animation you wish to use: Fade, Flip, Slide or Zoom. Set to None if you no longer wish to animate that block.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Animation variation","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("Allows to switch between the different variations of the selected animation, such as Fade in, Fade down, Slide left, Slide right, Zoom in, Zoom out, Zoom out left, etc.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Animation delay","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("Time in milliseconds to delay the animation (0 - 3000ms). Increasing this value will delay the appearance of the animated element.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Animation duration","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("Time in milliseconds that the animation takes to complete (0 - 3000ms). Increasing this value will make the animation play longer.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Once","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("When enabled, animation will only happen once, when scrolling down the page for the first time. When user scrolls up again and then down, then the block will no longer animate.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Mirror","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("When enabled, elements will animate out once the user has scrolled past them and will animate in when the user scrolls up again.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Easing","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("Allows to change between various CSS transition timing functions for the animation making it unfold differently.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Anchor placement","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("Allows to control what part of the animated element should trigger the animation when it becomes visible in the viewport.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Offset","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("Controls the offset (in pixels) from the original trigger point at which the animation should trigger in the viewport.","animations-for-blocks")),(0,l.createElement)("h3",null,(0,c.__)("Broken block","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)('If you enabled animation and the block broke it means it is not supported. Feel free to report it. To restore the block in working condition try "Undo", if possible "Attempt Block Recovery", or change to "Code editor" (Ctrl + Shift + Alt + M) and remove the animation attributes (eg: \'"animationsForBlocks":{"animation":"fade"}\') from the broken block.',"animations-for-blocks")))),z=window.wp.coreData;window.anfbData||(window.anfbData={unsupportedBlocks:[],settings:V});const I=window.anfbData.unsupportedBlocks,O=window.anfbData.settings,V={animateInEditor:!0,lazyloadAssets:!1},T=({onRequestClose:e})=>{const[a,n]=(()=>{const[e=O,a]=(0,z.useEntityProp)("root","site","animations-for-blocks");return[e,a]})(),{animateInEditor:t,lazyloadAssets:o}=a;return(0,l.createElement)(b.Modal,{className:"wsd-anfb__settings",title:(0,c.__)("Animations for Blocks settings","animations-for-blocks"),onRequestClose:e},(0,l.createElement)(b.__experimentalVStack,{className:"wsd-anfb__settings__content"},(0,l.createElement)(b.ToggleControl,{label:(0,c.__)("Automatic animation preview","animations-for-blocks"),help:(0,c.__)("Play block animations in the editor automatically.","animations-for-blocks"),checked:t,onChange:()=>n({...a,animateInEditor:!t})}),(0,l.createElement)(b.ToggleControl,{label:(0,c.__)("Lazyload assets","animations-for-blocks"),help:(0,c.__)("Load assets only when a block with an animation is present on the current page.","animations-for-blocks"),checked:o,onChange:()=>n({...a,lazyloadAssets:!o})})))},R=[{label:(0,c.__)("Fade","animations-for-blocks"),value:"fade"},{label:(0,c.__)("Flip","animations-for-blocks"),value:"flip"},{label:(0,c.__)("Slide","animations-for-blocks"),value:"slide"},{label:(0,c.__)("Zoom","animations-for-blocks"),value:"zoom"}],N={fade:[{label:(0,c.__)("Fade in","animations-for-blocks"),value:"fade"},{label:(0,c.__)("Fade up","animations-for-blocks"),value:"up"},{label:(0,c.__)("Fade down","animations-for-blocks"),value:"down"},{label:(0,c.__)("Fade left","animations-for-blocks"),value:"left"},{label:(0,c.__)("Fade right","animations-for-blocks"),value:"right"},{label:(0,c.__)("Fade up left","animations-for-blocks"),value:"up-left"},{label:(0,c.__)("Fade up right","animations-for-blocks"),value:"up-right"},{label:(0,c.__)("Fade down left","animations-for-blocks"),value:"down-left"},{label:(0,c.__)("Fade down right","animations-for-blocks"),value:"down-right"}],flip:[{label:(0,c.__)("Flip up","animations-for-blocks"),value:"up"},{label:(0,c.__)("Flip down","animations-for-blocks"),value:"down"},{label:(0,c.__)("Flip left","animations-for-blocks"),value:"left"},{label:(0,c.__)("Flip right","animations-for-blocks"),value:"right"}],slide:[{label:(0,c.__)("Slide up","animations-for-blocks"),value:"up"},{label:(0,c.__)("Slide down","animations-for-blocks"),value:"down"},{label:(0,c.__)("Slide left","animations-for-blocks"),value:"left"},{label:(0,c.__)("Slide right","animations-for-blocks"),value:"right"}],zoom:[{label:(0,c.__)("Zoom in","animations-for-blocks"),value:"in"},{label:(0,c.__)("Zoom in up","animations-for-blocks"),value:"in-up"},{label:(0,c.__)("Zoom in down","animations-for-blocks"),value:"in-down"},{label:(0,c.__)("Zoom in left","animations-for-blocks"),value:"in-left"},{label:(0,c.__)("Zoom in right","animations-for-blocks"),value:"in-right"},{label:(0,c.__)("Zoom out","animations-for-blocks"),value:"out"},{label:(0,c.__)("Zoom out up","animations-for-blocks"),value:"out-up"},{label:(0,c.__)("Zoom out down","animations-for-blocks"),value:"out-down"},{label:(0,c.__)("Zoom out left","animations-for-blocks"),value:"out-left"},{label:(0,c.__)("Zoom out right","animations-for-blocks"),value:"out-right"}]},q=[{label:(0,c.__)("ease","animations-for-blocks"),value:"ease"},{label:(0,c.__)("ease-in","animations-for-blocks"),value:"ease-in"},{label:(0,c.__)("ease-out","animations-for-blocks"),value:"ease-out"},{label:(0,c.__)("ease-in-out","animations-for-blocks"),value:"ease-in-out"},{label:(0,c.__)("ease-in-back","animations-for-blocks"),value:"ease-in-back"},{label:(0,c.__)("ease-out-back","animations-for-blocks"),value:"ease-out-back"},{label:(0,c.__)("ease-in-out-back","animations-for-blocks"),value:"ease-in-out-back"},{label:(0,c.__)("ease-in-sine","animations-for-blocks"),value:"ease-in-sine"},{label:(0,c.__)("ease-out-sine","animations-for-blocks"),value:"ease-out-sine"},{label:(0,c.__)("ease-in-out-sine","animations-for-blocks"),value:"ease-in-out-sine"},{label:(0,c.__)("ease-in-quad","animations-for-blocks"),value:"ease-in-quad"},{label:(0,c.__)("ease-out-quad","animations-for-blocks"),value:"ease-out-quad"},{label:(0,c.__)("ease-in-out-quad","animations-for-blocks"),value:"ease-in-out-quad"},{label:(0,c.__)("ease-in-cubic","animations-for-blocks"),value:"ease-in-cubic"},{label:(0,c.__)("ease-out-cubic","animations-for-blocks"),value:"ease-out-cubic"},{label:(0,c.__)("ease-in-out-cubic","animations-for-blocks"),value:"ease-in-out-cubic"},{label:(0,c.__)("ease-in-quart","animations-for-blocks"),value:"ease-in-quart"},{label:(0,c.__)("ease-out-quart","animations-for-blocks"),value:"ease-out-quart"},{label:(0,c.__)("ease-in-out-quart","animations-for-blocks"),value:"ease-in-out-quart"},{label:(0,c.__)("linear","animations-for-blocks"),value:"linear"}],$=[{label:(0,c.__)("top-bottom","animations-for-blocks"),value:"top-bottom"},{label:(0,c.__)("center-bottom","animations-for-blocks"),value:"center-bottom"},{label:(0,c.__)("bottom-bottom","animations-for-blocks"),value:"bottom-bottom"},{label:(0,c.__)("top-center","animations-for-blocks"),value:"top-center"},{label:(0,c.__)("center-center","animations-for-blocks"),value:"center-center"},{label:(0,c.__)("bottom-center","animations-for-blocks"),value:"bottom-center"},{label:(0,c.__)("top-top","animations-for-blocks"),value:"top-top"},{label:(0,c.__)("bottom-top","animations-for-blocks"),value:"bottom-top"},{label:(0,c.__)("center-top","animations-for-blocks"),value:"center-top"}],L=[{value:"px",label:"web"===m.Platform.OS?"px":(0,c.__)("Pixels (px)","animations-for-blocks"),a11yLabel:(0,c.__)("Pixels (px)","animations-for-blocks"),step:1}],Z=(0,l.createElement)(b.Icon,{icon:(0,l.createElement)(l.Fragment,null,(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:20,height:20,fill:"currentColor"},(0,l.createElement)("path",{d:"M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"})))}),H="anfb:animate",j=new CustomEvent(H),D="anfb:",G="wsd-anfb-paste",U=({clientId:e,attributes:a,setAttributes:n})=>{const{animationsForBlocks:t={}}=a,{animation:o,variation:i,delay:s=0,duration:p=400,once:C=!1,mirror:x=!1,easing:F=q[0].value,anchorPlacement:P=$[0].value,offset:z=120}=t,I=!(!o||"none"===o),[O,V]=(0,m.useState)(!1),[U,W]=(0,m.useState)(!1),[J,K]=(0,m.useState)(!1),[Q,X]=(0,m.useState)(!1),Y=(0,m.useRef)(null),{createSuccessNotice:ee,createErrorNotice:ae}=(0,d.useDispatch)(f.store),ne=(0,r.useCopyToClipboard)((()=>`${D}${JSON.stringify(t)}`),(()=>ee((0,c.__)("Copied animation settings to clipboard.","animations-for-blocks"),{type:"snackbar"})));(0,m.useEffect)((()=>{Y.current=new CustomEvent(`${H}:${e}`)}),[e]),(0,m.useEffect)((()=>{Q&&document.getElementById(G)?.focus()}),[Q]);const te=e=>{n({animationsForBlocks:{...t,...e}})},oe=e=>{const a=()=>ae((0,c.__)("Invalid animation.","animations-for-blocks"),{type:"snackbar"});if(0!==e.indexOf(D))return void a();let n={};try{n=JSON.parse(e.replace(D,""))}catch(e){return void a()}const{animation:t}=n;if(!t)return void a();const o=R.find((({value:e})=>e===t));o?(te(n),ee((0,c.sprintf)((0,c.__)("Applied animation: %s.","animations-for-blocks"),o.label),{type:"snackbar"})):a()};return(0,l.createElement)(u.InspectorControls,null,(0,l.createElement)(b.Panel,{className:"wsd-anfb"},(0,l.createElement)(b.PanelHeader,null,(0,l.createElement)(b.__experimentalHStack,{alignment:"center",justify:"space-between"},(0,l.createElement)("h2",{style:{margin:0}},(0,c.__)("Animation","animations-for-blocks")),(0,l.createElement)(b.DropdownMenu,{icon:h,label:(0,c.__)("More actions","animations-for-blocks"),toggleProps:{isSmall:!0}},(({onClose:e})=>(0,l.createElement)(l.Fragment,null,(0,l.createElement)(b.MenuGroup,{className:"wsd-anfb__menu-group"},(0,l.createElement)(b.MenuItem,{icon:Z,children:(0,c.__)("Animate block","animations-for-blocks"),disabled:!I,onClick:()=>{Y.current&&document.dispatchEvent(Y.current),e()}}),(0,l.createElement)(b.MenuItem,{icon:k,children:(0,c.__)("Animate all blocks","animations-for-blocks"),onClick:()=>{document.dispatchEvent(j),e()}}),(0,l.createElement)(b.MenuItem,{icon:v,children:(0,c.__)("Copy animation","animations-for-blocks"),disabled:!I,ref:ne,onClick:()=>{e()}}),(0,l.createElement)(b.MenuItem,{icon:w,onClick:async()=>{window.navigator.clipboard?(oe(await window.navigator.clipboard.readText()),e()):X(!0)}},Q&&(0,l.createElement)(u.RichText,{id:G,tagName:"span",placeholder:(0,c.sprintf)((0,c._x)("Press %s…","Keyboard shortcut","animations-for-blocks"),_.displayShortcut.primary("v")),value:"",onChange:a=>{oe(a),X(!1),e()}}),!Q&&(0,c.__)("Paste animation","animations-for-blocks")),(0,l.createElement)(b.MenuItem,{icon:g,children:(0,c.__)("Help","animations-for-blocks"),onClick:()=>{V(!0),e()}}),(0,l.createElement)(b.MenuItem,{icon:E,children:(0,c.__)("Settings","animations-for-blocks"),onClick:()=>{W(!0),e()}})),Object.keys(t).length>0&&(0,l.createElement)(b.MenuGroup,null,(0,l.createElement)(b.MenuItem,{icon:y,children:(0,c.__)("Reset all","animations-for-blocks"),onClick:()=>{n({animationsForBlocks:void 0}),e()}}))))))),(0,l.createElement)(b.PanelBody,null,(0,l.createElement)(b.__experimentalVStack,{spacing:4},(0,l.createElement)(B.Radio,{pills:!0,label:(0,c.__)("Select animation","animations-for-blocks"),hideLabelFromVision:!0,options:R,value:o,onChange:e=>{const a=!(!e||"none"===e),n=a?N[e].map((e=>e.value)):[],t=a?i&&n.includes(i)?i:n[0]:i;te({animation:e,variation:t})}}),I&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(B.Radio,{isSmall:!0,pills:!0,label:(0,c.__)("Animation variation","animations-for-blocks"),hideLabelFromVision:!0,options:N[o],value:i||N[o][0].value,onChange:e=>te({variation:e})}),(0,l.createElement)(A,{label:(0,c.__)("Duration","animations-for-blocks"),value:p,onChange:e=>te({duration:e})}),(0,l.createElement)(A,{label:(0,c.__)("Delay","animations-for-blocks"),value:s,onChange:e=>te({delay:e})}),(0,l.createElement)(b.Button,{variant:"secondary",isSmall:!0,className:S()("wsd-anfb__button",{"wsd-anfb__button-active":J}),onClick:()=>K(!J)},(0,l.createElement)(b.__experimentalHStack,{alignment:"center",justify:"center"},(0,l.createElement)(b.Icon,{icon:E,size:16}),(0,l.createElement)("span",null,(0,c.__)("Advanced settings","animations-for-blocks")))),J&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(b.ToggleControl,{label:(0,c.__)("Once","animations-for-blocks"),help:(0,c.__)("Animate only once, when scrolling down for the first time.","animations-for-blocks"),checked:C,onChange:()=>te({once:!C,mirror:!C&&x?!x:x})}),(0,l.createElement)(b.ToggleControl,{label:(0,c.__)("Mirror","animations-for-blocks"),help:(0,c.__)("Animate out after scrolling past the element and in when scrolling up again.","animations-for-blocks"),checked:x,onChange:()=>te({mirror:!x,once:!x&&C?!C:C})}),(0,l.createElement)(B.Radio,{isSmall:!0,pills:!0,label:(0,c.__)("Easing","animations-for-blocks"),help:(0,c.__)("Transition timing function.","animations-for-blocks"),options:q,value:F,onChange:e=>F!==e&&te({easing:e})}),(0,l.createElement)(B.Radio,{isSmall:!0,pills:!0,label:(0,c.__)("Anchor placement","animations-for-blocks"),help:(0,c.__)("Defines which position of the element regarding to window should trigger the animation.","animations-for-blocks"),options:$,value:P,onChange:e=>P!==e&&te({anchorPlacement:e})}),(0,l.createElement)(b.__experimentalUnitControl,{label:(0,c.__)("Offset","animations-for-blocks"),help:(0,c.__)("Offset from the original trigger point.","animations-for-blocks"),type:"number",value:`${z}px`,isDragEnabled:!1,isUnitSelectTabbable:!1,units:L,onChange:(e="120")=>te({offset:parseInt(e.replace("px",""))})})))))),O&&(0,l.createElement)(M,{onRequestClose:()=>V(!1)}),U&&(0,l.createElement)(T,{onRequestClose:()=>W(!1)}))},W=(e={},a="save")=>{let n={};if(!e)return n;const{animation:t,variation:o,delay:l,duration:i,once:s,mirror:r,easing:c,offset:m,anchorPlacement:u}=e;return t&&"none"!==t?(n["data-aos"]=t===o?t:t+"-"+o,l&&0!==l&&(n["data-aos-delay"]=l.toString()),i&&400!==i&&(n["data-aos-duration"]=i.toString()),c&&"ease"!==c&&(n["data-aos-easing"]=c),"edit"===a||(s&&(n["data-aos-once"]="true"),r&&(n["data-aos-mirror"]="true"),m&&120!==m&&(n["data-aos-offset"]=m.toString()),u&&"top-bottom"!==u&&(n["data-aos-anchor-placement"]=u)),n):n},J=u.BlockList?.__unstableElementContext||(0,m.createContext)(null),K=e=>{const{BlockListBlock:a,...n}=e,{clientId:t,attributes:o,wrapperProps:i={}}=n,{animationsForBlocks:s={}}=o,{animation:r,delay:c=0,duration:u=400}=s,{animateInEditor:b}=(()=>{const[,,e=O]=(0,z.useEntityProp)("root","site","animations-for-blocks");return e})(),d=!(!r||"none"===r),[f,_]=(0,m.useState)(!1),[p,h]=(0,m.useState)(!b),k=(0,m.useRef)(c+u),v=(0,m.useRef)([]),w=(0,m.useContext)(J);(0,m.useEffect)((()=>{k.current=c+u}),[c,u]);const g=(0,m.useCallback)((()=>{if(v.current.forEach(clearTimeout),_(!1),h(!0),w){const e=w.querySelector(`#block-${t}`);e&&(e.style.removeProperty("transform-origin"),e.style.removeProperty("transform"),e.style.removeProperty("z-index"))}v.current=[setTimeout((()=>h(!1)),50)]}),[t,w]);return(0,m.useEffect)((()=>{const{animation:e}=s;e&&"none"!==e&&b&&g()}),[s,g,b]),(0,m.useEffect)((()=>{p||(v.current.forEach(clearTimeout),v.current=[setTimeout((()=>_(!0)),50)])}),[p]),(0,m.useEffect)((()=>{f&&v.current.push(setTimeout((()=>{_(!1),h(!0)}),k.current))}),[f]),(0,m.useEffect)((()=>(document.addEventListener(`${H}:${t}`,g),document.addEventListener(H,g),()=>{v.current.forEach(clearTimeout),document.removeEventListener(`${H}:${t}`,g),document.removeEventListener(H,g)})),[t,g]),(0,l.createElement)(a,{...n,wrapperProps:{...i,...d&&{...W(s,"edit"),className:S()(i.className,{"aos-init":d,"aos-animate":f||p,"wsd-anfb-is-animating":f}),...d&&{"data-anfb-init":!0},...(f||p)&&{"data-anfb-animate":!0},...f&&{"data-anfb-is-animating":!0}}}})},Q=(0,i.applyFilters)("anfb.defaultEnabled",!0),X=e=>{const a=e.name||e;return!I.includes(a)&&(0,s.hasBlockSupport)(e,"animationsForBlocks",Q)},Y={animationsForBlocks:{type:"object"}},ee=(0,r.createHigherOrderComponent)((function(e){return function(a){return X(a.name)?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(e,{...a}),(0,l.createElement)(U,{...a})):(0,l.createElement)(e,{...a})}}),"withAnimationsForBlocksInspectorControls"),ae=(0,r.createHigherOrderComponent)((e=>a=>X(a.name)?(0,l.createElement)(K,{...a,BlockListBlock:e}):(0,l.createElement)(e,{...a})),"withAnimatedBlockListBlock"),ne={apiVersion:2,title:(0,c.__)("Animation container","animations-for-blocks"),description:(0,c.__)("A container that can be animated. Can be used to animate dynamic or other unsupported blocks.","animations-for-blocks"),icon:"media-interactive",category:"design",attributes:{},supports:{anchor:!0,animationsForBlocks:!0},edit:e=>{const a=(0,u.useBlockProps)(),n=(0,u.useInnerBlocksProps)(a);return(0,l.createElement)("div",{...n})},save:e=>{const a=u.useBlockProps.save(),n=u.useInnerBlocksProps.save(a);return(0,l.createElement)("div",{...n})}};(0,i.addFilter)("blocks.registerBlockType","wsd-anfb/attributes",(function(e){return X(e)&&(e.attributes=Object.assign(e.attributes||{},Y)),e})),(0,i.addFilter)("editor.BlockEdit","wsd-anfb/inspector-controls",ee),(0,i.addFilter)("blocks.getSaveContent.extraProps","wsd-anfb/animation-props",((e,a,n)=>{if(X(a)){const{animationsForBlocks:a={}}=n,t=W(a);t["data-aos"]&&(e={...e,...t})}return e})),(0,i.addFilter)("editor.BlockListBlock","wsd-anfb/blocklistblock-animation",ae),o()((()=>{(0,s.registerBlockType)("anfb/animation-container",ne)}))},184:(e,a)=>{var n;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)t.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(a,[]))||(e.exports=n)}()}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}};return a[e](l,l.exports,t),l.exports}t.m=a,e=[],t.O=(a,n,o,l)=>{if(!n){var i=1/0;for(m=0;m<e.length;m++){for(var[n,o,l]=e[m],s=!0,r=0;r<n.length;r++)(!1&l||i>=l)&&Object.keys(t.O).every((e=>t.O[e](n[r])))?n.splice(r--,1):(s=!1,l<i&&(i=l));if(s){e.splice(m--,1);var c=o();void 0!==c&&(a=c)}}return a}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[n,o,l]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={826:0,431:0};t.O.j=a=>0===e[a];var a=(a,n)=>{var o,l,[i,s,r]=n,c=0;if(i.some((a=>0!==e[a]))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(r)var m=r(t)}for(a&&a(n);c<i.length;c++)l=i[c],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(m)},n=globalThis.webpackChunkanimations_for_blocks=globalThis.webpackChunkanimations_for_blocks||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))})();var o=t.O(void 0,[431],(()=>t(219)));o=t.O(o)})();