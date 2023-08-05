

import Swal from "sweetalert2"
import{editToDo} from '../../redux/slice/todoSlice'
import store from "../../redux/store/store"

export function EditToDo(item, i){

    Swal.fire({
        title: 'Update Your Task',
        input: 'text',
        inputValue: item,
        inputValidator:(value)=>{
          if(value){
            store.dispatch(editToDo({index:i, Task:value}))
            Swal.fire(
              'Updated!',
              'Your file has been Updated.',
              'success'
            )
          }

        }
      })
    
    
   

}