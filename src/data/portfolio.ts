import thomaggioImg from '@/assets/img/portfolio/thomaggio.png';
import firecloudImg from '@/assets/img/portfolio/firecloud.png';
import pythonImg from '@/assets/img/portfolio/python.webp';

const ACCESS_PROJECT_HASH = import.meta.env.VITE_ACCESS_PROJECT_HASH;
const URL_BASE = import.meta.env.VITE_SANDBOX_BASE_URL;

export interface Projeto {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  img?: string;
  date: string;
  technology?: string;
  url?: string;
  github?: string;
  status?: 'em_construcao' | 'finalizado' | 'em_analise';
}

export const projetosData = {
  features: [
    {
      id: 1,
      title: "Thomaggio",
      subtitle: "Sistema Fullstack de Pizzaria",
      description: "Sistema de delivery completo com gestão de pedidos, integração com Google Maps e pagamento via Pix.",
      img: thomaggioImg,
      date: "2023",
      url: `${URL_BASE}/thomaggio/${ACCESS_PROJECT_HASH}`,
      technology: "Python, FastAPI, WebSocket, React, Mercado Pago",
      github: "https://github.com/leonanthomaz/projeto-thomaggio",
      status: 'em_analise',
    },
    {
      id: 2,
      title: "FireCloud",
      subtitle: "Portal de Bots",
      description: "Plataforma de automação e bots para empresas, com gestão de usuários e dashboards.",
      img: firecloudImg,
      date: "2024",
      url: `${URL_BASE}/firecloud/${ACCESS_PROJECT_HASH}`,
      technology: "Python, FastAPI, React, WebSocket",
      github: "https://github.com/leonanthomaz/projeto-firecloud",
      status: 'em_analise',
    },
  ],

  automacao: [
    {
      id: 3,
      title: "Envio de E-mails Personalizados",
      subtitle: "Automação de E-mails",
      description: "Automatiza o envio de e-mails personalizados com base em dados de um arquivo Excel.",
      img: pythonImg,
      date: "2024",
      technology: "Python, pandas, openpyxl, smtplib",
      github: "https://github.com/leonanthomaz/bot-envio-emails",
      status: 'finalizado',
    },
    {
      id: 4,
      title: "YouTube Music Player",
      subtitle: "Player de Música",
      description: "Player de música que baixa e reproduz músicas do YouTube com Python.",
      img: pythonImg,
      date: "2024",
      technology: "Python, yt-dlp, pygame",
      github: "https://github.com/leonanthomaz/music_player_py",
      status: 'finalizado',
    },
  ],

  dados: [
    {
      id: 5,
      title: "LabAnalyzer",
      subtitle: "Análise de Dados Biomédicos",
      description: "Sistema para cadastro e análise de exames e pacientes, com geração de relatórios e gráficos.",
      img: pythonImg,
      date: "2024",
      technology: "Python, Flask, NumPy, pandas, Matplotlib, Seaborn, fpdf",
      github: "https://github.com/leonanthomaz/lab_analyzer",
      status: 'finalizado',
    },
    {
      id: 6,
      title: "Análise - Câncer no Brasil",
      subtitle: "Visualização de Dados",
      description: "Análise interativa de diagnósticos de câncer no Brasil (2000-2019), com gráficos e visualizações detalhadas.",
      img: pythonImg,
      date: "2024",
      technology: "Python, Flask, pandas, plotly",
      github: "https://github.com/leonanthomaz/analise_dados_cancer_br",
      status: 'finalizado',
    },
    {
      id: 7,
      title: "Visualização de Vendas",
      subtitle: "Gráficos e Dashboard",
      description: "Web app que lê CSV de vendas e apresenta gráficos interativos para análise de performance.",
      img: pythonImg,
      date: "2024",
      technology: "Python, Flask, pandas, matplotlib, seaborn",
      github: "https://github.com/leonanthomaz/fundamentos_analise_de_dados",
      status: 'finalizado',
    },
  ],

  backend: [
    {
      id: 8,
      title: "CRUD Flask + MySQL",
      subtitle: "API RESTful",
      description: "API para operações CRUD em banco MySQL, gerenciando registros de médicos.",
      img: pythonImg,
      date: "2024",
      technology: "Python, Flask, Flask-SQLAlchemy, MySQL",
      github: "https://github.com/leonanthomaz/crud_flask",
      status: 'finalizado',
    },
  ],

  ia: [
    {
      id: 9,
      title: "ChatBot",
      subtitle: "Bot de Atendimento",
      description: "Bot desacoplado do FireCloud, capaz de responder perguntas de clientes via chat.",
      img: pythonImg,
      date: "2024",
      technology: "Python, FastAPI, WebSocket",
      github: "https://github.com/leonanthomaz/chatbot",
      status: 'em_construcao',
    },
    {
      id: 10,
      title: "Tainá - Inteligência Artificial",
      subtitle: "IA e Comandos por Voz",
      description: "Versão destacada da Tainá mostrando capacidade de IA e integração com APIs.",
      img: pythonImg,
      date: "2024",
      technology: "Python, ChatGPT API, Selenium, gTTS, SpeechRecognition, pygame",
      github: "https://github.com/leonanthomaz/projeto-taina",
      status: 'em_construcao',
    },
  ],

  opencv: [
    {
      id: 11,
      title: "Image Analyzer (Placeholder)",
      subtitle: "Análise de Imagem",
      description: "Projeto inicial de análise de imagens usando OpenCV, ainda em desenvolvimento.",
      img: pythonImg,
      date: "2024",
      technology: "Python, OpenCV, NumPy",
      status: 'em_construcao',
    },
  ],

  frontend: [
    {
      id: 12,
      title: "Blog Pessoal (Placeholder)",
      subtitle: "Frontend React",
      description: "Projeto inicial do blog em React, ainda em desenvolvimento.",
      img: pythonImg,
      date: "2024",
      technology: "React, TypeScript, MUI, React Router",
      status: 'em_construcao',
    },
    {
      id: 13,
      title: "Catálogo de Filmes (Placeholder)",
      subtitle: "Frontend React",
      description: "Aplicativo de catálogo de filmes em React, consumindo API externa.",
      img: pythonImg,
      date: "2024",
      technology: "React, TypeScript, Axios, TMDB API",
      status: 'em_construcao',
    },
  ],
};
