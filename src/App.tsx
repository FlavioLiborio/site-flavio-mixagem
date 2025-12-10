import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './components/Icons';
import { Button } from './components/Button';
import { FeatureCard } from './components/FeatureCard';
import { Accordion } from './components/Accordion';
import { FEATURES, TESTIMONIALS, FAQ_ITEMS, CHECKOUT_URL } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  
  // Refs for parallax elements
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroFgRef = useRef<HTMLDivElement>(null);
  const methodBgRef = useRef<HTMLDivElement>(null);

  // Handle scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Parallax Logic
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translate3d(0, ${scrollY * 0.5}px, 0)`;
      }
      if (heroFgRef.current) {
        heroFgRef.current.style.transform = `translate3d(0, ${scrollY * 0.2}px, 0)`;
      }
      if (methodBgRef.current) {
        const speed = 0.15;
        const offset = (scrollY - 1000) * speed; 
        methodBgRef.current.style.transform = `translate3d(0, ${offset}px, 0) rotate(${scrollY * 0.02}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white overflow-x-hidden font-sans selection:bg-brand-gold selection:text-black">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-xl border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="h-8 md:h-10">
              <img src="/logo.png" alt="Flávio Libório" className="h-full w-auto object-contain" />
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {['O Método', 'Depoimentos', 'FAQ'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-').replace('ê', 'e'))}
                className="text-xs font-bold tracking-widest text-gray-400 hover:text-brand-gold transition-colors uppercase"
              >
                {item}
              </button>
            ))}
            <Button variant="outline" className="px-6 py-2 text-xs uppercase tracking-widest" onClick={() => scrollToSection('oferta')}>
              Área do Aluno
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-card border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl animate-fade-in-up">
            {['O Método', 'Depoimentos', 'FAQ'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-').replace('ê', 'e'))}
                className="text-left text-sm font-bold tracking-widest uppercase text-gray-300 hover:text-brand-gold"
              >
                {item}
              </button>
            ))}
             <Button variant="primary" className="w-full" onClick={() => scrollToSection('oferta')}>
              Garantir Vaga
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        
        {/* Layer 1: Deep Background */}
        <div ref={heroBgRef} className="absolute top-0 left-0 w-full h-[120%] pointer-events-none z-0 opacity-20">
           {/* Representing acoustic foam or speakers abstractly */}
           <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px]" />
           <div className="absolute top-[50%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
        </div>

        {/* Layer 2: Sound Waves / Texture */}
        <div ref={heroFgRef} className="absolute top-0 left-0 w-full h-[110%] pointer-events-none z-0 mix-blend-overlay">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
           {/* Horizontal Lines simulating Audio Rack */}
           <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
           <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
           <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-brand-gold/20 mb-10 animate-fade-in-up backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-gold uppercase">Flávio Libório • 25 Anos de Mercado</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-none animate-fade-in-up drop-shadow-2xl" style={{ animationDelay: '0.1s' }}>
            A ARTE DA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600">MIXAGEM PRO</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Saia do amadorismo e domine as técnicas utilizadas por grandes gravadoras. <span className="text-white font-medium">Clareza, profundidade e pressão</span> para suas produções.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button onClick={() => window.location.href = CHECKOUT_URL} className="w-full md:w-auto min-w-[200px] animate-glow-pulse">
              QUERO APRENDER A MIXAR
            </Button>
            <Button variant="secondary" className="w-full md:w-auto min-w-[200px] gap-2 group" onClick={() => setVideoModalOpen(true)}>
               <Icon name="Play" size={16} className="text-brand-gold group-hover:text-white transition-colors" /> VER MASTERCLASS
            </Button>
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-10 max-w-4xl mx-auto opacity-60">
             <div>
                <h4 className="text-2xl font-bold text-white">25+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">Anos de Carreira</p>
             </div>
             <div>
                <h4 className="text-2xl font-bold text-white">Major</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">Gravadoras</p>
             </div>
             <div>
                <h4 className="text-2xl font-bold text-white">Grammy</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">Standard Quality</p>
             </div>
             <div>
                <h4 className="text-2xl font-bold text-white">Dolby</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">Atmos Ready</p>
             </div>
          </div>
        </div>
      </section>

      {/* Method Section with Parallax */}
      <section id="o-metodo" className="py-32 relative bg-brand-surface overflow-hidden">
         {/* Parallax Background Elements - Activity/Wave icon */}
         <div ref={methodBgRef} className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-5 z-0">
            <Icon name="Activity" className="absolute top-[-50px] right-[-100px] text-brand-gold w-[600px] h-[600px] stroke-[0.5]" />
         </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-brand-gold tracking-widest uppercase mb-4">O Processo</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white">
                Engenharia de Áudio <br />
                <span className="text-gray-600">Sem Mistérios.</span>
              </h3>
            </div>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              Não é sobre ter o plugin mais caro, é sobre saber como usá-lo. O método FL foca na física do som e na emoção da música.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(feature => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* VSL / Content Hook Section */}
      <section className="py-32 bg-black relative">
         <div className="container mx-auto px-4 md:px-8">
            <div className="relative rounded-2xl overflow-hidden border border-brand-gold/20 bg-brand-card">
               <div className="grid md:grid-cols-2">
                  <div className="p-12 md:p-20 flex flex-col justify-center">
                     <Icon name="Mic2" className="text-brand-gold mb-6" size={40} />
                     <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Sua música pronta para o mundo.</h3>
                     <div className="space-y-6 text-gray-400">
                        <p>Você gasta horas produzindo, mas na hora de exportar, o som perde a vida? O grave embola e a voz some?</p>
                        <p>Eu vou te mostrar exatamente o que acontece dentro de um estúdio profissional para resolver isso de uma vez por todas.</p>
                        <p className="text-white font-bold">Método validado em centenas de álbuns comerciais.</p>
                     </div>
                     <div className="mt-10">
                        <Button variant="outline">CONHECER A GRADE</Button>
                     </div>
                  </div>
                  <div className="relative h-full min-h-[400px] bg-brand-surface">
                     {/* Image: Mixing Console / Studio */}
                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay"></div>
                     <div className="absolute inset-0 bg-gradient-to-t from-brand-card to-transparent"></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-32 bg-brand-dark relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Quem já gravou sabe</h2>
             <p className="text-gray-500 uppercase tracking-widest text-sm">Depoimentos reais do mercado.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(testimonial => (
              <div key={testimonial.id} className="bg-brand-surface p-8 rounded-xl border border-white/5 relative hover:border-brand-gold/30 transition-colors group">
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 object-cover" />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-[10px] text-brand-gold uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer / Pricing Section */}
      <section id="oferta" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="absolute inset-0 bg-gradient-radial from-brand-gold/5 to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto bg-black/80 backdrop-blur-lg border border-brand-gold/30 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.1)]">
            <div className="grid md:grid-cols-2">
                <div className="p-12 border-b md:border-b-0 md:border-r border-white/10">
                   <span className="inline-block py-1 px-3 rounded bg-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-6">Treinamento Completo</span>
                   <h3 className="text-4xl font-display font-bold mb-6">Formação Mix Pro</h3>
                   <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                     Tenha acesso ao workflow completo de mixagem e masterização do Flávio Libório. Do setup da sessão até o bounce final.
                   </p>
                   
                   <ul className="space-y-4">
                     {['Módulo de Equalização Avançada', 'Compressão e Dinâmica', 'Ambiência e Reverb', 'Multitracks para Prática'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                           <Icon name="CheckCircle" size={16} className="text-brand-gold" />
                           {item}
                        </li>
                     ))}
                   </ul>
                </div>
                
                <div className="p-12 bg-brand-surface/50 flex flex-col justify-center items-center text-center relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-[50px] rounded-full"></div>
                   
                   <p className="text-gray-500 line-through mb-2">R$ 1.997,00</p>
                   <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-xl text-brand-gold font-bold">R$</span>
                      <span className="text-6xl font-bold text-white">297</span>
                   </div>
                   
                   <Button variant="red" fullWidth onClick={() => window.location.href = CHECKOUT_URL} className="w-full max-w-xs mb-4">
                      GARANTIR ACESSO
                   </Button>
                   <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Icon name="ShieldCheck" size={14} /> 
                      <span>Garantia de 7 dias incondicional</span>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16">
             <div className="md:w-1/3">
                <h2 className="text-3xl font-display font-bold mb-6">Dúvidas Frequentes</h2>
                <p className="text-gray-400 mb-8">Tudo sobre o método de ensino e serviços.</p>
                <Button variant="outline">FALAR COM EQUIPE</Button>
             </div>
             <div className="md:w-2/3">
                <Accordion items={FAQ_ITEMS} />
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-brand-dark">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="h-8">
                <img src="/logo.png" alt="Flávio Libório" className="h-full w-auto object-contain grayscale opacity-50 hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="text-gray-600 text-xs text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Flávio Libório. Todos os direitos reservados.</p>
              <div className="flex gap-6 justify-center md:justify-end mt-4 uppercase tracking-wider">
                <a href="#" className="hover:text-brand-gold transition-colors">Termos</a>
                <a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidade</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {videoModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in" 
          onClick={() => setVideoModalOpen(false)}
        >
            <div 
                className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10" 
                onClick={e => e.stopPropagation()}
            >
                <button 
                    onClick={() => setVideoModalOpen(false)}
                    className="absolute top-4 right-4 z-10 text-white hover:text-brand-gold transition-colors bg-black/50 rounded-full p-2"
                >
                    <Icon name="X" size={24} />
                </button>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/8ee9tmDQDq8?autoplay=1&start=28" 
                    title="Briefing" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
      )}
    </div>
  );
};

export default App;