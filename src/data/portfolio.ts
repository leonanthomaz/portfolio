import popCorn1 from '@/assets/img/portfolio/popcorn1.webp';
import popCorn2 from '@/assets/img/portfolio/popcorn2.webp';
import eleicoesST from '@/assets/img/portfolio/eleicoes-st.webp';
import eleicoesST2 from '@/assets/img/portfolio/eleicoes-st2.webp';
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
      description: "Aplicação web para gerenciar vendas com Java e React.",
      img: springImg,
      date: "Abril 2024",
      technology: "Java, Spring, React, MySQL",
      github: "https://github.com/leonanthomaz/pdv",
      categories: ["destaque", "java"]
    },
    {
      id: 2,
      title: "Eleições 2022 - 2º Turno",
      subtitle: "Eleições presidenciais",
      description: "Portal com estatísticas dos candidatos, consumindo API do TSE.",
      img: eleicoesST,
      img2: eleicoesST2,
      date: "Outubro 2022",
      technology: "React, JavaScript, HTML, CSS",
      url: "https://eleicoes2022-segundo-turno.vercel.app/",
      github: "https://github.com/leonanthomaz/eleicoes2022-segundoTurno",
    },
    {
      id: 3,
      title: "PopCorn",
      subtitle: "Catálogo de Filmes",
      description: "Catálogo de filmes com API TMDB e sistema de comentários.",
      img: popCorn1,
      img2: popCorn2,
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
      description: "Aplicação com Java 8, TCP/IP e Threads para múltiplos clientes.",
      img: javaImg,
      date: "Fevereiro 2024",
      technology: "Java, Sockets",
      github: "https://github.com/leonanthomaz/java-socket",
    },
    {
      id: 2,
      title: "Ponto de Venda",
      subtitle: "Java/Spring e React",
      description: "Gerenciamento de vendas com backend em Java e React no frontend.",
      img: springImg,
      date: "Abril 2024",
      technology: "Java, Spring, React, MySQL",
      github: "https://github.com/leonanthomaz/pdv",
      categories: ["destaque", "java"]
    },
  ],

  react: [
    {
      id: 1,
      title: "Eleições 2022 - 1º Turno",
      subtitle: "Eleições presidenciais",
      description: "Portal com estatísticas dos candidatos no 1º turno.",
      img: eleicoesPT,
      date: "Outubro 2022",
      technology: "React, JavaScript, HTML, CSS",
      url: "https://eleicoes2022-primeiro-turno.vercel.app/",
      github: "https://github.com/leonanthomaz/eleicoes2022-primeiroTurno",
    },
    {
      id: 2,
      title: "Eleições 2022 - 2º Turno",
      subtitle: "Eleições presidenciais",
      description: "Estatísticas dos candidatos com dados da API do TSE.",
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
      description: "Catálogo de filmes com API TMDB e comentários no MongoDB.",
      img: popCorn1,
      img2: popCorn2,
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
      description: "Sistema de IA com Google Search, Wikipedia e YouTube.",
      img: pythonImg,
      date: "Janeiro 2024",
      technology: "Python",
      github: "https://github.com/leonanthomaz/projeto-taina",
    },
    // {
    //   id: 2,
    //   title: "Automatizador de Tarefas Corporativas",
    //   subtitle: "Automação de processos administrativos",
    //   description:
    //     "Automação de tarefas repetitivas em empresas, como envio de e-mails, preenchimento de planilhas e geração de relatórios com base em arquivos Excel.",
    //   img: pythonImg,
    //   date: "Fevereiro 2024",
    //   technology: "Python, Pandas, OpenPyXL",
    //   url: "https://automatizador-tarefas-fake.com",
    //   github: "https://github.com/leonanthomaz/automatizador-tarefas",
    // },
    // {
    //   id: 3,
    //   title: "Web Scraper de Ofertas",
    //   subtitle: "Buscador de promoções online",
    //   description:
    //     "Ferramenta que rastreia promoções em sites de e-commerce, envia alertas personalizados e salva os dados em um banco de dados para consulta futura.",
    //   img: pythonImg,
    //   date: "Abril 2024",
    //   technology: "Python, BeautifulSoup, SQLite",
    //   url: "https://web-scraper-ofertas-fake.com",
    //   github: "https://github.com/leonanthomaz/web-scraper-ofertas",
    // },
  ],

  biomedicina: [
    // {
    //   id: 1,
    //   title: "Análise de Dados Biomédicos",
    //   subtitle: "Estudo de dados hospitalares",
    //   description:
    //     "Projeto focado em explorar dados de saúde pública para identificar padrões de diagnóstico e tratamento utilizando Pandas e Matplotlib.",
    //   img: pythonImg,
    //   date: "Março 2024",
    //   technology: "Python, Pandas, Matplotlib",
    //   url: "https://biomedicina-dados-fake.com",
    //   github: "https://github.com/leonanthomaz/analise-biomedica",
    // },
    // {
    //   id: 2,
    //   title: "Simulação de Epidemias",
    //   subtitle: "Modelo preditivo",
    //   description:
    //     "Aplicação que simula a disseminação de doenças infecciosas em populações, com base em modelos SIR e gráficos interativos.",
    //   img: pythonImg,
    //   date: "Maio 2024",
    //   technology: "Python, NumPy, Plotly",
    //   url: "https://simulacao-epidemias-fake.com",
    //   github: "https://github.com/leonanthomaz/simulacao-epidemias",
    // },
    // {
    //   id: 3,
    //   title: "Automação Laboratorial",
    //   subtitle: "Controle de equipamentos",
    //   description:
    //     "Sistema que automatiza o controle de equipamentos laboratoriais e registra amostras em um banco de dados.",
    //   img: pythonImg,
    //   date: "Fevereiro 2024",
    //   technology: "Python, SQLite",
    //   url: "https://automacao-laboratorial-fake.com",
    //   github: "https://github.com/leonanthomaz/automacao-laboratorial",
    // },
  ],
};
