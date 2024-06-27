import { useState } from 'react'
//importando los modulos de firebase
import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth =getAuth (appFirebase)
import Login from '../src/components/Login.jsx'
import Home from '../src/components/Home.jsx'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState(null)
  onAuthStateChanged(auth, (usarioFirabase)=> {
    if (usarioFirabase){
      setUsuario (usarioFirabase)
    }
    else
    {
      setUsuario
    }
  })

  return (
  <div>
    {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/>}
  </div>
  )
}

export default App
