import { useState } from 'react'
import Login from '../src/components/Login.jsx'
import Home from '../src/components/Home.jsx'
import './App.css'
//importando los modulos de firebase
import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const auth =getAuth (appFirebase)

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
