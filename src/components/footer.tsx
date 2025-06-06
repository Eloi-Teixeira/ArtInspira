import Link from 'next/link';

export default async function Footer() {
  return (
    <footer className="bg-[#2d2d3a] text-white py-8">
      <div className="flex flex-col items-center max-w-6xl mx-auto *:text-center">
        <div className="flex flex-wrap gap-6 w-full mb-6 justify-around">
          <div className="flex flex-col align-middle flex-1/3 max-w-96 min-w-52 justify-center gap-4">
            <h3 className="text-[#9aeaed] font-bold text-center text-xl">
              ArtInspira
            </h3>
            <p className="text-center">
              Sua fonte diária de inspiração artística, perfeita para artistas
              de todos os níveis.
            </p>
          </div>

          <div className="flex flex-col align-middle flex-1/3 justify-center gap-4 max-w-96 min-w-52">
            <h3 className="text-[#9aeaed] font-bold text-center text-xl">
              Contato
            </h3>
            <ul className="text-center">
              <li>
                <Link href={''}>contato@artinspira.com</Link>
              </li>
              <li>
                Portifólio:{' '}
                <Link href={''} className="text-[#9aeaed]" target="_blank">
                  Clique aqui
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p>© 2025 ArtInspira. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
