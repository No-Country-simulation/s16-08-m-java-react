import Image from 'next/image';
import { FC } from 'react';
import estrella from "../src/Group 7.svg";

import certificado from "../src/verificacion certificados.svg";
import domicilio from "../src/verificacion domicilio.svg";
import perfil from "../src/verificacion perfil.svg";
import perfil2 from "../src/perfil1.svg";
import corazon from "../src/corazon2.png";
import perrito from "../src/perrito.png";


interface CardProps {
  name: string;
  age: string;
  description: string;
  rating: number;
  reviews: string;
  services1: string[];
  services2: string[];
  services3: string[];
  services4: string[];
  price: string;
  imageUrl: string;
}

const Card: FC<CardProps> = ({ name, age, description, rating, reviews, services1, services2, services3, services4, price, imageUrl }) => {
  return (
    <div className="max-w-sm lg:max-w-full lg:flex border border-gray-300 shadow-lg rounded-lg mt-5">
    <div className='grid grid-cols-1 md:grid-cols-5 gap-3 ml-10 py-6'>
       {/* Columna 1*/}
      <div className='grid grid-cols-1 md:grid-cols-1 gap-1'>
        <Image src={perfil2} alt="Profile Picture" className="object-cover" width={125} height={125} />
        <div className="flex items-center">
          <div className="text-yellow-500">
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)} 5/5</div>
          
        </div><div className="text-gray-600 text-sm ml-2">({reviews} reseñas positivas)</div>
      </div>
      {/* Columna 2*/}
      <div className="bg-white p-2 leading-normal">
        <div className="mb-4">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {name} <span className="text-gray-600 text-sm">{age}</span>
          </div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        
        <div className="flex space-x-2 mt-20">
  <Image src={certificado} alt="Icon 1" className="h-12 w-12" />
  <Image src={domicilio} alt="Icon 1" className="h-12 w-12" />
  <Image src={perfil} alt="Icon 1" className="h-12 w-12" />
</div>      
       

      </div>

      {/* Columna 3*/}
       <div className='mt-10'>

       <button className="border border-blue-500 text-blue-500 px-3 py-1 text-sm rounded hover:bg-blue-500 hover:text-white transition duration-300">
        {services1}
        </button>
        <button className="border border-blue-500 text-blue-500 px-3 py-1 text-sm rounded hover:bg-blue-500 hover:text-white transition duration-300">
        {services2}
        </button>
        
        
        
       </div>
       
       {/* Columna 4*/}
       <div className='mt-10'>
         <button className="border border-blue-500 text-blue-500 px-1 py-1 text-sm rounded hover:bg-blue-500 hover:text-white transition duration-300">
        {services4}
        </button>
        
       <button className="border border-blue-500 text-blue-500 px-3 py-1 text-sm rounded hover:bg-blue-500 hover:text-white transition duration-300 w-20">
        {services3}
        </button>
       
       </div>

       {/* Columna 5*/}

       <div className="flex flex-col justify-between h-full">
  <div className="text-gray-900 font-bold text-lg">{price}</div>
  <div className="flex justify-end items-end mr-10">
    <Image src={corazon} alt="Icon 1" className="h-12 w-12" />
  </div>
</div>

       

      <div>

      </div>
    </div>
  </div>
);
};

function Card3() {
  const sampleCard = {
    name: 'Ignacio',
    age: '3 Años',
    description: 'Descripción',
    rating: 5,
    reviews: "98",
    services1: ['Alojamiento',],
    services2: ['Paseo'],
    services3: ['Guardería'],
    services4: ['Usuarios recurrentes'],
    price: '3500$/paseo',
    imageUrl: '/path/to/image.jpg',
  };

  return (
    <div className="">
      <Card {...sampleCard} />
    </div>
  );
}
export default Card3;
