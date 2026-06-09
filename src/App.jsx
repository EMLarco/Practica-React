import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import {
  ContactosPage,
  InicioPage,
  NosotrosPage,
  PersonajesPage,
} from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/contactos" element={<ContactosPage />} />
          <Route path="/personajes" element={<PersonajesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
