import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import TemplateOne, { TemplateTwo } from './Landing'
import {TemplateThree} from './Landing'
import {FormMaker, RenderOne} from './Landing'
//import {chchc} from './Landing'
const apiResponse = [
  {
    firstName: 'Bhola',
    Character: 'Sloth'
  },
  {
    firstName: 'Konark',
    Character: 'Developer'
  }
]
//let plusOne = ()=> console.log('checkPlus')
let minusOne = (count)=> count--
let reset = (count)=> count = 0
function App() {
  const arr1 = [1,2,3,4,5]
  console.log(...arr1)
  /*Old State defination and declaration as commented below
  this.state = {
    count:0
  }
  const setcount = setState({
    count : count+1
  })
  */
  const [count, setCount] = useState(0);
  const resetToZero = 0
  return (
    <div className="App">
      <TemplateOne apiResponse={apiResponse} />
      <TemplateTwo apiResponse={apiResponse} />
      <TemplateThree setCount={setCount} count={count} minusOne={minusOne} reset={reset} resetToZero={resetToZero}/>
      <FormMaker/>
      <RenderOne/>
    </div>
  );
}

export default App;
