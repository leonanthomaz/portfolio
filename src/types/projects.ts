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
  status?: ProjetoStatus;
}

export type ProjetoStatus =
  | 'planejando'       // ainda pensando ou estruturando
  | 'em_construcao'    // desenvolvimento ativo
  | 'ajustando'        // funcionando mas recebendo melhorias/bugs
  | 'em_analise'         // versão inicial, precisa de refinamentos (ex: Tainá, ChatBot)
  | 'finalizado'       // concluído e estável
  | 'obsoleto'         // não funciona mais / não é recomendável usar
  | 'descontinuado';   // projeto parado, não será mais mantido
