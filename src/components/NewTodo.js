import React from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './NewTodo.css'
export default function NewTodo() {
  const [title, setTitle] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <div>
      
       
        <form onSubmit={handleSubmit} className="form container">
          <div className="input_Add">
            <input
              type="text"
              placeholder="Enter todo..."
              value={title}
              className = "input_field"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="btn_Add">
            <button>
              <FontAwesomeIcon icon={faPlus} className="icon" />
            </button>
          </div>
          </form>
       
      
    </div>
  );
}