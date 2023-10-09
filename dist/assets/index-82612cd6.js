import{G as l,s as u,p as e,l as r,o as m,c as $,f as _,r as p,j as s,g,A as h}from"./index-8066d643.js";import{g as x}from"./courses-8eff30a9.js";function f(o){return l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z",clipRule:"evenodd"}}]})(o)}const{xl:w}=m,{green:a,white:i,lightGreen:t}=$,{kanit:j,overpass:v}=_,b=u.section`
.container {
  margin: 0 auto;
  max-width: ${e(1550)};
  padding: ${e(30)};
}
  .edu__title {
    font-size: ${w};
    text-align: center;
    color: ${i};
    font-family: ${v};
    margin: ${e(20)} 0;
  }
  .courses {
    ${r("grid",{cols:4,rows:2,rowsH:e(300)})}
    grid-gap: 20px;
  }
  .course__card {
    color: ${i};
    font-family: ${j};
    overflow: hidden;
    padding: ${e(20)};
    border-inline-start: ${e(1)} solid;
    border-block-start: ${e(1)} solid;
    border: ${e(1)} solid transparent;
    border-image-source: radial-gradient(
      circle at top left,
      ${t},
      transparent 30%
      );
      border-image-slice: 1;
      transition: 300ms ease-in-out;
      .card__wrp {
        flex: 1;
        height: 100%;
        display: grid;
        place-items: center;
    }
    &:hover {
      cursor: pointer;
      border-inline-end: ${e(1)} solid;
      border-block-end: ${e(1)} solid;
      border-image-source: radial-gradient(
        circle at bottom left,
        transparent 30%,
        ${t}
      );
      .course__icons {
        color: ${a};
      }
    }
  }
  .course__icons {
    width: 100%;
    ${r("flex")}
    padding: 0 ${e(20)};
      transition: 300ms ease-in-out;
    color: ${a}70;
    height: 50%;
    font-size: ${e(55)};  
  }
  .course__title {
    font-size: ${e(30)};
  }
  .overlay {
    display: none;
  }

  @media screen and (max-width: ${e(1550)}){
    .courses{
      ${r("grid",{cols:3,rows:3,rowsH:e(300)})}
    }
  }
  @media screen and (max-width: ${e(1024)}){
    .courses{
      ${r("grid",{cols:2,rows:4,rowsH:e(250)})}
    }
  }
  @media screen and (max-width: ${e(768)}){
    .course__card {
      padding: ${e(10)};
      .course__title {
        font-size: ${e(25)};
      }
      .course__icons {
        font-size: ${e(40)};
      }
    }
    .edu__title {
    font-size: ${e(30)};
    }
  }
  @media screen and (max-width: ${e(550)}){
    .courses{
      ${r("grid",{cols:1,rows:8,rowsH:e(200)})}
    }
  }
`,{EDUCATION:N}=h,z=()=>(p.useEffect(()=>{document.title="ITPARK - Education"},[]),s.jsx(b,{children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{className:"edu__title",children:"IT Education"}),s.jsx("br",{}),s.jsx("div",{className:"courses",children:x().map(({id:o,name:n,description:c,Icon:d})=>s.jsx(g,{to:`${N}/courses/${o}`,className:"course__card",children:s.jsxs("div",{className:"card__wrp",children:[s.jsx("p",{className:"course__title",children:n}),s.jsxs("div",{className:"course__icons",children:[s.jsx(d,{className:"course__icon"}),s.jsx(f,{className:"arrow__icon"})]}),s.jsx("div",{className:"overlay",children:s.jsx("p",{children:c})})]})},o))})]})}));export{z as default};
