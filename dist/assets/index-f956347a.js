import{s as d,p as t,l as o,c as l,f as p,j as e,L as g,A as m,r as u}from"./index-b4e51de9.js";import{G as h,F as $,a as _,b as f,c as v,d as x}from"./index.esm-d4a8b1af.js";const{white:i,green:n,lightGray:y}=l,{overpass:r}=p,w=d.section`
  font-family: ${r};
  padding: ${t(50)};
  .startup__title {
    font-size: ${t(40)};
    font-family: ${r};
    text-align: center;
    color: ${i};
    letter-spacing: ${t(2)};
    margin-bottom: ${t(30)};
  }
  .categories__wrp {
    width: 100%;
    max-width: ${t(900)};
    height: auto;
    margin: 0 auto; 
    grid-gap: ${t(20)};
    ${o("grid",{cols:3,rows:3,rowsH:t(150)})}
  }
  .category__card {
    color: ${i};
    display: grid;
    ${o("center")}
    font-size: ${t(20)};
    border: ${t(1)} solid ${y};
    border-radius: ${t(10)};
    padding: ${t(10)};
    transition: 200ms ease-in-out;
    text-align: center;
    &:hover {
        box-shadow: 0 ${t(5)} ${t(2)} ${n};
        transform: translateY(-${t(10)}) scale(1.06);
        cursor: pointer;
    }
    svg {
      font-size: ${t(50)};
      color: ${n};
      object-fit: contain;
    }
  }
  @media screen and (max-width: ${t(768)}) {
    .categories__wrp {
      ${o("grid",{cols:2,rows:5,rowsH:t(150)})}
    }
  padding: ${t(20)};
  .startup__title {
    font-size: ${t(30)};
  }

  }
  @media screen and (max-width: ${t(550)}) {
    .category__card {
      font-size: ${t(18)};
      svg {
        font-size: ${t(40)};
      }
  padding: ${t(10)};
    }
    .categories__wrp {
      grid-gap: ${t(10)};
    }
    .startup__title {
    font-size: ${t(25)};
  }
  }
`;function z(a){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M478.07 356.88L439 151c-8.86-40.35-23-71-88-71H145c-66 0-79.14 30.65-88 71L18 356.88c-7 34.12 4.43 61.25 33.37 71.81S103 423 119.18 391.3l15.42-30.52a16 16 0 0114.28-8.78h198.28a16 16 0 0114.28 8.78l15.42 30.52c16.14 31.7 38.88 48 67.81 37.39S485 391 478.07 356.88zM224 240h-48v48h-32v-48H96v-32h48v-48h32v48h48zm68 4a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20zm0-88a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20z"}}]})(a)}const S=[{id:"1",name:"Fintech",description:"A startup providing innovative financial technology solutions.",type:"Fintech",Icon:$},{id:"2",name:"MedTech",description:"A startup dedicated to revolutionizing healthcare technology.",type:"Medtech",Icon:_},{id:"3",name:"AgroTech",description:"A startup focused on modernizing agriculture through technology.",type:"Agrotech",Icon:f},{id:"5",name:"E-Commerce",description:"A startup driving innovation in the e-commerce industry.",type:"E-Commerce",Icon:v},{id:"8",name:"Online Education",description:"A startup providing cutting-edge online education solutions.",type:"Online Education",Icon:x},{id:"9",name:"GameDev",description:"A startup focused on game development and innovation.",type:"GameDev",Icon:z}],{STARTUPS:j}=m,A=({id:a,name:s,Icon:c})=>e.jsx(e.Fragment,{children:e.jsxs(g,{to:`${j}/${a}`,className:"category__card",children:[e.jsx(c,{}),e.jsx("p",{children:s})]},a)}),E=()=>(u.useEffect(()=>{document.title="ITPARK - Startups"},[]),e.jsx(w,{children:e.jsxs("div",{className:"startup__categories",children:[e.jsx("h1",{className:"startup__title",children:"Startups Directions"}),e.jsx("div",{className:"categories__wrp",children:S.map(a=>e.jsx(A,{...a},a.id))})]})}));export{E as default};
