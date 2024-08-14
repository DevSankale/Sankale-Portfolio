
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
 
    <section>
      <p id="Project">Projects</p>
      <div
      className="project-container">
    
      {projectList}
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default App
