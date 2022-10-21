import { AppProvider } from './hooks';
import { Routes } from './routes';

export default function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
