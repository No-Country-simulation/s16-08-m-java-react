import  { useState } from 'react';
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
import Card3 from "../components/card3";
import perrito from "../src/perrito.png";
import flecha from "../src/flecha.svg";
import PriceFilter from "../components/PriceFilter"



function Card2() {
  const [cards, setCards] = useState([
    { id: 1, title: 'Card 1', content: 'This is the content of card 1' },
    { id: 2, title: 'Card 2', content: 'This is the content of card 2' },
    { id: 3, title: 'Card 3', content: 'This is the content of card 3' },
  ]);
    
    return (

      
      

     
      

   
      
      <div>
       

<div className="flex flex-col lg:flex-row-reverse container mx-auto ml-0 mt-8 py-0">
      {/* Columna (derecha-UTILICE REVERSA) (2/3 del tamaño total) */}
      <div className="lg:w-2/3 ml-12 mr-2  mb-8 mt-8 pt-0">
        <Card3 />
        <Card3 />
        <Card3 />
        <Card3 />
        
      </div>

      {/* Columna Derecha-UTILICE REVERSA, QUEDO AL REVEZ (1/3 del tamaño total) */}
      <div className="lg:w-1/3 w-full lg:ml-8 mt-8 lg:mt-0">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
          <div><label className="font-bold mb-2">Tus Mascotas</label></div>
          <div className='border border-blue-600 rounded-lg mb-10'>
          <Image alt="Sample Image" src={perrito} className="w-40 h-40 rounded-lg mb-4 mt-4 ml-24 " />
          <button className="w-70 h-10 ml-20 py-2 mb-2  text-sm font-medium text-white bg-gray-400 hover:bg-green-600 rounded">
            <div className='flex flex-col-1 ml-20'> Lola <Image alt="Sample Image" src={flecha} className="ml-20" /></div>
          </button>
          </div>
          <div className="font-bold mb-5"><label >Filtros</label></div>
          <button className="w-full px-8 py-2 mb-2 text-sm font-medium text-black  bg-gray-400 hover:bg-green-600 rounded">
            Paseadores
          </button>
          <button className="w-full px-4 py-2 mb-2 text-sm font-medium text-black  bg-gray-400 hover:bg-green-600 rounded">
            Zona, Ciudad
          </button>
          <button className="w-full px-4 py-2 mb-2 text-sm font-medium text-black bg-gray-400 hover:bg-green-600 rounded">
            Disponibilidad
          </button>
          <PriceFilter />
          <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-orange-400 rounded">
            Apply Filter
          </button>
        </div>
      </div>
    </div>

       
      
        


       
      </div>


    );
  }
  
export default Card2;

