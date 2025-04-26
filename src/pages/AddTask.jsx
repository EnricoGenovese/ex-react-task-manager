import { NavLink } from "react-router-dom";

export default function AddTask() {
  return (
    <>
      <div style={{ height: '25px', marginBottom: '10px' }}>
        <NavLink to='/' style={{ textDecoration: 'none', color: 'inherit', fontSize: '24px ' }}>Task List</NavLink>
      </div>
      <h1>AddTask Page</h1>

    </>

  )
}