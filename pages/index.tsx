import React from 'react';
import { useRouter } from 'next/router';
import { ChevronDownIcon } from '@heroicons/react/24/outline'; // Asegúrate de tener @heroicons/react instalado
import Link from 'next/link';

import guarderia from "../src/icono guarderia.svg";
import logo from '../public/logo_pase.svg';
import Image from 'next/image';
import alojamiento from "../src/alojamiento-removebg-preview.png";
import paseador from "../src/paseador-removebg-preview.png";
import documento from "../src/Group.svg";
import lupa from "../src/lupa6.svg"; 
import chat from "../src/Group 5.svg";
import estrella from "../src/Group 7.svg";

import ejercicio from "../src/Clip path group-1.svg";
import socializar from "../src/Clip path group.svg";
import rutina from "../src/Group 14.svg";

import x from "../src/x.svg";
import face from "../src/face.svg";
import insta from "../src/insta.svg";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-cover ">
      <div className='bg-center bg-cover' style={{ backgroundImage: 'url(perrofondo.svg)'  }}>
      <header className="bg-white bg-opacity-80 border-b-2">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Image alt="logo" src={logo} className="h-17 w-16 mr-1" />
            <span className="text-xl font-bold">Paseo Seguro</span>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">¿Qué servicios ofrecemos?</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Sobre nosotros</button>
            
            <button 
              className="px-4 py-2 text-sm font-medium text-blue-300 border border-blue-300 hover:text-blue-500 hover:border-blue-500 rounded"
              onClick={() => router.push('/register')}
            >
              Conviértete en paseador
            </button>
            <button 
              className="px-4 py-2 text-sm font-medium text-blue-300 border border-blue-300 hover:text-blue-500 hover:border-blue-500 rounded"
              onClick={() => router.push('/login')}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </header>

      <section className="bg-transparent px-4 py-8 mt-10 overflow-hidden ml-4 max-w-lg w-full">
  <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold text-white mb-4">Dale a tu mascota el</h1>
    <h1 className="text-4xl font-bold text-white mb-4">Cuidado que se merece</h1>
    <h2 className="text-3xl font-bold text-white mb-4">¿Qué servicio buscas?</h2>

    
  
    
          </div>
    </section>
    <div className="  px-4 py-6">
    <div className=" bg-white bg-opacity-70  px-4 py-4 ml-4 max-w-2xl rounded border-blue-700">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
    <div className="bg-white bg-opacity-100 p-6 text-center h-32 md:h-48 rounded">
      <div className="flex justify-center mb-4">
        <Image src={alojamiento} alt="Alojamiento" className="h-12 w-12"  />
      </div>
      <h5 className="text-lg font-bold mb-2 text-blue-900">Alojamiento</h5>
      <p className="text-sm text-blue-900">Cuidado nocturno seguro y confortable para tu mascota.</p>
    </div>
    <div className="bg-white bg-opacity-100 p-6 text-center h-32 md:h-48 rounded">
      <div className="flex justify-center mb-4">
        <Image src={paseador} alt="Paseador" className="h-8 w-8" />
      </div>
      <h5 className="text-lg font-bold mb-2 text-blue-900">Paseador</h5>
      <p className="text-sm text-blue-900">Encuentra paseadores de confianza para paseos diarios o esporádicos.</p>
    </div>
    <div className="bg-gray-50 bg-opacity-100 p-6 text-center h-32 md:h-48 rounded">
      <div className="flex justify-center mb-4">
        <Image src={guarderia} alt="Guardería" className="h-8 w-8" />
      </div>
      <h5 className="text-lg font-bold mb-2 text-blue-900">Guardería</h5>
      <p className="text-sm text-blue-900">Durante el día en casa del cuidador para comodidad y actividades.</p>
    </div>
  </div>
  <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 space-x-2 mt-5 mb-2 ">
      <button className="bg-white bg-opacity-70 flex items-center px-2 py-1 text-sm font-medium text-gray-700 hover:text-gray-900 border border-blue-500 rounded w-48 h-12">
        <ChevronDownIcon className="h-5 w-5 mr-2" aria-hidden="true" />
        Zona, Ciudad
      </button>
      <button className=" bg-blue-400 bg-opacity-70 px-1 py-2 text-sm font-medium text-white hover:bg-blue-600 border border-blue-500 rounded w-48 h-12">
        ¿Buscar?
      </button>
         </div>
    </div>
