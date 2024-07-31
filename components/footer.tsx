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

function Footer2() {
    const router = useRouter();
    return (
    <div> 
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
  
  export default Footer2;

