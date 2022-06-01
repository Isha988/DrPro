import React from 'react'
import {Header} from '../Header'
import CategorySection from '../CategorySection'
import About from '../About'
import TestiminialSection from '../TestiminialSection'

export default function Home() {
  return (
    <div>
      <Header/>
      <CategorySection/>
      <About/>
      <TestiminialSection/>
    </div>
  )
}
