import{f as v}from"./index-C_FWhylE.js";import{j as V}from"./jsx-runtime-CkxqCPlQ.js";/* empty css               */import"./index-DJO9vBfz.js";const o=({label:s,primary:_,disabled:B,size:z,onClick:S})=>{const x=_?"button_primary":"button_secondary",q=!!B;return V.jsx("button",{type:"button",className:["button",x,`button_${z}`].join(" "),disabled:q,onClick:S,children:s})};try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}}}catch{}const h={title:"Button",component:o,parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["small","medium","large"]},primary:{control:"boolean"},label:{control:"text"}},args:{onClick:v()}},e={args:{primary:!0,label:"Button",size:"medium"}},a={args:{label:"Button",size:"medium"}},r={args:{size:"large",label:"Button"}},t={args:{size:"small",label:"Button"}};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    size: 'medium'
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var u,m,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'medium'
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,p,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,y,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const E=["Primary","Secondary","Large","Small"];export{r as Large,e as Primary,a as Secondary,t as Small,E as __namedExportsOrder,h as default};
