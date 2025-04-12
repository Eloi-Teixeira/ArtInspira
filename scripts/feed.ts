import dbConnect from '../src/lib/dbConnect';
import { Ideia } from '../src/models/Ideia';

async function seed() {
  await dbConnect();

  const data = [
    {
      ideia: {
        title: 'Retrato em aquarela de um gato',
        text: 'Pintura em aquarela de um gato em estilo realista',
      },
      palette: [
        {
          colors: ['#F7CAC9', '#92A8D1', '#88B04B'],
          description: 'Paleta suave e delicada',
          sugestion: 'Perfeita para aquarelas e pinturas suaves',
          author: {
            name: 'ArtistaDaAquarela',
            link: 'https://behance.net/artistadaaquarela',
            source: 'Behance',
          },
          file: '',
        },
        {
          colors: ['#5B5B5B', '#E5E5E5', '#D4AF37'],
          description: 'Tons neutros com dourado',
          sugestion: 'Ideal para dar profundidade e realismo',
          author: {
            name: 'PaletaArtistica',
            link: 'https://dribbble.com/paletaartistica',
            source: 'Dribbble',
          },
          file: '',
        },
      ],
    },
    {
      ideia: {
        title: 'Paisagem urbana noturna',
        text: 'Ilustração de cidade à noite com luzes e reflexos',
      },
      palette: [
        {
          colors: ['#1A1B41', '#4C3F91', '#9F86C0'],
          description: 'Tons noturnos e místicos',
          sugestion: 'Ótima para cenas noturnas e atmosferas misteriosas',
          author: {
            name: 'NightArtist',
            link: 'https://behance.net/nightartist',
            source: 'Behance',
          },
          file: '',
        },
        {
          colors: ['#FF9642', '#FFE5D9', '#2D3047'],
          description: 'Contraste entre luzes e sombras',
          sugestion: 'Perfeita para iluminação artificial e reflexos',
          author: {
            name: 'CityLights',
            link: 'https://dribbble.com/citylights',
            source: 'Dribbble',
          },
          file: '',
        },
      ],
    },
    {
      ideia: {
        title: 'Natureza morta com frutas tropicais',
        text: 'Composição colorida com frutas exóticas',
      },
      palette: [
        {
          colors: ['#FF6B6B', '#4ECDC4', '#FFE66D'],
          description: 'Cores vibrantes e tropicais',
          sugestion: 'Ideal para ilustrações de alimentos e natureza',
          author: {
            name: 'TropicalArt',
            link: 'https://behance.net/tropicalart',
            source: 'Behance',
          },
          file: '',
        },
        {
          colors: ['#2F4858', '#86BBD8', '#F6AE2D'],
          description: 'Paleta contrastante e harmoniosa',
          sugestion: 'Boa para criar profundidade e volume',
          author: {
            name: 'FoodArtist',
            link: 'https://dribbble.com/foodartist',
            source: 'Dribbble',
          },
          file: '',
        },
      ],
    },  ];

  try {
    await Ideia.create(data);
    console.log('✅ Dados inseridos com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao inserir dados:', error);
  }

  process.exit();
}

seed();
