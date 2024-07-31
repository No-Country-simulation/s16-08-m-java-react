import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


import logo from '../public/logo_pase.svg';
import Image from 'next/image';

import Headercomp from '../components/header';
import Footer2 from '../components/footer';
import Card2 from '../components/Card2';

function buscador() {
    return (
      <div>
        <Headercomp />
        <Card2 />
        <Footer2 />
      </div>  
    );
  }
  
  export default buscador;