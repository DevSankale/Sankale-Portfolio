
import './App.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Footer from './Footer'
import data from './data'
import Projects from './Projects'
import Skills from './skills'
import Form from './Form'

function App() {
  const projectList = data.map((project) => {
     return (
       <Projects 
         key={project.id}
         id={project.id}
         backgroundImage={project.backgroundImage}
         title={project.title}
         link={project.link}
         description={project.description}
       />
     );
  });

 return (
   <>
     <Header />
     <Hero />
     <About />
     <Skills />

     <section>
       <p id="Project">Projects</p>
       <div className="project-container">
         {projectList}
       </div>
     </section>
     <Form />
     <hr className='ruler'></hr>
     <Footer />
   </>
 );
}

export default App;
