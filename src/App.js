import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';

function App() {
  const [activeModal, setModalActive] = useState(false)
  const [images, setImages] = useState([])
  return (
    <div>
    <Header />
    <Main setActive={setModalActive}/>
    <Modal active={activeModal} setActive={setModalActive}/>
    </div>
  );
}

export default App;
