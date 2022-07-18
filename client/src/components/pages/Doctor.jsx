import React, { useEffect }  from 'react'
import DoctorsList from '../DoctorsList'
import {SmallHeader} from '../Header'
import Filter from "../Filter"

export default function Doctor() {
  useEffect(()=> {
    window.scrollTo(0,0);
  }, [])
  return (
    <>
      <SmallHeader/>
      <Filter/>
      <DoctorsList/>
      
    </>
  )
}

