export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Tipo de resposta de paginação da API (usado com React Query)
export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

// Tipo para autenticação
export interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export type LoginFormInputs = {
  username: string;
  password: string;
};