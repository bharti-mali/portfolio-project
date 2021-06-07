import React from 'react'
import client1 from '../client1.png'

const About = () => {
  return (
    <div className="container margin">
        <div className="row">
            <div className="col-md-6  text-center">
                <img className="aboutimg img-responsive mt-2" src={client1} alt="logo"  />
            </div>
            <div className="col-md-6">
                <h2 className="heading mb-3">About Me</h2>
                <p >In publishing and graphic design, Lorem ipsum is a placeholder text 
                commonly used to demonstrate the visual form of a document or a typeface without relying on 
                meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
