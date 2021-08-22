import styled from 'styled-components';

export const Wrapper=styled.div`
max-width: var(--maxWidth);
width: 100%;
margin: 0 auto;


` 

export const Content=styled.div`

padding: 30px 70px;

display: flex;
justify-content: space-between;
align-items: center;

.email-info{
    width: 50%;
    
    h3{
        font-size: var(--fontMed);
        margin: 10px 0;
    }
    
    a{
        font-size: var(--fontMed);
        font-weight: 600;
    color: var(--darkBlue);
    /* background-color: var(--violentLight); */
    padding: 2px;
    border-radius: 15px;
    transition: width 0.5s;
    width: max-content;
    position: relative;
    z-index: 1;
    
     
}

a::after{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    content: '';
    background-color: var(--violentDark);
    height: 0%;
    z-index: -1;
    border-radius: 15px;
    transition: 0.5s;
    box-shadow: var(--boxShadow);
}

a:hover::after{
    /* background-color: var(--violentLight); */
    height: 100%;
    
}
}

.social-media{
    h3{
        font-size: var(--fontMed);
        text-align: center;
       
    }
    img{
        width: 35px;
        margin: 5px 10px;
    }
}

@media (max-width:768px){

    padding: 0;
    flex-direction: column;

    .email-info{
        width: 90%;
        margin:0 auto ;
        text-align: center;

        a{
            font-size: var(--fontMini);
            color: var(--darkBlue);
            text-align: center;
            margin-left: auto;
        }
    }

    .social-media{
        width: 100%;
        h3{
            margin-top: 15px;
        }
        .icons{
            width: 50%;
            margin: 0 auto;
        }
        img{
            margin-left: 5px;
            margin-right: 5px;
            width: 25px;
        }
    }
}
`