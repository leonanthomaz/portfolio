import PopCorn1 from '../assets/img/portfolio/popcorn1.webp';
import PopCorn2 from '../assets/img/portfolio/popcorn2.webp';
import EleicoesST from '../assets/img/portfolio/eleicoes-st.webp';
import EleicoesPT from '../assets/img/portfolio/eleicoes-pt.webp';
import Java from '../assets/img/portfolio/java.webp';
import Spring from '../assets/img/portfolio/spring.webp';
import Python from '../assets/img/portfolio/python.webp';


  /*Destaque*/
  export const DestaqueData = [
    {
      id: 1,
      title: "Cálculo de custos para comécio",
      subtitle: "Java/Spring",
      img: Spring,
      preview: "",
      description: "O Sistema de Cálculo de Preços é uma aplicação desenvolvida em Java, utilizando o framework Spring e o banco de dados MySQL. O objetivo do sistema é automatizar o processo de determinação de preços de venda de produtos, levando em consideração os custos de produção. A aplicação é executada em contêineres Docker, proporcionando uma fácil implantação e escalabilidade.",
      date: "Março 2024",
      technology: "JAVA, SPRING, MYSQL",
      url: "",
      github: "https://github.com/leonanthomaz/spring-calculadora-custos-produto"
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
    {
      id: 4,
      title: "Gerador de currículos em PDF",
      subtitle: "Java/Spring",
      img: Spring,
      preview: "",
      description: "Backend desenvolvido em Java com Spring para fornecer uma API RESTful que gera currículos em PDF a partir dos dados do usuário. Utiliza o Spring Data JPA para acesso aos dados, iText para geração de PDFs, e outras bibliotecas como Lombok, Jackson, JUnit e Mockito para auxiliar no desenvolvimento e testes.",
      date: "Março 2024",
      technology: "JAVA, SPRING, MYSQL",
      url: "",
      github: "https://github.com/leonanthomaz/spring-calculadora-custos-produto"
    }
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
      github: "https://github.com/leonanthomaz/java-socket"
    }
  ];

  /*Spring*/
  export const SpringData = [
    {
      id: 1,
      title: "Chicken House",
      subtitle: "Em construção",
      img: Spring,
      preview: "",
      description: "Ecommerce para delivery",
      date: "Em andamento",
      technology: "JAVA, SPRING, MYSQL",
      url: "",
      github: "https://github.com/leonanthomaz/chickenhouse"
    },
    {
      id: 2,
      title: "Cálculo de custos para comécio",
      subtitle: "Java/Spring",
      img: Spring,
      preview: "",
      description: "O Sistema de Cálculo de Preços é uma aplicação desenvolvida em Java, utilizando o framework Spring e o banco de dados MySQL. O objetivo do sistema é automatizar o processo de determinação de preços de venda de produtos, levando em consideração os custos de produção. A aplicação é executada em contêineres Docker, proporcionando uma fácil implantação e escalabilidade.",
      date: "Março 2024",
      technology: "JAVA, SPRING, MYSQL",
      url: "",
      github: "https://github.com/leonanthomaz/spring-calculadora-custos-produto"
    },
    {
      id: 3,
      title: "Gerador de currículos em PDF",
      subtitle: "Java/Spring",
      img: Spring,
      preview: "",
      description: "Backend desenvolvido em Java com Spring para fornecer uma API RESTful que gera currículos em PDF a partir dos dados do usuário. Utiliza o Spring Data JPA para acesso aos dados, iText para geração de PDFs, e outras bibliotecas como Lombok, Jackson, JUnit e Mockito para auxiliar no desenvolvimento e testes.",
      date: "Março 2024",
      technology: "JAVA, SPRING, MYSQL",
      url: "",
      github: "https://github.com/leonanthomaz/spring-calculadora-custos-produto"
    }
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
    // {
    //   id: 4,
    //   title: "Pégasus",
    //   subtitle: "Rede Social (Estudos)",
    //   img: Pegasus1,
    //   img2: Pegasus2,
    //   preview: "Rede social desenvolvida em React, Node e MongoDB",
    //   description: "Inspirado em aulas online, construí esta rede social em MERN (Mongo, Express, React e Node). Utilizo context api e reducer para login e renderização das informações do usuário e MongoDB como banco de dados.",
    //   date: "Julho 2022",
    //   technology: "MERN (Mongo, Express, React e Node)",
    //   url: "",
    //   github: "https://github.com/leonanthomaz/pegasus",
    // },
    // {
    //   id: 5,
    //   title: "Brasil Covid",
    //   subtitle: "API de estatísticas da Covid no Brasil",
    //   img: BrasilCovid1,
    //   img2: BrasilCovid2,
    //   preview: "API de informações sobre a Covid-19",
    //   description: "API contendo os números da pandemia do Covid-19 por Estados brasileiros.",
    //   date: "Junho 2021",
    //   technology: "React, JavaScript, CSS e HTML5",
    //   url: "https://brasilcovid.herokuapp.com/",
    //   github: "https://github.com/leonanthomaz/BrasilCovid"
    // },
    // {
    //   id: 6,
    //   title: "Saturno",
    //   subtitle: "ChatBox (Estudos)",
    //   img: Saturno1,
    //   img2: Saturno2,
    //   preview: "Aplicativo chat, desenvolvido em React",
    //   description: "Projeto inspirado da aula online do professor Bonieky Lacerda. Neste desafio, pude me inteirar mais sobre a biblioteca React, principalmente sobre os Hooks e Props.",
    //   date: "Setembro 2021",
    //   technology: "React, Firebase",
    //   url: "",
    //   github: "https://github.com/leonanthomaz/Saturno"
    // },
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

