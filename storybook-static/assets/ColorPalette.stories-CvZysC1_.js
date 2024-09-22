import{j as e}from"./jsx-runtime-CkxqCPlQ.js";/* empty css               */import{T as s}from"./Typography-Dl_oL8lC.js";import"./index-DJO9vBfz.js";const o=({name:a,hex:r})=>e.jsxs("div",{className:"colorContainer",children:[e.jsx("div",{className:"color",style:{background:r}}),e.jsxs("div",{className:"colorInfo",children:[e.jsx(s,{variant:"p",children:a}),e.jsx(s,{variant:"p",children:r,color:"secondary"})]})]});try{o.displayName="Color",o.__docgenInfo={description:"",displayName:"Color",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},hex:{defaultValue:null,description:"",name:"hex",required:!0,type:{name:"string"}}}}}catch{}const t=({colors:a})=>e.jsx("div",{className:"colorPaletteContainer",children:a.map(r=>e.jsx(o,{name:r.name,hex:r.hex},r.name))});try{t.displayName="ColorPalette",t.__docgenInfo={description:"",displayName:"ColorPalette",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"{ name: string; hex: string; }[]"}}}}}catch{}const u={title:"ColorPalette",component:t,parameters:{layout:"centered"},argTypes:{}},n={args:{colors:[{name:"Primary",hex:"#077A5E"},{name:"Secondary",hex:"#1D9C7D"},{name:"Background",hex:"#F8F8F8"},{name:"Text Primary",hex:"#2F2F2F"},{name:"Text Secondary",hex:"#818181"}]}};var c,l,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    colors: [{
      name: 'Primary',
      hex: '#077A5E'
    }, {
      name: 'Secondary',
      hex: '#1D9C7D'
    }, {
      name: 'Background',
      hex: '#F8F8F8'
    }, {
      name: 'Text Primary',
      hex: '#2F2F2F'
    }, {
      name: 'Text Secondary',
      hex: '#818181'
    }]
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const y=["Default"];export{n as Default,y as __namedExportsOrder,u as default};
