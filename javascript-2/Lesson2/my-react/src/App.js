import logo from './logo.svg';
import './App.css';
import { Greet, Greet2 } from './components/Greet';
import { Welcome,Welcome2 } from './components/Welcome';
import {Steve,Steve2 } from './components/Steve';
import Parent from './Parent';
import  Table from './components/Table';
//import { Counter } from './components/Counter';
function App() {
  return (
    <div className="App">
      <Greet/>  
      <Greet2/>  
      <Welcome firstName="Steve" lastName="Erickson"/> 
      <Welcome2 firstName="Steve" lastName="Erickson"/>  
      <Steve>
      firstName="Peewweee" lastName="Herman"
        </Steve>
      <Steve2 firstName="BIGGG" lastName="BIRDDDYYY"/>
      {/*<FunctionClick/>
      //<ClassClick/>
      //<EventBind/> */}
      {/*<Counter/> */}
      <Parent/>
      <Table/>
    </div>
  );
}

export default App;



