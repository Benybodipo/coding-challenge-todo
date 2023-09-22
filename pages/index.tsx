import { Inter } from "next/font/google";
import { useState } from "react";
// import '../styles/styles.css'

const inter = Inter({ subsets: ["latin"] });

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'Something to do',
      status: '1'
    },
    {
      id: 2,
      content: 'Something to do',
      status: '1'
    },
    {
      id: 3,
      content: 'Something to do',
      status: '0'
    },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const [activeTab, setActiveTab] = useState('all');

  const handleTodo = (e: any) => {
    const id = e.target.checked;
  }

  const addTodo = () => {
    if (newTodo.trim() !== '') {

    }
    
  }
  
  

  return <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
    <div className="container flext justify-center items-center w-screen">
        <div className="todo-wrapper bg-white text-black w-[900px]">
          <nav>
            <ul className="flex justify-center">
              <li className="inline-block w-[150px] p-3" onClick={()=> setActiveTab('all')}>All</li>
              <li className="inline-block w-[150px] p-3" onClick={()=> setActiveTab('active')}>Active</li>
              <li className="inline-block w-[150px] p-3" onClick={()=> setActiveTab('completed')}>Completed</li>
            </ul>
          </nav>
          <div className={`tab w-full bg-white min-h-[400px] ${(activeTab === 'all') ? 'block' : 'hidden'}`}>
            <div className="group-input p-4 flex justify-center">
              <input type="text" placeholder="Add details" className="pl-5 pr-5 pt-2 pb-2 mr-3" onChange={(e:any) => setNewTodo(e.target.value)}/>
              <button className="text-white bg-blue-500 pl-5 pr-5 pt-2 pb-2 rounded-xl" onClick={addTodo}>Add</button>

            </div>
            <ul className="block">
              {todos.map((todo: any) => (
                <li key={todo.id}>
                  <input type="checkbox" name={todo.id} id="" checked={+todo.status === 1 ? true : false }/>
                  <span className={`text-black pl-2 ${+todo.status ? 'line-through' : ''}`}>{todo.content}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`tab w-full bg-white min-h-[400px] ${(activeTab === 'active') ? 'block' : 'hidden'}`}>
            <h1 className="text-gray-500">active</h1>
          </div>
          <div className={`tab w-full bg-white min-h-[400px] ${(activeTab === 'completed') ? 'block' : 'hidden'}`}>
            <h1 className="text-gray-500">Completed</h1>
          </div>
        </div>
    </div>
  </main>;
};

export default App;
