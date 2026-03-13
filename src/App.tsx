import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Shield, FileText, Calendar, LayoutTemplate } from 'lucide-react';

const CTAButton = ({ children, className = '', href = '#' }: { children: React.ReactNode, className?: string, href?: string }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`inline-flex items-center justify-center font-sans font-semibold text-[16px] h-[56px] px-8 rounded-full transition-colors ${className}`}
  >
    {children}
  </motion.a>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#E0DDD8]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-[20px] text-left font-sans font-semibold text-[15px] text-primary hover:text-accent transition-colors"
      >
        <span className="pr-4">{question}</span>
        <span className="text-2xl font-serif font-light leading-none">{isOpen ? '−' : '+'}</span>
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
      <section className="bg-primary text-white pt-[80px] pb-[96px] px-[28px] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border border-white/5"></div>
        <div className="absolute -top-4 -right-4 w-[350px] h-[350px] rounded-full border border-white/5"></div>
        <div className="absolute top-16 right-16 w-[200px] h-[200px] rounded-full border border-white/5"></div>
        
        <div className="absolute top-12 left-12 grid grid-cols-6 gap-3 opacity-12">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-[3px] h-[3px] bg-white rounded-full"></div>
          ))}
        </div>

        <div className="max-w-[580px] mx-auto text-center flex flex-col items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center border border-white/20 bg-white/5 px-4 py-1.5 rounded-full font-sans text-[11px] font-semibold tracking-[0.1em] uppercase mb-8"
          >
            ✦ Kit Digital para Educadoras
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-[58px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.02em] mb-6"
          >
            +200 Dinâmicas para <br/>
            <span className="italic text-light-green font-normal">Inclusão na Sala de Aula</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[15px] text-white/70 mb-8 leading-[1.75]"
          >
            Atividades prontas, pensadas para engajar todos os alunos — inclusive aqueles com necessidades especiais.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 font-sans text-[13px] text-white/80"
          >
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-light-green" /> Ensino Fundamental I</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-light-green" /> Ensino Fundamental II</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-light-green" /> Ensino Médio</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full mb-4"
          >
            <CTAButton href="#planos" className="w-full bg-accent text-white hover:bg-[#B84521]">
              Quero Minhas Dinâmicas Agora →
            </CTAButton>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-sans text-[12px] text-white/40 mb-16"
          >
            🔒 Pagamento 100% seguro · Garantia de 7 dias
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full border-t border-white/10 pt-8 grid grid-cols-3 gap-4"
          >
            <div className="flex flex-col items-center">
              <span className="font-serif text-[40px] text-white leading-none mb-1">200+</span>
              <span className="font-sans text-[10px] text-white/50 uppercase tracking-[0.1em] font-semibold">Dinâmicas</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-[40px] text-white leading-none mb-1">4.9 ★</span>
              <span className="font-sans text-[10px] text-white/50 uppercase tracking-[0.1em] font-semibold">Avaliação</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-[40px] text-white leading-none mb-1">3.2mil+</span>
              <span className="font-sans text-[10px] text-white/50 uppercase tracking-[0.1em] font-semibold">Professoras</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* O Que Você Recebe Section */}
      <section className="py-[96px] px-[28px] bg-white">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-primary mb-4 block">
              O QUE VOCÊ RECEBE
            </span>
            <h2 className="font-serif text-[38px] font-bold text-primary leading-[1.1]">
              Material completo para <span className="italic font-normal">transformar suas aulas</span>
            </h2>
          </div>

          <div className="flex flex-col gap-[16px]">
            {/* Featured Card */}
            <div className="bg-primary rounded-[20px] p-[32px] flex flex-col md:flex-row items-start md:items-center gap-8 relative overflow-hidden">
              <div className="font-serif text-[80px] text-light-green opacity-30 leading-none shrink-0">
                200+
              </div>
              <div className="flex-grow">
                <h3 className="font-serif text-[24px] font-semibold text-white mb-2">
                  Dinâmicas para Inclusão
                </h3>
                <p className="font-sans text-[15px] text-white/70 leading-[1.75] mb-6">
                  Atividades categorizadas por faixa etária, objetivo pedagógico e tipo de necessidade. Prontas para aplicar.
                </p>
                <div className="inline-block border border-white/20 text-white font-sans text-[11px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-[0.1em]">
                  Principal
                </div>
              </div>
            </div>

            {/* 3 Cards Grid */}
            <div className="grid md:grid-cols-2 gap-[16px]">
              {/* Card A */}
              <div className="bg-white border border-[#E8E8E0] rounded-[16px] p-[24px] md:col-span-2 lg:col-span-1">
                <div className="w-[44px] h-[44px] bg-surface-green rounded-[12px] flex items-center justify-center mb-6">
                  <LayoutTemplate className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-[24px] font-semibold text-primary mb-2">
                  Fichas de Aplicação
                </h3>
                <p className="font-sans text-[15px] text-muted leading-[1.75]">
                  Passo a passo para cada dinâmica, materiais necessários e tempo estimado.
                </p>
              </div>

              {/* Card B */}
              <div className="bg-white border border-[#E8E8E0] rounded-[16px] p-[24px]">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-[44px] h-[44px] bg-surface-green rounded-[12px] flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="bg-gold/10 text-gold font-sans text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-[0.1em]">
                    BÔNUS
                  </div>
                </div>
                <h3 className="font-serif text-[24px] font-semibold text-primary mb-2">
                  Guia de Adaptações por NEE
                </h3>
                <p className="font-sans text-[15px] text-muted leading-[1.75]">
                  Orientações específicas para autismo, TDAH, deficiência visual e intelectual.
                </p>
              </div>

              {/* Card C */}
              <div className="bg-white border border-[#E8E8E0] rounded-[16px] p-[24px]">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-[44px] h-[44px] bg-surface-green rounded-[12px] flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div className="bg-gold/10 text-gold font-sans text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-[0.1em]">
                    BÔNUS
                  </div>
                </div>
                <h3 className="font-serif text-[24px] font-semibold text-primary mb-2">
                  Planner Mensal de Dinâmicas
                </h3>
                <p className="font-sans text-[15px] text-muted leading-[1.75]">
                  Organize suas atividades ao longo do mês com um planner prático e visual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-[96px] px-[28px] bg-bg">
        <div className="max-w-[440px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mb-4 block">
              ESCOLHA SEU PLANO
            </span>
            <h2 className="font-serif text-[38px] font-bold text-primary leading-[1.1]">
              Investimento que cabe no bolso
            </h2>
          </div>
          
          <div className="flex flex-col gap-[16px]">
            {/* Basic Plan */}
            <div className="bg-white border border-[#DEDAD4] rounded-[20px] p-[32px]">
              <div className="font-sans text-[12px] font-semibold tracking-[0.1em] uppercase text-muted mb-4">
                Plano Básico
              </div>
              
              <div className="mb-6">
                <span className="font-serif text-[52px] font-bold text-primary leading-none">R$ 17,90</span>
              </div>
              
              <div className="h-[1px] bg-[#DEDAD4] w-full mb-6"></div>
              
              <ul className="space-y-4 mb-8">
                {[
                  '+200 dinâmicas digitais',
                  'Fichas de aplicação prontas',
                  'Acesso vitalício ao material'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans text-[14px] text-primary">
                    <div className="w-[6px] h-[6px] bg-primary shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <CTAButton className="w-full border border-primary text-primary hover:bg-primary/5">
                Começar com o Básico
              </CTAButton>
            </div>

            {/* Premium Plan */}
            <div className="bg-white border-2 border-primary rounded-[20px] p-[32px] relative mt-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white font-sans text-[11px] font-semibold px-4 py-1 rounded-full uppercase tracking-[0.1em] whitespace-nowrap">
                MAIS POPULAR
              </div>
              
              <div className="font-sans text-[12px] font-semibold tracking-[0.1em] uppercase text-primary mb-4">
                Planejamento Divertido 2026
              </div>
              
              <div className="mb-6">
                <span className="font-sans text-[13px] text-muted line-through block mb-1">De R$ 67,00</span>
                <span className="font-serif text-[60px] font-bold text-primary leading-none">R$ 37,00</span>
              </div>
              
              <div className="h-[1px] bg-[#DEDAD4] w-full mb-6"></div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-sans text-[14px] text-primary">
                  <div className="w-[6px] h-[6px] bg-primary shrink-0"></div>
                  <span>+200 dinâmicas digitais</span>
                </li>
                <li className="flex items-center gap-3 font-sans text-[14px] text-primary">
                  <div className="w-[6px] h-[6px] bg-primary shrink-0"></div>
                  <span>Fichas de aplicação prontas</span>
                </li>
                <li className="flex items-center gap-3 font-sans text-[14px] text-primary">
                  <div className="w-[6px] h-[6px] bg-primary shrink-0"></div>
                  <span>Acesso vitalício ao material</span>
                </li>
                <li className="flex items-center gap-3 font-sans text-[14px] text-primary">
                  <div className="w-[6px] h-[6px] bg-primary shrink-0"></div>
                  <span className="flex items-center gap-2">
                    Guia de adaptações por NEE
                    <span className="bg-gold/10 text-gold text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">BÔNUS</span>
                  </span>
                </li>
                <li className="flex items-center gap-3 font-sans text-[14px] text-primary">
                  <div className="w-[6px] h-[6px] bg-primary shrink-0"></div>
                  <span className="flex items-center gap-2">
                    Planner mensal de dinâmicas
                    <span className="bg-gold/10 text-gold text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">BÔNUS</span>
                  </span>
                </li>
              </ul>
              
              <CTAButton className="w-full bg-accent text-white hover:bg-[#B84521] mb-4">
                Quero o Kit Completo →
              </CTAButton>
              <p className="text-center font-sans text-[13px] text-muted">
                Parcele em até 12x sem juros · Boleto · Pix
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-[96px] px-[28px] bg-primary text-white">
        <div className="max-w-[540px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-light-green mb-4 block">
              O QUE DIZEM AS PROFESSORAS
            </span>
            <h2 className="font-serif text-[38px] font-bold leading-[1.1]">
              Quem usou, não abre mão
            </h2>
          </div>
          
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
              <div key={i} className="bg-white/5 border border-white/10 rounded-[18px] p-[28px]">
                <div className="text-gold text-[14px] tracking-[3px] mb-4">★★★★★</div>
                <p className="font-sans text-[14px] text-white/80 leading-[1.8] font-italic italic my-[14px]">"{test.quote}"</p>
                <div className="flex items-center gap-[12px]">
                  <div className={`w-[42px] h-[42px] rounded-full ${test.color} flex items-center justify-center font-serif font-bold text-[16px] text-white`}>
                    {test.initials}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-sans text-[14px] font-semibold text-white">{test.name}</span>
                    <span className="text-white/40">·</span>
                    <span className="font-sans text-[12px] text-white/45">{test.role} · {test.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conheça a Professora Section */}
      <section className="py-[96px] px-[28px] bg-white">
        <div className="max-w-[480px] mx-auto text-center flex flex-col items-center">
          <span className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mb-8 block">
            QUEM CRIOU ESSE MATERIAL
          </span>
          
          <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-[3px] border-primary mb-6">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
              alt="Professora Marcia Alves" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="font-serif text-[28px] font-bold text-primary mb-3">
            Professora Marcia Alves
          </h2>
          
          <div className="bg-primary text-white font-sans text-[11px] font-semibold px-4 py-1.5 rounded-full mb-6">
            Educadora Especialista em Inclusão
          </div>
          
          <p className="font-sans text-[14px] text-muted leading-[1.75] mb-8">
            Com mais de 15 anos em sala de aula, desenvolveu o método das Dinâmicas de Inclusão para ajudar professoras a terem aulas mais leves e participativas.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-bg text-primary font-sans text-[12px] font-semibold px-4 py-2 rounded-full">
              7 anos de experiência
            </div>
            <div className="bg-bg text-primary font-sans text-[12px] font-semibold px-4 py-2 rounded-full">
              3.200+ professoras atendidas
            </div>
          </div>
        </div>
      </section>

      {/* Garantia Section */}
      <section className="py-[96px] px-[28px] bg-surface-green">
        <div className="max-w-[500px] mx-auto bg-white rounded-[20px] p-[48px] text-center relative overflow-hidden">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 font-serif text-[120px] text-primary opacity-5 leading-none select-none pointer-events-none">
            7
          </div>
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto bg-surface-green rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-[24px] font-semibold text-primary mb-4">
              Garantia Incondicional de 7 Dias
            </h3>
            <p className="font-sans text-[14px] text-muted leading-[1.75] mb-8">
              Se você não ficar 100% satisfeita com o material, devolvemos todo o seu dinheiro. Sem perguntas, sem burocracia. Sua confiança vale mais do que qualquer venda.
            </p>
            <div className="inline-block border border-primary text-primary font-sans text-[11px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-[0.1em]">
              Compra 100% Segura
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[96px] px-[28px] bg-bg">
        <div className="max-w-[600px] mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mb-4 block">
              PERGUNTAS FREQUENTES
            </span>
            <h2 className="font-serif text-[38px] font-bold text-primary leading-[1.1]">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="border-t border-[#E0DDD8]">
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
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-[80px] px-[28px] bg-accent text-white text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif italic text-[44px] font-bold mb-4 leading-[1.1]">
            Pronta para transformar suas aulas?
          </h2>
          <p className="font-sans text-[15px] mb-10 text-white/80">
            Mais de 3.200 professoras já estão usando esse material.
          </p>
          <CTAButton className="bg-white text-accent hover:bg-bg mb-6">
            Quero o Kit Agora
          </CTAButton>
          <p className="font-sans text-[12px] text-white/50">
            🔒 Pagamento seguro · Acesso imediato · Garantia de 7 dias
          </p>
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
