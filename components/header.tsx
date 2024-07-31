import React from 'react';
import { useRouter } from 'next/router';
import { ChevronDownIcon } from '@heroicons/react/24/outline'; // Asegúrate de tener @heroicons/react instalado
import Link from 'next/link';


import logo from '../public/logo_pase.svg';
import Image from 'next/image';
import users from '../src/user.svg';

function Headercomp() {
    const router = useRouter();
    return (
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
              className="px-4 py-2 text-sm font-medium text-black border border-blue-600 hover:text-blue-500 hover:border-blue-500 rounded"
              onClick={() => router.push('/register')}
            >
              Conviértete en paseador
            </button>
            <button 
              className="px-4 py-2 text-sm font-medium text-blue-300 border border-blue-600 hover:text-blue-500 hover:border-blue-500 rounded"
              onClick={() => router.push('/login')}
            ><Image alt="logo" src={users} className="h-9 w-9 mr-1" />
            </button>
          </div>
        </div>
      </header>

    );
  }
  
  export default Headercomp;


