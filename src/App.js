import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar';
import { check } from './http/userAPI';

const App = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    check().then(data => {
      dispatch({type: 'authUser', payload: data})
    }).finally(()=>setLoading(false));
  }, [])

  if(loading){
    return <Spinner animation={'grow'} className='d-flex align-items-center justify-content-center'/>
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;