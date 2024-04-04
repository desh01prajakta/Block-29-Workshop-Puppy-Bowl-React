import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import store from './app/store.js'
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import { Routes,BrowserRouter, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllPlayers />} /> {/* Assuming you have an AllPlayers component */}
          <Route path='/players/:id' element={<SinglePlayer />} /> {/* Assuming you have a SinglePlayer component */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);