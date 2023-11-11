import React from 'react';

import SmallHeader from './small-header';
import './component-css/about.css';

const About = () => {
  return (
    <>
        <SmallHeader smallHeaderClass = {'small-header'} />   
        <div className='about-container'>
            <div className='about-content-container'>
                <div className='about-jumbo-image'/>
                <div className="about-content-inner-container">
                    <div className='about-content'>
                        Hello, visitor!  My name is Brian Pineau. I'm a programmer and digital artist working
                        to combine the 2 mediums to push web development forward in a creative way. I love to 
                        program and create art so it's fun and fulfilling from start to finish.  I've traveled
                        a fair amount over the years and have lived as far north as Fairbanks, Alaska and as 
                        far south as Panama.  I now happily reside in TX.  Some hobbies I have are going to 
                        movies, working out, eating new foods, sports, videogames, anything outdoors and 
                        building things. 
                        <br/><br/>  I hope you enjoy my website.  Thanks for visiting!
                    </div>
                </div>

                <div className='about-character-container'>
                    <div className='about-character'></div>
                </div>

            </div>
        </div> 
    </>
  )
}

export default About;