import{j as e}from"./jsx-runtime-CkxqCPlQ.js";/* empty css               */import{E}from"./ErrorLabel-BoHJuBSY.js";import"./index-DJO9vBfz.js";const n=({id:l,value:q,name:y,label:s,disabled:d,required:i,placeholder:h})=>e.jsxs("div",{className:"textInputContainer",children:[s&&e.jsxs("label",{htmlFor:l,className:["textInputLabel",d?"textInputDisabledLabel":""].join(" "),children:[" ",s," "]}),e.jsx("input",{type:"text",id:l,value:q,name:y,disabled:d,required:i,placeholder:h,className:"textInputField"}),i&&e.jsx(E,{text:"This field is required"})]});try{n.displayName="TextInput",n.__docgenInfo={description:"",displayName:"TextInput",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}}}}}catch{}const V={title:"Text Input",component:n,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean"},required:{control:"boolean"}}},a={args:{id:"textfield1",name:"example",label:"Label",placeholder:"Enter..."}},r={args:{id:"textfield2",name:"example",label:"Label",placeholder:"Enter...",required:!0}},t={args:{id:"textfield3",name:"example",label:"Label",placeholder:"Enter...",disabled:!0}};var o,u,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    id: 'textfield1',
    name: 'example',
    label: 'Label',
    placeholder: 'Enter...'
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,c,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'textfield2',
    name: 'example',
    label: 'Label',
    placeholder: 'Enter...',
    required: true
  }
}`,...(x=(c=r.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var b,f,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'textfield3',
    name: 'example',
    label: 'Label',
    placeholder: 'Enter...',
    disabled: true
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const T=["Default","Required","Disabled"];export{a as Default,t as Disabled,r as Required,T as __namedExportsOrder,V as default};
