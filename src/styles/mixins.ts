import {css} from "styled-components";

type TGridLayout = {
    cols: number;
    colsW?: number | string;
    rows: number;
    rowsH?: number | string;
}

export const layout = (layoutStyle: string, gridLayout?: TGridLayout) => css`
    display: ${layoutStyle === "flex" ? "flex" : "grid"};
    ${
     layoutStyle === "flex" ? 
      `align-items: center;
       justify-content: space-between;` 
       : 
      `grid-template-columns: repeat(${gridLayout?.cols}, ${gridLayout?.colsW ?? "1fr"});
       grid-template-rows: repeat(${gridLayout?.rows}, ${gridLayout?.rowsH ?? "1fr"})`
    }
`