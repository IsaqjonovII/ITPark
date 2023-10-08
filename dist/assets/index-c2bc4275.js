import{G as $,s as m,p as e,l as o,f as u,c as g,r as d,j as r,L as p}from"./index-8066d643.js";import{n as c}from"./index-277f4278.js";function x(a){return $({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(a)}const{kanit:f,overpass:b}=u,{white:t,green:n}=g,j=m.div`
  padding: ${e(40)} ${e(80)};
  max-width: ${e(1550)};
  margin: auto;
  .news__header,
  .search__wrp {
    ${o("flex")}
  }
  .news__header {
    margin-bottom: ${e(40)};
    .search__wrp {
      width: 100%;
      max-width: ${e(1050)};
      height: ${e(50)};
      background-color: ${t}20;
      border-radius: ${e(6)};
      .search__inp {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        outline: none;
        font-size: ${e(20)};
        padding: 0 ${e(15)};
        color: ${t};
        &:focus {
          border: ${e(2)} solid ${n}70;
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
        background-color: ${n}70;
        color: ${t};
        cursor: pointer;
      }
    }
  }
  .news__title {
    font-size: ${e(45)};
    font-family: ${b};
    color: ${t};
    margin-right: ${e(40)};
  }
  .news__cards__wrp {
    width: 100%;
    max-width: ${e(1550)};
    height: auto;
    margin: auto;
    ${o("grid",{cols:3,rows:"auto"})}
    grid-gap: ${e(20)};
    .news__card {
      padding: ${e(20)};
      border-radius: ${e(10)};
      border: ${e(1)} solid ${n};
      cursor: pointer;
      &:hover {
        h1 {
            color: ${n};
        }
      }
      .card__img {
        width: 100%;
        border-radius: ${e(10)};
        object-fit: cover;
      }
      .card__content {
        color: ${t};
        font-family: ${f};
        margin-bottom: ${e(20)};
        h2 {
        color: ${t}80;
        font-weight: 300;
        font-size: ${e(20)};
        }
      }
    }
  }

  @media screen and (max-width: ${e(1100)}) {
    .news__cards__wrp {
        ${o("grid",{cols:2,rows:"auto"})}
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
        ${o("center")}
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
        ${o("grid",{cols:1,rows:"auto"})}
    }
}
`,y=()=>{const[a,l]=d.useState(""),_=d.useMemo(()=>c.filter(s=>s.title.toLowerCase().includes(a.toLowerCase())||s.subtitle.toLowerCase().includes(a.toLowerCase())),[a,c]);return r.jsxs(j,{children:[r.jsxs("header",{className:"news__header",children:[r.jsx("h1",{className:"news__title",children:"News"}),r.jsxs("div",{className:"search__wrp",children:[r.jsx("input",{type:"search",className:"search__inp",value:a,onChange:({target:s})=>l(s.value),required:!0,minLength:4,placeholder:"Search news..."}),r.jsx("button",{type:"submit",role:"button",tabIndex:0,"aria-expanded":!1,"aria-label":"Search",children:r.jsx(x,{})})]})]}),r.jsx("main",{className:"news__cards__wrp",role:"main",children:_.map(({id:s,title:i,subtitle:h,img:w})=>r.jsxs("div",{className:"news__card",children:[r.jsxs("div",{className:"card__content",children:[r.jsx("h1",{children:i}),r.jsx("h2",{children:h})]}),r.jsx(p,{className:"card__img",src:w,alt:`Image of ${i}`})]},s))})]})};export{y as default};
