import React from 'react'
import Github from '../../images/Github icons.png'
import { Content, Wrapper } from './Projects.styled'

const Projects = () => {
    return (
        <section id="projects">

        <Wrapper>
            <Content>
                <h1>Projects</h1>

                <div className="project-container">

                    <div className="project">
                        <h3>Photographer portfolio </h3>

                        <p>simple website design for professional photographer with html,css & javaScript</p>

                        <div className="buttons">
                            <a href="https://github.com/abirhasn07/Photographer-Website" target="_blank" rel="noopener noreferrer">
                                <img src={Github} alt="github" />
                            </a>
                            <a href="https://abirhasn07.github.io/Photographer-Website/index.html#" target="_blank" rel="noopener noreferrer">Visit Site</a>
                        </div>
                    </div>
                    <div className="project">
                        <h3>React app + rest api </h3>

                        <p>simple react app using react+css+rest api for finding country data </p>

                        <div className="buttons">
                            <a href="https://github.com/abirhasn07/Rest-countries-api" target="_blank" rel="noopener noreferrer">
                                <img src={Github} alt="github" />
                            </a>
                            <a href="https://rest-countries-api1.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                        </div>

                    </div>
                    <div className="project">
                        <h3>Food website with api </h3>

                        <p>simple food finding website using meal's api for finding food for customer </p>

                        <div className="buttons">
                            <a href="https://github.com/abirhasn07/Cocking-Master" target="_blank" rel="noopener noreferrer">
                                <img src={Github} alt="github" />
                            </a>
                            <a href="https://abirhasn07.github.io/Cocking-Master/index.html" target="_blank" rel="noopener noreferrer">Visit Site</a>
                        </div>

                    </div>
                    
                    <div className="project">
                        <h3>Mini imdb clone  </h3>

                        <p>simple react app using react+styled component+TMDB Database+AOS Animations  </p>

                        <div className="buttons">
                            <a href="https://github.com/abirhasn07/movie_website_clone" target="_blank" rel="noopener noreferrer">
                                <img src={Github} alt="github" />
                            </a>
                            <a href="https://eloquent-mirzakhani-f61c62.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                        </div>

                    </div>
                    <div className="project">
                        <h3>Cryptogam app </h3>

                        <p>simple client site react app using react+styled component
for cryptocurrencies app </p>

                        <div className="buttons">
                            <a href="https://github.com/abirhasn07/crypto-app" target="_blank" rel="noopener noreferrer">
                                <img src={Github} alt="github" />
                            </a>
                            <a href="https://app.netlify.com/sites/lucid-ardinghelli-f71c30" target="_blank" rel="noopener noreferrer">Visit Site</a>
                        </div>

                    </div>
                    <div className="project">
                        <h3>personal portfolio </h3>

                        <p>design & build my own portfolio with react+material ui+framer motions  </p>

                        <div className="buttons">
                            <a href="https://github.com/abirhasn07/my-portfolio" target="_blank" rel="noopener noreferrer">
                                <img src={Github} alt="github" />
                            </a>
                            <a href="https://abir-protfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                        </div>

                    </div>
                   
                </div>

                <a href="https://github.com/abirhasn07?tab=repositories" target="_blank" rel="noopener noreferrer" className="see">See More</a>
            </Content>
        </Wrapper>
        </section>
    )
}

export default Projects
