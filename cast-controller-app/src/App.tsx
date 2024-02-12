import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Book from './components/Book';
import Books from './components/Books';
import Remote from './components/remote';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      

      <Route element={<Home/>} path='/home'/>
      <Route element={<Remote/>} path='/remote'/>
      <Route element={<Books/>} path='/books'/>
      <Route element={<Book/>} path='/book/:book_id'/>
    
    
    </BrowserRouter>
  );
}

export default App;
