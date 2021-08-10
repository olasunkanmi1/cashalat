import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100vw;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyles;