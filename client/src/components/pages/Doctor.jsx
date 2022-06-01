import React from 'react'
import DoctorsList from '../DoctorsList'
import {SmallHeader} from '../Header'
import Filter from "../Filter"

export default function Doctor() {
  return (
    <>
      <SmallHeader/>
      <Filter/>
      <DoctorsList/>
      
    </>
  )
}

