import{s as l,p as t,l as i,c as p,f as x,j as a,q as g,u as f}from"./index-daa35007.js";import{r as b}from"./residents-9969fa27.js";import{e as o}from"./courses-225d089d.js";const j="/assets/nodata-a64bb7d3.png",{white:v,lightGray:c,darkGray:N,green:w}=p,{kanit:h}=x,y=l.section`
    width: 100%;
    height: calc(100vh - 5rem);
    background-image: url(${b});
    padding: ${t(30)};

    .table__wrp {
        width: 100%;
        max-width: ${t(1200)};
        height: auto;
        padding:  ${t(20)};
        margin: 0 auto;
        border: ${t(1)} solid ${c};
        border-radius: ${t(6)};
        background-color: ${N}c5;
    }
    .thead {
        ${i("flex")}
        font-family: ${h};
        font-size: ${t(20)};
        color: ${w};
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
        color: ${v};
        .tr {
            ${i("flex")}
            margin: ${t(10)} 0;
            border-radius: ${t(4)};
            transition: 300ms ease-out;
            &:hover {
                background-color: ${c};
                cursor: pointer;
            }
            .td {
                text-align: left !important;
                padding: ${t(10)} ${t(20)};
                width: 100%;
                font-family: ${h};
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
`,k=l.div`
  width: 100%;
  height: calc(100vh - 8rem);
  ${i("center")}
  background-image: url(${j});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`,_=()=>a.jsx(k,{}),G=()=>{var e,r;const{id:s}=g(),{t:d}=f();return a.jsx(y,{children:(e=o[Number(s)])!=null&&e.courses.length?a.jsxs("div",{className:"table__wrp",children:[a.jsxs("div",{className:"thead",children:[a.jsx("div",{className:"th",children:"No."}),a.jsx("div",{className:"th",children:d("edu_center")}),a.jsx("div",{className:"th",children:d("edu_price")}),a.jsx("div",{className:"th",children:d("edu_duration")})]}),a.jsx("div",{className:"tbody",children:(r=o[Number(s)])==null?void 0:r.courses.map(({id:n,name:m,duration:$,price:u})=>a.jsxs("div",{className:"tr",children:[a.jsx("div",{className:"td",children:++n}),a.jsx("div",{className:"td",children:m}),a.jsxs("div",{className:"td",children:[u," so'm"]}),a.jsx("div",{className:"td",children:$.toString()})]},n))})]}):a.jsx(_,{})})};export{G as default};
