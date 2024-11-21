import img1 from '@/assets/img/portfolio/popcorn1.webp';
import img2 from '@/assets/img/portfolio/popcorn2.webp';
import eleicoesST from '@/assets/img/portfolio/eleicoes-st.webp';
import eleicoesPT from '@/assets/img/portfolio/eleicoes-pt.webp';
import javaImg from '@/assets/img/portfolio/java.webp';
import springImg from '@/assets/img/portfolio/spring.webp';
import pythonImg from '@/assets/img/portfolio/python.webp';

export interface Projeto {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  img?: string;
  img2?: string;
  date: string;
  technology?: string;
  url?: string;
  github?: string;
  status?: string;
}

export const projetosData = {
  destaque: [
    {
      id: 1,
      title: "Ponto de Venda",
      subtitle: "Java/Spring e React",
      description:
        "O Ponto de Venda (PDV) é uma aplicação web desenvolvida para facilitar o gerenciamento de vendas em estabelecimentos comerciais. Utilizando tecnologias modernas como Java Spring Boot para o backend e React.js para o frontend, o PDV oferece uma solução eficiente e escalável para negócios de diversos segmentos.",
      img: springImg,
      date: "Abril 2024",
      technology: "Java, Spring, React, MySQL",
      github: "https://github.com/leonanthomaz/pdv",
    },
    {
      id: 2,
      title: "Eleições 2022 - 2º Turno",
      subtitle: "Eleições presidenciais",
      description:
        "Portal onde apresenta estatísticas dos dois candidatos à presidência da República no dia 30/10/2022, consumindo API do TSE.",
      img: eleicoesST,
      date: "Outubro 2022",
      technology: "React, JavaScript, HTML, CSS",
      url: "https://eleicoes2022-segundo-turno.vercel.app/",
      github: "https://github.com/leonanthomaz/eleicoes2022-segundoTurno",
    },
    {
      id: 3,
      title: "PopCorn",
      subtitle: "Catálogo de Filmes",
      description:
        "Catálogo de filmes consumindo a API TMDB, com sistema de comentários armazenados no MongoDB.",
      img: img1,
      img2: img2,
      date: "Agosto 2022",
      technology: "React, JavaScript, MongoDB, Styled-Components",
      url: "https://popcorn-two.vercel.app/",
      github: "https://github.com/leonanthomaz/popcorn",
    },
  ],

  java: [
    {
      id: 1,
      title: "Aplicação Socket",
      subtitle: "Modelo de comunicação socket",
      description:
        "Aplicação básica que demonstra os princípios da tecnologia Socket, utilizando Java 8, protocolo TCP/IP e Threads para gerenciar múltiplos clientes de forma concorrente.",
      img: javaImg,
      date: "Fevereiro 2024",
      technology: "Java, Sockets",
      github: "https://github.com/leonanthomaz/java-socket",
    },
    {
      id: 2,
      title: "Ponto de Venda",
      subtitle: "Java/Spring e React",
      description:
        "O Ponto de Venda (PDV) é uma aplicação web desenvolvida para facilitar o gerenciamento de vendas em estabelecimentos comerciais.",
      img: springImg,
      date: "Abril 2024",
      technology: "Java, Spring, React, MySQL",
      github: "https://github.com/leonanthomaz/pdv",
    },
  ],

  react: [
    {
      id: 1,
      title: "Eleições 2022 - 2º Turno",
      subtitle: "Eleições presidenciais",
      description:
        "Portal onde apresenta estatísticas dos dois candidatos à presidência da República no dia 30/10/2022, consumindo API do TSE.",
      img: eleicoesST,
      date: "Outubro 2022",
      technology: "React, JavaScript, HTML, CSS",
      url: "https://eleicoes2022-segundo-turno.vercel.app/",
      github: "https://github.com/leonanthomaz/eleicoes2022-segundoTurno",
    },
    {
      id: 2,
      title: "Eleições 2022 - 1º Turno",
      subtitle: "Eleições presidenciais",
      description:
        "Portal onde apresenta estatísticas dos candidatos à presidência da República no dia 02/10/2022, consumindo API do TSE.",
      img: eleicoesPT,
      date: "Outubro 2022",
      technology: "React, JavaScript, HTML, CSS",
      url: "https://eleicoes2022-primeiro-turno.vercel.app/",
      github: "https://github.com/leonanthomaz/eleicoes2022-primeiroTurno",
    },
    {
      id: 3,
      title: "PopCorn",
      subtitle: "Catálogo de Filmes",
      description:
        "Catálogo de filmes consumindo a API TMDB, com sistema de comentários armazenados no MongoDB.",
      img: img1,
      img2: img2,
      date: "Agosto 2022",
      technology: "React, JavaScript, MongoDB, Styled-Components",
      url: "https://popcorn-two.vercel.app/",
      github: "https://github.com/leonanthomaz/popcorn",
    },
  ],

  python: [
    {
      id: 1,
      title: "Projeto Tainá",
      subtitle: "Inteligência Artificial",
      description:
        "Sistema de inteligência artificial criado em Python utilizando bibliotecas como Google Search, Wikipedia e YouTube.",
      img: pythonImg,
      date: "Janeiro 2024",
      technology: "Python",
      github: "https://github.com/leonanthomaz/projeto-taina",
    },
  ],

  biomedicina: [
    {
      id: 1,
      title: "Projeto Tainá",
      subtitle: "Inteligência Artificial",
      description:
        "Sistema de inteligência artificial criado em Python utilizando bibliotecas como Google Search, Wikipedia e YouTube.",
      img: pythonImg,
      date: "Janeiro 2024",
      technology: "Python",
      github: "https://github.com/leonanthomaz/projeto-taina",
    },
  ],
};
