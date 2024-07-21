
import './App.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Footer from './Footer'
import data from './data'
import Projects from './Projects'
import Skills from './skills'


function App() {

   const projectList = data.map((project)=>{
      return (
        
           <Projects
      key={project.id}{...project}
        />
      
      
      )
   })
 
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Skills/>
    <section className="project-container">
      <h4 className="projects-head " id="Project">PROJECTS DONE.</h4>
      {projectList}
    </section>
    <Footer/>
    </>
  )
}

export default App
