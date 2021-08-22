import styled from 'styled-components'
export const Wrapper=styled.div`

max-width: var(--maxWidth);
width: 100%;
margin: 0 auto;
`
export const Content=styled.div`

padding: 30px;

h1{
    text-align: center;
    position: relative;
    width: max-content;
    margin: 10px auto;
}

h1::after{
    position: absolute;
    top: 35px;
    left: 15px;
    width: 80%;
    height: 5px;
    border-radius: 15px;
    background-color: var(--violentDark);
    content: '';
}

p{
    width: 70%;
    margin: 0 auto;
    text-align: center;
    font-size: var(--fontSmall);
}

a{
    display: block;
    width: 155px;
    padding: 7px;
    margin: 25px auto;
    background-color: var(--violentDark);
    color: var(--white);
    border-radius: 15px;
    font-weight: 700;
    box-shadow:var(--boxShadow)
}


@media (max-width:768px){
    padding: 30px 10px;
    p{
        width: 95%;
        text-align: center;
        word-wrap: break-word;
    }
}

`