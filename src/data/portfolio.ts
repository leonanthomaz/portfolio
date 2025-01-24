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
      title: "LabAnalyzer",
      subtitle: "API e Análise de Dados",
      description: "LabAnalyzer é uma aplicação web desenvolvida para facilitar a gestão e análise de dados biomédicos. O sistema permite o cadastro de pacientes, exames e tipos de exames, possibilitando o gerenciamento eficaz de informações clínicas.",
      img: pythonImg,
      date: "Dezembro 2024",
      technology: "Python, Flask, NumPy, pandas, Matplotlib, Seaborn, fpdf",
      github: "https://github.com/leonanthomaz/lab_analyzer",
    },
    {
      id: 2,
      title: "Análise - Câncer no Brasil",
      subtitle: "Análise de Dados",
      description: "Análise interativa de dados sobre diagnósticos de câncer no Brasil (2000-2019), com visualizações sobre distribuição por faixa etária, gênero e frequência de doenças. Baseado em dados do Kaggle.",
      img: pythonImg,
      date: "Dezembro 2024",
      technology: "Python, Flask, pandas, plotly, kaggle",
      github: "https://github.com/leonanthomaz/analise_dados_cancer_br",
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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

  // biomedicina: [
  //   {
  //     id: 1,
  //     title: "LabAnalyzer",
  //     subtitle: "API e Análise de Dados",
  //     description: "LabAnalyzer é uma aplicação web desenvolvida para facilitar a gestão e análise de dados biomédicos. O sistema permite o cadastro de pacientes, exames e tipos de exames, possibilitando o gerenciamento eficaz de informações clínicas.",
  //     img: pythonImg,
  //     date: "Dezembro 2024",
  //     technology: "Python, Flask, NumPy, pandas, Matplotlib, Seaborn, fpdf",
  //     github: "https://github.com/leonanthomaz/lab_analyzer",
  //   },
  //   {
  //     id: 2,
  //     title: "Análise - Câncer no Brasil",
  //     subtitle: "Análise de Dados",
  //     description: "Análise interativa de dados sobre diagnósticos de câncer no Brasil (2000-2019), com visualizações sobre distribuição por faixa etária, gênero e frequência de doenças. Baseado em dados do Kaggle.",
  //     img: pythonImg,
  //     date: "Dezembro 2024",
  //     technology: "Python, Flask, pandas, plotly, kaggle",
  //     github: "https://github.com/leonanthomaz/analise_dados_cancer_br",
  //   }
  //   // {
  //   //   id: 1,
  //   //   title: "Análise de Dados Biomédicos",
  //   //   subtitle: "Estudo de dados hospitalares",
  //   //   description:
  //   //     "Projeto focado em explorar dados de saúde pública para identificar padrões de diagnóstico e tratamento utilizando Pandas e Matplotlib.",
  //   //   img: pythonImg,
  //   //   date: "Março 2024",
  //   //   technology: "Python, Pandas, Matplotlib",
  //   //   url: "https://biomedicina-dados-fake.com",
  //   //   github: "https://github.com/leonanthomaz/analise-biomedica",
  //   // },
  //   // {
  //   //   id: 2,
  //   //   title: "Simulação de Epidemias",
  //   //   subtitle: "Modelo preditivo",
  //   //   description:
  //   //     "Aplicação que simula a disseminação de doenças infecciosas em populações, com base em modelos SIR e gráficos interativos.",
  //   //   img: pythonImg,
  //   //   date: "Maio 2024",
  //   //   technology: "Python, NumPy, Plotly",
  //   //   url: "https://simulacao-epidemias-fake.com",
  //   //   github: "https://github.com/leonanthomaz/simulacao-epidemias",
  //   // },
  //   // {
  //   //   id: 3,
  //   //   title: "Automação Laboratorial",
  //   //   subtitle: "Controle de equipamentos",
  //   //   description:
  //   //     "Sistema que automatiza o controle de equipamentos laboratoriais e registra amostras em um banco de dados.",
  //   //   img: pythonImg,
  //   //   date: "Fevereiro 2024",
  //   //   technology: "Python, SQLite",
  //   //   url: "https://automacao-laboratorial-fake.com",
  //   //   github: "https://github.com/leonanthomaz/automacao-laboratorial",
  //   // },
  // ],

  dados: [
    {
      id: 1,
      title: "LabAnalyzer",
      subtitle: "API e Análise de Dados",
      description: "LabAnalyzer é uma aplicação web desenvolvida para facilitar a gestão e análise de dados biomédicos. O sistema permite o cadastro de pacientes, exames e tipos de exames, possibilitando o gerenciamento eficaz de informações clínicas.",
      img: pythonImg,
      date: "Dezembro 2024",
      technology: "Python, Flask, NumPy, pandas, Matplotlib, Seaborn, fpdf",
      github: "https://github.com/leonanthomaz/lab_analyzer",
    },
    {
      id: 2,
      title: "Análise - Câncer no Brasil",
      subtitle: "Análise de Dados",
      description: "Análise interativa de dados sobre diagnósticos de câncer no Brasil (2000-2019), com visualizações sobre distribuição por faixa etária, gênero e frequência de doenças. Baseado em dados do Kaggle.",
      img: pythonImg,
      date: "Dezembro 2024",
      technology: "Python, Flask, pandas, plotly, kaggle",
      github: "https://github.com/leonanthomaz/analise_dados_cancer_br",
    }
  ],

  python: [
    {
      id: 1,
      title: "Tainá - Sistema de Inteligência Artificial em Python",
      subtitle: "Inteligência Artificial",
      description: "Tainá é um sistema de IA criado em Python 3.13 que utiliza reconhecimento de voz e diversas bibliotecas para fornecer respostas e executar comandos através de APIs.",
      img: pythonImg,
      date: "Janeiro 2024",
      technology: "Python, Google Search API, ChatGPT - Openai API, Wikipedia API, YouTube API (yt_dlp), Selenium, gTTS, dotenv, SpeechRecognition, pygame",
      github: "https://github.com/leonanthomaz/projeto-taina",
    },
    {
      id: 2,
      title: "Envio de E-mails Personalizados",
      subtitle: "Automação de E-mails",
      description: "Automatiza o envio de e-mails personalizados com base em dados de um arquivo Excel.",
      img: pythonImg,
      date: "Outubro 2024",
      technology: "Python, pandas, openpyxl, smtplib, email.mime",
      github: "https://github.com/leonanthomaz/bot_envio_emails",
    },
    {
      id: 3,
      title: "Projeto de CRUD com Flask e MySQL",
      subtitle: "API RESTful",
      description: "API para operações CRUD em um banco de dados MySQL, gerenciando registros de médicos.",
      img: pythonImg,
      date: "Outubro 2024",
      technology: "Python, Flask, Flask-SQLAlchemy, MySQL",
      github: "https://github.com/leonanthomaz/crud_flask",
    },
    {
      id: 4,
      title: "Projeto de Visualização de Vendas com Flask",
      subtitle: "Visualização de Dados",
      description: "Aplicação web para visualizar dados de vendas a partir de um arquivo CSV, com gráficos interativos.",
      img: pythonImg,
      date: "Novembro 2024",
      technology: "Python, Flask, matplotlib, pandas, numpy, seaborn",
      github: "https://github.com/leonanthomaz/fundamentos_analise_de_dados",
    },
    {
      id: 5,
      title: "YouTube Music Player",
      subtitle: "Player de Música",
      description: "Player de música que baixa e reproduz músicas do YouTube.",
      img: pythonImg,
      date: "Dezembro 2024",
      technology: "Python, yt-dlp, pygame",
      github: "https://github.com/leonanthomaz/music_player_py",
    },
    {
      id: 1,
      title: "LabAnalyzer",
      subtitle: "API e Análise de Dados",
      description: "LabAnalyzer é uma aplicação web desenvolvida para facilitar a gestão e análise de dados biomédicos. O sistema permite o cadastro de pacientes, exames e tipos de exames, possibilitando o gerenciamento eficaz de informações clínicas.",
      img: pythonImg,
      date: "Dezembro 2024",
      technology: "Python, Flask, NumPy, pandas, Matplotlib, Seaborn, fpdf",
      github: "https://github.com/leonanthomaz/lab_analyzer",
    },
    {
      id: 6,
      title: "Análise - Câncer no Brasil",
      subtitle: "Análise de Dados",
      description: "Análise interativa de dados sobre diagnósticos de câncer no Brasil (2000-2019), com visualizações sobre distribuição por faixa etária, gênero e frequência de doenças. Baseado em dados do Kaggle.",
      img: pythonImg,
      date: "Dezembro 2024",
      technology: "Python, Flask, pandas, plotly, kaggle",
      github: "https://github.com/leonanthomaz/analise_dados_cancer_br",
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


};
