import styled from 'styled-components';

export const Wrapper=styled.div`
max-width: var(--maxWidth);
width: 100%;
margin: 0 auto;


` 
export const Content=styled.div`

padding: 70px 30px;

h1{
    text-align: center;
    position: relative;
    width: max-content;
    margin: 15px auto;


}
h1::after{
    position: absolute;
    content: '';
    left:7px;
    top: 35px;
    width: 80%;
    background: var(--violentDark);
    height: 5px;
    right: 0;
    border-radius: 15px;
    
}


p{
    text-align: center;
    width: 65%;
    margin: 10px auto;
    font-size: var(--fontSmall);

    a{
        width: 80px;
        background-color: var(--white);
        box-shadow: var(--boxShadow);
        border-radius: 15px;
        padding: 1px;
        font-weight: 700;
        color: var(--black);
        /* display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10px; */
        transition: 0.2s;

        :hover{
            box-shadow: var(--boxShadow),var(--boxShadow);
        }

        img{
            padding: 2px;
            
        }
    }

    
}

.img-container{
    width: 50%;
    margin: 0 auto;
    text-align: center;
    img{
        width: 50px;
        margin: 15px 5px;
        filter: grayscale(0%);
        cursor: pointer;
        transition:0.2ms;

        :hover{
            filter: grayscale(100%);
        }
    }

    .figma{
        width: 35px;
    }
    .npm{
        width: 65px;
    }
}

@media(max-width:768px){
padding: 15px;
    p{
        width: 100%;
    }

    .img-container{
        width: 90%;
        img{
            width: 35px;
            margin: 5px;
        }
        .figma{
            width:25px;
        }
    }
    
}
` 