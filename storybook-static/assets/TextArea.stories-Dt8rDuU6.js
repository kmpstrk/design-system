import{j as e}from"./jsx-runtime-CkxqCPlQ.js";/* empty css               */import{E as _}from"./ErrorLabel-BoHJuBSY.js";import"./index-DJO9vBfz.js";const n=({id:l,value:y,name:g,rows:q,cols:h,maxlength:A,label:s,disabled:o,required:T,placeholder:V})=>e.jsxs("div",{className:"textAreaContainer",children:[s&&e.jsxs("label",{htmlFor:l,className:["textAreaLabel",o?"textAreaDisabledLabel":""].join(" "),children:[" ",s," "]}),e.jsx("textarea",{className:"textAreaField",id:l,placeholder:V,value:y,name:g,rows:q,cols:h,maxLength:A,disabled:o}),T&&e.jsx(_,{text:"This field is required"})]});try{n.displayName="TextArea",n.__docgenInfo={description:"",displayName:"TextArea",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"number"}},maxlength:{defaultValue:null,description:"",name:"maxlength",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}}}}}catch{}const E={title:"Text Area",component:n,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean"},required:{control:"boolean"}}},a={args:{id:"textarea1",name:"example",label:"Text Area",placeholder:"Here you can enter some text..."}},r={args:{id:"textarea1",name:"example",label:"Text Area",placeholder:"Here you can enter some text...",required:!0}},t={args:{id:"textarea1",name:"example",label:"Text Area",placeholder:"Here you can enter some text...",disabled:!0}};var d,i,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'textarea1',
    name: 'example',
    label: 'Text Area',
    placeholder: 'Here you can enter some text...'
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'textarea1',
    name: 'example',
    label: 'Text Area',
    placeholder: 'Here you can enter some text...',
    required: true
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var x,b,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'textarea1',
    name: 'example',
    label: 'Text Area',
    placeholder: 'Here you can enter some text...',
    disabled: true
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const L=["Default","Required","Disabled"];export{a as Default,t as Disabled,r as Required,L as __namedExportsOrder,E as default};
