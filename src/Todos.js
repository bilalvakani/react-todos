import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "../src/Todos.css"

const Todos = () => {
    const [newInputdata, SetInputData] = useState()
    const [showTodos, SetShowTodos] = useState([])

    // jo bhi hum input par typekare gay wo hum target kar sakhay hai event ki help sai
    const inputData = (event) => {
        SetInputData(event.target.value)
    }

    // let wala kaam islia kia kai  jo mera purna data hai wo store rahey aur new data bhi saat mai rahey islia let ka use kia
    const clickbuttonTogetdata = () => {
        let store = [...showTodos, newInputdata]
        SetShowTodos(store)
        SetInputData("")
    }
    const delettask = (index1) => {
        let filterdata = showTodos.filter((currentvalue2, index2) => {
            return index2 != index1
        })
        SetShowTodos(filterdata)
    }



    return (
        <>
            <div className='container'>
                <div className='inputTask'>

                    <h1>Todos App</h1><br></br>
                    <input onChange={inputData} type='text' value={newInputdata} placeholder='Enter your task'></input>
                    <button className='BT' onClick={clickbuttonTogetdata}>ADD</button><br></br>
                    {showTodos.map((currentvalue1, index1) => {
                        return (
                            <>
                                <br></br>
                                <div className='taskData'>
                                    <p>{currentvalue1}</p>
                                    <button id='delete' onClick={() => delettask(index1)}><FontAwesomeIcon icon={faTrash} /></button>

                                </div>
                            </>
                        )
                    })}



                </div>



            </div>
        </>
    )
}
export default Todos
