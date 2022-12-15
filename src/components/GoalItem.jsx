import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { deleteGoal,updateGoal } from '../features/goals/goalSlice'
import {FiDelete ,FiEdit3 } from 'react-icons/fi'


function GoalItem({ goal }) {
  const dispatch = useDispatch()

  const [updating, setUpdating] = useState(false)
  const [text, setText] = useState("");


const onSubmit = (e) => {
e.preventDefault();
dispatch(updateGoal({...goal, text: text}))
setUpdating(false)
setText('')
}

 
  return (
    <div className='goal'>
    {updating ? (
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="text"
                id="text"
                value={text}
                placeholder="Update goal"
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-block">Update Goal</button>
            </div>
          </form>
        </section>
      ) : (
        <button className='update' onClick={() => setUpdating(!updating)}>
          <FiEdit3 size={20}/>
        </button>
      )}
      <h2 style={{paddingTop:'1.5rem'}} >{goal.text}</h2>
      <span>{new Date(goal.createdAt).toLocaleString('en-US')}</span>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        <FiDelete size={20}/>
      </button> 
    </div>
  
  )
}

export default GoalItem
