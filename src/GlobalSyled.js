import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --backgroundColor:#F8F8FF;
    --white:#ffff;
    --black:#000;
    --darkBlue:#130F49;
    --violentDark:#6366F1;
    --violentLight:#8F9AF8;
    --sidebar:#BFCAD0;
    --boxShadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    --boxShadow2: 0px 4px 4px rgba(99, 102, 241, .50);
    --maxWidth:1280px;
    --fontLarge:2.5rem;
    --fontMed:1.7rem;
    --fontSmall:1.4rem;
    --fontMini:1rem;

}
*{margin: 0;
   padding: 0;
   box-sizing: border-box;}

body{
   
   box-sizing: border-box;
   font-weight: 300;
   font-family: 'Karla', sans-serif;
   background: var(--backgroundColor);
   color:var(--darkBlue);

   li{
       list-style: none;
   }
   a{
       text-decoration: none;
   }


   p{
       color: var(--black);
   }
    
}
  
`