import{s as o,p as e,l as i,c as r,f as c,j as t,L as a,e as l}from"./index-8066d643.js";const d="/assets/banner-4f3bd8ed.jpg",{white:h,green:n}=r,{kanit:s,overpass:m}=c,f=o.div`
  width: 100%;
  max-width: ${e(1550)};
  padding: ${e(50)};
  color: ${h};
  margin: auto;
  .main {
    ${i("flex")}
    .banner__img {
        width: 50%;
        position: relative;
        margin-right: ${e(50)};
        border-radius: ${e(30)};
        border: ${e(5)} solid ${n};
    }
  }
  .logo__wrp {
      ${i("flex")}
      max-width: ${e(350)};
      justify-content: start;
      .logo {
          width: 100%;
          max-width: ${e(100)};
          margin-right: ${e(20)};
        }
        h1 {
            font-size: ${e(43)};
            font-family: ${s};
            line-height: .7;
            font-weight: 400;
            span {
                font-size: ${e(16)};
                text-transform: uppercase;
            }
        }
    }
    .about__text {
        font-size: ${e(23)};
        font-family: ${s};
        margin-bottom: ${e(20)};
      text-align: justify;
        line-height: 1.3;
        span {
          color: ${n};
        }
  }
  .section__title {
    font-size: ${e(45)};
    font-family: ${m};
    margin: ${e(20)} 0;
  }
  .section {
    margin: ${e(30)} 0;
  }
  @media screen and (max-width: ${e(1240)}) {
    .main {

      .banner__img {
        margin-right: ${e(30)};
      }
    }
    .about__text {
      font-size: ${e(18)};
    }
  }
  @media screen and (max-width: ${e(1024)}) {
    .main {
      flex-direction: column-reverse;
      .banner__img {
        width: 100%;
      }
      .logo__wrp {
        margin: auto;
        max-width: ${e(280)};
        justify-content: center;
        .logo {
         
          max-width: ${e(80)};
        }
        h1 {
            font-size: ${e(33)};
            span {
                font-size: ${e(14)};
                text-transform: uppercase;
            }
        }
      }
    }
    .section__title {
      font-size: ${e(35)};
    }
  }
  @media screen and (max-width: ${e(550)}) {
    padding: ${e(30)};
    .main {
      .about__text {
        font-size: ${e(15)};
      }
    }
    .section__title {
      font-size: ${e(25)};
    }
  }
`,g=()=>t.jsxs(f,{children:[t.jsxs("main",{className:"main",role:"main",children:[t.jsx(a,{className:"banner__img",src:d,alt:"IT Park outside image"}),t.jsxs("div",{children:[t.jsxs("div",{className:"logo__wrp",children:[t.jsx(a,{className:"logo",src:l,alt:"IT Park logo"}),t.jsxs("h1",{children:["IT Park ",t.jsx("br",{})," ",t.jsx("span",{children:"Tashkent region"})," "]})]}),t.jsxs("p",{className:"about__text",children:["On July 24, 2019 the first ",t.jsx("span",{children:"IT Park"})," in the Republic of Uzbekistan opened its doors in Tashkent. In a given short amount of time, IT Parkhas already brought its first fruits in the form of 28 new startups, created dozens of projects in the field of information technology, as well as trainings, workshops and meetings to encourage the youth of our country, their interest in this area and develop computer literacy among the population."]}),t.jsxs("p",{className:"about__text",children:[t.jsx("span",{children:"IT Park"})," is a complex of facilities, buildings and structures designed to ensure the startup and market access, an extraterritorial free economic zone for IT companies, including integration with scientific and educational organizations. It is a place where active and talented people in the field IT will have a real chance to transform their ideas into real business projects through accounting, legal, marketing and educational support."]})]})]}),t.jsxs("section",{className:"section",children:[t.jsx("h1",{className:"section__title",children:"History of creation of IT Park"}),t.jsxs("p",{className:"about__text",children:["During the first visit of ",t.jsx("span",{children:"the President of the Republic of Uzbekistan Shavkat Mirziyoyev "})," to the Republic of India, which was held from September 30 to October 2, 2018, Uzbek and Indian Parties agreed to expand cooperation in the field of IT. The Uzbek side, together with the information and technology companies of India, expressed interest in creating an Information Technology Park in Uzbekistan on basis of their best practices in software development and accelerating startups. Thus, it can be noted that ",t.jsx("span",{children:"IT Park"})," was created on the initiative of the President of the Republic of Uzbekistan to improve the startup ecosystem and startup projects and their implementation in our country."]})]})]});export{g as default};
