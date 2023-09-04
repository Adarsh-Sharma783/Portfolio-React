import { useState } from 'react'
import './portfolio.css'
import Modal from '../Modal/Modal'

const Portfolio = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [ 
    { 
      name : "Weather-App",
      deployedLink: "https://adarsh-sharma783.github.io/Weather-App/",
      image: require('../../assets/portfolio.jpg'),
      fadeDuration:'1000',
      description: 'A JavaScript weather app providing real-time weather data for any location. Users can search for cities, view current conditions, and check extended forecasts.',
      toolsUsed: ['JS','HTML','CSS','SCSS','BootStrap','VsCode', 'RAPID-API']
    
    },
    {
      name: "Realtime Project",
      deployedLink: "https://nishthahostel.in",
      image: require('../../assets/Portfolio3.jpg'),
      description: "It is a Hostel Website with dynamic content. It is hosted on plesk environment.",
      fadeDuration: "1100",
      toolsUsed: ['HTML','CSS','SCSS','JS','BootStrap', 'VsCode','Hosting']
    },
    {
      name : "Weather-Forecasting-Components",
      deployedLink: "https://adarsh-sharma783.github.io/Weather-Forecasting-Components/",
      image: require('../../assets/Portfolio-react.jpg'),
      fadeDuration:'1200',
      description:"A React.JS weather app providing real-time weather data for any location. Users can search for cities, view current conditions, and check extended forecasts. Has a Dark mode and Light mode",
      toolsUsed: ['HTML','CSS','ReactJS','GIT','Bootstrap','GitHub']
    }
  ]

  const handleClick = project => {
    setSelectedProject(project);
    setIsModalOpen(!isModalOpen);
  };




  return (
    <section id='portfolio'>
        <h5 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='700'>My most recent projects</h5>
        <h2 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='900'>My Portfolio</h2>

        <div className="container portfolio__container">

         { 
          projects.map( ({name,image,deployedLink,description,toolsUsed, fadeDuration}) => (
          <article className='portfolio__item' key={name} data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration={fadeDuration}
          >
              <div className="portfolio__item-image">
                  <img src={image} alt={`${name} app Screenshot`} />
              </div>
              <h3
               className='portfolio__item-name'
               onClick={() => handleClick({name,image,deployedLink, toolsUsed, description})}
              >{name}</h3>

              <div className="portfolio__item-cta">
                <a className='btn' 
                  href={`https://github.com/Adarsh-Sharma783/${name}`}
                  target='_blank'
                  rel="noreferrer"
                >GitHub</a>
                <a className='btn btn-primary' 
                  href={deployedLink}
                  target='_blank'
                  rel="noreferrer"
                >Live Demo</a>
              </div>
          </article>
           ))
         }

        </div>

         {isModalOpen && (<Modal
           closeModal={handleClick}
           project={selectedProject}
         />)}
    </section>
  )
}

export default Portfolio