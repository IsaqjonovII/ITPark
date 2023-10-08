import{s as d,p as t,l as a,c as l,f as $,j as s,g as p,A as g,r as m}from"./index-8066d643.js";import{s as _}from"./index-277f4278.js";const{white:e,green:o,lightGray:u}=l,{overpass:i}=$,f=d.section`
  font-family: ${i};
  padding: ${t(50)};
  .startup__title {
    font-size: ${t(40)};
    font-family: ${i};
    text-align: center;
    color: ${e};
    letter-spacing: ${t(2)};
    margin-bottom: ${t(30)};
  }
  .categories__wrp {
    width: 100%;
    max-width: ${t(900)};
    height: auto;
    margin: 0 auto; 
    grid-gap: ${t(20)};
    ${a("grid",{cols:3,rows:3,rowsH:t(150)})}
  }
  .category__card {
    color: ${e};
    display: grid;
    ${a("center")}
    font-size: ${t(20)};
    border: ${t(1)} solid ${u};
    border-radius: ${t(10)};
    padding: ${t(10)};
    transition: 200ms ease-in-out;
    text-align: center;
    &:hover {
        box-shadow: 0 ${t(5)} ${t(2)} ${o};
        transform: translateY(-${t(10)}) scale(1.06);
        cursor: pointer;
    }
    svg {
      font-size: ${t(50)};
      color: ${o};
      object-fit: contain;
    }
  }
  @media screen and (max-width: ${t(768)}) {
    .categories__wrp {
      ${a("grid",{cols:2,rows:5,rowsH:t(150)})}
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
`,{STARTUPS:x}=g,h=({id:r,name:n,Icon:c})=>s.jsx(s.Fragment,{children:s.jsxs(p,{to:`${x}/${r}`,className:"category__card",children:[s.jsx(c,{}),s.jsx("p",{children:n})]},r)}),y=()=>(m.useEffect(()=>{document.title="ITPARK - Startups"},[]),s.jsx(f,{children:s.jsxs("div",{className:"startup__categories",children:[s.jsx("h1",{className:"startup__title",children:"Startups Directions"}),s.jsx("div",{className:"categories__wrp",children:_.map(r=>s.jsx(h,{...r},r.id))})]})}));export{y as default};
