import React from 'react'
import {useLocation} from 'react-router-dom'


function Test() {
    const location = useLocation();
    console.log(location);
  return (
    <div>test</div>
  )
}

export default Test