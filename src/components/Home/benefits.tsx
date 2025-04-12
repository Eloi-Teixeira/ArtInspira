export default async function Benefits() {
  return (
    <section className="">
      <div className="max-w-6xl flex *:flex-1/4 flex-wrap gap-8 mx-auto p-8">
        <div className="px-6 py-8 bg-white rounded-2xl flex flex-col shadow-lg hover:-translate-y-3 duration-300 justify-center items-center  *:text-center">
          <span className="text-[40px] mb-5">🎨</span>
          <h2 className="font-bold text-lg mb-2">Paletas de Cores</h2>
          <p>Descubra combinações harmoniosas de cores que darão vida às suas criações artísticas.</p>
        </div>
        <div className="px-6 py-8 bg-white rounded-2xl flex flex-col shadow-lg hover:-translate-y-3 duration-300 justify-center items-center  *:text-center">
          <span className="text-[40px] mb-5">💡</span>
          <h2 className="font-bold text-lg mb-2">Ideias de Desenho</h2>
          <p>Receba sugestões criativas para desenhos que inspirarão suas próximas obras-primas.</p>
        </div>
        <div className="px-6 py-8 bg-white rounded-2xl flex flex-col shadow-lg hover:-translate-y-3 duration-300 justify-center items-center  *:text-center">
          <span className="text-[40px] mb-5">🔄</span>
          <h2 className="font-bold text-lg mb-2">Sempre Novo</h2>
          <p>Nosso algoritmo garante que você sempre receba ideias frescas e originais.</p>
        </div>
      </div>
    </section>
  );
}
