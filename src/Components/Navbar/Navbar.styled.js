import styled from 'styled-components';

export const Wrapper=styled.div`
max-width: var(--maxWidth);
width: 100%;
margin: 0 auto;
background:var(--white);
height: 60px;
position: fixed;
top: 0;
left: 0;
right: 0;
box-shadow: var(--boxShadow);
z-index: 999;

`
export const Content=styled.div`

padding: 0px 35px;
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;

.logo{
    width: 15%;
    padding-left: 25px;
}


.nav-links{
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .nav-item{
        font-weight: 600;
        font-size: var(--fontSmall);
        
    }
}


.icons{
    width: 10%;
    position: relative;
    height: 100%;
    display: none;
    img{
        width: 25px;
        position: absolute;
        top: 20px;
        bottom: 5px;
    }
    .close-menu{
        width: 18px;
        left: 5px;
    }

    /* @media (max-width:768px){

        width: 100%;
    } */
}

@media (max-width:768px){
position: relative;
padding: 0 15px;
width: 100%;
    .nav-links{
        flex-direction: column;
        position: absolute;
        top: 60px;
        justify-content: flex-start;
        align-items: flex-start;
        left: -110%;
        transition: 0.4s;
        padding-top: 5px;
        padding-left: 0px;
        background: var(--white);
        width: 100%;
        height: 100vh;
       

        .nav-item{
        font-size: var(--fontMed);
        /* color: red; */
        /* width: 145%; */
        padding-left: 15px;
        padding-bottom: 5px;
        padding-top: 25px;
    }
    }
    .nav-links.active{
        left: 0;
    }

    
.icons{
    display: block;
}
}

`