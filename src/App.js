import './App.css';
import Tabela from './shares/components/Tabela'
import Modal from './shares/components/Modal'



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
