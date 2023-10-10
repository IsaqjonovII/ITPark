import{s as r,p as t,l as s,c as l,f as m,u as c,j as e,L as i,e as d}from"./index-daa35007.js";const x="/assets/banner-4f3bd8ed.jpg",{white:h,green:n}=l,{kanit:o,overpass:_}=m,g=r.div`
  width: 100%;
  max-width: ${t(1550)};
  padding: ${t(50)};
  color: ${h};
  margin: auto;
  .main {
    ${s("flex")}
    .banner__img {
        width: 50%;
        position: relative;
        margin-right: ${t(50)};
        border-radius: ${t(30)};
        border: ${t(5)} solid ${n};
    }
  }
  .logo__wrp {
      ${s("flex")}
      max-width: ${t(350)};
      justify-content: start;
      .logo {
          width: 100%;
          max-width: ${t(100)};
          margin-right: ${t(20)};
        }
        h1 {
            font-size: ${t(43)};
            font-family: ${o};
            line-height: .7;
            font-weight: 400;
            span {
                font-size: ${t(16)};
                text-transform: uppercase;
            }
        }
    }
    .about__text {
        font-size: ${t(23)};
        font-family: ${o};
        margin-bottom: ${t(20)};
      text-align: justify;
        line-height: 1.3;
        span {
          color: ${n};
        }
  }
  .section__title {
    font-size: ${t(45)};
    font-family: ${_};
    margin: ${t(20)} 0;
  }
  .section {
    margin: ${t(30)} 0;
  }
  @media screen and (max-width: ${t(1240)}) {
    .main {

      .banner__img {
        margin-right: ${t(30)};
      }
    }
    .about__text {
      font-size: ${t(18)};
    }
  }
  @media screen and (max-width: ${t(1024)}) {
    .main {
      flex-direction: column-reverse;
      .banner__img {
        width: 100%;
        margin-right: 0;
      }
      .logo__wrp {
        margin: auto;
        max-width: ${t(280)};
        justify-content: center;
        .logo {
         
          max-width: ${t(80)};
        }
        h1 {
            font-size: ${t(33)};
            span {
                font-size: ${t(14)};
                text-transform: uppercase;
            }
        }
      }
    }
    .section__title {
      font-size: ${t(35)};
    }
  }
  @media screen and (max-width: ${t(550)}) {
    padding: ${t(30)};
    .main {
      .about__text {
        font-size: ${t(15)};
      }
    }
    .section__title {
      font-size: ${t(25)};
    }
  }
`,f=()=>{const{t:a}=c();return e.jsxs(g,{children:[e.jsxs("main",{className:"main",role:"main",children:[e.jsx(i,{className:"banner__img",src:x,alt:"IT Park outside image"}),e.jsxs("div",{children:[e.jsxs("div",{className:"logo__wrp",children:[e.jsx(i,{className:"logo",src:d,alt:"IT Park logo"}),e.jsxs("h1",{children:["IT Park ",e.jsx("br",{})," ",e.jsx("span",{children:"Tashkent region"})," "]})]}),e.jsx("p",{className:"about__text",children:a("about_text1")}),e.jsx("p",{className:"about__text",children:a("about_text2")})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h1",{className:"section__title",children:a("about_history")}),e.jsx("p",{className:"about__text",children:a("about_text3")})]})]})};export{f as default};
