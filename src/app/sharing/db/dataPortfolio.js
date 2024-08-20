import PopCorn1 from '../assets/img/portfolio/popcorn1.webp';
import PopCorn2 from '../assets/img/portfolio/popcorn2.webp';
import EleicoesST from '../assets/img/portfolio/eleicoes-st.webp';
import EleicoesPT from '../assets/img/portfolio/eleicoes-pt.webp';
import Java from '../assets/img/portfolio/java.webp';
import Spring from '../assets/img/portfolio/spring.webp';
import Python from '../assets/img/portfolio/python.webp';
// import Mobile from '../assets/img/portfolio/mobile.jpg';


  /*Destaque*/
  export const DestaqueData = [
    {
      id: 1,
      title: "Ponto de Venda",
      subtitle: "Java/Spring e React",
      img: Spring,
      preview: "Sistema de ponto de venda criado com Java/Spring",
      description: "O Ponto de Venda (PDV) é uma aplicação web desenvolvida para facilitar o gerenciamento de vendas em estabelecimentos comerciais. Com uma interface intuitiva e funcionalidades essenciais, como registro de vendas, adição de produtos ao carrinho, recebimento de pagamentos e fechamento de caixa, o PDV oferece uma experiência simplificada tanto para operadores quanto para clientes. Utilizando tecnologias modernas como Java Spring Boot para o backend e React.js para o frontend, o PDV proporciona uma solução eficiente e escalável para negócios de diversos segmentos.",
      date: "Abril 2024",
      technology: "JAVA, SPRING, React JS, MYSQL",
      url: "",
      github: "https://github.com/leonanthomaz/pdv"
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
      preview: "Aplicação básica, apresentando os princípios da tecnologia Socket.",
      description: "Aplicação Socket, utilizando Java 8, protocolo TCP/IP e Threads (servidor gerencia múltiplos clientes de forma concorrente, permitindo operações assíncronas e independentes). Arquitetura escalável e eficiente para interações simultâneas com o servidor",
      date: "Fevereiro 2024",
      technology: "HTML e SASS",
      url: "",
      github: "https://github.com/leonanthomaz/java-socket"
    },
    {
      id: 2,
      title: "Ponto de Venda",
      subtitle: "Java/Spring e React",
      img: Spring,
      preview: "Sistema de ponto de venda criado com Java/Spring",
      description: "O Ponto de Venda (PDV) é uma aplicação web desenvolvida para facilitar o gerenciamento de vendas em estabelecimentos comerciais. Com uma interface intuitiva e funcionalidades essenciais, como registro de vendas, adição de produtos ao carrinho, recebimento de pagamentos e fechamento de caixa, o PDV oferece uma experiência simplificada tanto para operadores quanto para clientes. Utilizando tecnologias modernas como Java Spring Boot para o backend e React.js para o frontend, o PDV proporciona uma solução eficiente e escalável para negócios de diversos segmentos.",
      date: "Abril 2024",
      technology: "Java, Spring, React JS, MYSQL",
      url: "",
      github: "https://github.com/leonanthomaz/pdv"
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
      github: "https://github.com/leonanthomaz/projeto-taina"
    },
  ];

  /*Python*/
  export const MobileData = [
    // {
    //   id: 1,
    //   title: "Mobile",
    //   subtitle: "Mobile",
    //   img: Mobile,
    //   description: "Projeto de um sistema de inteligência artificial chamada Tainá, criada em Python e utilizando libs como Google Search, Wikipedia, Youtube, entre outros.",
    //   date: "Janeiro 2024",
    //   technology: "Python",
    //   url: "",
    //   github: "https://github.com/leonanthomaz/projeto-taina"
    // },
  ];
