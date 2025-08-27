import thomaggioImg from '@/assets/img/portfolio/tomaggio-logo.png';
import firecloudImg from '@/assets/img/portfolio/firecloud-logo-azul.png';
import popCorn1 from '@/assets/img/portfolio/popcorn1.webp';
import popCorn2 from '@/assets/img/portfolio/popcorn2.webp';
import eleicoesST from '@/assets/img/portfolio/eleicoes-st.webp';
import eleicoesST2 from '@/assets/img/portfolio/eleicoes-st2.webp';
import eleicoesPT from '@/assets/img/portfolio/eleicoes-pt.webp';
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
      title: "Thomaggio",
      subtitle: "Sistema completo de pedidos",
      description: "Aplicação completa para gestão de pedidos de pizzaria, com frontend em React + TypeScript, backend em FastAPI, painel administrativo, integração com Pix (Mercado Pago) e impressão de comandas em 58mm.",
      img: thomaggioImg,
      date: "2025",
      technology: "Python, FastAPI, React, TypeScript, PostgreSQL, Mercado Pago, WebSocket",
      url: "https://thomaggio.vercel.app/",
      github: "https://github.com/leonanthomaz/thomaggio-api",
    },
    {
      id: 2,
      title: "FireCloud",
      subtitle: "Plataforma de bots e automações",
      description: "Sistema para gerenciamento e execução de bots com IA e automações diversas, integrando APIs externas e ferramentas internas.",
      img: firecloudImg,
      date: "2025",
      technology: "Python, FastAPI, React, WebSocket, OpenAI API, PostgreSQL",
      github: "https://github.com/leonanthomaz/firecloud_backend",
    }
  ],

  automacao: [
    {
      id: 2,
      title: "Envio de E-mails Personalizados",
      subtitle: "Automação de E-mails",
      description: "Automatiza o envio de e-mails personalizados a partir de arquivos Excel.",
      img: pythonImg,
      date: "Outubro 2024",
      technology: "Python, pandas, openpyxl, smtplib, email.mime",
      github: "https://github.com/leonanthomaz/bot_envio_emails",
    },
    {
      id: 3,
      title: "CRUD Flask",
      subtitle: "API RESTful",
      description: "API para operações CRUD em MySQL, gerenciando registros de médicos.",
      img: pythonImg,
      date: "Outubro 2024",
      technology: "Python, Flask, Flask-SQLAlchemy, MySQL",
      github: "https://github.com/leonanthomaz/crud_flask",
    },
    {
      id: 4,
      title: "Visualização de Vendas",
      subtitle: "Análise de Dados",
      description: "Web app para visualizar dados de vendas a partir de CSV com gráficos interativos.",
      img: pythonImg,
      date: "Novembro 2024",
      technology: "Python, Flask, matplotlib, pandas, numpy, seaborn",
      github: "https://github.com/leonanthomaz/fundamentos_analise_de_dados",
    },
    {
      id: 5,
      title: "YouTube Music Player",
      subtitle: "Player de Música",
      description: "Player que baixa e reproduz músicas do YouTube.",
      img: pythonImg,
      date: "Dezembro 2024",
      technology: "Python, yt-dlp, pygame",
      github: "https://github.com/leonanthomaz/music_player_py",
    },
  ],

  ia: [
    {
      id: 1,
      title: "Tainá",
      subtitle: "Assistente de IA em Python",
      description: "Sistema de IA em Python com reconhecimento de voz, comandos via APIs e integração com OpenAI, Google APIs e YouTube.",
      img: pythonImg,
      date: "Janeiro 2024",
      technology: "Python, OpenAI API, Google APIs, Selenium, gTTS, SpeechRecognition, pygame",
      github: "https://github.com/leonanthomaz/projeto-taina",
    },
  ],

  fullstack: [
    {
      id: 1,
      title: "Thomaggio",
      subtitle: "Sistema completo de pedidos",
      description: "Aplicação completa para gestão de pedidos de pizzaria, com frontend em React + TypeScript, backend em FastAPI, painel administrativo, integração com Pix (Mercado Pago) e impressão de comandas em 58mm.",
      img: thomaggioImg,
      date: "2025",
      technology: "Python, FastAPI, React, TypeScript, PostgreSQL, Mercado Pago, WebSocket",
      url: "https://thomaggio.vercel.app/",
      github: "https://github.com/leonanthomaz/thomaggio-api",
    },
    {
      id: 2,
      title: "FireCloud",
      subtitle: "Plataforma de bots e automações",
      description: "Sistema para gerenciamento e execução de bots com IA e automações diversas, integrando APIs externas e ferramentas internas.",
      img: firecloudImg,
      date: "2025",
      technology: "Python, FastAPI, React, WebSocket, OpenAI API, PostgreSQL",
      github: "https://github.com/leonanthomaz/firecloud_backend",
    }
  ],
};
