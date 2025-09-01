export interface Projeto {
  isSandbox: any;
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