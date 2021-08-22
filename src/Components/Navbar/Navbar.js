import React, { useState } from 'react';
import { Link } from "react-scroll";
import openMenu from '../../images/bar.png';
import logo from '../../images/logo.png';
import CloseMenu from '../../images/X.png';
import { Content, Wrapper } from './Navbar.styled';
const Navbar = () => {
    const [menu, showMenu] = useState(false);
    return (
        <Wrapper>
            <Content>
                <div className="logo">
                <Link
    activeClass="active"
    to="header"
    spy={true}
    smooth={true}
    offset={-70}
    duration={700}
> 
<img src={logo} alt="website logo" width="100px" />
</Link>
                </div>

                <ul className={!menu ? "nav-links" : "nav-links active"}>

                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}> 

                    <li className="nav-item">Work</li>
                </Link>

                <Link
    activeClass="active"
    to="skills"
    spy={true}
    smooth={true}
    offset={-70}
    duration={700}
>

<li className="nav-item">Skills</li>

</Link>

<Link
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>
    
<li className="nav-item">About Me</li>
</Link>

<Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>

<li className="nav-item">Contact me</li>
</Link>
                </ul>

                <div className="icons">
                    {
                        !menu ?
                            <img src={openMenu} alt="" onClick={() => showMenu(!menu)} /> :

                            <img src={CloseMenu} alt="" className="close-menu" onClick={() => showMenu(!menu)} />
                    }


                </div>
            </Content>
        </Wrapper>
    )
}

export default Navbar