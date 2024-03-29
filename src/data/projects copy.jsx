// Se for trabalhar com imagens
// import trybetunesImg from '../images/trybetunes.png';
// import metawalletImg from '../images/metawallet.png';
// import triviaImg from '../images/trivia2.png';
// import starwarsImg from '../images/starwars.png';
// import appReceitasImg from '../images/appReceitas.png';
// Se for trabalhar com os gifs importados da pasta images no src
// import trybetunesGif from '../images/trybetunes.gif';
// import appReceitasGif from '../images/appReceitas.gif';
// import starwarsGif from '../images/starwars.gif';
// import metawalletGif from '../images/metawallet.gif';
// import triviaGif from '../images/trivia.gif';

const IMAGES_URL = '/images/gifs';

const projetos = [
  {
    id: 1,
    nome: 'Trybetunes',
    titulo: {
      'pt-br': 'Aplicativo de player de músicas',
      en: 'Music player application',
    },
    description: {
      'pt-br': 'Trybetunes é um projeto/aplicação desenvolvida no curso da Trybe em React.js que acessa uma API de músicas e cria um ambiente em que o usuário pode, dentro de sua conta, ouvir e favoritar músicas.',
      en: 'Trybetunes is a project / application developed in the Trybe course in React.js that accesses a music API and creates an environment in which the user can, within his account, listen to and favorite songs.',
    },
    imagem: `${IMAGES_URL}/trybetunes.gif`,
    skills: ['JavaScript', 'React', 'Styled Components CSS'],
    stack: 'Front-end',
    linkApp: 'https://project-tryetunes.vercel.app/',
    linkGitHub: 'https://github.com/holygato/Project-Trybetunes',
  },
  {
    id: 2,
    nome: 'Meta Wallet',
    titulo: 'Aplicativo de carteira de controle de gastos',
    description: 'MetaWallet é um projeto/aplicação desenvolvida no curso da Trybe em React.js para finanças e controle de gastos. Utilizou uma API para a cotação em tempo real das moedas.',
    imagem: `${IMAGES_URL}/metawallet.gif`,
    skills: ['JavaScript', 'React', 'Redux', 'Styled Components CSS'],
    stack: 'Front-end',
    linkApp: 'https://project-trybewallet-drab.vercel.app/',
    linkGitHub: 'https://github.com/holygato/Project-Trybewallet',
  },
  {
    id: 3,
    nome: 'Trivia',
    titulo: 'Aplicativo de jogo de perguntas e respostas',
    description: 'Trivia é um projeto/aplicação desenvolvida no curso da Trybe em React.js que acessa uma API de perguntas e respostas e cria um ambiente onde o usuário pode jogar e ganhar pontos.',
    imagem: `${IMAGES_URL}/trivia.gif`,
    skills: ['JavaScript', 'React', 'Redux', 'Tailwind CSS', 'React Testing Library'],
    stack: 'Front-end',
    linkApp: 'https://project-trivia-dun.vercel.app/',
    linkGitHub: 'https://github.com/holygato/Project-Trivia',
  },
  {
    id: 4,
    nome: 'Star Wars: Planets Search',
    titulo: 'Aplicativo de busca e filtro de planetas do Star Wars',
    description: 'Star Wars: Planets Search é um projeto/aplicação desenvolvida no curso da Trybe em React.js que acessa uma API de planetas do Star Wars e possibilita ao usuário ter acesso a um sistema de filtros dos dados e pesquisar pelo nome dos planetas.',
    imagem: `${IMAGES_URL}/starwars.gif`,
    skills: ['JavaScript', 'React', 'Context API', 'Styled Components CSS'],
    stack: 'Front-end',
    linkApp: 'https://project-star-wars-planets-search.vercel.app/',
    linkGitHub: 'https://github.com/holygato/Project-StarWars-Planets-Search',
  },
  {
    id: 5,
    nome: 'Recipes App',
    titulo: 'Aplicativo de receitas de comidas e bebidas',
    description: 'Recipes App é um projeto/aplicação desenvolvida no curso da Trybe em React.js que acessa uma API de receitas de comidas e bebidas e possibilita ao usuário buscar, favoritar e salvar o progresso da elaboração das receitas.',
    imagem: `${IMAGES_URL}/appReceitas.gif`,
    skills: ['JavaScript', 'React', 'Context API', 'Styled Components CSS', 'React Testing Library'],
    stack: 'Front-end',
    linkApp: 'https://project-recipes-app-jet.vercel.app/foods',
    linkGitHub: 'https://github.com/holygato/Project-Recipes-App',
  },
];

export default projetos;
