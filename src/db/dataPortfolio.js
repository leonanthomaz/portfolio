import ClapperBoard1 from '../assets/img/portfolio/clapper1.jpg';
import ClapperBoard2 from '../assets/img/portfolio/clapper2.jpg';
import BrasilCovid1 from '../assets/img/portfolio/brasilcovid1.png';
import BrasilCovid2 from '../assets/img/portfolio/brasilcovid2.png';
import CasaDoSalgado1 from '../assets/img/portfolio/cds1.png';
import CasaDoSalgado2 from '../assets/img/portfolio/cds2.png';
import Saturno1 from '../assets/img/portfolio/saturno1.png';
import Saturno2 from '../assets/img/portfolio/saturno2.png';
import Jupter from '../assets/img/portfolio/jupter1.png';
import TemplateGaleria from '../assets/img/portfolio/template-galeria1.png';
import TemplateNike from '../assets/img/portfolio/template-nike1.png';
import TemplateGlobo from '../assets/img/portfolio/template-globo.png';
import Galleon from '../assets/img/portfolio/galleon.png';
import Yakisoba1 from '../assets/img/portfolio/yda1.png';
import Yakisoba2 from '../assets/img/portfolio/yda2.png';
import Pizzaria1 from '../assets/img/portfolio/pizzaria1.png';
import Pizzaria2 from '../assets/img/portfolio/pizzaria2.png';
import Pegasus1 from '../assets/img/portfolio/pegasus1.png';
import Pegasus2 from '../assets/img/portfolio/pegasus2.png';

  /*API'S*/
  export const APIListData = [
    {
      id: 1,
      title: "Clapperboard",
      subtitle: "Consumindo API de filmes (TMDB)",
      img: ClapperBoard1,
      img2: ClapperBoard2,
      preview: "Sistema de consultas de filmes",
      description: "Sistema de consultas de filmes, consumindo API TMDB e utilização de Context API e Hooks para renderização de componentes.",
      date: "Maio 2022",
      technology: "React, Javascript, HTML e CSS (Styled-Components)",
      url: "https://clapperboard.vercel.app/",
      github: "https://github.com/leonanthomaz/clapperboard"
    },
    {
      id: 2,
      title: "Brasil Covid",
      subtitle: "API de estatísticas da Covid no Brasil",
      img: BrasilCovid1,
      img2: BrasilCovid2,
      preview: "API de informações sobre a Covid-19",
      description: "API básica, contendo os números da pandemia do Covid-19 por Estados brasileiros. Neste mini-projeto pude desenvolver ainda mais minhas habilidades com Axios e Hooks.",
      date: "Junho 2021",
      technology: "React, JavaScript, CSS e HTML5",
      url: "https://brasilcovid.herokuapp.com/",
      github: "https://github.com/leonanthomaz/BrasilCovid"
    },
    
  ];

  /*Design*/
  export const DesignData = [
    {
      id: 1,
      title: "Design Galeria",
      subtitle: "Galeria de fotos",
      img: TemplateGaleria,
      img2: TemplateGaleria,
      preview: "Design de uma galeria de fotos",
      description: "Design de uma galeria de fotos, utilizando HTML e estilização em SASS.",
      date: "Junho 2022",
      technology: "HTML e SASS",
      url: "https://github.com/leonanthomaz/GaleriaSass",
      github: "https://github.com/leonanthomaz/GaleriaSass"
    },
    {
      id: 2,
      title: "Design Nike",
      subtitle: "Card promocional",
      img: TemplateNike,
      img2: TemplateNike,
      preview: "Desenvolvido em HTML e CSS",
      description: "Pequeno projeto de um card promocional.",
      date: "Maio 2022",
      technology: "HTML e CSS",
      url: "https://github.com/leonanthomaz/Template-Nike",
      github: "https://github.com/leonanthomaz/Template-Nike"
    },
    {
      id: 3,
      title: "Design GloboPlay",
      subtitle: "Desafio Card Promocional",
      img: TemplateGlobo,
      img2: TemplateGlobo,
      preview: "Implementado em HTML e CSS",
      description: "Desafio de implementação de um card promocional da GloboPlay. Desenvolvido em HTML, CSS e estruturas com a ferramenta Figma.",
      date: "Maio 2022",
      technology: "HTML e CSS",
      url: "https://github.com/leonanthomaz/Template-GloboPlay",
      github: "https://github.com/leonanthomaz/Template-GloboPlay"
    },

  ];

  /*E-Commerce*/
  export const EcommerceListData = [
    {
      id: 1,
      title: "Pizzaria",
      subtitle: "E-commerce (Estudos)",
      img: Pizzaria1,
      img2: Pizzaria2,
      description: "Trata-se de um projeto de estudos, onde implemento um ecommerce virtual, desenvolvido em React. Utilizo Context API e Hooks para o a construção da lógica do carrinho.",
      date: "Julho 2022",
      technology: "React, Styled-Components",
      url: "https://github.com/leonanthomaz/ProjetoPizzariaDoAlto",
      github: "https://github.com/leonanthomaz/ProjetoPizzariaDoAlto"
    },
    {
      id: 2,
      title: "Casa do Salgado",
      subtitle: "Loja Virtual",
      img: CasaDoSalgado1,
      img2: CasaDoSalgado2,
      description: "E-commerce virtual, escrito em PHP com base de dados MySQL, para o seguimento comercial, onde o usuário tem a disposição o cardápio virtual dividido por página. Ao abrir sessão, o cliente tem a disposição o carrinho de compras bloqueado pelas condições de horário de funcionamento e realização de login, área privada, onde pode alterar seus dados de maneira completa, redefinição de senha e exclusão de conta. O cliente ainda pode, ao finalizar a compra, acompanhar o status da sua entrega em tempo real. O projeto ainda conta com área administrativa, onde o administrador com acesso tem total controle de todo o site, podendo manipular dados de clientes e produtos, bem como alterar o status da entrega, espelhado diretamente para o cliente.",
      date: "Dezembro 2021",
      technology: "HTML, PHP, JavaScript, Bootstrap, CSS e MySQL",
      url: "https://casadosalgadoabv.000webhostapp.com/",
      github: "https://github.com/leonanthomaz/CasaDoSalgado"
    },
    {
      id: 3,
      title: "Yakisoba do Alto",
      subtitle: "Cardapio virtual",
      img: Yakisoba1,
      img2: Yakisoba2,
      description: "Template de um dos meus primeiros mini projetos. Consiste em um cardapio virtual, manipulação de páginas com JQuery e integração via Whatsapp.",
      date: "Junho 2021",
      technology: "HTML, CSS, JavaScript e JQuery",
      url: "https://casadosalgadoabv.000webhostapp.com/",
      github: "https://github.com/leonanthomaz/CasaDoSalgado"
    },
  ];


  /*Sistemas*/
  export const SistemasListData = [
    {
      id: 1,
      title: "Pégasus",
      subtitle: "Rede Social",
      img: Pegasus1,
      img2: Pegasus2,
      preview: "Rede social desenvolvida em React, Node e MongoDB",
      description: "Inspirado em aulas online, construí esta rede social em MERN (Mongo, Express, React e Node). Utilizo context api e reducer para login e renderização das informações do usuário e MongoDB como banco de dados.",
      date: "Julho 2022",
      technology: "MERN (Mongo, Express, React e Node)",
      url: "https://pegasus-front-end.vercel.app/",
      github: "https://github.com/leonanthomaz/PegasusFrontEnd",
      github2: "https://github.com/leonanthomaz/PegasusBackEnd"
    },
    {
      id: 2,
      title: "Saturno",
      subtitle: "ChatBox",
      img: Saturno1,
      img2: Saturno2,
      preview: "Aplicativo chat, desenvolvido em React",
      description: "Projeto inspirado da aula online do professor Bonieky Lacerda. Neste desafio, pude me inteirar mais sobre a biblioteca React, principalmente sobre os Hooks e Props.",
      date: "Setembro 2021",
      technology: "React, Firebase",
      url: "https://saturno.herokuapp.com/",
      github: "https://github.com/leonanthomaz/Saturno"
    },
    {
      id: 3,
      title: "Galleon",
      subtitle: "Blog",
      img: Galleon,
      img2: Galleon,
      preview: "Sistema de um blog",
      description: "Sistema constrúido em Node JS, do backend ao frontend, utilizando a engine Handlebars para as views..",
      date: "Setembro 2021",
      technology: "React, Firebase",
      url: "https://saturno.herokuapp.com/",
      github: "https://github.com/leonanthomaz/Saturno"
    },
    {
      id: 4,
      title: "Jupter",
      subtitle: "Chat App",
      img: Jupter,
      preview: "Aplicativo desenvolvido em PHP",
      description: "Projeto desenvolvido em PHP e Javascript (JQuery). Trata-se de um aplicativo de conversas, tendo como front-end Bootstrap, CSS e backend PHP.",
      date: "Março 2022",
      technology: "PHP e Javascript",
      url: "https://jupterapp.000webhostapp.com/",
      github: "https://github.com/leonanthomaz/chat-php"
    },
    
  ];

