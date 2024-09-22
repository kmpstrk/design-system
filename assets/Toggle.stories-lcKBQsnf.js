import{j as e}from"./jsx-runtime-CkxqCPlQ.js";/* empty css               */import"./index-DJO9vBfz.js";const n=({id:t,name:m,disabled:r,label:p,checked:u,onChange:b})=>e.jsxs("div",{className:"toggleContainer",children:[e.jsxs("label",{className:"toggleSwitch",children:[e.jsx("input",{type:"checkbox",className:"toggleInput",id:t,name:m,checked:u,onChange:b,disabled:r}),e.jsx("span",{className:"toggleSlider"})]}),e.jsx("span",{className:["toggleText",r?"toggleTextDisabled":""].join(" "),children:p})]});try{n.displayName="Toggle",n.__docgenInfo={description:"",displayName:"Toggle",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}const y={title:"Toggle",component:n,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"},checked:{control:"boolean"}}},a={args:{id:"toggle1",name:"example",label:"Toggle Switch"}},l={args:{id:"toggle2",name:"example",label:"Disabled Toggle Switch",disabled:!0}};var s,o,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    id: 'toggle1',
    name: 'example',
    label: 'Toggle Switch'
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,c,g;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'toggle2',
    name: 'example',
    label: 'Disabled Toggle Switch',
    disabled: true
  }
}`,...(g=(c=l.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const T=["Default","Disabled"];export{a as Default,l as Disabled,T as __namedExportsOrder,y as default};
