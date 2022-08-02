import { connect } from "react-redux"
import { useState } from "react"
import { add, toggle, cleanOne, cleanAll } from "./actions"

const App = (props) => {

  const [text, setText] = useState("")

  return (
        <div className="App d-flex align-items-center justify-content-center">
            <div className="todo p-5">
                <h1 className="text">To Do List</h1>
                <div className="form mt-4" >
                    <input placeholder="Add to list" value={text} onChange={(e)=>{setText(e.target.value)}}/>
                    <button onClick={()=>{
                             setText("")
                             props.add(text)
                            }} 
                            className="ms-4">
                              Add
                    </button>
                </div>

                <div className="list mt-4">
                    {props.list.map(item => (
                        <div key={item.id} onClick={()=>props.toggle(item.id)} className="d-flex justify-content-between">
                          <b className= {item.completed ? 'done item' : 'item'}>{item.text}</b>
                          <span className="tick">
                            {item.completed ? <i className="fa-solid fa-check-double"></i> : ''} 
                          </span>
                        </div>
                    ))}
                </div>
                <div className="buttons d-flex justify-content-between">
                    <button className="cleanOne btn btn-outline-danger" onClick={()=>props.cleanOne()}>
                       Delete completed ones
                    </button>
                    <button className="cleanAll btn btn-outline-dark"  onClick={()=>props.cleanAll()}>
                        Delete all
                    </button>
                </div>
            </div>
        </div>
  )
}

const mapStateToProps = state =>{
  return{
    list: state.list
  }
}
export default connect(mapStateToProps, {add, toggle, cleanOne, cleanAll})(App);