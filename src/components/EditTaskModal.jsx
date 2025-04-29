import { useState, useRef } from 'react';
import Modal from './Modal';

export default function EditTaskModal({
  show,
  onClose,
  task,
  onSave }) {

  const [editedTask, setEditedTask] = useState(task);
  const editFormRef = useRef();


  const editTask = (key, e) => {
    setEditedTask(prev => ({ ...prev, [key]: e.target.value }))
  }

  const submit = (e) => {
    e.preventDefault();
    onSave(editedTask)
  }
  return (
    <Modal
      title='Modifica Task'
      content={
        <form ref={editFormRef} onSubmit={submit}>
          <label>
            Nome task
            <input type="text"
              value={editedTask.title}
              onChange={e => editTask('title', e)}
            />
          </label>
          <label>
            Descrizione task
            <textarea
              value={editedTask.description}
              onChange={e => editTask('description', e)}
            />
          </label>
          <label>
            Status
            <select value={editedTask.status} onChange={e => editTask('status', e)}>
              <option value="To do">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </label>
        </form>
      }
      confirmText='Salva'
      show={show}
      onClose={onClose}
      onConfirm={() => editFormRef.current.requestSubmit()}
    />
  )
}
