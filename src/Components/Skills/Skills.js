import React from 'react'
import bootstrap from '../../images/Bootstrap.png'
import figma from '../../images/Figma.png'
import github from '../../images/github-icon.png'
import jsIcon from '../../images/Js Icon.png'
import mu from '../../images/MUI.png'
import npm from '../../images/npm.png'
import reactIcon from '../../images/React.png'
import sass from '../../images/Sass.png'
import { Content, Wrapper } from './Skills.styled'


const Skills = () => {
    return (
        <section id="skills">

        <Wrapper>
            <Content>

                <h1>Skills</h1>

                <p>I’ve spent about two years on improving my skills in website development using <a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noopener noreferrer">
                    {/* <img src={jsIcon} alt="" width="25px" /> */}
                    Javascript
                </a> &
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" >
                        {/* <img src={reactIcon} alt="" width="25px" /> */}
                        React js</a>  that I’m now pretty confident in building apps using these tools
                </p>


                <div className="img-container">
                    <img src={jsIcon} alt="js icon" /><img src={reactIcon} alt="react" /><img src={bootstrap} alt="bootstrap" /><img src={sass} alt="sass icon" />
                    <img src={mu} alt="materia ui" /> <br />
                    <img src={figma} alt="" className="figma" /><img src={github} alt="" />
                    <img src={npm} alt="" className="npm"/>
                </div>

            </Content>
        </Wrapper>
        </section>
    )
}

export default Skills
