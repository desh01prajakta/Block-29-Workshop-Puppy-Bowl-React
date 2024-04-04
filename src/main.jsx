import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './app/store.js'
import { Provider } from "react-redux"
import { BrowserRouter} from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
        {/* <Routes>
          <Route path='/' element={<AllPlayers />} /> 
          <Route path='/players/:id' element={<SinglePlayer />} /> 
        </Routes> */}
      </BrowserRouter>
      </React.StrictMode>
);