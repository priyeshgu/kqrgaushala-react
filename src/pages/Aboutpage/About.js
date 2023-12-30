import React from 'react'
import About from '../../components/homepage/About/About'
import Members from '../../components/homepage/About/Members/Members'
import Statements from '../../components/homepage/About/Statements/Statements'
import Hero from '../../components/common/Hero/Hero'

export default function Aboutpage() {
  return (
    <>
    <Hero title="About" />
    <About/>
    <Statements/>
    <Members/>
    </>
  )
}
