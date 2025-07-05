import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import "./i18n";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen bg-peanut-50 dark:bg-gradient-to-b dark:from-chocolate-900 dark:via-chocolate-800 dark:to-chocolate-900 transition-colors font-crispy dark:border-l-4 dark:border-r-4 dark:border-peanut-300/20">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
