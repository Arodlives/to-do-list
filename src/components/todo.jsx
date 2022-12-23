import  React,{useState} from "react";

const Todo =()=>{
    let[task,setTask]=useState("");
    let[listOfTasks,setListOfTasks]=useState([]);

    let[completed,setCompleted]=useState(false);

    let addTask = (e) =>{
        e.preventDefault();
        //copy  of  the list of tasks
    let taskObj =  {task,completed};
    setListOfTasks([...listOfTasks,taskObj]);
    }

   

    const handledelete=(e,Delindex) => {
        let filtertodo  = listOfTasks.filter((task,index)=>{
            return index !== Delindex;
        })
        setListOfTasks(filtertodo);
    }


    const toggleComplete =(e,index)=>{
        //make a copy
        let copyOfTasks =  [...listOfTasks]

        // modify  copy
        copyOfTasks[index].completed = e.target.checked;

        //update state variable
        setListOfTasks(copyOfTasks);

    }


    return (
        <div>
            <div  className='header'>
            <h1>My Current Tasks</h1>
            </div>
            <div className="formtask">
            <form  onSubmit={addTask}>
            <input onChange={(e)=>setTask(e.target.value)} type="text" placeholder="Input task here" name="todotasks" id="todotasks" />
            <button  type="submit" className="btn btn-primary" >Add Task</button>
            </form>
            </div>
            <hr/>
            <div  className="task-list">
                <div>    
                    {
                    listOfTasks.map((item,index) =>{
                        return(
                            <div key={index} className="task-list-item">
                            <span style={{textDecoration:item.completed? 'line-through':''}}>{item.task}</span>
                            
                          <input type="checkbox"  onClick={(e)=>toggleComplete(e,index)} style={{textDecoration: 'line-through'}}/>
                            <button onClick={(e) =>{handledelete(e,index)}} className="btn btn-warning">Delete</button>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}
export default  Todo;