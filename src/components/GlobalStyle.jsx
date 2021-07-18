import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    i{
        color: #F9004D;
        font-size: 2.5rem;
    }
}

button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #F9004D;  //#950840
    background: transparent;
    color: white;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(to left, #000 50%, #F9004D 50%) right;
    background-size: 200%;
    transition: all .5s ease-out;
    &:hover{
        background-color: #F9004D;
        color: white;
        background-position: left;
    }
}

h2{
    font-weight: lighter;
    font-size: 4rem;
}

h3{
    color: white;
}

h4{
    font-weight: bold;
}

a{
    font-size: 1.1rem;
}
span{
    font-weight: bold;
    color:#F9004D;
}

p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}
`;

export default GlobalStyle;
