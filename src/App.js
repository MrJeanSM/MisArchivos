import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/containers/task_list';
import ContactoList from './components/containers/contacto_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Carlos" /> */}
        {/* <GreetingF name='Martin' /> */}

        {/* Componente de Listado de Tareas */}
        {/* <TaskListComponent /> */}
        <ContactoList />
      </header>
    </div>
  );
}

export default App;
