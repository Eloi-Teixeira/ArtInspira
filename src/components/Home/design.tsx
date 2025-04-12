'use client';

import Link from 'next/link';
import Loading from '../Helper/loading';
import React from 'react';
import { generateIdeia } from '@/app/actions/generate-ideia';

interface Props {
  loading: React.Dispatch<React.SetStateAction<boolean>>;
  ideia:
    | {
        title: string;
        text: string;
      }
    | undefined;
  palette:
    | {
        colors: string[];
        description: string;
        sugestion: string;
        author: {
          name: string;
          link: string;
          source: string;
        };
        file: string;
      }[]
    | undefined;
}

export default function Design({ ideia, palette }: Props) {
  const [paletteIndex, setPaletteIndex] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [newIdeia, setNewIdeia] = React.useState(ideia);
  const [newPalette, setNewPalette] = React.useState(palette);

  if (!newPalette || !newIdeia) return <Loading />;
  const handleGenerateIdeia = async () => {
    setIsLoading(true);
    try {
      const json = await generateIdeia();
      if (json.success) {
        setNewIdeia(json.data.ideia);
        setNewPalette(json.data.palette);
        setPaletteIndex(0);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    navigator.clipboard.writeText(e.currentTarget.innerText);
    alert('Cor copiada para a área de transferência!');
  };

  function getContrastingTextColor(hexColor: string): string {
    const hex = hexColor.replace('#', '');

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Cálculo de luminância relativo (YIQ)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;

    return yiq >= 128 ? '#000000' : '#FFFFFF';
  }

  return (
    <section className="result flex flex-col gap-4 max-w-4xl mx-auto px-8 pt-8 pb-12 bg-white rounded-2xl my-8 shadow-xl h-fit overflow-hidden relative">
      <h2 className="col-span-2 text-center text-3xl font-bold text-[#5c4ff0]">
        Sua Inspiração Está Pronta!
      </h2>
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-4 delay-500">
          <h3 className="font-bold text-2xl text-[#f26d85] rounded flex flex-col gap-2.5 mb-2 after:w-full after:content-[''] after:block my-4 after:h-0.5 after:bg-[#4eccc4]">
            Ideia para Desenho
          </h3>
          <div className="bg-[#fafafa] p-4 rounded-2xl">
            <h4 className="text-lg font-bold mb-3">{newIdeia.title}</h4>
            <p>{newIdeia.text}</p>
          </div>
          <div className="w-full flex items-center justify-center h-72 bg-gray-200 text-gray-700 rounded-lg">
            Anúncio in-content
          </div>
          <button
            className="py-3 px-6 bg-[#5c4ff0] max-w-fit rounded-full text-white hover:bg-[#4a3fd1] selection:bg-[#4a3fd1] cursor-pointer duration-300 mt-4"
            onClick={handleGenerateIdeia}
            disabled={isLoading}
          >
            Proxima Ideia
          </button>
        </div>
        <div className="flexx flex-col gap-4 delay-300">
          <h3 className="font-bold text-2xl text-[#f26d85] rounded flex flex-col gap-2.5 mb-2 after:w-full after:content-[''] after:block my-4 after:h-0.5 after:bg-[#4eccc4]">
            Paleta de Cores Sugerida
          </h3>
          <div className="">
            <p>{newPalette[paletteIndex].description}</p>
            <div className="flex flex-wrap text-[12px] max-h-44 overflow-x-hidden overflow-y-auto gap-3 bg-gray-100 p-2 py-3 *:py-5 *:px-2 *:rounded-lg *:font-mono *:cursor-pointer *:opacity-0">
              {newPalette[paletteIndex].colors.map((color, index) => (
                <div
                  style={{
                    backgroundColor: color,
                    color: getContrastingTextColor(color),
                    animation: 'fadeIn 0.5s ease-in-out forwards',
                    animationDelay: `${index * 0.1}s`,
                  }}
                  key={index + color}
                  onClick={handleCopy}
                >
                  {color}
                </div>
              ))}
            </div>
            <div className="flex flex-col text-gray-700 px-2 mb-4">
              <span>
                Autor:
                <Link
                  href={
                    newPalette[paletteIndex].author?.link
                      ? newPalette[paletteIndex].author?.link
                      : ''
                  }
                  target="_blank"
                  className="hover:bg-[#4a3fd1]  hover:text-white duration-300 w-fit px-4 rounded"
                >
                  {newPalette[paletteIndex].author?.name}
                </Link>
              </span>
              <span>
                Fonte:
                <Link
                  target="_blank"
                  href={
                    newPalette[paletteIndex].author?.link
                      ? newPalette[paletteIndex].author?.link
                      : ''
                  }
                  className="text-[#5c4ff0] hover:bg-[#4a3fd1] hover:text-white duration-300 w-fit px-4 rounded"
                >
                  {newPalette[paletteIndex].author?.source}
                </Link>
              </span>
            </div>
            <p>
              <span className="font-bold text-[#5c4ff0]">Sugestão: </span>
              {newPalette[paletteIndex].sugestion}
            </p>
          </div>
          <button
            className="py-3 px-6 bg-[#5c4ff0] max-w-fit rounded-full text-white hover:bg-[#4a3fd1] cursor-pointer duration-300 mt-4"
            onClick={() =>
              setPaletteIndex((prev) => {
                if (prev === newPalette.length - 1) return 0;
                console.log(prev, '/', newPalette.length - 1);
                return prev + 1;
              })
            }
            disabled={isLoading}
          >
            Nova Paleta
          </button>
          <Link
            href={newPalette[paletteIndex].author.link}
            target="_blank"
            className="py-3 px-6 bg-[#5c4ff0] max-w-fit rounded-full text-white hover:bg-[#4a3fd1] cursor-pointer duration-300 mt-4 ml-3"
          >
            Baixar Paleta
          </Link>
        </div>
      </div>
      {isLoading && (
        <Loading classname="absolute top-0 left-0 w-full h-full bg-white bg-opacity-70 z-10" />
      )}
    </section>
  );
}
