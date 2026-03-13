import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Check, Shield, FileText, Calendar, LayoutTemplate } from 'lucide-react';

const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Counter = ({ from, to, duration = 1.2, suffix = '' }: { from: number, to: number, duration?: number, suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setValue(Math.floor(easeProgress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{value}{suffix}</span>;
};

const CTAButton = ({ children, className = '', href = '#', variant = 'primary' }: { children: React.ReactNode, className?: string, href?: string, variant?: 'primary' | 'outline' | 'white' }) => {
  const baseStyle = "inline-flex items-center justify-center font-sans font-semibold text-[16px] h-[56px] px-8 rounded-full transition-all duration-200";
  const variants = {
    primary: "bg-accent text-white hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(212,82,42,0.35)]",
    outline: "border border-primary text-primary bg-white hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]",
    white: "bg-white text-accent hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
  };
  
  return (
    <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between py-[20px] text-left font-sans font-semibold text-[15px] transition-colors ${isOpen ? 'text-primary' : 'text-primary'}`}
      >
        <span className="pr-4">{question}</span>
        <div className={`w-[28px] h-[28px] rounded-full border-[1.5px] flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-primary text-primary rotate-45' : 'border-primary/30 text-primary/50'}`}>
          <span className="text-lg leading-none mb-[2px]">+</span>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-[20px] text-[14px] text-muted leading-[1.75]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WaveTop = () => (
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-[80px] -mb-[1px] relative z-10">
    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F7F4EF"/>
  </svg>
);

const WaveBottom = () => (
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-[80px] -mt-[1px] relative z-10">
    <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="#F7F4EF"/>
  </svg>
);

const DecorativeRule = () => (
  <div className="flex items-center gap-4 mx-auto max-w-[200px] opacity-30 my-16 text-primary">
    <div className="h-[1px] flex-1 bg-current"></div>
    <div className="w-[5px] h-[5px] rounded-full bg-current rotate-45"></div>
    <div className="h-[1px] flex-1 bg-current"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-sans text-primary selection:bg-surface-green selection:text-primary">
      
      {/* Top Announcement Bar */}
      <div className="bg-black text-white text-center py-2 px-4 font-sans text-[11px] tracking-[0.08em] uppercase">
        DESCONTO ESPECIAL VOLTA ÀS AULAS - EXPIRA <span className="text-gold">SEXTA-FEIRA</span>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-primary/5">
        <div className="max-w-[1000px] mx-auto px-[28px] h-[72px] flex items-center justify-between">
          <div className="font-serif italic text-[24px] font-bold text-primary">
            Dinâmicas Inclusivas
          </div>
          <a href="#planos" className="bg-accent text-white font-sans font-semibold text-[13px] px-6 py-2.5 rounded-full hover:bg-[#B84521] transition-colors">
            Garantir Vaga
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-white pt-[80px] pb-[40px] px-[28px] relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay pointer-events-none"></div>
        
        {/* Hero Decorations */}
        <svg className="absolute -top-[100px] -right-[80px] w-[500px] h-[500px] pointer-events-none" viewBox="0 0 500 500">
          <circle cx="250" cy="250" r="249" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
        </svg>
        <svg className="absolute top-[60px] right-[40px] w-[280px] h-[280px] pointer-events-none" viewBox="0 0 280 280">
          <circle cx="140" cy="140" r="139" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        </svg>
        <div className="absolute top-[20px] left-[20px] grid grid-cols-8 gap-[20px] pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-[3px] h-[3px] bg-white/12 rounded-full"></div>
          ))}
        </div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
        </svg>

        <div className="max-w-[580px] mx-auto text-center flex flex-col items-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full font-sans text-[11px] font-semibold tracking-[0.1em] uppercase mb-6 text-light-green">
              ✦ Kit Digital · Inclusão na Educação
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="w-[60px] h-[2px] bg-white/30 mx-auto mb-6"></div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="font-serif text-[56px] md:text-[64px] font-bold leading-[1.05] tracking-[-0.02em] mb-6">
              <span className="block text-white">+200 Dinâmicas para</span>
              <span className="block italic text-light-green">Inclusão</span>
              <span className="block text-white text-[40px] mt-2">na Sala de Aula</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.3}>
            <p className="font-sans text-[15px] text-white/70 mb-8 leading-[1.75] max-w-[480px]">
              Atividades prontas, pensadas para engajar todos os alunos — inclusive aqueles com necessidades especiais.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center gap-x-6 gap-y-3 mb-10 font-sans text-[13px] text-white/80">
              <div className="flex justify-center gap-6">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-light-green" /> Ensino Fundamental I</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-light-green" /> Ensino Fundamental II</span>
              </div>
              <div className="flex justify-center">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-light-green" /> Ensino Médio</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.5} className="w-full mb-4">
            <CTAButton href="#planos" className="w-full" variant="primary">
              Quero Minhas Dinâmicas Agora →
            </CTAButton>
          </Reveal>

          <Reveal delay={0.6}>
            <p className="font-sans text-[12px] text-white/40 mb-16">
              🔒 Pagamento 100% seguro · Garantia de 7 dias
            </p>
          </Reveal>

          <Reveal delay={0.7} className="w-full border-t border-white/12 pt-8 grid grid-cols-3">
            <div className="flex flex-col items-center border-r border-white/12">
              <span className="font-serif text-[44px] text-white leading-none mb-1"><Counter from={0} to={200} suffix="+" /></span>
              <span className="font-sans text-[10px] text-white/40 uppercase tracking-[0.1em] font-semibold">Dinâmicas</span>
            </div>
            <div className="flex flex-col items-center border-r border-white/12">
              <span className="font-serif text-[44px] text-white leading-none mb-1">4.9<span className="text-[32px]">★</span></span>
              <span className="font-sans text-[10px] text-white/40 uppercase tracking-[0.1em] font-semibold">Avaliação</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-[44px] text-white leading-none mb-1"><Counter from={0} to={3} suffix=".2k+" /></span>
              <span className="font-sans text-[10px] text-white/40 uppercase tracking-[0.1em] font-semibold">Professoras</span>
            </div>
          </Reveal>
        </div>
      </section>
      
      <WaveTop />

      {/* O Que Você Recebe Section */}
      <section className="py-[96px] px-[28px] bg-bg">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-primary mb-4 block">
                O QUE VOCÊ RECEBE
              </span>
              <h2 className="font-serif text-[38px] font-bold text-primary leading-[1.1] tracking-[-0.02em]">
                Material completo para <span className="italic font-normal">transformar suas aulas</span>
              </h2>
            </div>
          </Reveal>

          <div className="flex flex-col gap-[16px]">
            {/* Featured Card */}
            <Reveal delay={0}>
              <div className="bg-primary rounded-[20px] p-[32px] flex flex-col relative overflow-hidden card-shadow hover:-translate-y-1 transition-transform duration-200">
                <div className="absolute top-[-20px] left-[-10px] font-serif text-[120px] text-white/5 leading-none select-none pointer-events-none">
                  200
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="flex-grow">
                    <div className="w-[44px] h-[44px] bg-white/10 rounded-[12px] flex items-center justify-center mb-6">
                      <LayoutTemplate className="w-6 h-6 text-light-green" />
                    </div>
                    <h3 className="font-serif text-[24px] font-bold text-white mb-2 tracking-[-0.02em]">
                      Dinâmicas para Inclusão
                    </h3>
                    <p className="font-sans text-[15px] text-white/70 leading-[1.75] mb-6">
                      Atividades categorizadas por faixa etária, objetivo pedagógico e tipo de necessidade. Prontas para aplicar.
                    </p>
                  </div>
                </div>
                <div className="relative z-10 mt-4 bg-[#2D5A42] -mx-[32px] -mb-[32px] px-[32px] py-[16px] rounded-b-[20px] flex items-center justify-between">
                  <span className="font-sans text-[13px] text-white/80">Acesso imediato ao material completo</span>
                  <div className="border border-white/20 text-white font-sans text-[11px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-[0.1em]">
                    Principal
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 2 Column Grid */}
            <div className="grid md:grid-cols-2 gap-[16px]">
              {/* Card A */}
              <Reveal delay={0.1}>
                <div className="bg-white border border-[#E8E4DC] rounded-[16px] p-[24px] card-shadow hover:-translate-y-1 hover:border-primary/30 transition-all duration-200 h-full">
                  <div className="w-[44px] h-[44px] bg-surface-green rounded-[12px] flex items-center justify-center mb-6">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-[24px] font-bold text-primary mb-2 tracking-[-0.02em]">
                    Fichas de Aplicação
                  </h3>
                  <p className="font-sans text-[15px] text-muted leading-[1.75]">
                    Passo a passo para cada dinâmica, materiais necessários e tempo estimado.
                  </p>
                </div>
              </Reveal>

              <div className="flex flex-col gap-[16px]">
                {/* Card B */}
                <Reveal delay={0.2}>
                  <div className="bg-white border border-[#E8E4DC] rounded-[16px] p-[24px] card-shadow hover:-translate-y-1 hover:border-primary/30 transition-all duration-200">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-[44px] h-[44px] bg-surface-green rounded-[12px] flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div className="bg-gradient-to-r from-[#C9962A] to-[#E8B84B] text-white font-sans text-[10px] font-bold px-[12px] py-[4px] rounded-full uppercase tracking-[0.1em]">
                        BÔNUS
                      </div>
                    </div>
                    <h3 className="font-serif text-[24px] font-bold text-primary mb-2 tracking-[-0.02em]">
                      Guia de Adaptações por NEE
                    </h3>
                    <p className="font-sans text-[14px] text-muted leading-[1.75]">
                      Orientações específicas para autismo, TDAH, deficiência visual e intelectual.
                    </p>
                  </div>
                </Reveal>

                {/* Card C */}
                <Reveal delay={0.3}>
                  <div className="bg-white border border-[#E8E4DC] rounded-[16px] p-[24px] card-shadow hover:-translate-y-1 hover:border-primary/30 transition-all duration-200">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-[44px] h-[44px] bg-surface-green rounded-[12px] flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div className="bg-gradient-to-r from-[#C9962A] to-[#E8B84B] text-white font-sans text-[10px] font-bold px-[12px] py-[4px] rounded-full uppercase tracking-[0.1em]">
                        BÔNUS
                      </div>
                    </div>
                    <h3 className="font-serif text-[24px] font-bold text-primary mb-2 tracking-[-0.02em]">
                      Planner Mensal de Dinâmicas
                    </h3>
                    <p className="font-sans text-[14px] text-muted leading-[1.75]">
                      Organize suas atividades ao longo do mês com um planner prático e visual.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DecorativeRule />

      {/* Pricing Section */}
      <section id="planos" className="py-[96px] px-[28px] bg-bg">
        <div className="max-w-[440px] mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mb-4 block">
                ESCOLHA SEU PLANO
              </span>
              <h2 className="font-serif text-[38px] font-bold text-primary leading-[1.1] tracking-[-0.02em]">
                Investimento que cabe no bolso
              </h2>
            </div>
          </Reveal>
          
          <div className="flex flex-col gap-[16px]">
            {/* Basic Plan */}
            <Reveal delay={0.1}>
              <div className="bg-white border border-[#DEDAD4] rounded-[20px] p-[32px] card-shadow hover:-translate-y-1 transition-transform duration-200">
                <div className="font-sans text-[12px] font-semibold tracking-[0.1em] uppercase text-muted mb-4 text-center">
                  Plano Básico
                </div>
                
                <div className="mb-6 text-center">
                  <span className="font-serif text-[52px] font-bold text-primary leading-none tracking-[-0.03em]">R$ 17,90</span>
                </div>
                
                <div className="h-[1px] bg-black/10 w-[40px] mx-auto mb-8"></div>
                
                <ul className="space-y-4 mb-8">
                  {[
                    '+200 dinâmicas digitais',
                    'Fichas de aplicação prontas',
                    'Acesso vitalício ao material'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-sans text-[14px] text-primary">
                      <div className="w-[6px] h-[6px] bg-primary rounded-[2px] shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <CTAButton variant="outline" className="w-full">
                  Começar com o Básico
                </CTAButton>
              </div>
            </Reveal>

            {/* Premium Plan */}
            <Reveal delay={0.2}>
              <div className="bg-white border-2 border-primary rounded-[20px] p-[32px] relative mt-4 card-shadow shadow-[inset_0_0_60px_rgba(45,106,79,0.08)] hover:-translate-y-1 transition-transform duration-200">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white font-sans text-[11px] font-semibold px-4 py-1 rounded-full uppercase tracking-[0.1em] whitespace-nowrap">
                  MAIS POPULAR
                </div>
                
                <div className="font-sans text-[12px] font-semibold tracking-[0.1em] uppercase text-primary mb-4 text-center">
                  Planejamento Divertido 2026
                </div>
                
                <div className="mb-6 text-center">
                  <span className="font-sans text-[13px] text-muted line-through block mb-1">De R$ 67,00</span>
                  <span className="font-serif text-[60px] font-bold text-primary leading-none tracking-[-0.03em]">R$ 37,00</span>
                </div>
                
                <div className="h-[1px] bg-black/10 w-[40px] mx-auto mb-8"></div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 font-sans text-[14px] text-primary">
                    <div className="w-[6px] h-[6px] bg-primary rounded-[2px] shrink-0"></div>
                    <span>+200 dinâmicas digitais</span>
                  </li>
                  <li className="flex items-center gap-3 font-sans text-[14px] text-primary">
                    <div className="w-[6px] h-[6px] bg-primary rounded-[2px] shrink-0"></div>
                    <span>Fichas de aplicação prontas</span>
                  </li>
                  <li className="flex items-center gap-3 font-sans text-[14px] text-primary">
                    <div className="w-[6px] h-[6px] bg-primary rounded-[2px] shrink-0"></div>
                    <span>Acesso vitalício ao material</span>
                  </li>
                  <li className="flex items-center gap-3 font-sans text-[14px] text-primary">
                    <div className="w-[6px] h-[6px] bg-primary rounded-[2px] shrink-0"></div>
                    <span className="flex items-center gap-2 flex-wrap">
                      Guia de adaptações por NEE
                      <span className="bg-gradient-to-r from-[#C9962A] to-[#E8B84B] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">(BÔNUS)</span>
                    </span>
                  </li>
                  <li className="flex items-center gap-3 font-sans text-[14px] text-primary">
                    <div className="w-[6px] h-[6px] bg-primary rounded-[2px] shrink-0"></div>
                    <span className="flex items-center gap-2 flex-wrap">
                      Planner mensal de dinâmicas
                      <span className="bg-gradient-to-r from-[#C9962A] to-[#E8B84B] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">(BÔNUS)</span>
                    </span>
                  </li>
                </ul>
                
                <CTAButton variant="primary" className="w-full mb-4">
                  Quero o Kit Completo →
                </CTAButton>
                <p className="text-center font-sans text-[13px] text-muted">
                  Parcele em até 12x sem juros · Boleto · Pix
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WaveBottom />

      {/* Depoimentos Section */}
      <section className="py-[96px] px-[28px] bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay pointer-events-none"></div>
        <svg className="absolute top-[20px] left-[20px] w-[300px] h-[300px] pointer-events-none" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="149" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        </svg>
        <div className="absolute top-[40px] right-[40px] grid grid-cols-5 gap-[18px] pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-[3px] h-[3px] bg-white/10 rounded-full"></div>
          ))}
        </div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
        </svg>

        <div className="max-w-[540px] mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <span className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-light-green mb-4 block">
                O QUE DIZEM AS PROFESSORAS
              </span>
              <h2 className="font-serif text-[38px] font-bold leading-[1.1] tracking-[-0.02em]">
                Quem usou, não abre mão
              </h2>
            </div>
          </Reveal>
          
          <div className="flex flex-col gap-[16px]">
            {[
              { 
                quote: "Usei na semana de acolhimento e os alunos adoraram! Até os mais tímidos participaram ativamente.", 
                name: "Maria Andrade", 
                role: "Professora 3º Ano",
                city: "Fortaleza/CE",
                initials: "MA",
                color: "bg-[#52B788]"
              },
              { 
                quote: "Finalmente um material que pensa na inclusão de verdade. As adaptações por NEE fizeram toda diferença.", 
                name: "Juliana Souza", 
                role: "Coordenadora Pedagógica",
                city: "São Paulo/SP",
                initials: "JS",
                color: "bg-accent"
              },
              { 
                quote: "Economizei horas de planejamento toda semana. As fichas são claras e práticas.", 
                name: "Carla Ribeiro", 
                role: "Educadora Especial",
                city: "Porto Alegre/RS",
                initials: "CR",
                color: "bg-[#7B9E87]"
              }
            ].map((test, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="glass-card rounded-[18px] p-[28px] relative hover:-translate-y-1 transition-transform duration-200">
                  <div className="absolute top-4 right-6 font-serif text-[80px] text-white/10 leading-none select-none pointer-events-none">
                    "
                  </div>
                  <div className="text-[#E8B84B] text-[14px] tracking-[3px] mb-2">★★★★★</div>
                  <p className="font-sans text-[14px] text-white/80 leading-[1.8] italic my-[14px]">"{test.quote}"</p>
                  <div className="flex items-center gap-[12px] mt-6">
                    <div className={`w-[42px] h-[42px] rounded-full ${test.color} flex items-center justify-center font-serif font-bold text-[16px] text-white shrink-0`}>
                      {test.initials}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-sans text-[14px] font-semibold text-white">{test.name}</span>
                      <span className="text-white/40">·</span>
                      <span className="font-sans text-[12px] text-white/45">{test.role} · {test.city}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      
      <WaveTop />

      {/* Conheça a Professora Section */}
      <section className="py-[96px] px-[28px] bg-bg">
        <div className="max-w-[480px] mx-auto text-center flex flex-col items-center">
          <Reveal>
            <span className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mb-8 block">
              QUEM CRIOU ESSE MATERIAL
            </span>
            
            <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-[3px] border-primary mb-6 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                alt="Professora Marcia Alves" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <h2 className="font-serif text-[28px] font-bold text-primary mb-3 tracking-[-0.02em]">
              Professora Marcia Alves
            </h2>
            
            <div className="bg-surface-green text-primary font-sans text-[11px] font-semibold px-4 py-1.5 rounded-full mb-6 inline-block">
              Educadora Especialista em Inclusão
            </div>
            
            <p className="font-sans text-[14px] text-muted leading-[1.75] mb-8">
              Com mais de 15 anos em sala de aula, desenvolveu o método das Dinâmicas de Inclusão para ajudar professoras a terem aulas mais leves e participativas.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-white border border-black/5 text-primary font-sans text-[12px] font-semibold px-4 py-2 rounded-full card-shadow">
                7 anos de experiência
              </div>
              <div className="bg-white border border-black/5 text-primary font-sans text-[12px] font-semibold px-4 py-2 rounded-full card-shadow">
                3.200+ professoras atendidas
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Garantia Section */}
      <section className="py-[96px] px-[28px] bg-surface-green-medium relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-[480px] mx-auto bg-white rounded-[24px] p-[48px_40px] text-center relative z-10 shadow-[0_2px_8px_rgba(0,0,0,0.04),_0_16px_48px_rgba(0,0,0,0.08)]">
          <Reveal>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 font-serif text-[96px] text-primary opacity-15 leading-none select-none pointer-events-none">
              7
            </div>
            <div className="relative z-10">
              <div className="inline-block border border-primary/20 bg-surface-green text-primary font-sans text-[11px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-[0.1em] mb-6">
                Garantia Incondicional
              </div>
              <h3 className="font-serif text-[32px] font-bold text-primary mb-4 tracking-[-0.02em]">
                7 Dias para Testar
              </h3>
              <p className="font-sans text-[14px] text-muted leading-[1.8] mb-8">
                Se você não ficar 100% satisfeita com o material, devolvemos todo o seu dinheiro. Sem perguntas, sem burocracia. Sua confiança vale mais do que qualquer venda.
              </p>
              <div className="flex justify-center gap-4 font-sans text-[12px] text-primary font-semibold">
                <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-accent" /> Pagamento Seguro</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-accent" /> Reembolso Total</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[96px] px-[28px] bg-bg">
        <div className="max-w-[600px] mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <span className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mb-4 block">
                PERGUNTAS FREQUENTES
              </span>
              <h2 className="font-serif text-[38px] font-bold text-primary leading-[1.1] tracking-[-0.02em]">
                Perguntas Frequentes
              </h2>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="border-t border-black/5">
              <FAQItem 
                question="Para quem é esse kit?" 
                answer="Para professores da educação básica, coordenadores pedagógicos e educadores que buscam tornar suas aulas mais inclusivas e engajadoras." 
              />
              <FAQItem 
                question="Como recebo após a compra?" 
                answer="O acesso é enviado imediatamente para o seu e-mail e WhatsApp logo após a confirmação do pagamento." 
              />
              <FAQItem 
                question="Para qual faixa etária funciona melhor?" 
                answer="As dinâmicas são adaptáveis e cobrem desde a educação infantil até o ensino médio, com instruções de como ajustar a linguagem." 
              />
              <FAQItem 
                question="Preciso instalar algum programa?" 
                answer="Não. Todo o material é entregue em formato PDF, pronto para ser lido no celular, tablet, computador ou impresso." 
              />
              <FAQItem 
                question="Posso compartilhar com colegas da escola?" 
                answer="O acesso é individual. A reprodução ou compartilhamento não autorizado deste material é crime previsto na Lei 9.610/98." 
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-[120px] px-[28px] bg-accent text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none"></div>
        <svg className="absolute -top-[100px] -left-[100px] w-[400px] h-[400px] pointer-events-none" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="199" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
        </svg>
        <svg className="absolute -bottom-[100px] -right-[100px] w-[500px] h-[500px] pointer-events-none" viewBox="0 0 500 500">
          <circle cx="250" cy="250" r="249" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
        </svg>

        <div className="max-w-[600px] mx-auto relative z-10">
          <Reveal>
            <h2 className="font-serif italic text-[52px] font-bold mb-6 leading-[1.1] tracking-[-0.02em]">
              Pronta para transformar suas aulas?
            </h2>
            <p className="font-sans text-[16px] mb-10 text-white/75 max-w-[380px] mx-auto leading-[1.6]">
              Mais de 3.200 professoras já estão usando esse material para engajar seus alunos.
            </p>
            <CTAButton variant="white" className="mb-6">
              Quero o Kit Agora
            </CTAButton>
            <p className="font-sans text-[12px] text-white/50">
              🔒 Pagamento seguro · Acesso imediato · Garantia de 7 dias
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-[28px] text-center">
        <div className="font-serif italic text-[24px] font-bold mb-6">
          Dinâmicas Inclusivas
        </div>
        <div className="flex justify-center gap-6 font-sans text-[13px] text-white/60 mb-8">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
        <p className="font-sans text-[12px] text-white/40">
          © 2026 Dinâmicas Inclusivas. Todos os direitos reservados.
        </p>
      </footer>
      
    </div>
  );
}
