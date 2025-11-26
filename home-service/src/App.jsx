import React from 'react'
import './App.css';
import { Navbar } from './components/navbar/Navabar';
import { Hero } from './components/hero/Hero';
import {Service} from './components/servicecard/Service'
import {Mid} from './components/mid/Mid';
import { Mid2 } from './components/mid2/Mid2';
import { Appp } from './components/Appp/Appp';
import {Becamepro} from './components/becamepro/Becamepro';
import {Ourpartners} from './components/ourpartner/Ourpartners';
import { Footer } from './components/footer/Footer'


export default function App (){
 return (
   <div>
    <Navbar/>
    <Hero/>
    <Service/>
    <Mid/>
    <Mid2/>
    <Appp/>
    <Becamepro/>
    <Ourpartners/>
    <Footer/>
    </div>
  ) 
};
