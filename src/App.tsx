import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BlogPage from "./pages/BlogPage";
import LinksPage from "./pages/LinksPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="links" element={<LinksPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="redux" element={<LoginPage />} />
        <Route path="blog/:id" element={<BlogPage />} />
      </Route>
    </Routes>
  );
}

export default App;
