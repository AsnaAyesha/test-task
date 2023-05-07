import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import RegisterNew from './components/register/RegisterNew';
import { Provider } from 'react-redux';
import { store } from './store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Dashboard/>} />
          <Route path='/register' element={<RegisterNew/>}/>
        </Routes>
      </Router>
      
    </div>
    </Provider>
  );
}

export default App;
