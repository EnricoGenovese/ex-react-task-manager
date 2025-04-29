import { useState, useRef, useMemo, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const symbols = "!@#$£%^&*()-_=+[]{}|;:'\",.<>?/`~";

export default function AddTask() {
  const [title, setTitle] = useState('');
  const descriptionRef = useRef();
  const statusRef = useRef();

  const { addTask } = useContext(GlobalContext);

  const titleError = useMemo(() => {
    if (!title.trim()) {
      return 'Title cannot be empty'
    }
    if ([...title].some((s) => symbols.includes(s))) {
      return 'Title cannot contain special symbols'
    }
    return '';
  }, [title])

  const submit = async (e) => {
    e.preventDefault();
    if (titleError) return

    const newTask = {
      title: title.trim(),
      description: descriptionRef.current.value,
      status: statusRef.current.value
    }
    try {
      await addTask(newTask);
      alert('Task added successfully');
      setTitle('');
      descriptionRef.current.value = '';
      statusRef.current.value = '';
    } catch (error) {
      alert(error.message);
    }
  }



  return (
    <>
      <form onSubmit={submit}>
        <label>
          Task:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
          />
        </label>
        {titleError && <p style={{ color: 'red' }}>{titleError}</p>}
        <label>
          Description:
          <textarea
            ref={descriptionRef}
            placeholder="Add description"
          />
        </label>
        <label>
          Status
          <select name="status" ref={statusRef}>
            <option value="To do" default>To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <button type='submit'>Add task</button>
      </form>

    </>

  )
}