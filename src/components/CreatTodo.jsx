import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToDO } from "../../redux/slice/todoSlice"


const CreatTodo = () => {


    const dispatch = useDispatch();
    const inputTask = useRef();

    return (
        <div>
            <div className="container px-0 formTable">
                <div className="row">
                    <div className="col-lg-10">
                        <input ref={inputTask} className="form-control form-control-lg" type="text" placeholder="Task Name"/>
                    </div>
                    <div className="col-lg-2">
                        <button onClick={()=>dispatch(addToDO(inputTask.current.value))} className="btn btn-success">Add To Do</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatTodo;