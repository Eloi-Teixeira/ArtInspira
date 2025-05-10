'use client';

import React from 'react';
import Loading from '../Helper/loading';
import Design from './design';
import { IIdeia } from '@/models/Ideia';
import { generateIdeia } from '@/app/actions/generate-ideia';
import MessageError from '../Helper/message-error';

export default function Intro() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [ideia1, setIdeia] = React.useState<IIdeia | null>(null);

  const handleGenerateIdeia = async () => {
    setIsActive(true);
    setIsLoading(true);
    setError(false);

    try {
      const json = await generateIdeia();
      if (!json.success) throw new Error('Erro ao gerar ideia');
      setIdeia(json.data);
    } catch (error) {
      console.error(error);
      setError(true);
      setIsActive(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-[42px] text-[#5c4ff0] text-center font-bold mt-32">
        Desperte Sua Inspiração Artística
      </h1>
      <p className="text-[#3b313b] max-w-[800px] text-center mt-6 text-xl leading-8 max-md:text-lg max-md:mx-6">
        ArtInspira te ajuda a encontrar novas ideias de desenhos e combinações
        de cores perfeitas para impulsionar sua criatividade. Nossa ferramenta
        inteligente gera conceitos únicos para você nunca mais ficar sem
        inspiração.
      </p>
      <button
        className="bg-blue-800 text-white px-10 rounded-4xl py-4 uppercase mt-8 mb-16 text-xl shadow-[#c7b9ed] shadow-md cursor-pointer hover:shadow-lg duration-600 bg-gradient-to-r from-[#5c4ff0] to-[#f26d85] bounce disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-400"
        onClick={handleGenerateIdeia}
        disabled={isLoading}
      >
        Gerar ideia
      </button>
      <div className="flex gap-4 *:max-sm:hidden">
        <div className="bg-[#ff6b6b] w-20 h-20 rounded-full shadow-md"></div>
        <div className="bg-[#4eccc4] w-20 h-20 rounded-full shadow-md"></div>
        <div className="bg-[#ffe76e] w-20 h-20 rounded-full shadow-md"></div>
        <div className="bg-[#1a535c] w-20 h-20 rounded-full shadow-md"></div>
        <div className="bg-blue-800 w-20 h-20 rounded-full shadow-md"></div>
      </div>
      {isActive ? (
        isLoading ? (
          <Loading />
        ) : (
          <Design
            ideia={ideia1?.ideia}
            palette={ideia1?.palette}
            loading={setIsLoading}
          />
        )
      ) : null}
      {error && <MessageError />}
    </main>
  );
}
