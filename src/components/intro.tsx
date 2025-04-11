'use client';

import React from 'react';
import Benefits from './benefits';
import Loading from './loading';

export default function Intro() {
  const [loading, setLoading] = React.useState(true);
  const ideia = {
    title: 'Mundo Submarino Futurista',
    text: 'Uma civilização submarina que combina elementos orgânicos e tecnológicos. Criaturas bioluminescentes nadam entre ruínas de uma cidade antiga enquanto veículos futuristas de propulsão magnética passam ao redor. As estruturas arquitetônicas misturam corais vivos com vidro e metal em formas curvilíneas.',
  };

  const palette = {
    colors: ['#ff6b6b', '#4eccc4', '#ffe76e', '#1a535c', '#5c4ff0'],
    description:
      'Esta paleta combina tons aquáticos profundos com toques de cores vibrantes para elementos bioluminescentes.',
    sugestion:
      'Use os tons de azul como base, o turquesa para áreas intermediárias, e os tons vibrantes para destaque e elementos luminosos.',
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen mt-20">
      <h1 className="text-[42px] text-[#5c4ff0] font-bold">
        Desperte Sua Inspiração Artística
      </h1>
      <p className="text-[#3b313b] max-w-[800px] text-center mt-6 text-xl leading-8">
        ArtInspira te ajuda a encontrar novas ideias de desenhos e combinações
        de cores perfeitas para impulsionar sua criatividade. Nossa ferramenta
        inteligente gera conceitos únicos para você nunca mais ficar sem
        inspiração.
      </p>
      <button
        className="bg-blue-800 text-white px-10 rounded-4xl py-4 uppercase mt-8 mb-16 text-xl shadow-[#c7b9ed] shadow-md cursor-pointer hover:shadow-lg duration-600 bg-gradient-to-r from-[#5c4ff0] to-[#f26d85] bounce"
        onClick={() => setLoading((o) => !o)}
      >
        Gerar ideia
      </button>
      <div className="flex gap-4">
        <div className="bg-[#ff6b6b] w-20 h-20 rounded-full shadow-md"></div>
        <div className="bg-[#4eccc4] w-20 h-20 rounded-full shadow-md"></div>
        <div className="bg-[#ffe76e] w-20 h-20 rounded-full shadow-md"></div>
        <div className="bg-[#1a535c] w-20 h-20 rounded-full shadow-md"></div>
        <div className="bg-blue-800 w-20 h-20 rounded-full shadow-md"></div>
      </div>
      {loading ? <Loading /> : <Design ideia={ideia} palette={palette} />}
    </main>
  );
}
