import CreatTodo from "./CreatTodo";
import Todolist from "./Todolist";


const Todo = () => {
    return (
        <div>
           <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>My ToDo App</h5>
                        </div>
                        <div className="card_body">
                            <CreatTodo></CreatTodo>
                            <Todolist></Todolist>
                        </div>
                    </div>
                </div>
            </div>

           </div>
        </div>
    );
};

export default Todo;