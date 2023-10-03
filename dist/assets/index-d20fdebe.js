import{s as n,p as s,l as a,c as r,f as d,r as c,j as e}from"./index-ba88aa81.js";import{r as o}from"./residents-9969fa27.js";const{white:t,green:i}=r,{kanit:l,overpass:m,roboto:h}=d,x=n.div`
background-image: url(${o});
background-attachment: fixed;
height: auto;
min-height: 90vh;
  .pros__title {
    padding: ${s(100)} ${s(50)};
    text-align: center;
    font-family: ${m};
    color: ${t};
    font-size: ${s(30)};
    max-width: ${s(1e3)};
    line-height: 1.2;
    margin: 0 auto;
    font-weight: 300;
  }
  .pros__cards {
    ${a("grid",{cols:4,rows:1})}
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
        font-family: ${h};
        color: ${t};
        font-size: ${s(20)};
      }
      .indicator {
        font-size: ${s(30)};
        line-height: 1.5;
        font-weight: 800;
        font-family: ${l};
        color: ${i};
        text-shadow: 0 0 ${s(3)} ${i};
      }
    }
  } 
  @media screen and (max-width: ${s(1024)}) {
    .pros__cards {
        ${a("grid",{cols:2,rows:2})}
        .card:last-child {
            width: 100%;
        }
        .card {
            .text {
                font-size: ${s(17)};
            }
        }
    }
    .pros__title {
        padding: ${s(50)};
        font-size: ${s(25)};
    }
  }
  @media screen and (max-width: ${s(678)}) {
    .pros__cards {
        ${a("grid",{cols:1,rows:4})}
        .card {
            padding: 0;
            .text {
                font-size: ${s(18)};
            }
        }
        .card:last-child {
            width: 100%;
        }
    }
    .pros__title {
        margin-bottom: ${s(50)};
        padding: ${s(20)};
        font-size: ${s(20)};
    }
  }
`,g=()=>(c.useEffect(()=>{document.title="ITPARK - Residents"},[]),e.jsx(x,{children:e.jsxs("section",{className:"pros",children:[e.jsx("h3",{className:"pros__title",children:"Residents of IT Park are IT companies and IT training centers, which can receive a number of significant advantages. These include:"}),e.jsxs("div",{className:"pros__cards",children:[e.jsxs("div",{className:"card",children:[e.jsx("span",{className:"indicator",children:"7.5%"}),e.jsx("p",{className:"text",children:"Income tax"})]}),e.jsxs("div",{className:"card",children:[e.jsx("span",{className:"indicator",children:"0%"}),e.jsx("p",{className:"text",children:"Corporate tax"})]}),e.jsxs("div",{className:"card",children:[e.jsx("span",{className:"indicator",children:"0%"}),e.jsx("p",{className:"text",children:"Unified Social Payments"})]}),e.jsxs("div",{className:"card",children:[e.jsx("span",{className:"indicator",children:"0%"}),e.jsxs("p",{className:"text",children:["Custom payments when ",e.jsx("br",{})," importing goods for ",e.jsx("br",{})," own needs"]})]})]})]})}));export{g as default};
