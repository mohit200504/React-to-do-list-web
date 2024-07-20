
import './App.css';
import {useState} from 'react';

function App(){



  let [value,vupdate]=useState("")


  let [list,ulist]=useState(
    [
      
    ]
  )
  let n = list.length + 1;
  
 let addlist=()=>{
  
  if(value ===""){
    alert("!oops give some input")
  }
  else{
    let newlist=[
      ...list,
      {
        id:n++,
        text:value
      }
    ]

    ulist(newlist)
    
  }
  vupdate("")
 }

let listdelete=(id)=>{
    
  let newli=list.filter((l)=>{
    return id!==l.id
  })

  ulist(newli)


}

  return (
    <div className="main">
         <div>
          <h2>ToDoList using  React js</h2>
         </div>
         <div>
         <input type="text" value={value}onChange={(e)=>{
          let t=e.target.value
          vupdate(t)
          console.log(value)
         }}></input><button onClick={()=>{
          addlist()
         }}>ADD</button>
         </div>
         
         <div>
          <ul>
              {
                list.map((l)=>{
                  return (<li>{l.text} <span><button onClick={()=>{
                    listdelete(l.id)
                    console.log(l.id)
                  }}>D</button></span></li>)
                    
                  
                })
              }
          </ul>
         </div>
         
         
    </div>
  )
}


export default App;
