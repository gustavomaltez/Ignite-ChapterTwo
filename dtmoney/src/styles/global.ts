import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --red: #E52E4D;
        --blue: #5429CC;
        --blue-light: #6933FF; 
        --text-light: #363F5F;
        --text-body: #969CB3;
        --background: #F0f2f5;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
       @media (max-width: 1080){
           font-size: 93.75%;
       }

       @media (max-width: 720){
           font-size: 87.5%;
       }
    }

    body{
        background: var(--background);
        --webkit-font-smoothing: antialiased;
    } 

    button: {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;