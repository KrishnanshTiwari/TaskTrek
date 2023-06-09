import React from "react";
import Title from "./components/Title";
import NewTodo from "./components/NewTodo";
import Todo from "./components/Todo";
import { db } from "./firebase";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import './Home.css'
export default function Home() {
    const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);
  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <div>

<div className="wrapper">
      <div className="Title">
        <Title />
      </div>
      <div className="NewTodo">
        <NewTodo />
      </div>
      <div className="Todo">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      </div>



    </div>
  );
}
