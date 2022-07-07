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


  /*Aqui*/
export const PortfolioData = [
    {
      id: 1,
      title: "Design Galeria",
      subtitle: "Galeria de fotos",
      img: TemplateGaleria,
      img2: TemplateGaleria,
      preview: "Desgin de uma galeria de fotos",
      description: "Design de uma galeria de fotos, utilizando HTML e estilização em SASS",
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
      description: "Pequeno projeto de um card promocional feito em HTML e CSS",
      date: "Maio 2022",
      technology: "HTML e CSS",
      url: "https://github.com/leonanthomaz/Template-Nike",
      github: "https://github.com/leonanthomaz/Template-Nike"
    },
    {
      id: 3,
      title: "Design GloboPlay",
      subtitle: "Desafio VX",
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

  /*Aqui*/

  export const APIListData = [
    {
      id: 1,
      title: "Clapperboard",
      subtitle: "Consumindo API de filmes (TMDB)",
      img: ClapperBoard1,
      img2: ClapperBoard2,
      preview: "Sistema de consultas de filmes",
      description: "Sistema de consultas de filmes, consumindo API TMDB e utilização de Context API e Hooks para renderização de componentes.",
      date: "Atualmente",
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

  /*Aqui*/
  export const EcommerceListData = [
    // {
    //   id: 1,
    //   title: "Pizzaria",
    //   subtitle: "Loja Virtual (Projeto descontinuado)",
    //   img: CasaDoSalgado1,
    //   img2: CasaDoSalgado2,
    //   description: "Consiste em um e-commerce virtual, escrito em PHP com base de dados MySQL, para o seguimento comercial, onde o usuário tem a disposição o cardápio virtual dividido por página. Ao abrir sessão, o cliente tem a disposição o carrinho de compras bloqueado pelas condições de horário de funcionamento e realização de login, área privada, onde pode alterar seus dados de maneira completa, redefinição de senha e exclusão de conta. O cliente ainda pode, ao finalizar a compra, acompanhar o status da sua entrega em tempo real. O projeto ainda conta com área administrativa, onde o administrador com acesso tem total controle de todo o site, podendo manipular dados de clientes e produtos, bem como alterar o status da entrega, espelhado diretamente para o cliente.",
    //   date: "Dezembro 2021",
    //   technology: "HTML, PHP, JavaScript, Bootstrap, CSS e MySQL",
    //   url: "https://casadosalgadoabv.000webhostapp.com/",
    //   github: "https://github.com/leonanthomaz/CasaDoSalgado"
    // },
    {
      id: 2,
      title: "Casa do Salgado",
      subtitle: "Loja Virtual (Projeto descontinuado)",
      img: CasaDoSalgado1,
      img2: CasaDoSalgado2,
      description: "Consiste em um e-commerce virtual, escrito em PHP com base de dados MySQL, para o seguimento comercial, onde o usuário tem a disposição o cardápio virtual dividido por página. Ao abrir sessão, o cliente tem a disposição o carrinho de compras bloqueado pelas condições de horário de funcionamento e realização de login, área privada, onde pode alterar seus dados de maneira completa, redefinição de senha e exclusão de conta. O cliente ainda pode, ao finalizar a compra, acompanhar o status da sua entrega em tempo real. O projeto ainda conta com área administrativa, onde o administrador com acesso tem total controle de todo o site, podendo manipular dados de clientes e produtos, bem como alterar o status da entrega, espelhado diretamente para o cliente.",
      date: "Dezembro 2021",
      technology: "HTML, PHP, JavaScript, Bootstrap, CSS e MySQL",
      url: "https://casadosalgadoabv.000webhostapp.com/",
      github: "https://github.com/leonanthomaz/CasaDoSalgado"
    },
    {
      id: 3,
      title: "Yakisoba do Alto",
      subtitle: "Loja Virtual (Projeto descontinuado)",
      img: Yakisoba1,
      img2: Yakisoba2,
      description: "Consiste em um e-commerce virtual, escrito em PHP com base de dados MySQL, para o seguimento comercial, onde o usuário tem a disposição o cardápio virtual dividido por página. Ao abrir sessão, o cliente tem a disposição o carrinho de compras bloqueado pelas condições de horário de funcionamento e realização de login, área privada, onde pode alterar seus dados de maneira completa, redefinição de senha e exclusão de conta. O cliente ainda pode, ao finalizar a compra, acompanhar o status da sua entrega em tempo real. O projeto ainda conta com área administrativa, onde o administrador com acesso tem total controle de todo o site, podendo manipular dados de clientes e produtos, bem como alterar o status da entrega, espelhado diretamente para o cliente.",
      date: "Dezembro 2021",
      technology: "HTML, PHP, JavaScript, Bootstrap, CSS e MySQL",
      url: "https://casadosalgadoabv.000webhostapp.com/",
      github: "https://github.com/leonanthomaz/CasaDoSalgado"
    },
  ];


  /*Aqui*/
  export const SistemasListData = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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

