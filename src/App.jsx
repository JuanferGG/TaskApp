import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/taskCreator";
import TaskTable from "./components/taskTable";
import VisibilityControl from "./components/visibilityControl";


function App() {

  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName){
    // console.log(taskName)
    if (!taskItems.find(task => task.name === taskName)){
      setTaskItems([...taskItems, {name: taskName, done: false}])
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map(t => (t.name === task.name) ? {...t, done: !t.done}: t)
    );
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data){
      setTaskItems(JSON.parse(data))
    }
  }, [])

  const cleanTask = () => {
    setTaskItems(taskItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [ taskItems ])


  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask}/>
      <TaskTable tasks={taskItems} toggleTask={toggleTask}/>
      <VisibilityControl
        isChecked={showCompleted}
        setShowCompleted={(checked) =>  setShowCompleted(checked)}
        cleanTask={cleanTask}
      />
      
      {
        showCompleted && (
      <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
        )
      }
    </div>
  );
}

export default App;
