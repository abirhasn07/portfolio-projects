import React from 'react'
import headerImg from '../../images/Pro-pic.png'
import { Content, Wrapper } from './Header.styled'

const Header = () => {
    return (
        <section id="header">

        <Wrapper>
            <Content>
                <div className="header-info">
                    <h1>Hi, <br />
                        I'm <span>Frontend-Developer</span>
                         <br />& Full Time Freelancer
                    </h1>

                    <p>Hi, I'm Abir Hasan  a freelance frontend developer from Chittagong,Bangladesh.
                        I help Componay To Build  Responsive Website With User Friendly Expriances. </p>

                    <button className="contact-me">
                        Contact Me
                    </button>
                </div>

                <div className="header-img">
                    <img src={headerImg} alt=" my-photos" />
                </div>
            </Content>
        </Wrapper>
        </section>
    )
}

export default Header