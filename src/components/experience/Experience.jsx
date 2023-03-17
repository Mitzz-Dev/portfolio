import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container expereince__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__contenct">
            <article className='experience_details'> 
              <BsPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill/>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill/>
              <h4>JavaScript</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill/>
              <h4>Bootstrap</h4>
              <small className='text-light'>None</small>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill/>
              <h4>Tailwind</h4>
              <small className='text-light'>None</small>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill/>
              <h4>React</h4>
              <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__contenct">
            <article className='experience_details'> 
              <BsPatchCheckFill/>
              <h4>MongoDB</h4>
              <small className='text-light'>None</small>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill/>
              <h4>PHP</h4>
              <small className='text-light'>None</small>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill/>
              <h4>MySQL</h4>
              <small className='text-light'>None</small>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill/>
              <h4>Firebase</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill/>
              <h4>Node JS</h4>
              <small className='text-light'>None</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience