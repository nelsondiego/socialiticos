import Image from "next/image";
import { MessageSquare, Network, TrendingUp, Users, BarChart, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex-grow flex flex-col">
        {/* Hero section with background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/fondo1.jpg"
            alt="Fondo político"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-900/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <header className="p-6 flex justify-between items-center">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              SOCIALITICOS
            </h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#caracteristicas" className="text-white hover:text-blue-300 transition">Características</a></li>
                <li><a href="#descargar" className="text-white hover:text-blue-300 transition">Descargar</a></li>
              </ul>
            </nav>
          </header>

          <main className="container mx-auto px-6 py-12 text-center flex-grow flex flex-col justify-center">
            <h2 className="text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 leading-tight max-w-5xl mx-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              La Red Social para<br />Políticos del Futuro
            </h2>
            <p className="text-2xl mb-12 text-white max-w-2xl mx-auto">Conecta, debate y analiza en la plataforma líder para líderes políticos y ciudadanos comprometidos.</p>
            
            <div className="mb-16">
              <a href="#" className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-yellow-300 hover:to-pink-400 transition inline-block shadow-lg">
                Crear Cuenta Gratis
              </a>
            </div>

            <div id="caracteristicas" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/20 p-6 rounded-lg backdrop-blur-md">
                <MessageSquare className="w-16 h-16 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-2 text-white">Debates en Vivo</h3>
                <p className="text-white">Participa en discusiones en tiempo real sobre temas de actualidad.</p>
              </div>
              <div className="bg-white/20 p-6 rounded-lg backdrop-blur-md">
                <Network className="w-16 h-16 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-2 text-white">Networking Político</h3>
                <p className="text-white">Conecta con otros líderes y construye tu red de influencia.</p>
              </div>
              <div className="bg-white/20 p-6 rounded-lg backdrop-blur-md">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-2 text-white">Análisis de Tendencias</h3>
                <p className="text-white">Accede a datos y análisis sobre la opinión pública en tiempo real.</p>
              </div>
              <div className="bg-white/20 p-6 rounded-lg backdrop-blur-md">
                <Users className="w-16 h-16 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-2 text-white">Comunidades Temáticas</h3>
                <p className="text-white">Únete a grupos especializados en diferentes áreas políticas.</p>
              </div>
              <div className="bg-white/20 p-6 rounded-lg backdrop-blur-md">
                <BarChart className="w-16 h-16 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-2 text-white">Encuestas y Sondeos</h3>
                <p className="text-white">Crea y participa en encuestas para medir la opinión pública.</p>
              </div>
              <div className="bg-white/20 p-6 rounded-lg backdrop-blur-md">
                <Shield className="w-16 h-16 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-2 text-white">Seguridad y Privacidad</h3>
                <p className="text-white">Protección de datos y comunicaciones encriptadas.</p>
              </div>
            </div>

            <div id="descargar" className="mb-16">
              <h3 className="text-3xl font-bold mb-6 text-white">Descarga Nuestra App</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                  <Image src="/apple-logo.svg" alt="Apple logo" width={24} height={24} className="mr-2" />
                  <span>App Store</span>
                </a>
                <a href="#" className="flex items-center bg-gray-100 text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                  <Image src="/play-logo.svg" alt="Google Play logo" width={24} height={24} className="mr-2" />
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>&copy; 2024 Socialiticos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}