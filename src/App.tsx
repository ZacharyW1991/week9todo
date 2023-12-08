import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Container from "react-bootstrap/esm/Container"
// import Home from "./views/Home"
// import ListView from "./views/ListView";
import ToDoList from "./components/List";
import { useState } from "react";
import CategoryType from "./types/category";
import ToDoForm from "./components/ToDoForm";
import AlertMessage from "./components/AlertMessage";


export default function App() {

  const [message, setMessage] = useState<string|null>(null);
  const [category, setCategory] = useState<CategoryType|null>(null);

  const [toDos, setToDos]=useState<string[]>([]);
  
  const handleFormSubmit=(event: React.FormEvent)=>{
    event.preventDefault();
    let form=event.target as HTMLFormElement;
    let task=form.task.value;
    setToDos([...toDos, task]);
    form.task.value='';
    flashMessage("Successfully Added", 'success')
  }

  const flashMessage = (newMessage:string|null, newCategory:CategoryType|null): void => {
    setMessage(newMessage);
    setCategory(newCategory);
}



  return ( 
    <BrowserRouter>
      <Container data-bs-theme='dark'>
        {message&&category&&<AlertMessage message={message} category={category} flashMessage={flashMessage}/>}
        <Navigation />
        <ToDoForm handleSubmit={handleFormSubmit} />
        <ToDoList tdItem={toDos}/>
      </Container>
    </BrowserRouter>
  )
}
