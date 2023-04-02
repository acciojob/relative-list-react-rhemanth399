import React from 'react'

const relatives=['John','David','Peter','Samantha']
const App = () => {
   
  return (
    <div id="main">
               <ol key="relativeList">
                {relatives.map((values,index)=>(
                  <li key={`realtiveListItem${index+1}`}></li>
                ))}
                </ol>
    </div>
  )
}

export default App
