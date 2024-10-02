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
            className="object-cover w-full h-auto"
            quality={70}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-900/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <header className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] mb-4 sm:mb-0">
              SOCIALITICOS
            </h1>
            <nav>
              <ul className="flex space-x-4 sm:space-x-6">
                <li><a href="#caracteristicas" className="text-white hover:text-blue-300 transition">Características</a></li>
                <li><a href="#descargar" className="text-white hover:text-blue-300 transition">Descargar</a></li>
              </ul>
            </nav>
          </header>

          <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center flex-grow flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 leading-tight max-w-5xl mx-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              La Red Social para Políticos del Futuro
            </h2>
            <p className="text-xl sm:text-2xl mb-8 sm:mb-12 text-white max-w-2xl mx-auto">Conecta, debate y analiza en la plataforma líder para líderes políticos y ciudadanos comprometidos.</p>
            
            <div className="mb-12 sm:mb-16">
              <a href="#" className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl hover:from-yellow-300 hover:to-pink-400 transition inline-block shadow-lg">
                Crear Cuenta Gratis
              </a>
            </div>

            <div id="caracteristicas" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {[
                { icon: MessageSquare, title: "Debates en Vivo", description: "Participa en discusiones en tiempo real sobre temas de actualidad." },
                { icon: Network, title: "Networking Político", description: "Conecta con otros líderes y construye tu red de influencia." },
                { icon: TrendingUp, title: "Análisis de Tendencias", description: "Accede a datos y análisis sobre la opinión pública en tiempo real." },
                { icon: Users, title: "Comunidades Temáticas", description: "Únete a grupos especializados en diferentes áreas políticas." },
                { icon: BarChart, title: "Encuestas y Sondeos", description: "Crea y participa en encuestas para medir la opinión pública." },
                { icon: Shield, title: "Seguridad y Privacidad", description: "Protección de datos y comunicaciones encriptadas." },
              ].map((feature, index) => (
                <div key={index} className="bg-blue-900/20 p-4 sm:p-6 rounded-lg backdrop-blur-md  shadow-xl">
                  <feature.icon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-white" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white text-sm sm:text-base">{feature.description}</p>
                </div>
              ))}
            </div>

            <div id="descargar" className="mb-12 sm:mb-16">
              <h3 className="text-xl sm:text-2xl  mb-4 sm:mb-6 text-white">¡Descarga la Versión Móvil</h3>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#" className="flex items-center bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition w-full sm:w-auto">
                  <Image src="/apple-logo.svg" alt="Apple logo" width={20} height={20} className="mr-2" />
                  <span>App Store</span>
                </a>
                <a href="#" className="flex items-center bg-gray-100 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-200 transition w-full sm:w-auto">
                  <Image src="/play-logo.svg" alt="Google Play logo" width={20} height={20} className="mr-2" />
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      <footer className="bg-slate-900 text-slate-50 py-4 sm:py-6 text-center text-sm sm:text-base">
        <p>&copy; 2024 Socialiticos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}