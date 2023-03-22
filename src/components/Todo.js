import React, { useState, useEffect } from 'react'
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import './todo.css'


const Todo = () => {

    const [inputData, setInputData] = useState('');


    const list = useSelector((state) => state.todoReducer.list)

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    const dispatch = useDispatch();

    return (
        <div className='body'>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type="text" placeholder='Add Items...' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                        <i className="fa-solid fa-plus add-btn" onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>
                    </div>
                    <div className='showItems'>
                        {
                            list.map((elem) => {
                                return (
                                    <div className='eachItem' key={elem.id}>
                                        <h3>{elem.data}</h3>
                                        <i className="far fa-trash-alt  add-btn" title='Delete Item' onClick={() => dispatch(deleteTodo(elem.id))}></i>
                                    </div>
                                )

                            })
                        }

                    </div>
                    <div className='deleteAll'>
                        <button className='remove' title='Delete All Item' onClick={() => dispatch(removeTodo())}>Remove All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo