import{G as u,s as m,p as e,l as r,o as _,c as $,f as p,u as g,r as h,j as s,g as x,A as f}from"./index-deecd7ee.js";import{g as w}from"./courses-e17cf212.js";function j(o){return u({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z",clipRule:"evenodd"}}]})(o)}const{xl:v}=_,{green:i,white:t,lightGreen:n}=$,{kanit:b,overpass:N}=p,y=m.section`
.container {
  margin: 0 auto;
  max-width: ${e(1550)};
  padding: ${e(30)};
}
  .edu__title {
    font-size: ${v};
    text-align: center;
    color: ${t};
    font-family: ${N};
    margin: ${e(20)} 0;
  }
  .courses {
    ${r("grid",{cols:4,rows:2,rowsH:e(300)})}
    grid-gap: 20px;
  }
  .course__card {
    color: ${t};
    font-family: ${b};
    overflow: hidden;
    padding: ${e(20)};
    border-inline-start: ${e(1)} solid;
    border-block-start: ${e(1)} solid;
    border: ${e(1)} solid transparent;
    border-image-source: radial-gradient(
      circle at top left,
      ${n},
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
        ${n}
      );
      .course__icons {
        color: ${i};
      }
    }
  }
  .course__icons {
    width: 100%;
    ${r("flex")}
    padding: 0 ${e(20)};
      transition: 300ms ease-in-out;
    color: ${i}70;
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
`,{EDUCATION:z}=f,R=()=>{const{t:o}=g();return h.useEffect(()=>{document.title="ITPARK - Education"},[]),s.jsx(y,{children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{className:"edu__title",children:o("it_edu")}),s.jsx("br",{}),s.jsx("div",{className:"courses",children:w().map(({id:a,name:c,description:d,Icon:l})=>s.jsx(x,{to:`${z}/courses/${a}`,className:"course__card",children:s.jsxs("div",{className:"card__wrp",children:[s.jsx("p",{className:"course__title",children:o(c)}),s.jsxs("div",{className:"course__icons",children:[s.jsx(l,{className:"course__icon"}),s.jsx(j,{className:"arrow__icon"})]}),s.jsx("div",{className:"overlay",children:s.jsx("p",{children:d})})]})},a))})]})})};export{R as default};
