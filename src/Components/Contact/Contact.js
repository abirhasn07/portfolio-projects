import React from 'react'
import github from '../../images/Github icons.png'
import linkedine from '../../images/Linkdine.png'
import Twitter from '../../images/Twitter.png'
import { Content, Wrapper } from './Contact.styled'

const Contact = () => {
    return (
        <section id="contact">

        <Wrapper>
            <Content>
                <div className="email-info">
                <h3>get in touch 👋
                </h3>

                <a href="mailto:iamabirhasan07@gmail.com">iamabirhasan07@gmail.com</a>
                </div>

                <div className="social-media">
                    <h3>Join With Me 🚀</h3>

                    <div className="icons">
                        <a href="https://www.linkedin.com/in/abir-hasan-80625420b/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedine} alt="" />
                        </a>
                        
                        
                        <a href="https://github.com/abirhasn07" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="" />
                       </a>
                            <a href="https://twitter.com/m_abirhasan07" target="_blank" rel="noopener noreferrer">
                    <img src={Twitter} alt="" />
                            </a>
                    </div>
                </div>
            </Content>
        </Wrapper>
        </section>
    )
}

export default Contact
