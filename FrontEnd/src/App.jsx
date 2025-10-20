import Background from "./components/Background";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import Footer from "./components/Footer";



export default function App() {
  return (
    <div className="bg-black text-gray-200 font-sans antialiased overflow-x-hidden">
      <Background />
      <Header />
      <main>
        <HeroSection />



      </main>
      <Footer />
    </div>
  );
}
