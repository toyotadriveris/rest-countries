import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


:root  {
    --thin: 300;
    --medium: 600;
    --bold: 800;

&,&.lightmode {
    --text: hsl(200, 15%, 8%); // light mode text
    --elements: hsl(0, 0%, 100%); // light mode elements
    --inputs: hsl(0, 0%, 52%); // light mode input
    --background: hsl(0, 0%, 98%); //Light Mode Background


    --very-dark-blue: hsl(200, 15%, 8%);
    --dark-gray: hsl(0, 0%, 52%); 
    --very-light-gray: hsl(0, 0%, 98%); 
}

&.darkmode {
    --text: hsl(0, 0%, 100%);
    --elements: hsl(209, 23%, 22%); // Dark Mode Elements
    --background: hsl(207, 26%, 17%); // Dark Mode Background

    --dark-blue: hsl(209, 23%, 22%);
    --very-dark-blue: hsl(207, 26%, 17%); 
}
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  height: 100%;
}


#root {
  height: 100%;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}


/* 
input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px; 
} 
*/

input,button,textarea,select {
  font-family: inherit;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}
`;
export default GlobalStyles;
