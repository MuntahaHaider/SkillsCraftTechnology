import React, { useState } from 'react'

const Todo = () => {
   const [inputValue,setInputValue] = useState()
   const [items,setItems] = useState([])
   const  addItem = ()=>{
     // add todo to the list
     console.log(inputValue)
     if(inputValue){
          setItems([...items,inputValue])
          console.log(items)
          setInputValue('')
          return
     }
   }
   const deleteAllItem = ()=>{
    setItems([])
    setInputValue('')
    alert('all todo list are deleted...')
   }
  const deleteSingleItem = (index)=>{
//   console.log(index)
 const filterAllItems =  items.filter((e,i)=>{
    return index !== i 
  })
  setItems(filterAllItems)
  }

  const EditSingleItem = (index)=>{
     console.log(index)
     const editPrompt = prompt('Edit your todo: ' , items[index])

     if(editPrompt){
    // items ko update karne ke baad setItems function ko use karke state update ki jati hai.
    // [...items] ek nayi array banata hai (spread operator use karke), taake React ko pata chale ke state update hui hai.
        items[index] = editPrompt
        setItems([...items])
     }
     console.log(items)
  }
  return (
    <>
    <h1>Todo App</h1>
    <input type="text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
    <button onClick={addItem}>Add todo</button>
    <button onClick={deleteAllItem}>Delete All todo</button>

    {
        items.map((e,i)=>{
            return (
                <>
                <div key={i}>{e} 
                <button onClick={()=>deleteSingleItem(i)}>Delete</button>
                <button onClick={()=>EditSingleItem(i)}>Edit</button>

                </div>
                </>
            )
                
        })
    }

    </>
  )
}

export default Todo