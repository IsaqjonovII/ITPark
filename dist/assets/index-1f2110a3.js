import{s as d,p as s,l as i,c,f as o,r as l,u as m,j as a,F as x,a as $,b as h,d as p}from"./index-daa35007.js";import{r as g}from"./residents-9969fa27.js";const{white:r,green:t}=c,{kanit:_,overpass:n,roboto:j}=o,f=d.div`
background-image: url(${g});
height: auto;
  .pros__title {
    padding: ${s(100)} ${s(50)};
    text-align: center;
    font-family: ${n};
    color: ${r};
    font-size: ${s(30)};
    max-width: ${s(1e3)};
    line-height: 1.2;
    margin: 0 auto;
    font-weight: 300;
  }
  .pros__cards {
    ${i("grid",{cols:4,rows:1})}
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
        font-family: ${j};
        color: ${r};
        font-size: ${s(20)};
      }
      .indicator {
        font-size: ${s(30)};
        line-height: 1.5;
        font-weight: 800;
        font-family: ${_};
        color: ${t};
        text-shadow: 0 0 ${s(3)} ${t};
      }
    }
  }
  .testimonial {
    padding: ${s(50)};
    .testimonial__cards {
    max-width: ${s(1e3)};
      ${i("grid",{cols:4,rows:1})}
      margin: auto;
      grid-gap: ${s(10)};
      .card {
        padding: ${s(20)} ${s(35)};
        ${i("center")}
        color: ${r};
        text-align: center;
        border: ${s(1)} solid ${t}70;
        border-radius: ${s(10)};
        cursor: pointer;
        transition:100ms ease;
        &:hover {
          background-color: ${t}10;
          box-shadow: 0 ${s(2)} 0 ${t};
          transform: translateY(-${s(2)});
          svg {
            color: ${t};
          }
        }
        svg {
          font-size: calc(${s(10)} + 2vw);
        }
        span {
          font-size: ${s(22)};
          margin: ${s(20)} 0 0 0;
          font-family: ${n};
        }
      }
    }
  }
  @media screen and (max-width: ${s(1024)}) {
    .pros__cards {
        ${i("grid",{cols:2,rows:2})}
        .card:last-child {
            max-width: 80%;
            margin: auto;
        }
        .card {
            .text {
                font-size: ${s(17)};
            }
        }
    }
    .testimonial {
      .testimonial__cards {
        ${i("grid",{cols:2,rows:2})}
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
        ${i("grid",{cols:1,rows:4})}
        .card {
            padding: 0;
            .text {
                font-size: ${s(18)};
              }
            }
    }
    .testimonial {
      .testimonial__cards {
        ${i("grid",{cols:1,rows:4})}
        max-width: ${s(1e3)};

        .card {
          svg {
            font-size: ${s(35)};
          }
          span {
            font-size: ${s(19)};
          }
        }
      }
    }
    .pros__title {
        margin-bottom: ${s(50)};
        padding: ${s(20)};
        font-size: ${s(20)};
    }
  }
`,N=()=>{l.useEffect(()=>{document.title="ITPARK - Residents"},[]);const{t:e}=m();return a.jsxs(f,{children:[a.jsxs("section",{className:"pros",children:[a.jsx("h3",{className:"pros__title",children:e("residents_title")}),a.jsxs("div",{className:"pros__cards",children:[a.jsxs("div",{className:"card",children:[a.jsx("span",{className:"indicator",children:"7.5%"}),a.jsx("p",{className:"text",children:e("in_tax")})]}),a.jsxs("div",{className:"card",children:[a.jsx("span",{className:"indicator",children:"0%"}),a.jsx("p",{className:"text",children:e("cp_tax")})]}),a.jsxs("div",{className:"card",children:[a.jsx("span",{className:"indicator",children:"0%"}),a.jsx("p",{className:"text",children:e("usp_taxt")})]}),a.jsxs("div",{className:"card",children:[a.jsx("span",{className:"indicator",children:"0%"}),a.jsx("p",{className:"text",children:e("imp_tax")})]})]})]}),a.jsx("section",{className:"testimonial",children:a.jsxs("div",{className:"testimonial__cards",children:[a.jsxs("div",{className:"card",children:[a.jsx(x,{}),a.jsx("span",{children:e("resident_clause")})]}),a.jsxs("div",{className:"card",children:[a.jsx($,{}),a.jsx("span",{children:e("resident_member")})]}),a.jsxs("div",{className:"card",children:[a.jsx(h,{}),a.jsx("span",{children:e("resident_req")})]}),a.jsxs("div",{className:"card",children:[a.jsx(p,{}),a.jsx("span",{children:e("resident_rent")})]})]})})]})};export{N as default};
