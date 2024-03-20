import BrasilCovid1 from '../assets/img/portfolio/brasilcovid1.webp';
import BrasilCovid2 from '../assets/img/portfolio/brasilcovid2.webp';
import CasaDoSalgado1 from '../assets/img/portfolio/cds1.webp';
import CasaDoSalgado2 from '../assets/img/portfolio/cds2.webp';
import Saturno1 from '../assets/img/portfolio/saturno1.webp';
import Saturno2 from '../assets/img/portfolio/saturno2.webp';
import TemplateGaleria from '../assets/img/portfolio/template-galeria1.webp';
import TemplateNike from '../assets/img/portfolio/template-nike1.webp';
import TemplateGlobo from '../assets/img/portfolio/template-globo.webp';
import Pegasus1 from '../assets/img/portfolio/pegasus1.webp';
import Pegasus2 from '../assets/img/portfolio/pegasus2.webp';
import PopCorn1 from '../assets/img/portfolio/popcorn1.webp';
import PopCorn2 from '../assets/img/portfolio/popcorn2.webp';
import EleicoesST from '../assets/img/portfolio/eleicoes-st.webp';
import EleicoesPT from '../assets/img/portfolio/eleicoes-pt.webp';
import Burguer1 from '../assets/img/portfolio/burguer1.webp';
import Burguer2 from '../assets/img/portfolio/burguer2.webp';
import Java from '../assets/img/portfolio/java.webp';
import Spring from '../assets/img/portfolio/spring.webp';
import Python from '../assets/img/portfolio/python.webp';


  /*Destaque*/
  export const DestaqueData = [
    {
      id: 1,
      title: "Programa para cálculo de custo de produtos",
      subtitle: "Java/Spring",
      img: Spring,
      preview: "",
      description: "O Sistema de Cálculo de Preços é uma aplicação desenvolvida em Java, utilizando o framework Spring e o banco de dados MySQL. O objetivo do sistema é automatizar o processo de determinação de preços de venda de produtos, levando em consideração os custos de produção. A aplicação é executada em contêineres Docker, proporcionando uma fácil implantação e escalabilidade.",
      date: "Março 2024",
      technology: "JAVA, SPRING, MYSQL",
      url: "",
      github: ""
    },
    {
      id: 2,
      title: "Eleições 2022 - 2º Turno",
      subtitle: "Eleições presidenciais",
      img: EleicoesST,
      img2: '',
      preview: "Apuração em tempo real da eleição presidencial do segundo turno - 2022",
      description: "Portal onde apresenta estatísticas dos dois candidatos a presidência da República do dia 30/10/2022, consumindo API do TSE.",
      date: "Outubro 2022",
      technology: "React, Javascript, HTML e CSS",
      url: "https://eleicoes2022-segundo-turno.vercel.app/",
      github: "https://github.com/leonanthomaz/eleicoes2022-segundoTurno"
    },
    {
      id: 3,
      title: "PopCorn",
      subtitle: "React JS",
      img: PopCorn1,
      img2: PopCorn2,
      preview: "Sistema de consultas de filmes com comentários",
      description: "Catálogo de filmes, consumindo API TMDB com sistema de comentários com banco de dados MongoDB.",
      date: "Agosto 2022",
      technology: "React, Javascript, HTML e CSS (Styled-Components) e MongoDB",
      url: "https://popcorn-two.vercel.app/",
      github: "https://github.com/leonanthomaz/popcorn"
    },
  ];

  /*Java*/
  export const JavaData = [
    {
      id: 1,
      title: "Aplicação Socket",
      subtitle: "Modelo de comunicação socket",
      img: Java,
      preview: "",
      description: "Aplicação Socket, utilizando Java 8, protocolo TCP/IP e Threads (servidor gerencia múltiplos clientes de forma concorrente, permitindo operações assíncronas e independentes). Arquitetura escalável e eficiente para interações simultâneas com o servidor",
      date: "Fevereiro 2024",
      technology: "HTML e SASS",
      url: "",
      github: "https://github.com/leonanthomaz/java_socket"
    }
  ];

  /*Spring*/
  export const SpringData = [
    {
      id: 1,
      title: "Chicken House",
      subtitle: "Java/Spring",
      img: Spring,
      preview: "",
      description: "",
      date: "Em andamento",
      technology: "JAVA, SPRING, MYSQL",
      url: "",
      github: ""
    },
    {
      id: 2,
      title: "Programa para cálculo de custo de produtos",
      subtitle: "Java/Spring",
      img: Spring,
      preview: "",
      description: "O Sistema de Cálculo de Preços é uma aplicação desenvolvida em Java, utilizando o framework Spring e o banco de dados MySQL. O objetivo do sistema é automatizar o processo de determinação de preços de venda de produtos, levando em consideração os custos de produção. A aplicação é executada em contêineres Docker, proporcionando uma fácil implantação e escalabilidade.",
      date: "Março 2024",
      technology: "JAVA, SPRING, MYSQL",
      url: "",
      github: ""
    },
  ];

  /*REACT*/
  export const ReactData = [
    {
      id: 1,
      title: "Eleições 2022 - 2º Turno",
      subtitle: "Eleições presidenciais",
      img: EleicoesST,
      img2: '',
      preview: "Apuração em tempo real da eleição presidencial do segundo turno - 2022",
      description: "Portal onde apresenta estatísticas dos dois candidatos a presidência da República do dia 30/10/2022, consumindo API do TSE.",
      date: "Outubro 2022",
      technology: "React, Javascript, HTML e CSS",
      url: "https://eleicoes2022-segundo-turno.vercel.app/",
      github: "https://github.com/leonanthomaz/eleicoes2022-segundoTurno"
    },
    {
      id: 2,
      title: "Eleições 2022 - 1º Turno",
      subtitle: "Eleições presidenciais",
      img: EleicoesPT,
      img2: '',
      preview: "Apuração em tempo real da eleição presidencial do primeiro turno - 2022",
      description: "Portal onde apresenta estatísticas dos candidatos a presidência da República do dia 02/10/2022, consumindo API do TSE.",
      date: "Outubro 2022",
      technology: "React, Javascript, HTML e CSS",
      url: "https://eleicoes2022-primeiro-turno.vercel.app/",
      github: "https://github.com/leonanthomaz/eleicoes2022-primeiroTurno"
    },
    {
      id: 3,
      title: "PopCorn",
      subtitle: "Catálogo de Filmes ",
      img: PopCorn1,
      img2: PopCorn2,
      preview: "Sistema de consultas de filmes com comentários",
      description: "Catálogo de filmes, consumindo API TMDB com sistema de comentários com banco de dados MongoDB.",
      date: "Agosto 2022",
      technology: "React, Javascript, HTML e CSS (Styled-Components) e MongoDB",
      url: "https://popcorn-two.vercel.app/",
      github: "https://github.com/leonanthomaz/popcorn"
    },
    {
      id: 4,
      title: "Pégasus",
      subtitle: "Rede Social (Estudos)",
      img: Pegasus1,
      img2: Pegasus2,
      preview: "Rede social desenvolvida em React, Node e MongoDB",
      description: "Inspirado em aulas online, construí esta rede social em MERN (Mongo, Express, React e Node). Utilizo context api e reducer para login e renderização das informações do usuário e MongoDB como banco de dados.",
      date: "Julho 2022",
      technology: "MERN (Mongo, Express, React e Node)",
      url: "",
      github: "https://github.com/leonanthomaz/pegasus",
    },
    {
      id: 5,
      title: "Brasil Covid",
      subtitle: "API de estatísticas da Covid no Brasil",
      img: BrasilCovid1,
      img2: BrasilCovid2,
      preview: "API de informações sobre a Covid-19",
      description: "API contendo os números da pandemia do Covid-19 por Estados brasileiros.",
      date: "Junho 2021",
      technology: "React, JavaScript, CSS e HTML5",
      url: "https://brasilcovid.herokuapp.com/",
      github: "https://github.com/leonanthomaz/BrasilCovid"
    },
    {
      id: 6,
      title: "Saturno",
      subtitle: "ChatBox (Estudos)",
      img: Saturno1,
      img2: Saturno2,
      preview: "Aplicativo chat, desenvolvido em React",
      description: "Projeto inspirado da aula online do professor Bonieky Lacerda. Neste desafio, pude me inteirar mais sobre a biblioteca React, principalmente sobre os Hooks e Props.",
      date: "Setembro 2021",
      technology: "React, Firebase",
      url: "",
      github: "https://github.com/leonanthomaz/Saturno"
    },
  ];

  /*Python*/
  export const PythonData = [
    {
      id: 1,
      title: "Projeto Tainá",
      subtitle: "Inteligência Artificial",
      img: Python,
      description: "Projeto de um sistema de inteligência artificial chamada Tainá, criada em Python e utilizando libs como Google Search, Wikipedia, Youtube, entre outros.",
      date: "Janeiro 2024",
      technology: "Python",
      url: "",
      github: "https://github.com/leonanthomaz/projeto_taina"
    },
  ];

  /*PHP*/
  export const PHPData = [
    {
      id: 1,
      title: "Projeto Hamburgueria",
      subtitle: "E-commerce",
      img: Burguer1,
      img2: Burguer2,
      description: "E-commerce virtual, em PHP. Utilizo um sistema em 3 pilares (rota, classe e método), onde a rota é controlada pela URL (miniframework similar ao Laravel). Sistema possui cadastro com confirmação por email, login com redes sociais (Google e Facebook), carrinho de compras, checkout e envio de pedidos ao banco, com disparo automático de mensagem para o whatsapp do cliente. Sistema também possui geração de QRCode do pix com valor e dados do usuário. Projeto freelancer em construção.",
      date: "Fevereiro 2023",
      technology: "PHP, JQuery, Bootstrap",
      url: "",
      github: "https://github.com/leonanthomaz/hamburgueria"
    },
    {
      id: 2,
      title: "Casa do Salgado",
      subtitle: "E-commerce ",
      img: CasaDoSalgado1,
      img2: CasaDoSalgado2,
      description: "E-commerce virtual, desenvolvido em PHP com base de dados MySQL, para o seguimento comercial, onde o usuário tem a disposição o cardápio virtual dividido por página. Ao abrir sessão, o cliente tem a disposição o carrinho de compras bloqueado pelas condições de horário de funcionamento e realização de login, área privada, onde pode alterar seus dados de maneira completa, redefinição de senha e exclusão de conta. O cliente ainda pode, ao finalizar a compra, acompanhar o status da sua entrega em tempo real. O projeto ainda conta com área administrativa, onde o administrador com acesso tem total controle de todo o site, podendo manipular dados de clientes e produtos, bem como alterar o status da entrega, espelhado diretamente para o cliente.",
      date: "Dezembro 2021",
      technology: "HTML, PHP, JavaScript, Bootstrap, CSS e MySQL",
      url: "https://casadosalgadoabv.000webhostapp.com/",
      github: "https://github.com/leonanthomaz/CasaDoSalgado"
    },
  ];

  /*WEB*/
  export const WEBData = [
    {
      id: 1,
      title: "Design Galeria",
      subtitle: "Galeria de fotos (Estudos)",
      img: TemplateGaleria,
      img2: TemplateGaleria,
      preview: "Design de uma galeria de fotos",
      description: "Design de uma galeria de fotos, utilizando HTML e estilização em SASS.",
      date: "Junho 2022",
      technology: "HTML e SASS",
      url: "",
      github: "https://github.com/leonanthomaz/GaleriaSass"
    },
    {
      id: 2,
      title: "Design Nike",
      subtitle: "Card promocional (Estudos)",
      img: TemplateNike,
      img2: TemplateNike,
      preview: "Desenvolvido em HTML e CSS",
      description: "Pequeno projeto de um card promocional.",
      date: "Maio 2022",
      technology: "HTML e CSS",
      url: "",
      github: "https://github.com/leonanthomaz/Template-Nike"
    },
    {
      id: 3,
      title: "Design GloboPlay",
      subtitle: "Desafio - Card Promocional ",
      img: TemplateGlobo,
      img2: TemplateGlobo,
      preview: "Implementado em HTML e CSS",
      description: "Desafio de implementação de um card promocional da GloboPlay. Desenvolvido em HTML, CSS e estruturas com a ferramenta Figma.",
      date: "Maio 2022",
      technology: "HTML e CSS",
      url: "",
      github: "https://github.com/leonanthomaz/Template-GloboPlay"
    },
  ];


