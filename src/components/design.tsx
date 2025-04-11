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

export default async function Design({ ideia, palette }: Props) {
  return (
    <section className="grid grid-cols-2 gap-4 max-w-4xl mx-auto p-4 bg-white rounded-2xl mb-6 shadow-xl">
      <h2 className="col-span-2">Sua Inspiração Está Pronta!</h2>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold">Ideia para Desenho</h3>
        <div className="bg-gray-100 p-4 rounded-2xl">
          <h4 className="text-lg font-bold mb-3">{ideia.title}</h4>
          <p>{ideia.text}</p>
        </div>
        <div>Anúncio</div>
        <button>Proxima Ideia</button>
      </div>
      <div className="">
        <h3 className="font-bold">Paleta de Cores Sugerida</h3>
        <div className="">
          <p>{palette.description}</p>
          <div className="flex *:text-white text-sm *:text-shadow *:text-shadow-black gap-2 py-3 *:py-6 *:px-2 *:rounded">
            {palette.colors.map((color, index) => (
              <div className={`bg-[${color}] `} key={index + color}>{color}</div>
            ))}
          </div>
          <p>{palette.sugestion}</p>
        </div>
        <button>Nova Paleta</button>
      </div>
    </section>
  );
}
