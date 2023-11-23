// import {AddTask} from '@/AddTask'
import { getAllTodos } from "../../public/api";
import TodoList from "./Temporary/TodoList";
// import {AddTask} from '@/AddTask'
import { AddTask } from "./Temporary/button";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks)
  return (
    <main>
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <AddTask />
        <TodoList tasks = {tasks}/>
      </div>
    </main>
  );
}
