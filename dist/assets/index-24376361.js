import{s as h,p as t,l as i,c as u,f as p,j as a,u as x}from"./index-b4e51de9.js";import{r as g}from"./residents-9969fa27.js";import{e as n}from"./courses-c4ec0afe.js";import"./index.esm-d4a8b1af.js";const f="/assets/nodata-a64bb7d3.png",{white:b,lightGray:o,darkGray:j,green:v}=u,{kanit:c}=p,N=h.section`
    width: 100%;
    height: calc(100vh - 5rem);
    background-image: url(${g});
    padding: ${t(30)};

    .table__wrp {
        width: 100%;
        max-width: ${t(1200)};
        height: auto;
        padding:  ${t(20)};
        margin: 0 auto;
        border: ${t(1)} solid ${o};
        border-radius: ${t(6)};
        background-color: ${j}c5;
    }
    .thead {
        ${i("flex")}
        font-family: ${c};
        font-size: ${t(20)};
        color: ${v};
        .th {
            padding: ${t(10)} ${t(20)};
            cursor: pointer;
            width: 100%;
            &:first-child {
                max-width: ${t(120)};
            }
        }
    }
    .tbody {
        color: ${b};
        .tr {
            ${i("flex")}
            margin: ${t(10)} 0;
            border-radius: ${t(4)};
            transition: 300ms ease-out;
            &:hover {
                background-color: ${o};
                cursor: pointer;
            }
            .td {
                text-align: left !important;
                padding: ${t(10)} ${t(20)};
                width: 100%;
                font-family: ${c};
                font-size: ${t(22)};
                &:first-child {
                    max-width: ${t(120)};
                }
            }
        }
    }
    @media screen and (max-width: ${t(1024)}) {
        .th:first-child, .td:first-child {
            max-width: ${t(50)} !important;
            padding: 0;
        }
        .th:nth-child(3),
        .th:nth-child(4),
        .td:nth-child(3), 
        .td:nth-child(4) {
            max-width: ${t(180)};
            padding: ${t(10)} ${t(10)} !important;
        }
    }
    @media screen and (max-width: ${t(700)}) {
        .td, .th {
            font-size: ${t(16)} !important;
            padding: 0 !important;
        }      
        height: calc(100vh - 3rem);
    }
    @media screen and (max-width: ${t(550)}) {
        padding: ${t(20)};
    }
`,w=h.div`
  width: 100%;
  height: calc(100vh - 8rem);
  ${i("center")}
  background-image: url(${f});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`,y=()=>a.jsx(w,{}),_=()=>{var s,e;const{id:d}=x();return a.jsx(N,{children:(s=n[Number(d)])!=null&&s.courses.length?a.jsxs("div",{className:"table__wrp",children:[a.jsxs("div",{className:"thead",children:[a.jsx("div",{className:"th",children:"No."}),a.jsx("div",{className:"th",children:"Education Center"}),a.jsx("div",{className:"th",children:"Price"}),a.jsx("div",{className:"th",children:"Duration"})]}),a.jsx("div",{className:"tbody",children:(e=n[Number(d)])==null?void 0:e.courses.map(({id:r,name:l,duration:m,price:$})=>a.jsxs("div",{className:"tr",children:[a.jsx("div",{className:"td",children:++r}),a.jsx("div",{className:"td",children:l}),a.jsxs("div",{className:"td",children:[$," so'm"]}),a.jsx("div",{className:"td",children:m.toString()})]},r))})]}):a.jsx(y,{})})};export{_ as default};
