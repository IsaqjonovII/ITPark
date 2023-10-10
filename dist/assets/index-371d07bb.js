import{G as m,s as u,p as e,l as t,f as g,c as p,u as x,r as c,j as r,L as f}from"./index-deecd7ee.js";import{n as l}from"./index-e5a4a259.js";function b(n){return m({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(n)}const{kanit:j,overpass:v}=g,{white:s,green:i}=p,y=u.div`
  padding: ${e(40)} ${e(80)};
  max-width: ${e(1550)};
  margin: auto;
  .news__header,
  .search__wrp {
    ${t("flex")}
  }
  .news__header {
    margin-bottom: ${e(40)};
    .search__wrp {
      width: 100%;
      max-width: ${e(1050)};
      height: ${e(50)};
      background-color: ${s}20;
      border-radius: ${e(6)};
      .search__inp {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        outline: none;
        font-size: ${e(20)};
        padding: 0 ${e(15)};
        color: ${s};
        &:focus {
          border: ${e(2)} solid ${i}70;
        }
      }
      button {
        all: unset;
        width: ${e(70)};
        height: 100%;
        font-size: ${e(24)};
        display: grid;
        place-items: center;
        border-radius: 0 ${e(6)} ${e(6)} 0;
        background-color: ${i}70;
        color: ${s};
        cursor: pointer;
      }
    }
  }
  .news__title {
    font-size: ${e(45)};
    font-family: ${v};
    color: ${s};
    margin-right: ${e(40)};
  }
  .news__cards__wrp {
    width: 100%;
    max-width: ${e(1550)};
    height: auto;
    margin: auto;
    ${t("grid",{cols:3,rows:"auto"})}
    grid-gap: ${e(20)};
    .news__card {
      padding: ${e(20)};
      border-radius: ${e(10)};
      border: ${e(1)} solid ${i};
      cursor: pointer;
      &:hover {
        h1 {
            color: ${i};
        }
      }
      .card__img {
        width: 100%;
        border-radius: ${e(10)};
        object-fit: cover;
      }
      .card__content {
        color: ${s};
        font-family: ${j};
        margin-bottom: ${e(20)};
        h2 {
        color: ${s}80;
        font-weight: 300;
        font-size: ${e(20)};
        }
      }
    }
  }

  @media screen and (max-width: ${e(1100)}) {
    .news__cards__wrp {
        ${t("grid",{cols:2,rows:"auto"})}
    }
    .news__title {
        font-size: ${e(35)};
    }
}
@media screen and (max-width: ${e(768)}) {
      padding: ${e(30)};
    .news__cards__wrp {
        .news__card h1{ 
            font-size: ${e(18)};
        } 
        .news__card h3 {
            font-size: ${e(16)};
        }
    }
  }
  @media screen and (max-width: ${e(500)}) {
    .news__header {
        ${t("center")}
        .search__wrp {
            width: 100%;
        }
    }
    .news__title {
        font-size: ${e(25)};
        margin-right: 0;
        margin-bottom: ${e(20)};
    }
    .news__cards__wrp {
        ${t("grid",{cols:1,rows:"auto"})}
    }
}
`,L=()=>{const{t:n}=x(),[o,_]=c.useState(""),h=c.useMemo(()=>l.filter(a=>a.title.toLowerCase().includes(o.toLowerCase())||a.subtitle.toLowerCase().includes(o.toLowerCase())),[o,l]);return r.jsxs(y,{children:[r.jsxs("header",{className:"news__header",children:[r.jsx("h1",{className:"news__title",children:n("news")}),r.jsxs("div",{className:"search__wrp",children:[r.jsx("input",{type:"search",className:"search__inp",value:o,onChange:({target:a})=>_(a.value),required:!0,minLength:4,placeholder:n("news_inp")}),r.jsx("button",{type:"submit",role:"button",tabIndex:0,"aria-expanded":!1,"aria-label":"Search",children:r.jsx(b,{})})]})]}),r.jsx("main",{className:"news__cards__wrp",role:"main",children:h.map(({id:a,title:d,subtitle:w,img:$})=>r.jsxs("div",{className:"news__card",children:[r.jsxs("div",{className:"card__content",children:[r.jsx("h1",{children:d}),r.jsx("h2",{children:w})]}),r.jsx(f,{className:"card__img",src:$,alt:`Image of ${d}`})]},a))})]})};export{L as default};
