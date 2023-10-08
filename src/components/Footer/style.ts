import { fontFamily } from "constants";
import { colors } from "constants/colors";
import styled from "styled-components";
import { layout } from "styles/mixins";
import { pxToRem } from "utils";

const { white, green } = colors;
const { kanit } = fontFamily;

export default styled.footer`
    ${layout("center")}
    padding: ${pxToRem(20)} 0;
    position: relative;
    z-index: 99;
    border-top: ${pxToRem(1)} solid ${white}10;
    
    .footer__logo{
      ${layout("flex")}
      max-width: ${pxToRem(350)};
      justify-content: center;
      margin: auto;
      color: ${white};
      margin-bottom: ${pxToRem(20)};
      .logo {
          width: 100%;
          max-width: ${pxToRem(100)};
          margin-right: ${pxToRem(20)};
        }
        h1 {
            font-size: ${pxToRem(43)};
            font-family: ${kanit};
            line-height: .7;
            span {
                font-size: ${pxToRem(16)};
                text-transform: uppercase;
            }
        }
    }
    .footer__links {
        ${layout("flex")}
        .footer__link svg {
                width: ${pxToRem(70)};
                height: ${pxToRem(70)};
                ${layout("center")}
                padding: ${pxToRem(18)};
                color: ${white};
                margin: 0 ${pxToRem(20)};
                border-radius: 50%;
                border: ${pxToRem(1)} solid ${green};
                &:hover {
                    transition: 200ms;
                    background-color: ${green}20;
                    color: ${green};
                }
            }
        
    }

    @media screen and (max-width: ${pxToRem(1024)}) {
        .footer__links {

            .footer__link {
                svg {
                    width: ${pxToRem(60)};
                    height: ${pxToRem(60)};
                    padding: ${pxToRem(14)};
                }
            }
        }
    }
    @media screen and (max-width: ${pxToRem(768)}) {
        .footer__logo  {
            .logo {
                max-width: ${pxToRem(80)};
            }
            h1 {
                font-size: ${pxToRem(35)};
                span {
                    font-size: ${pxToRem(14)};
                }
            }
        }
        .footer__links {
            .footer__link svg{
                width: ${pxToRem(40)};
                    height: ${pxToRem(40)};
                    padding: ${pxToRem(10)};
                margin: 0 ${pxToRem(10)};
            }
        }
    }
    @media screen and (max-width: ${pxToRem(520)}) {
        .footer__logo {
            .logo {
                max-width: ${pxToRem(60)};
            }
            h1 {
                font-size: ${pxToRem(28)};
                span {
                font-size: ${pxToRem(13)};
                }
            }
        }
        .footer__links {
            .footer__link svg{
                margin: 0 ${pxToRem(4)};
            }
        }
    }
`;
