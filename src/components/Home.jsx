import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import appFirebase from '../credenciales'
import ECTReactComponent from "./cie11/ECTReactComponent.tsx"
import { getAuth, signOut } from 'firebase/auth'
import logo from '../assets/logos/OLADENT-Logo-color.png'
import publi from '../assets/publicidad/1.png'
import publi2 from '../assets/publicidad/2.png'
import publi3 from '../assets/publicidad/3.png'
import publi4 from '../assets/publicidad/4.png'
import publi5 from '../assets/publicidad/5.png'
import publi6 from '../assets/publicidad/6.png'
import publi7 from '../assets/publicidad/7.png';
const auth = getAuth(appFirebase)


const Home = ({ correoUsuario }) => {

  return (
    <div className='container text-center'>
       <img src={logo} alt="Logo del consultorio" className="mb-4" style={{ maxWidth: '200px' }} />
      <h2 className="text-center">   Bienvenido usuario {correoUsuario} <button className='btn btn-primary' onClick={() => signOut(auth)}>Logout</button> </h2>
      <p className="text-gray-600 mb-4">
        La sonrisa es uno de los factores estéticos más importantes de una persona. Una sonrisa saludable ofrece una imagen positiva y estimula a la persona a sonreír con tranquilidad y naturalidad. Una sonrisa sana y armónica da seguridad en uno mismo y evita enfermedades.
        Es muy importante que te preocupes por mantener una buena higiene bucal y acudir al dentista dos veces al año.
        No hay mejor tratamiento preventivo que el conocimiento. Si conocemos el origen de las enfermedades bucales, podemos prevenirlas.
        Contamos con los más altos estándares de calidad, ofreciéndote beneficios como:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Planes dentales personalizados:</strong> Diseñados específicamente para tus necesidades y objetivos de salud bucal.
        </li>
        <li>
          <strong>Horarios flexibles:</strong> Nos adaptamos a tu estilo de vida para que puedas recibir atención cuando más te convenga.
        </li>
        <li>
          <strong>Precios accesibles:</strong> Ofrecemos tratamientos de alta calidad a precios asequibles, utilizando los mejores materiales disponibles.
        </li>
      </ul>

      <p className="text-gray-600">
        En Oladent, nuestros tratamientos son una inversión para tu salud, obteniendo grandes beneficios.
      </p>

      <ECTReactComponent />
      <Carousel>
        <Carousel.Item>
          <img src={publi} alt="Oladent" className="rounded-lg shadow-md max-w-xs" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={publi2} alt="Sonríe" className="rounded-lg shadow-md max-w-xs" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={publi3} alt="Sonríe" className="rounded-lg shadow-md max-w-xs" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={publi4} alt="Sonríe" className="rounded-lg shadow-md max-w-xs" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={publi5} alt="Sonríe" className="rounded-lg shadow-md max-w-xs" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={publi6} alt="Sonríe" className="rounded-lg shadow-md max-w-xs" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={publi7} alt="Sonríe" className="rounded-lg shadow-md max-w-xs" />
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default Home