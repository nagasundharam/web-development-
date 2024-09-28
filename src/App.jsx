import { useState } from 'react';
import data from '../components/accordian/data';

import './App.css'
import Accordian from '../components/accordian/Accordian'
import RandomColor from '../components/accordian/Randomcolor/Randomcolor';

function App() {
 

  return (
    <div className='cart'>
      {/* <Accordian/> */}
      <RandomColor/>
      
    </div>
  )
}

export default App
