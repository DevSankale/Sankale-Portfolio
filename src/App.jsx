
import './App.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Footer from './Footer'
import data from './data'
import Projects from './Projects'


function App() {

   const projectList = data.map((project)=>{
      return (
        <Projects
        projectNumber={project.id}
        img={project.projectCover}
        title={project.title}
        description={project.description}
        link={project.link}
        />
      )
   })
 
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <section className='project-section'>
      <h4 className="projects-head">PROJECTS DONE.</h4>
      {projectList}
    </section>
    <Footer/>
    </>
  )
}

export default App
