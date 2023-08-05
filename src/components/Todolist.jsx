
import { useSelector } from "react-redux";
import { TodoDeleteAlert } from "./TodoDeleteAlert";
import { EditToDo } from "./EditToDo";

const Todolist = () => {

    const toDoItems = useSelector((state)=>state.todo.value);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Task Name</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    toDoItems.map((item, i)=>{
                                        return(
                                            <tr key={i.toString()}>
                                            <td>{i}</td>
                                            <td>{item}</td>
                                            <td><button onClick={()=>EditToDo(item, i)} className="btn btn-dark">Edit</button></td>
                                            <td><button onClick={()=>TodoDeleteAlert(i)} className="btn btn-danger">Delete</button></td>
                                        </tr>
                                        )
                                    })
                                }

                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Todolist;