import './App.css';
import Tabela from './components/Tabela'
import Modal from './components/Modal'



function App() {
  return (
    <div className="App">
      <h1> NIMEList <small>CRUD animes assistidos</small> </h1>  
      <Modal/>         
      <Tabela/>
      
      
      
    </div>
  );
}

export default App;
