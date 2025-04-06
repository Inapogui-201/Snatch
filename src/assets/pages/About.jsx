import React from 'react'
import Abouthero from '../components/Abouthero'
import AboutMission from '../components/AboutMission'
import AboutImpact from '../components/AboutImpact'
import Aboutvalues from '../components/Aboutvalues'

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Abouthero />
      <AboutMission />
      <AboutImpact />
      <Aboutvalues />
      
    </div>
  )
}

export default About