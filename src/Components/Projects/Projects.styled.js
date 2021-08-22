import styled from 'styled-components'


export const Wrapper=styled.div`
max-width: var(--maxWidth);
width: 100%;
margin: 0 auto;



`

export const  Content = styled.div`


padding: 70px 30px;
h1{
    text-align: center;
    position: relative;
    width: max-content;
    margin: 0 auto;
   

}
h1::after{
    position: absolute;
    top: 40px;
    left: 15px;
    content: '';
    height: 5px;
    border-radius: 15px;
    width: 80%;
    background: var(--violentDark);
    
}

.project-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;

    .project{
        width: 32%;
        background: var(--white);
        box-shadow: var(--boxShadow);
        padding: 10px;
        border-radius: 10px;
        text-align: center;
        margin: 5px 5px;
        
        :hover{
            box-shadow: var(--boxShadow2);
        }




        .buttons{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px 0 15px;

        img{
            width: 25px;
            transition: 0.5s;
            
        :hover{
            filter: grayscale(100%)
        }
        }

        

        a{
            color: var(--violentDark);
            font-weight: 700;
            transition: 500ms;

            :hover{
                color: var(--violentLight);
            }
        }
    }
    }

    
}

.see{
    display: block;
    margin: 0 auto;
    width: 120px;
    padding: 7px;
    background-color: var(--violentDark);
    color: var(--white);
    font-size: var(--fontMini);
    border-radius: 25px;
    text-align: center;
    font-weight: 700;
    box-shadow: var(--boxShadow);
}

@media (max-width:768px){
    padding: 15px;

    h1{
        margin-bottom: 15px;
    }
    
    .project-container{
        flex-direction: column;
        padding: 0px;

        .project{
            width: 100%;
            margin-top: 15px;
        }
    }
    


.see{
    margin-top: 10px;
}

}

`