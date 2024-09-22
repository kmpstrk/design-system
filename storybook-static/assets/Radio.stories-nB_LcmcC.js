import{j as r}from"./jsx-runtime-CkxqCPlQ.js";/* empty css               */import"./index-DJO9vBfz.js";const t=({id:n,name:c,value:m,checked:b,disabled:l,onChange:g,label:f})=>r.jsxs("label",{htmlFor:n,className:["radio_label",l?"radio_label_disabled":""].join(" "),children:[r.jsx("input",{type:"radio",className:"radio_input",id:n,name:c,value:m,checked:b,disabled:l,onChange:g}),r.jsx("span",{className:"radio_button"}),f]});try{t.displayName="Radio",t.__docgenInfo={description:"",displayName:"Radio",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const x={title:"Radio Button",component:t,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"}}},e={args:{id:"radio1",name:"example",value:"option1",label:"Option 1"}},a={args:{id:"radio3",name:"example",value:"option3",checked:!0,disabled:!0,label:"Option 3"}};var o,i,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    id: 'radio1',
    name: 'example',
    value: 'option1',
    label: 'Option 1'
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var s,u,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    id: 'radio3',
    name: 'example',
    value: 'option3',
    checked: true,
    disabled: true,
    label: 'Option 3'
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const v=["Default","Disabled"];export{e as Default,a as Disabled,v as __namedExportsOrder,x as default};
