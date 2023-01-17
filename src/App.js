import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Example1 from './hooks/example1';
import Example2 from './hooks/example2';
import MyComponentWithContext from './hooks/example3';
import Example4 from './hooks/example4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
        Capitulos 1 y 2 
        
        <Greeting name="Leandro"></Greeting>
        
        Componente de ejemplo funcional

        <GreetingF name="Leandro"></GreetingF>
        */}
        
        {/* 
        Capitulo 3

        Componente de listado de tareas
        <TaskListComponent></TaskListComponent>
        */}

        {/*
        Ejemplos de uso de Hooks 
        <Example1></Example1>
        <Example2></Example2>
        <MyComponentWithContext></MyComponentWithContext>
        */}

        {/* Todo lo que esta aca adentro es tratado como prop.children */}
        {/*
        <Example4 name='Leandro'>
        
          <h3>
            Contenido del props.children
          </h3>
        </Example4> */}

        {/*<GreetingStyled name='Leandro'></GreetingStyled>

      </header>*/}
      {/* Gestion de eventos */}
      {/* <Father></Father> */}

      {/* Ejemplos de renderizado condicional */}
      <OptionalRender></OptionalRender>

      {/* PROYECTO FINAL */}
      {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