</div>  
    
    
</div>

      <section className="container mx-auto px-4 py-8">
      {/* Título y ícono */}
      <div className="flex items-center mb-8">
        <h2 className="text-2xl font-bold mr-2">Cómo funciona Paseo Seguro</h2>
        
      </div>

      {/* Cuatro cuadros en línea */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {/* Ajuste del tamaño y color de fondo de los cuadros */}
        <div className="bg-white bg-opacity-80 p-10 text-center rounded shadow-lg"> {/* Color de fondo más oscuro y padding más grande */}
          <div className='grid grid-cols-2'>
            <div className="bg-blue-500 h-12 w-12 rounded-full ml-14 text-white text-3xl">1</div>
            <div className=" ">
             <Image src={documento} alt="Paseador" className="h-12 w-12 " />
           </div>
          </div>
          <h1 className='text-blue-400'>Registrate y crea un perfil con informacion sobre tu mascota</h1>
        </div>
        <div className="bg-white bg-opacity-80 p-10 text-center rounded shadow-lg"> {/* Color de fondo más oscuro y padding más grande */}
          <div className='grid grid-cols-2'>
            <div className="bg-blue-500 h-12 w-12 rounded-full ml-14 text-white text-3xl">2</div>
            <div className=" ">
             <Image src={lupa} alt="Paseador" className="h-12 w-12 " />
           </div>
          </div>
          <h1 className='text-blue-400'>Usa la barra de busqueda para encontrar los cuidadores que necesites</h1>
        </div>

        <div className="bg-white bg-opacity-80 p-10 text-center rounded shadow-lg"> {/* Color de fondo más oscuro y padding más grande */}
          <div className='grid grid-cols-2'>
            <div className="bg-blue-500 h-12 w-12 rounded-full ml-14 text-white text-3xl">3</div>
            <div className=" ">
             <Image src={chat} alt="Paseador" className="h-12 w-12 " />
           </div>
          </div>
          <h1 className='text-blue-400'>Recibe actualizaciones durante el servicio</h1>
        </div>

        <div className="bg-white bg-opacity-80 p-10 text-center rounded shadow-lg"> {/* Color de fondo más oscuro y padding más grande */}
          <div className='grid grid-cols-2'>
            <div className="bg-blue-500 h-12 w-12 rounded-full ml-14 text-white text-3xl">4</div>
            <div className=" ">
             <Image src={estrella} alt="Paseador" className="h-12 w-12 " />
           </div>
          </div>
          <h1 className='text-blue-400'>¡Deja una reseña sobre tu experiencia</h1>
        </div>

                      
      </div>

      
    </section>
    <section className="container bg-white bg-opacity-80 mx-auto px-4 py-8 border border-blue-400 rounded-lg shadow-lg">
  <div className="text-center mb-8">
    
    <h2 className="text-2xl text-blue-400 font-bold">¿Le estás dando a tu perro lo que realmente necesita?</h2>
    <p className="text-lg text-blue-400">El paseo diario es una actividad fundamental para la calidad de vida de tu perro</p>
  </div>

  <div className="flex justify-center space-x-8">
    <div className="text-center">
      <div className=" h-24 w-24 mx-auto mb-3  ">
           <div className=" ">
             <Image src={ejercicio} alt="Paseador" className="h-22 w-22 mx-auto my-auto" />
           </div>
      </div>
      <h3 className="text-xl text-blue-400 font-semibold">Ejercicio</h3>
      <p className="text-sm text-blue-400">Un perro sin ejercicio tiene energía de sobra, y salir sólo para usar el baño no es suficiente.</p>
    </div>
    <div className="text-center">
      <div className="h-24 w-24 rounded-full mx-auto mb-4">

      <div className=" h-24 w-24 mx-auto mb-3  ">
           <div className=" ">
             <Image src={socializar} alt="Paseador" className="h-22 w-22 mx-auto my-auto" />
           </div>
      </div>
      </div>
      <h3 className="text-xl text-blue-400 font-semibold">Socializar</h3>
      <p className="text-sm text-blue-400">Muchos problemas de conducta y salud de los perros se deben a que pasan muchas horas en soledad.</p>
    </div>
    <div className="text-center">
      <div className="h-24 w-24 rounded-full mx-auto mb-4">

      <div className=" h-24 w-24 mx-auto mb-3  ">
           <div className=" ">
             <Image src={rutina} alt="Paseador" className="h-22 w-22 mx-auto my-auto" />
           </div>
      </div>
      </div>
      <h3 className="text-xl text-blue-400 font-semibold">Rutina</h3>
      <p className="text-sm text-blue-400">Mantener una rutina diaria significa mejor comportamiento y mayor inteligencia para tu perro.</p>
    </div>
  </div>

  <div className="flex justify-center mt-8">
    <div className="flex space-x-2">
      <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
      <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
      <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
    </div>
  </div>
</section>




    <section className="container  bg-white bg-opacity-80 border border-blue-600 mx-auto px-4 py-8 rounded-lg shadow-lg mt-7">
  <div className=" p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-4 text-blue-400">FAQS (Preguntas frecuentes)</h2>

    <div className="mb-6">
      <h3 className="text-xl font-semibold ">¿Qué experiencia tienen los paseadores con mascotas?</h3>
      <p className="text-sm">
        • Todos los paseadores en nuestra plataforma tienen experiencia previa trabajando con mascotas. Además, cada perfil incluye detalles sobre su experiencia específica y cualquier entrenamiento que hayan recibido.
      </p>
    </div>

    <div className="mb-6">
      <h3 className="text-xl font-semibold">¿Cómo se garantiza la proximidad de los paseadores a mi domicilio?</h3>
      <p className="text-sm">
        • Utiliza la barra de búsqueda para ingresar tu ubicación y verás paseadores disponibles cerca de ti en un mapa interactivo. Esto te permite elegir paseadores que estén convenientemente ubicados.
      </p>
    </div>

    <div className="mb-6">
      <h3 className="text-xl font-semibold">¿Puedo ver opiniones y reseñas de otros dueños de mascotas?</h3>
      <p className="text-sm">
        • Sí, cada perfil de paseador incluye opiniones y reseñas de otros dueños de mascotas que han utilizado sus servicios. Esto te ayuda a tomar una decisión informada.
      </p>
    </div>

    <div className="mb-6">
      <h3 className="text-xl font-semibold">¿Tienen certificaciones o entrenamientos específicos los paseadores?</h3>
      <p className="text-sm">
        • Muchos de nuestros paseadores tienen certificaciones y entrenamientos específicos. Esta información está disponible en sus perfiles para que puedas revisarla antes de contratar.
      </p>
    </div>

    <div className="mb-6">
      <h3 className="text-xl font-semibold">¿Cómo se asegura la seguridad de mi mascota?</h3>
      <p className="text-sm">
        • La seguridad de tu mascota es nuestra prioridad. Todos los paseadores pasan por un riguroso proceso de verificación y deben cumplir con nuestras políticas de seguridad. Además, puedes comunicarte con ellos antes de la reserva para discutir cualquier preocupación específica.
      </p>
    </div>

    <div className="mb-6">
      <h3 className="text-xl font-semibold">¿Cómo se garantiza la confiabilidad del paseador?</h3>
      <p className="text-sm">
        • Además de las verificaciones y reseñas, fomentamos la transparencia en los perfiles de los paseadores. También contamos con un sistema de calificaciones que te permite ver la confiabilidad de cada paseador basado en experiencias anteriores.
      </p>
    </div>

    <div className="mb-6">
      <h3 className="text-xl font-semibold">¿Habrá comunicación y actualizaciones durante el paseo?</h3>
      <p className="text-sm">
        • Sí, los paseadores pueden enviar actualizaciones y fotos durante el paseo para que estés al tanto de cómo está tu mascota. Esto se puede hacer a través de la plataforma para garantizar una comunicación fluida. Es importante que mantengas las notificaciones activas para enterarte de las actualizaciones.
      </p>
    </div>

    <p className="text-sm">
      Lee más preguntas frecuentes (FAQ'S) en nuestro <a href="#" className="text-blue-500 hover:underline">centro de atención</a>.
    </p>
  </div>
</section>


<section className="container mx-auto px-4 py-8  bg-white bg-opacity-80 border border-blue-600 rounded-lg shadow-lg mt-7">
  <div>
    <h1 className="text-2xl font-bold mb-4">Búsquedas Populares</h1>
  </div>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-300">
      <caption className="caption-bottom border border-slate-300 text-left p-2"></caption>
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b border-gray-300 text-left">Buscar Cuidadores</th>
          <th className="py-2 px-4 border-b border-gray-300 text-left">Buscar Alojamiento</th>
          <th className="py-2 px-4 border-b border-gray-300 text-left">Guardería de Día</th>
          <th className="py-2 px-4 border-b border-gray-300 text-left">Paseadores</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b border-gray-300">Cuidadores Lanús</td>
          <td className="py-2 px-4 border-b border-gray-300">Alojamiento Lanús</td>
          <td className="py-2 px-4 border-b border-gray-300">Guardería Lanús</td>
          <td className="py-2 px-4 border-b border-gray-300">Paseadores Lanús</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b border-gray-300">Cuidadores Lanús</td>
          <td className="py-2 px-4 border-b border-gray-300">Alojamiento Lanús</td>
          <td className="py-2 px-4 border-b border-gray-300">Guardería Lanús</td>
          <td className="py-2 px-4 border-b border-gray-300">Paseadores Lanús</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b border-gray-300">Cuidadores Lanús</td>
          <td className="py-2 px-4 border-b border-gray-300">Alojamiento Lanús</td>
          <td className="py-2 px-4 border-b border-gray-300">Guardería Lanús</td>
          <td className="py-2 px-4 border-b border-gray-300">Paseadores Lanús</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b border-gray-300">Cuidadores Lanús</td>
          <td className="py-2 px-4 border-b border-gray-300">Alojamiento Lanús</td>
          <td className="py-2 px-4 border-b border-gray-300">Guardería Lanús</td>
          <td className="py-2 px-4 border-b border-gray-300">Paseadores Lanús</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section className= " border-b-2 bg-blue-400 mt-6">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 ml-11 py-6 text-white">
    <div><h1>Ayuda</h1>
    <h1>Contacto</h1>
    <h1>Politicas de privacidad</h1>
    <h1>Terminos y condiciones</h1>
    
    </div>

    <div><h1>Conviertete en paseador</h1>
    <h1>Guarderia de dia</h1>
    <h1>Alojamiento de noche</h1>
    <h1>Paseadores</h1>
    
    </div>
    <div><h1>Como funciona Paseo Seguro</h1>
    <h1>Opiniones</h1>
    
    
    
    </div>
    <div className= "grid grid-cols-1 md:grid-cols-4 gap-0">
    <div className="flex justify-center mb-4">
        <Image src={logo} alt="Alojamiento" className="h-15 w-15" />
      </div>
      <div className="flex justify-center mb-4">
        <Image src={insta} alt="Alojamiento" className="h-10 w-10" />
      </div>
      <div className="flex justify-center mb-4">
        <Image src={face} alt="Alojamiento" className="h-8 w-8" />
      </div>
      <div className="flex justify-center mb-4 mr-0">
        <Image src={x} alt="Alojamiento" className="h-8 w-8" />
      </div>
      
    
    </div>
  </div>

</section>


      
    </div>
  );
}
