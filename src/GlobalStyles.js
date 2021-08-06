import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    // @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'arial', cursive;
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