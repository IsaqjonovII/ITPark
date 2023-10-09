import{s as n,p as s,l as e,c as d,f as c,r as o,j as a,F as l,a as m,b as x,d as h}from"./index-8066d643.js";import{r as $}from"./residents-9969fa27.js";const{white:t,green:i}=d,{kanit:g,overpass:r,roboto:p}=c,f=n.div`
background-image: url(${$});
height: auto;
  .pros__title {
    padding: ${s(100)} ${s(50)};
    text-align: center;
    font-family: ${r};
    color: ${t};
    font-size: ${s(30)};
    max-width: ${s(1e3)};
    line-height: 1.2;
    margin: 0 auto;
    font-weight: 300;
  }
  .pros__cards {
    ${e("grid",{cols:4,rows:1})}
    max-width: ${s(1e3)};
    margin: 0 auto;
    .card {
      padding: ${s(20)};
      text-align: center;
      margin: 0 ${s(10)};
      &:last-child {
        width: ${s(320)};
      }
      .text {
        font-family: ${p};
        color: ${t};
        font-size: ${s(20)};
      }
      .indicator {
        font-size: ${s(30)};
        line-height: 1.5;
        font-weight: 800;
        font-family: ${g};
        color: ${i};
        text-shadow: 0 0 ${s(3)} ${i};
      }
    }
  }
  .testimonial {
    padding: ${s(50)};
    .testimonial__cards {
    max-width: ${s(1e3)};
      ${e("grid",{cols:4,rows:1})}
      margin: auto;
      grid-gap: ${s(10)};
      .card {
        padding: ${s(20)} ${s(35)};
        ${e("center")}
        color: ${t};
        text-align: center;
        border: ${s(1)} solid ${i}70;
        border-radius: ${s(10)};
        cursor: pointer;
        transition:100ms ease;
        &:hover {
          background-color: ${i}10;
          box-shadow: 0 ${s(2)} 0 ${i};
          transform: translateY(-${s(2)});
          svg {
            color: ${i};
          }
        }
        svg {
          font-size: calc(${s(10)} + 2vw);
        }
        span {
          font-size: ${s(22)};
          margin: ${s(20)} 0 0 0;
          font-family: ${r};
        }
      }
    }
  }
  @media screen and (max-width: ${s(1024)}) {
    .pros__cards {
        ${e("grid",{cols:2,rows:2})}
        .card:last-child {
            width: 100%;
        }
        .card {
            .text {
                font-size: ${s(17)};
            }
        }
    }
    .testimonial {
      .testimonial__cards {
        ${e("grid",{cols:2,rows:2})}
        max-width: ${s(1e3)};
      }
    }
    .pros__title {
        padding: ${s(50)};
        font-size: ${s(25)};
    }
  }
  @media screen and (max-width: ${s(678)}) {
    .pros__cards {
        ${e("grid",{cols:1,rows:4})}
        .card {
            padding: 0;
            .text {
                font-size: ${s(18)};
              }
            }
            /* &:last-child {
                width: 100%;
            } */
    }
    .testimonial {
      .testimonial__cards {
        ${e("grid",{cols:1,rows:4})}
        max-width: ${s(1e3)};
      }
    }
    .pros__title {
        margin-bottom: ${s(50)};
        padding: ${s(20)};
        font-size: ${s(20)};
    }
  }
`,_=()=>(o.useEffect(()=>{document.title="ITPARK - Residents"},[]),a.jsxs(f,{children:[a.jsxs("section",{className:"pros",children:[a.jsx("h3",{className:"pros__title",children:"Residents of IT Park are IT companies and IT training centers, which can receive a number of significant advantages. These include:"}),a.jsxs("div",{className:"pros__cards",children:[a.jsxs("div",{className:"card",children:[a.jsx("span",{className:"indicator",children:"7.5%"}),a.jsx("p",{className:"text",children:"Income tax"})]}),a.jsxs("div",{className:"card",children:[a.jsx("span",{className:"indicator",children:"0%"}),a.jsx("p",{className:"text",children:"Corporate tax"})]}),a.jsxs("div",{className:"card",children:[a.jsx("span",{className:"indicator",children:"0%"}),a.jsx("p",{className:"text",children:"Unified Social Payments"})]}),a.jsxs("div",{className:"card",children:[a.jsx("span",{className:"indicator",children:"0%"}),a.jsxs("p",{className:"text",children:["Custom payments when ",a.jsx("br",{})," importing goods for ",a.jsx("br",{})," own needs"]})]})]})]}),a.jsx("section",{className:"testimonial",children:a.jsxs("div",{className:"testimonial__cards",children:[a.jsxs("div",{className:"card",children:[a.jsx(l,{}),a.jsx("span",{children:"Residency Clause"})]}),a.jsxs("div",{className:"card",children:[a.jsx(m,{}),a.jsx("span",{children:"Become Resident"})]}),a.jsxs("div",{className:"card",children:[a.jsx(x,{}),a.jsx("span",{children:"Requirements"})]}),a.jsxs("div",{className:"card",children:[a.jsx(h,{}),a.jsx("span",{children:"Rent Office"})]})]})})]}));export{_ as default};
