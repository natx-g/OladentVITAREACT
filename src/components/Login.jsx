import React,{ useState } from 'react'
import ImagenProfile from '../assets/profile.png'
import imagen from '../assets/diente.png'

import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth =getAuth (appFirebase)

const Login = () => {

    const[registrando, setRegistrando] = useState (false)

    const functAutenticacion = async (e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const constraseña = e.target.password.value;
       
        if (registrando){
            try{
            await createUserWithEmailAndPassword(auth, correo, constraseña)
        } catch (error){
            alert ("Asegurese que la contraseña tenga mas de 8 caracteres")
        }
        }
        else {
            try {
            await signInWithEmailAndPassword(auth, correo, constraseña)
        } catch (error){
            alert ("el correo o la contraseña son incorrectas")
        }
        }
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4' >
                <div className='padre' >
                    <div className='card card-body shadow-lg' >
                        <img src={ImagenProfile} alt="" className='estilo-profile'/>
                        <form onSubmit={functAutenticacion}>
                            <input type="text" placeholder='Ingresar Email'className='cajatexto'id="email"/>
                            <input type="password" placeholder='Ingresar Constraseña'className='cajatexto' id='password' />
                            <button className='btnform'>{registrando ? "Registrate" : "Inicia Sesion"}</button>
                        </form>
                       <h4> {registrando ? "Si ya tienes cuenta" : "No tienes cuenta"} <button className='btnswicth' onClick={() => setRegistrando(!registrando)}>{registrando ? "Inicia Sesion" : "Registrate"}</button></h4>
                    </div>

                </div>
            </div>
            <div className='col-md-8'>
            <img src={imagen} alt="" className='tamaño-imagen' />
            </div>
        </div>
        
    </div>
  )
}
export default Login