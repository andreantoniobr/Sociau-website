import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider, useAuth } from "./lib/context/AuthContext";
import AppRoutes from "./routes";

const queryClient = new QueryClient();

function AppContent() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) {
    return <div>Verificando sessão...</div>; // Bloqueia renderização até validar a sessão
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
