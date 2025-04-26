import { useState, useRef } from 'react'
import { NavLink } from "react-router-dom";

export default function AddTask() {
  const [title, setTitle] = useState('');
  const descriptionRef = useRef();
  const statusRef = useRef();

  const symbols = "!@#$£%^&*()-_=+[]{}|;:'\",.<>?/`~";


  const submit = (e) => {
    e.preventDefault();
    if (!title.trim() || [...title].some((s) => symbols.includes(s))) {
      console.log('Error')
    } else {
      console.log(`
            Task:
            - Title: ${title}
            - Desciption: ${descriptionRef.current.value}
            - Status: ${statusRef.current.value}    
        `)
    }
  }

  return (
    <>
      <div style={{ height: '25px', marginBottom: '10px' }}>
        <NavLink to='/' style={{ textDecoration: 'none', color: 'inherit', fontSize: '24px ' }}>Task List</NavLink>
      </div>
      <form onSubmit={submit}>
        <section>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
          />
          <textarea
            type="text"
            ref={descriptionRef}
            placeholder="Add description"
          />
          <label htmlFor="status">Status</label>
          <select name="status" ref={statusRef}>
            <option value="To do" default>To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </section>
        <button type='submit'>Add task</button>
      </form>

    </>

  )
}