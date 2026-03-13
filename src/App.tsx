import React, { useState, useEffect, useRef } from 'react';
import { Check, Shield } from 'lucide-react';

const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/5 py-[22px]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between text-left transition-colors duration-200 group ${isOpen ? 'bg-green-wash rounded-[8px] p-4 -mx-4' : 'p-0'}`}
      >
        <span className={`font-sans font-bold text-[16px] pr-4 transition-colors duration-200 ${isOpen ? 'text-green' : 'text-ink'}`}>{question}</span>
        <div className={`w-[32px] h-[32px] rounded-full border-[1.5px] flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen ? 'border-green-light bg-green-wash text-green rotate-45' : 'border-green-light bg-green-wash text-green'}`}>
          <span className="text-lg leading-none mb-[2px]">+</span>
        </div>
      </button>
      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <p className={`pt-[16px] pb-[16px] text-[14px] text-ink-muted leading-[1.8] font-sans ${isOpen ? 'px-4 -mx-4' : ''}`}>
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink selection:bg-green-light selection:text-ink">
      
      {/* SECTION 1 — ANNOUNCEMENT BAR */}
      <div className="bg-yellow text-ink text-center py-2 px-4 font-display text-[12px] font-bold uppercase tracking-[0.1em]">
        🎁 OFERTA ESPECIAL · COMPRE HOJE E GANHE 2 BÔNUS EXCLUSIVOS 🎁
      </div>

      {/* SECTION 2 — NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-[10px] border-b border-black/5">
        <div className="max-w-[1000px] mx-auto px-[24px] h-[72px] flex items-center justify-between">
          <div className="font-sans text-[22px] font-extrabold text-green flex items-baseline cursor-pointer">
            Dinâmicas<span className="text-coral">·</span>
          </div>
          <a href="#planos" className="bg-coral text-white font-display font-bold text-[13px] px-6 py-2.5 rounded-[100px] hover:bg-[#d64a20] hover:-translate-y-[1px] transition-all duration-200">
            Quero o Kit →
          </a>
        </div>
      </nav>

      {/* SECTION 3 — HERO */}
      <section className="bg-white relative overflow-hidden pt-[72px] pb-[56px] px-[24px]">
        {/* Decorative Blobs */}
        <div className="absolute top-[-40px] right-[-40px] w-[280px] h-[280px] bg-green-light opacity-50 rounded-full blur-[60px] pointer-events-none z-0 blob-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[100px] left-[-60px] w-[200px] h-[200px] bg-yellow-light opacity-60 rounded-full blur-[50px] pointer-events-none z-0 blob-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-20px] right-[10%] w-[160px] h-[160px] bg-lilac-light opacity-40 rounded-full blur-[40px] pointer-events-none z-0 blob-float" style={{ animationDelay: '4s' }}></div>

        <div className="max-w-[560px] mx-auto text-center flex flex-col items-center relative z-10 w-full">
          <Reveal>
            <div className="bg-green-wash border-[1.5px] border-green-light rounded-[100px] px-[20px] py-[8px] font-display text-[12px] font-bold uppercase tracking-[0.1em] text-green mb-[28px] inline-block">
              ✦ Kit Digital para Educadoras ✦
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="font-sans font-extrabold leading-[1.2] tracking-[-0.01em] mb-[20px]">
              <span className="block text-ink text-[48px] md:text-[64px]">+200 Dinâmicas para</span>
              <span className="block text-green italic text-[56px] md:text-[72px]">Inclusão</span>
              <span className="block text-ink-soft text-[36px] md:text-[48px]">na Sala de Aula</span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="font-sans text-[16px] text-ink-muted mb-[36px] leading-[1.75] max-w-[480px] mx-auto">
              Atividades cuidadosamente organizadas para engajar todos os alunos — especialmente aqueles com necessidades especiais.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap justify-center items-center gap-[16px] mb-[36px]">
              {['Ensino Fundamental I', 'Ensino Fundamental II', 'Ensino Médio'].map((item, i) => (
                <div key={i} className="bg-green-wash rounded-[100px] px-[16px] py-[8px] flex items-center gap-2">
                  <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center text-green text-[12px] font-bold">✓</div>
                  <span className="font-sans text-[13px] font-bold text-green">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={400} className="w-full">
            <a href="#planos" className="flex items-center justify-center w-full max-w-[440px] mx-auto h-[62px] rounded-[100px] bg-coral text-white font-display text-[16px] font-bold shadow-[0_8px_24px_rgba(232,87,42,0.3)] hover:-translate-y-[3px] hover:shadow-[0_14px_32px_rgba(232,87,42,0.4)] transition-all duration-[220ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]">
              Quero Minhas Dinâmicas Agora →
            </a>
            <p className="font-sans text-[12px] text-ink-muted mt-[14px]">
              🔒 Pagamento seguro · Acesso imediato · Garantia de 7 dias
            </p>
          </Reveal>

          <Reveal delay={500} className="w-full mt-[64px]">
            <div className="bg-bg-section border-t border-black/5 rounded-[24px] grid grid-cols-3 py-[32px] px-[16px]">
              <div className="text-center relative">
                <div className="font-sans text-[36px] md:text-[48px] font-extrabold leading-none">
                  <span className="text-green">200</span><span className="text-coral">+</span>
                </div>
                <span className="font-display text-[11px] text-ink-muted uppercase tracking-[0.1em] mt-[8px] block">Dinâmicas</span>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-black/5"></div>
              </div>
              <div className="text-center relative">
                <div className="font-sans text-[36px] md:text-[48px] font-extrabold leading-none">
                  <span className="text-green">4.9</span><span className="text-coral">★</span>
                </div>
                <span className="font-display text-[11px] text-ink-muted uppercase tracking-[0.1em] mt-[8px] block">Avaliação</span>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-black/5"></div>
              </div>
              <div className="text-center">
                <div className="font-sans text-[36px] md:text-[48px] font-extrabold leading-none">
                  <span className="text-green">3.2mil</span><span className="text-coral">+</span>
                </div>
                <span className="font-display text-[11px] text-ink-muted uppercase tracking-[0.1em] mt-[8px] block">Professoras</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WAVY DIVIDER */}
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px', background: 'white', marginBottom: '-2px' }}>
        <path d="M0,30 C180,60 360,0 540,30 C720,60 900,0 1080,30 C1260,60 1380,20 1440,30 L1440,60 L0,60Z" fill="#F4F6F4"/>
      </svg>

      {/* SECTION 4 — O QUE VOCÊ RECEBE */}
      <section className="py-[88px] px-[24px] bg-bg-section">
        <div className="max-w-[560px] mx-auto">
          <Reveal>
            <div className="text-center mb-[40px]">
              <div className="inline-block bg-green-wash text-green font-display text-[12px] uppercase px-[16px] py-[6px] rounded-[100px] mb-[16px]">
                O QUE VOCÊ RECEBE
              </div>
              <h2 className="font-sans text-[36px] md:text-[44px] text-ink font-extrabold leading-[1.2] tracking-[-0.01em] mb-[16px]">
                Material completo para <span className="text-green">transformar suas aulas</span>
              </h2>
              <p className="font-sans text-[15px] text-ink-muted max-w-[420px] mx-auto leading-[1.75]">
                Tudo que você precisa para aplicar atividades inclusivas sem gastar horas planejando.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-[16px]">
            <Reveal delay={0}>
              <div className="bg-green rounded-[24px] p-[36px] relative overflow-hidden hover:-translate-y-[3px] transition-transform duration-200 card-shadow">
                <div className="absolute top-[-20px] right-[-20px] w-[120px] h-[120px] rounded-full bg-white/5 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-[56px] h-[56px] rounded-[18px] bg-white/15 flex items-center justify-center text-[28px] mb-[20px]">📦</div>
                  <h3 className="font-sans text-[28px] font-extrabold text-white mb-[12px] tracking-[-0.01em] leading-[1.2]">
                    +200 Dinâmicas para Inclusão
                  </h3>
                  <p className="font-sans text-[14px] text-white/75 leading-[1.7] mb-[24px]">
                    Categorizadas por faixa etária, objetivo pedagógico e tipo de necessidade especial. Um acervo completo para o ano todo.
                  </p>
                  <div className="inline-block bg-white/10 text-white font-display text-[11px] px-[12px] py-[6px] rounded-[100px]">
                    Material Principal
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-white rounded-[20px] p-[24px] flex items-center gap-[20px] hover:-translate-y-[3px] transition-transform duration-200 card-shadow">
                <div className="w-[48px] h-[48px] rounded-[16px] bg-green-wash flex items-center justify-center text-[24px] shrink-0">📋</div>
                <div>
                  <h3 className="font-sans text-[18px] font-bold text-ink mb-[4px]">Fichas de Aplicação Prontas</h3>
                  <p className="font-sans text-[14px] text-ink-muted leading-[1.6]">Passo a passo, materiais e adaptações.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-white rounded-[20px] p-[24px] flex items-center gap-[20px] hover:-translate-y-[3px] transition-transform duration-200 card-shadow">
                <div className="w-[48px] h-[48px] rounded-[16px] bg-yellow-light flex items-center justify-center text-[24px] shrink-0">🎯</div>
                <div>
                  <div className="inline-block bg-yellow text-ink font-display text-[10px] font-bold uppercase px-[10px] py-[3px] rounded-[100px] mb-[8px]">BÔNUS</div>
                  <h3 className="font-sans text-[18px] font-bold text-ink mb-[4px]">Guia de Adaptações por NEE</h3>
                  <p className="font-sans text-[14px] text-ink-muted leading-[1.6]">Para autismo, TDAH, deficiência visual e intelectual.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="bg-white rounded-[20px] p-[24px] flex items-center gap-[20px] hover:-translate-y-[3px] transition-transform duration-200 card-shadow">
                <div className="w-[48px] h-[48px] rounded-[16px] bg-lilac-light flex items-center justify-center text-[24px] shrink-0">📅</div>
                <div>
                  <div className="inline-block bg-yellow text-ink font-display text-[10px] font-bold uppercase px-[10px] py-[3px] rounded-[100px] mb-[8px]">BÔNUS</div>
                  <h3 className="font-sans text-[18px] font-bold text-ink mb-[4px]">Planner Mensal de Dinâmicas</h3>
                  <p className="font-sans text-[14px] text-ink-muted leading-[1.6]">Organize suas semanas com sequências prontas.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 5 — COMO VOCÊ RECEBE */}
      <section className="py-[88px] px-[24px] bg-white">
        <div className="max-w-[760px] mx-auto">
          <div className="grid md:grid-cols-3 gap-[16px] relative">
            <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] border-t-[2px] border-dashed border-green-light -z-10"></div>
            {[
              { step: "1", title: "Escolha seu Plano", body: "Selecione a opção ideal para você" },
              { step: "2", title: "Realize o Pagamento", body: "Pix, cartão ou boleto, em segundos" },
              { step: "3", title: "Acesse no WhatsApp", body: "Receba tudo imediatamente após a compra" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white border-[1.5px] border-green-light rounded-[20px] p-[28px] text-center relative z-10 hover:-translate-y-[3px] transition-transform duration-200">
                  <div className="w-[48px] h-[48px] rounded-full bg-green text-white font-sans text-[22px] font-extrabold flex items-center justify-center mx-auto mb-[16px]">
                    {item.step}
                  </div>
                  <h3 className="font-sans text-[18px] font-extrabold text-ink mb-[8px]">{item.title}</h3>
                  <p className="font-sans text-[14px] text-ink-muted leading-[1.6]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — BÔNUS EXCLUSIVOS */}
      <section className="py-[88px] px-[24px] bg-green relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-green-mid opacity-30 rounded-full blur-[60px] pointer-events-none z-0 blob-float"></div>
        
        <div className="max-w-[760px] mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-[48px]">
              <div className="inline-block bg-yellow text-ink font-display text-[12px] font-bold px-[16px] py-[6px] rounded-[100px] mb-[16px]">
                🎁 AO COMPRAR HOJE
              </div>
              <h2 className="font-sans text-[36px] md:text-[44px] text-white font-extrabold tracking-[-0.01em] leading-[1.2]">
                2 Bônus que Valem Mais que o Kit
              </h2>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-[24px]">
            {[
              { num: "01", title: "Combo Jogos Lúdicos", val: "Avaliado em R$ 59,90", body: "Dezenas de jogos prontos para imprimir e engajar a turma toda.", icon: "🎲" },
              { num: "02", title: "50 Apostilas de Exercícios", val: "Avaliado em R$ 49,90", body: "Atividades complementares com gabarito para reforço escolar.", icon: "📚" }
            ].map((bonus, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white/10 border-[1.5px] border-white/15 rounded-[24px] p-[32px] hover:-translate-y-[3px] transition-transform duration-200 h-full flex flex-col">
                  <div className="inline-block bg-yellow text-ink font-display text-[10px] font-bold uppercase px-[12px] py-[4px] rounded-[100px] mb-[20px] self-start">
                    BÔNUS {bonus.num}
                  </div>
                  <div className="w-[60px] h-[60px] rounded-full bg-white/10 flex items-center justify-center text-[28px] mb-[16px]">
                    {bonus.icon}
                  </div>
                  <h3 className="font-sans text-[22px] text-white font-extrabold mb-[8px] leading-[1.2]">{bonus.title}</h3>
                  <div className="font-sans italic text-[13px] text-white/40 mb-[16px]">{bonus.val}</div>
                  <div className="h-[1px] w-full bg-white/10 mb-[16px]"></div>
                  <p className="font-sans text-[14px] text-white/70 leading-[1.7] mt-auto">{bonus.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — PLANOS E PREÇOS */}
      <section id="planos" className="py-[88px] px-[24px] bg-bg-section">
        <div className="max-w-[560px] mx-auto">
          <Reveal>
            <div className="text-center mb-[48px]">
              <h2 className="font-sans text-[36px] md:text-[44px] text-ink font-extrabold leading-[1.2] tracking-[-0.01em]">
                Escolha seu Plano
              </h2>
            </div>
          </Reveal>
          
          <div className="flex flex-col gap-[20px] max-w-[460px] mx-auto">
            <Reveal delay={0}>
              <div className="bg-white border-[1.5px] border-black/10 rounded-[24px] p-[36px] hover:-translate-y-[3px] transition-transform duration-200 card-shadow">
                <div className="font-display text-[11px] text-ink-muted uppercase tracking-[0.1em] text-center mb-[16px]">PLANO BÁSICO</div>
                <div className="text-center mb-[20px]">
                  <span className="font-sans text-[58px] text-ink font-extrabold leading-none tracking-[-0.01em]">R$ 17,90</span>
                </div>
                <div className="w-[80px] h-[1px] bg-green-light mx-auto mb-[24px]"></div>
                <ul className="space-y-[12px] mb-[32px]">
                  {[
                    '+200 dinâmicas digitais em PDF',
                    'Fichas de aplicação prontas',
                    'Acesso vitalício ao material',
                    'Suporte por e-mail'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-[12px]">
                      <div className="w-[8px] h-[8px] rounded-full bg-green mt-[8px] shrink-0"></div>
                      <span className="font-sans text-[14px] text-ink-soft leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full h-[56px] rounded-[100px] border-[2px] border-green bg-white text-green font-display text-[15px] font-bold hover:bg-green hover:text-white transition-colors duration-200">
                  Começar com o Básico
                </button>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-white border-[2.5px] border-green rounded-[24px] p-[36px] relative hover:-translate-y-[3px] transition-transform duration-200 shadow-[0_8px_40px_rgba(46,125,82,0.15)]">
                <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-green text-white font-display text-[11px] font-bold px-[16px] py-[6px] rounded-[100px] whitespace-nowrap">
                  ⭐ MAIS POPULAR
                </div>
                <div className="font-display text-[11px] text-green uppercase tracking-[0.1em] text-center mb-[8px] mt-[8px]">PLANEJAMENTO DIVERTIDO 2026</div>
                <div className="text-center mb-[20px]">
                  <span className="font-sans text-[14px] text-ink-muted line-through block mb-[4px]">De R$ 67,00</span>
                  <span className="font-sans text-[66px] text-green font-extrabold leading-none tracking-[-0.01em]">R$ 37,00</span>
                </div>
                <div className="w-[80px] h-[1px] bg-green-light mx-auto mb-[24px]"></div>
                <ul className="space-y-[12px] mb-[32px]">
                  <li className="flex items-start gap-[12px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-green mt-[8px] shrink-0"></div>
                    <span className="font-sans text-[14px] text-ink-soft leading-[1.6]">Tudo do Plano Básico</span>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-green mt-[8px] shrink-0"></div>
                    <span className="font-sans text-[14px] text-ink-soft leading-[1.6] flex items-center gap-2 flex-wrap">
                      Guia de Adaptações por NEE <span className="bg-yellow text-ink text-[10px] font-display font-bold px-[8px] py-[2px] rounded-[100px] uppercase">BÔNUS</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-green mt-[8px] shrink-0"></div>
                    <span className="font-sans text-[14px] text-ink-soft leading-[1.6] flex items-center gap-2 flex-wrap">
                      Planner Mensal de Dinâmicas <span className="bg-yellow text-ink text-[10px] font-display font-bold px-[8px] py-[2px] rounded-[100px] uppercase">BÔNUS</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-green mt-[8px] shrink-0"></div>
                    <span className="font-sans text-[14px] text-ink-soft leading-[1.6]">Suporte no WhatsApp 30 dias</span>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-green mt-[8px] shrink-0"></div>
                    <span className="font-sans text-[14px] text-ink-soft leading-[1.6]">Atualizações gratuitas</span>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-green mt-[8px] shrink-0"></div>
                    <span className="font-sans text-[14px] text-ink-soft leading-[1.6]">Acesso ao grupo exclusivo</span>
                  </li>
                </ul>
                <button className="w-full h-[58px] rounded-[100px] bg-coral text-white font-display text-[16px] font-bold shadow-[0_8px_24px_rgba(232,87,42,0.25)] hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(232,87,42,0.35)] transition-all duration-200 mb-[16px]">
                  Quero o Kit Completo →
                </button>
                <p className="text-center font-sans text-[13px] text-ink-muted">
                  💳 Parcele em até 12x · Pix · Boleto
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 8 — DEPOIMENTOS */}
      <section className="py-[88px] px-[24px] bg-bg-section">
        <div className="max-w-[560px] mx-auto">
          <Reveal>
            <div className="text-center mb-[48px]">
              <h2 className="font-sans text-[36px] md:text-[44px] text-ink font-extrabold leading-[1.2] tracking-[-0.01em]">
                O que dizem as professoras
              </h2>
            </div>
          </Reveal>
          
          <div className="flex flex-col gap-[20px]">
            {[
              { quote: "Usei as dinâmicas na semana de acolhimento e os alunos adoraram! Até os mais tímidos participaram.", name: "Maria Andrade", role: "Professora 3º Ano", city: "Fortaleza/CE", initials: "MA", bg: "bg-green-light", color: "text-green" },
              { quote: "Finalmente um material que pensa na inclusão de verdade. As adaptações por NEE fizeram toda diferença.", name: "Juliana Souza", role: "Coordenadora", city: "São Paulo/SP", initials: "JS", bg: "bg-coral-light", color: "text-coral" },
              { quote: "Economizei horas de planejamento toda semana. As fichas são claras e práticas.", name: "Carla Ribeiro", role: "Educadora Especial", city: "Porto Alegre/RS", initials: "CR", bg: "bg-lilac-light", color: "text-lilac" }
            ].map((test, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white rounded-[24px] p-[28px] hover:-translate-y-[3px] transition-transform duration-200 card-shadow">
                  <div className="text-yellow text-[18px] tracking-[3px]">★★★★★</div>
                  <p className="font-sans italic text-[15px] text-ink-soft leading-[1.85] my-[14px]">"{test.quote}"</p>
                  <div className="flex items-center gap-[12px] mt-[16px]">
                    <div className={`w-[44px] h-[44px] rounded-full ${test.bg} flex items-center justify-center font-sans font-extrabold text-[16px] ${test.color} shrink-0`}>
                      {test.initials}
                    </div>
                    <div>
                      <div className="font-sans text-[14px] font-bold text-ink">{test.name}</div>
                      <div className="font-sans text-[13px] text-ink-muted">{test.role} · {test.city}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — GARANTIA */}
      <section className="py-[88px] px-[24px] bg-white">
        <Reveal>
          <div className="max-w-[480px] mx-auto bg-white border-[2px] border-green-light rounded-[28px] p-[52px_40px] text-center shadow-[0_8px_48px_rgba(46,125,82,0.1)] hover:-translate-y-[3px] transition-transform duration-200">
            <div className="text-[48px] mb-[16px] leading-none">🛡️</div>
            <div className="inline-block bg-green-wash text-green font-display text-[12px] font-bold px-[16px] py-[6px] rounded-[100px] mb-[16px]">
              Garantia Incondicional
            </div>
            <h3 className="font-sans text-[34px] font-extrabold text-green mb-[16px] tracking-[-0.01em] leading-[1.2]">
              7 Dias para Testar Sem Risco
            </h3>
            <p className="font-sans text-[15px] text-ink-muted leading-[1.85] mb-[24px]">
              Se você não ficar 100% satisfeita, devolvemos todo o seu dinheiro. Sem perguntas, sem burocracia. Sua confiança vale mais que qualquer venda.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-[12px]">
              <div className="bg-green-wash text-green font-display text-[12px] font-bold px-[16px] py-[8px] rounded-[100px]">
                🔒 Pagamento Seguro
              </div>
              <div className="bg-green-wash text-green font-display text-[12px] font-bold px-[16px] py-[8px] rounded-[100px]">
                ↩ Reembolso Total
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 10 — CONHEÇA A PROFESSORA */}
      <section className="py-[88px] px-[24px] bg-bg-section">
        <Reveal>
          <div className="max-w-[480px] mx-auto text-center flex flex-col items-center">
            <div className="w-[96px] h-[96px] rounded-full overflow-hidden border-[3px] border-green mb-[16px] shadow-[0_4px_20px_rgba(46,125,82,0.2)]">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                alt="Professora Marcia Alves" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="inline-block bg-green-wash text-green font-display text-[11px] font-bold px-[12px] py-[4px] rounded-[100px] mb-[12px]">
              CRIADORA DO MATERIAL
            </div>
            <h2 className="font-sans text-[36px] font-extrabold text-ink mb-[4px] tracking-[-0.01em]">
              Professora Marcia Alves
            </h2>
            <div className="font-sans italic text-[15px] text-ink-muted mb-[16px]">
              Educadora Especialista em Inclusão
            </div>
            <p className="font-sans text-[14px] text-ink-muted leading-[1.85] mb-[24px] max-w-[380px]">
              Com mais de 15 anos em sala de aula, desenvolveu o método das Dinâmicas de Inclusão para ajudar professoras a terem aulas mais leves e participativas.
            </p>
            <div className="flex flex-wrap justify-center gap-[12px]">
              <div className="bg-green-wash text-green font-display text-[13px] font-bold px-[16px] py-[8px] rounded-[100px]">
                7 anos de experiência
              </div>
              <div className="bg-green-wash text-green font-display text-[13px] font-bold px-[16px] py-[8px] rounded-[100px]">
                3.200+ professoras
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 11 — FAQ */}
      <section className="py-[88px] px-[24px] bg-white">
        <div className="max-w-[540px] mx-auto">
          <Reveal>
            <div className="text-center mb-[48px]">
              <h2 className="font-sans text-[36px] md:text-[44px] text-ink font-extrabold leading-[1.2] tracking-[-0.01em]">
                Perguntas Frequentes
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="border-t border-black/5">
              <FAQItem question="Para quem é esse kit?" answer="Para professores da educação básica, coordenadores pedagógicos e educadores que buscam tornar suas aulas mais inclusivas e engajadoras." />
              <FAQItem question="Como recebo o material após a compra?" answer="O acesso é enviado imediatamente para o seu e-mail e WhatsApp logo após a confirmação do pagamento." />
              <FAQItem question="Para qual faixa etária funciona melhor?" answer="As dinâmicas são adaptáveis e cobrem desde a educação infantil até o ensino médio, com instruções de como ajustar a linguagem." />
              <FAQItem question="Preciso instalar algum programa para usar?" answer="Não. Todo o material é entregue em formato PDF, pronto para ser lido no celular, tablet, computador ou impresso." />
              <FAQItem question="Posso usar na escola pública e particular?" answer="Sim! As dinâmicas foram pensadas para a realidade das escolas brasileiras, utilizando poucos ou nenhum recurso material extra." />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 12 — FINAL CTA */}
      <section className="py-[96px] px-[28px] bg-coral relative overflow-hidden text-center">
        {/* Decorative Blobs */}
        <div className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] bg-black opacity-10 rounded-full blur-[60px] pointer-events-none z-0 blob-float"></div>
        <div className="absolute bottom-[-40px] left-[-40px] w-[200px] h-[200px] bg-black opacity-10 rounded-full blur-[60px] pointer-events-none z-0 blob-float" style={{ animationDelay: '3s' }}></div>

        <div className="max-w-[560px] mx-auto relative z-10">
          <Reveal>
            <div className="inline-block bg-white text-coral font-display text-[12px] font-bold px-[16px] py-[6px] rounded-[100px] mb-[24px]">
              ✨ Oferta por Tempo Limitado
            </div>
            <h2 className="font-sans italic text-[44px] md:text-[52px] text-white font-extrabold mb-[20px] leading-[1.2] tracking-[-0.01em]">
              Pronta para transformar suas aulas?
            </h2>
            <p className="font-sans text-[16px] mb-[40px] text-white/80 max-w-[400px] mx-auto leading-[1.75]">
              Mais de 3.200 professoras já estão usando. Junte-se a elas.
            </p>
            <a href="#planos" className="flex items-center justify-center max-w-[400px] mx-auto h-[60px] rounded-[100px] bg-white text-coral font-display text-[16px] font-bold hover:scale-[1.04] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-200 mb-[20px]">
              QUERO O KIT AGORA →
            </a>
            <p className="font-sans text-[12px] text-white/50">
              🔒 Pagamento seguro · Acesso imediato · Garantia de 7 dias
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 13 — FOOTER */}
      <footer className="bg-ink text-white py-[40px] px-[24px] text-center">
        <div className="font-sans text-[22px] font-extrabold text-green-light flex items-baseline justify-center mb-[32px]">
          Dinâmicas<span className="text-coral">·</span>
        </div>
        <div className="flex justify-center flex-wrap gap-[24px] font-sans text-[13px] text-white/40 mb-[32px]">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
        <p className="font-sans text-[12px] text-white/25">
          © 2026 Dinâmicas Inclusivas. Todos os direitos reservados.
        </p>
      </footer>
      
    </div>
  );
}
