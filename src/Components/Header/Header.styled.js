import styled from 'styled-components'


export const Wrapper=styled.div`
max-width: var(--maxWidth);
width: 100%;
margin: 0 auto;
padding-top: 100px;


@media (max-width:768px){
    padding-top: 80px;
}



`
export const Content = styled.div`
padding :0 35px;
display: flex;
justify-content: space-between;
align-items: center;

.header-info{
    width: 58%;
    padding-left: 30px;

    h1{
        font-size: var(--fontLarge);
        font-weight: 900;

        span{
            color: var(--violentDark);
        }
    }

    p{
        font-size: var(--fontSmall);
        padding: 15px 0;
    }

    button{
        width: 130px;
        padding: 10px;
        background: var(--violentDark);
        border: transparent;
        color: var(--white);
        font-size: var(--fontMini);
        border-radius: 25px;
        box-shadow: var(--boxShadow);
    }
}


.header-img{
    width: 40%;
    /* padding-right: 30px; */
    img{
        width: 80%;
    }
}



@media (max-width:768px){

    flex-direction: column-reverse;
    padding: 0 10px;

    .header-info{
        width: 100%;
        br{
            display: none;
        }
        h1{
            text-align: center;
            font-size: var(--fontMed);
            width: 100%;
            font-weight: 700;

            span{
                display: block;
                color: var(--violentDark);
            }
        }

        p{
            text-align: center;
            font-size: var(--fontMini);
            width: 95%;
        margin: 0 auto;
        }
        button{
        display: block;
        margin:15px  auto;
        
        }
    }

    .header-img{
        width: 90%;
        margin: 15px auto;

        img{
            width: 100%;
        }
    }
}
`