import React, { useState, useEffect } from 'react';
import './App.css';

var userDetail = {
    name: 'Aayan',
    age: 25,
    location: 'Ajnara E-1506',
    school: 'D.P.S RAJNAGAR'
}
function toCheckLocation(locateMe) {
    // const fss
    // if(fss){
    //     fss=10
    // }
    // // console.log(fss)
    // var cfcfc = [1,2,3,4,5,6]
    //  var dsdd = [...cfcfc]
    //  console.log(dsdd)
    // var fgd = cfcfc.slice(0)
    // console.log(fgd)
    if (locateMe) {
        return locateMe
    }
    else {
        return undefined
    }
}

const TemplateOne = (props) => (
    <div>
        <h1>This is my first React Dom App</h1>
        <ol>
            {
                props.apiResponse.map((obj) => <span key={obj.firstName}><li>{obj.firstName}</li>
                    <li>{obj.Character}</li></span>)
            }
        </ol>
    </div>

)

export const TemplateThree = (props) => {
    const [novaOne, updateNovaOne] = useState("Nova One Calling")
    // var obOne = {
    //     ek: {
    //         numbr: 1,
    //         mmmmm: 2,
    //         nnnnn: 3
    //     },
    //     doo: {
    //         chchc: {wewdcd:12,dfcfd:43,dddrdc:444},
    //         dfdfd: "wwwww",
    //         dhdhdh: "rerere"
    //     }
    // }
    // for(var nakad in obOne[doo]){
    //     console.log(obOne[doo][nakad])
    // }
    // debugger
  return (  <div>
        <h1>My Name is {userDetail.name}</h1>
        <p>{'I am ' + (userDetail.age && userDetail.age >= 20 ? userDetail.age + ' years old' : 'Age is not defined or lesser than 20 year in the Object')}</p>
        <p>{'I am from ' + toCheckLocation(userDetail.location)}</p>
        <p>{'I study at ' + userDetail.school}</p>
        <p>Count : {props.count}</p>
        <span><button onClick={() => props.setCount(props.count + 1)}>Plus One (+1)</button></span> <span><button onClick={() => props.setCount(props.count - 1)}>Minus One (-1)</button></span> <span><button onClick={() => props.setCount(props.resetToZero)}>Reset (to 0)</button></span><br></br>
        <span>{novaOne}</span>
        <button onClick={() => updateNovaOne("Did someone called Nova One?")}> Update Nova history</button>

    </div>
  )
}

export const TemplateTwo = (props) => {
    // below
    var items = [
        { name: 'Edward', value: 21 },
        { name: 'Sharpe', value: 37 },
        { name: 'And', value: 45 },
        { name: 'The', value: -12 },
        { name: 'Magnetic', value: 13 },
        { name: 'Zeros', value: 37 }
      ];
      
    //   // sort by value
    //   items.sort(function (a, b) {
    //     return a.value - b.value;
    //   });
      
    //   // sort by name
      items.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      console.log(items)


    const listOne = () => {
        for (const item of props.apiResponse) {
            return item.Character
        }
    }
    const listTwo = () => {
        for (const item of props.apiResponse) {
            return item.firstName
        }
    }
    // how to use states in templates, have to be checked with konark
    const [name, setName] = useState('Konark Fuddu')    
    //setName('Tabish')
    return (
        <div>
            <h1>This is my 2nd component to render</h1>
            <ol>
                <li onClick={()=>setName('Tabish')}>
                    {name}
                </li>
                <li>
                    {listOne()}
                </li>
                <li>
                    {listTwo()}
                </li>
                <li>
                    {name}
                </li>
            </ol>
        </div>
    )
}

const TemplateFour = {
    numbersOfarray: [2, 4, 6, 8, 10],
    multiplyBy: 10,
    multiplierforArray() {
        return this.numbersOfarray.map((item) => item * this.multiplyBy)
    }
}
export const chchc = TemplateFour.multiplierforArray();
console.log(chchc)
// const multipliedArray = TemplateFour.multiplierforArray.bind(TemplateFour)
// const resultOfMultiplier = multipliedArray()
// console.log(resultOfMultiplier)

export const FormMaker = () => {
    // const ObjectOne = {
    //     storOne: []
    // }    
    const onFormSubmit = (e) => {
        e.preventDefault()
        const inputVal = e.target.elements.GetTheValue.value
        debugger
        setStoreArray(storedArray.concat(inputVal))
        e.target.elements.GetTheValue.value = ''        
        
    }
    useUpdateDocumentTitle()
    const [storedArray, setStoreArray] = useState([])    
    return (
        <form className="1stForm" onSubmit={onFormSubmit}>
            <ol>
                <li>Option Onehhhhhh</li>
                <li>Option Two</li>
                <p>{storedArray.length}</p>
            </ol>
            <input type='text' name="GetTheValue"></input> <button type='submit'>Add the Option</button><br></br>
            <input type="number" name="numberOne"></input> <button>Add the Number</button><br></br>


        </form>
    )
    function useUpdateDocumentTitle (){
        useEffect(()=>{
            document.title = "Updated Title"
        },[])
    }
}

export const RenderOne = () =>{
    const [valOne,setValue] = useState([])

    function collectValue(e){
        // debugger
        // const fieldValuesForInput = document.querySelectorAll('.allignStaright')
        
        // const collectedInputs = fieldValuesForInput.forEach(function(item){
        //     return item.value
        // })
        debugger
       const savedValueOne = document.querySelector('.fieldOne').value
       document.querySelector('.oneField').value = savedValueOne
       const savedValueTwo = document.querySelector('.fieldTwo').value
       document.querySelector('.tWoField').value = savedValueTwo
       const savedValueThree = document.querySelector('.fieldThree').value
       document.querySelector('.threeField').value = savedValueThree
       
       const collectedValues = document.querySelectorAll('.commonfileds')
       const collectedOutputElements = document.querySelectorAll(".tabOne tr td")
       for(let i=0;i< collectedValues.length;i++){
        collectedOutputElements[i].innerText = collectedValues[i].value
       }
    }

    return(
        <div>

            <input type="text" className="allignStaright fieldOne"></input> <input type="text" className="allignStaright fieldTwo"></input> <input type="text" className="allignStaright fieldThree"></input> <button className="submitValues buttonAllign" onClick={collectValue}>Submit</button><br></br>
            <input type="text" className="commonfileds oneField"></input> <input className="commonfileds tWoField"></input> <input className="commonfileds threeField"></input>
            <tbody>
                <table className="tabOne">
                    <tr>
                        <th>Country One</th>
                        <th>Country Two</th>
                        <th>Country Three</th>
                    </tr>
                    <tr>
                        <td>XXXXX</td>
                        <td>XXXXX</td>
                        <td>XXXXX</td>
                    </tr>
                </table>
            </tbody>
        </div>
      
    )
}

export default TemplateOne