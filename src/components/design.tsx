'use client';

interface Props {
  ideia: {
    title: string;
    text: string;
  };
  palette: {
    colors: string[];
    description: string;
    sugestion: string;
  };
}

export default function Design({ ideia, palette }: Props) {
  return (
    <section className="result flex flex-col gap-4 max-w-4xl mx-auto px-8 pt-8 pb-12 bg-white rounded-2xl mb-6 shadow-xl h-fit">
      <h2 className="col-span-2 text-center text-3xl font-bold text-[#5c4ff0]">
        Sua Inspiração Está Pronta!
      </h2>
      <div className="grid grid-cols-2 gap-x-8 ">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-2xl text-[#f26d85] rounded flex flex-col gap-2.5 mb-2 after:w-full after:content-[''] after:block my-4 after:h-0.5 after:bg-[#4eccc4]">
            Ideia para Desenho
          </h3>
          <div className="bg-[#fafafa] p-4 rounded-2xl">
            <h4 className="text-lg font-bold mb-3">{ideia.title}</h4>
            <p>{ideia.text}</p>
          </div>
          <div className="w-full flex items-center justify-center h-72 bg-gray-200 text-gray-700 rounded-lg">
            Anúncio in-content
          </div>
          <button className="py-3 px-6 bg-[#5c4ff0] max-w-fit rounded-full text-white hover:bg-[#4a3fd1] cursor-pointer duration-300 mt-4">
            Proxima Ideia
          </button>
        </div>
        <div className="flexx flex-col gap-4">
          <h3 className="font-bold text-2xl text-[#f26d85] rounded flex flex-col gap-2.5 mb-2 after:w-full after:content-[''] after:block my-4 after:h-0.5 after:bg-[#4eccc4]">
            Paleta de Cores Sugerida
          </h3>
          <div className="">
            <p>{palette.description}</p>
            <div className="flex *:text-white text-[12px] *:text-shadow *:text-shadow-black gap-2 py-3 *:py-5 *:px-2 *:rounded-lg">
              {palette.colors.map((color, index) => (
                <div className={`bg-[${color}] `} key={index + color}>
                  {color}
                </div>
              ))}
            </div>
            <p>{palette.sugestion}</p>
          </div>
          <button className="py-3 px-6 bg-[#5c4ff0] max-w-fit rounded-full text-white hover:bg-[#4a3fd1] cursor-pointer duration-300 mt-4">
            Nova Paleta
          </button>
        </div>
      </div>
    </section>
  );
}
