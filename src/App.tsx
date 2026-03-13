import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, Play, MessageCircle, Gamepad2, FileText, 
  Zap, Star, ShieldCheck, AlertTriangle, ChevronDown, 
  ChevronUp, Smartphone, MonitorPlay, Users, Check, Lock, Gift, ArrowRight
} from 'lucide-react';

const CTAButton = ({ children, className = '', href = '#' }: { children: React.ReactNode, className?: string, href?: string }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg md:text-xl py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all ${className}`}
  >
    {children}
    <ArrowRight className="w-6 h-6" />
  </motion.a>
);

const Section = ({ children, className = '', id = '' }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 md:py-24 px-4 ${className}`}>
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl mb-4 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
      >
        <span className="pr-4">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-5 pb-5 text-slate-600"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-emerald-200">
      {/* Top Banner */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm font-medium tracking-wide">
        DESCONTO ESPECIAL VOLTA ÀS AULAS - EXPIRA 13/03, Sexta-Feira
      </div>

      {/* Hero Section */}
      <Section className="bg-white text-center pt-12 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
        >
          <Zap className="w-4 h-4" />
          Desconto por POUCO tempo!
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6"
        >
          <span className="text-blue-600">+200 Dinâmicas de Matemática</span><br/>
          Prontas para aumentar o engajamento das suas aulas
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 mb-8 flex items-center justify-center gap-2 font-medium"
        >
          <Play className="w-5 h-5 text-orange-500 fill-current" />
          Assista o vídeo abaixo
        </motion.p>

        {/* Video Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative max-w-3xl mx-auto aspect-video bg-slate-900 rounded-2xl shadow-2xl overflow-hidden mb-10 group cursor-pointer border-4 border-slate-100"
        >
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200" 
            alt="Video Thumbnail" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play className="w-10 h-10 text-white ml-2 fill-current" />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['Ensino Fundamental I', 'Ensino Fundamental II', 'Ensino Médio'].map((badge, i) => (
            <motion.div 
              key={badge}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2.5 rounded-full font-semibold border border-emerald-100 shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5" />
              {badge}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <CTAButton className="w-full md:w-auto px-10 py-5 text-xl">
            EU QUERO MINHAS DINÂMICAS PRONTAS!
          </CTAButton>
        </motion.div>
      </Section>

      {/* What you will receive */}
      <Section className="bg-slate-50 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">
          O QUE VOCÊ VAI <span className="text-emerald-500">RECEBER?</span>
        </h2>
        
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 relative">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
            <FileText className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">+200 Dinâmicas de Matemática</h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            <strong>Atividades dinâmicas</strong> que transformam <strong>conteúdos de matemática</strong> em aulas mais participativas, leves e fáceis de aplicar, desde o primeiro dia de aula.
          </p>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-400 rounded-full opacity-20 blur-sm"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-emerald-400 rounded-full opacity-20 blur-md"></div>
        </div>
      </Section>

      {/* How you will receive */}
      <Section className="bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-16">
          COMO VOU RECEBER O <span className="text-emerald-500">MATERIAL?</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-100 -z-10"></div>
          
          {[
            { icon: MessageCircle, title: 'Chega no seu WhatsApp', desc: 'Após a compra, você recebe o acesso imediato direto no WhatsApp.', color: 'text-emerald-500', bg: 'bg-emerald-100' },
            { icon: MonitorPlay, title: 'Você assiste', desc: 'Você assiste, entende a lógica da dinâmica e como tudo funciona.', color: 'text-blue-500', bg: 'bg-blue-100' },
            { icon: Users, title: 'Leva para sua sala', desc: 'Aplica exatamente o mesmo método na sua sala e coloca em prática.', color: 'text-orange-500', bg: 'bg-orange-100' }
          ].map((step, i) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className={`w-24 h-24 ${step.bg} ${step.color} rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white`}>
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Bonuses */}
      <Section className="bg-slate-50 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
          <Gift className="w-4 h-4" />
          Exclusivo
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">
          Ao comprar hoje você recebe <span className="text-blue-600">2 bônus exclusivos!</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { num: 1, icon: Gamepad2, title: 'COMBO JOGOS LÚDICOS!', oldPrice: 'R$59,90' },
            { num: 2, icon: FileText, title: '50 APOSTILAS DE EXERCÍCIOS COM GABARITO!', oldPrice: 'R$49,90' }
          ].map((bonus, i) => (
            <motion.div 
              key={bonus.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-br-xl">
                BÔNUS #{bonus.num}
              </div>
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform">
                <bonus.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 min-h-[56px] flex items-center justify-center">{bonus.title}</h3>
              <div className="flex items-center justify-center gap-2 text-lg">
                <span className="text-slate-400 line-through text-sm">De: {bonus.oldPrice}</span>
                <span className="font-bold text-emerald-500">Por: Grátis</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* WhatsApp Banner */}
      <div className="bg-emerald-500 py-12 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <MessageCircle className="w-10 h-10" />
            <Zap className="w-8 h-8 fill-current" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Após a compra, você recebe IMEDIATAMENTE no WhatsApp!
          </h2>
          <p className="text-emerald-100 text-lg">
            Acesso instantâneo a todo o material para você começar agora mesmo.
          </p>
        </div>
      </div>

      {/* Pricing */}
      <Section className="bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">
          Escolha Seu <span className="text-emerald-500">Plano</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-end">
          {/* Basic Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 relative"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">PLANO BÁSICO</h3>
              <div className="w-16 h-1 bg-slate-200 mx-auto rounded-full"></div>
            </div>
            
            <ul className="space-y-4 text-left mb-8">
              {[
                '200 DINÂMICAS CRIATIVAS DE MATEMÁTICA!',
                '10 DINÂMICAS COM PASSO A PASSO EM VÍDEO!',
                'RECEBIMENTO IMEDIATO PELO WHATSAPP',
                'Suporte via WhatsApp'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mb-8">
              <p className="text-slate-400 text-sm line-through mb-1">De R$47,90 por apenas</p>
              <p className="text-4xl font-extrabold text-emerald-500">R$17,90</p>
            </div>
            
            <CTAButton className="w-full text-base py-3">
              CONFIRMAR Plano Essencial
            </CTAButton>
            <p className="text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" /> Pagamento 100% seguro â Acesso imediato
            </p>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-emerald-50 rounded-3xl shadow-2xl border-2 border-emerald-400 p-8 relative transform md:-translate-y-4"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-md">
              <Star className="w-3 h-3 fill-current" /> MAIS POPULAR <Star className="w-3 h-3 fill-current" />
            </div>
            
            <div className="mb-8 mt-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">PLANEJAMENTO DIVERTIDO 2026</h3>
              <div className="w-16 h-1 bg-emerald-300 mx-auto rounded-full"></div>
            </div>
            
            <ul className="space-y-4 text-left mb-8">
              {[
                '200 DINÂMICAS CRIATIVAS DE MATEMÁTICA!',
                '200 DINÂMICAS COM PASSO A PASSO EM VÍDEO!',
                'PLANEJAMENTO ANUAL COMPLETO SEGUNDO A BNCC!',
                'DINÂMICAS SEPARADAS POR ANO E ASSUNTO!',
                '30 DINÂMICAS DE REFORÇO!',
                '(BÔNUS) COMBO JOGOS LÚDICOS!',
                '(BÔNUS) 50 APOSTILAS DE EXERCÍCIOS COM GABARITO!'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-800 text-sm font-medium">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mb-8">
              <p className="text-slate-500 text-sm line-through mb-1">De R$97,00 por apenas</p>
              <div className="flex items-center justify-center gap-3">
                <p className="text-5xl font-extrabold text-emerald-600">R$37,00</p>
                <span className="bg-emerald-200 text-emerald-800 text-xs font-bold px-2 py-1 rounded">61% OFF</span>
              </div>
            </div>
            
            <CTAButton className="w-full text-lg py-4 shadow-emerald-500/30">
              CONFIRMAR ACESSO AGORA
            </CTAButton>
            <p className="text-xs text-emerald-700 mt-4 font-medium flex items-center justify-center gap-1">
              <Star className="w-3 h-3 fill-current text-yellow-500" /> Mais de 80% dos professores escolhem esta opção.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-slate-900 text-center text-white py-20">
        <div className="inline-flex items-center gap-2 bg-slate-800 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          <Star className="w-4 h-4 fill-current" />
          Mais de 9.435 professores já utilizam
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
          Veja o Que Professoras <span className="text-emerald-400">Estão Dizendo</span>
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { text: "Queria parabenizar pelas dinâmicas, achei incrível, meu 6º ano amou ❤️", align: "justify-start", bg: "bg-slate-800" },
            { text: "Obg pelo suporte, vocês são muito atenciosos ❤️", align: "justify-start", bg: "bg-slate-800" },
            { text: "A gente que agradece! 💜", align: "justify-end", bg: "bg-blue-600" }
          ].map((msg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: msg.align === 'justify-start' ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`flex ${msg.align}`}
            >
              <div className={`max-w-[80%] md:max-w-[60%] p-4 rounded-2xl text-left text-lg ${msg.bg} ${msg.align === 'justify-start' ? 'rounded-tl-sm' : 'rounded-tr-sm'}`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center gap-1 mt-10">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
        </div>
      </Section>

      {/* Guarantee */}
      <Section className="bg-slate-50 text-center">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-emerald-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
          <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Garantia de <span className="text-emerald-500">7 Dias</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Você tem <strong>7 dias</strong> para testar todo o material. Se por qualquer motivo você não ficar satisfeita, basta nos enviar uma mensagem e devolvemos <strong>100% do seu dinheiro</strong>. Sem burocracia, sem perguntas.
          </p>
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full font-medium">
            <Lock className="w-5 h-5" />
            Compra 100% Segura e Protegida
          </div>
        </div>
      </Section>

      {/* Author */}
      <Section className="bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12">
          Conheça a <span className="text-emerald-500">Professora Marcia Alves</span>
        </h2>
        
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-100 shadow-lg mb-6">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
              alt="Professora Marcia Alves" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Professora Marcia Alves</h3>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Esposa, mãe e professora. Com mais de 15 anos em sala de aula, desenvolveu o método das Dinâmicas de Matemática para ajudar professoras a terem aulas mais leves e participativas.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-slate-50 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200">
              <Star className="w-4 h-4 text-emerald-500" /> 15+ anos de experiência
            </div>
            <div className="flex items-center gap-2 bg-slate-50 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200">
              <Users className="w-4 h-4 text-emerald-500" /> Mais de 9.000 professores treinados
            </div>
          </div>
        </div>
      </Section>

      {/* Piracy Warning */}
      <Section className="bg-slate-50 py-12">
        <div className="max-w-3xl mx-auto flex items-start gap-4 bg-red-50 border border-red-200 p-6 rounded-2xl">
          <AlertTriangle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-red-800 mb-2">PIRATARIA É CRIME</h4>
            <p className="text-red-700 text-sm">
              A reprodução, distribuição ou compartilhamento não autorizado deste material é crime previsto na Lei 9.610/98 e pode resultar em penalidades de até 4 anos de prisão e multa.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-10">
          PERGUNTAS <span className="text-blue-600">FREQUENTES</span>
        </h2>
        
        <div className="space-y-2">
          <FAQItem 
            question="Para quais séries essas dinâmicas são indicadas?" 
            answer="As dinâmicas são perfeitamente adaptáveis para o Ensino Fundamental I, Fundamental II e Ensino Médio. Você receberá instruções de como aplicar em cada nível." 
          />
          <FAQItem 
            question="Posso usar em qualquer escola?" 
            answer="Sim! O material foi desenvolvido para funcionar em escolas públicas e particulares, com turmas grandes ou pequenas, e requer poucos ou nenhum recurso financeiro para aplicação." 
          />
          <FAQItem 
            question="E se eu não gostar, posso pedir reembolso?" 
            answer="Com certeza. Você tem 7 dias de garantia incondicional. Se achar que o material não é para você, basta solicitar o reembolso e devolveremos 100% do valor." 
          />
          <FAQItem 
            question="Como recebo o material após a compra?" 
            answer="O acesso é imediato! Assim que o pagamento for confirmado, você receberá todo o material diretamente no seu WhatsApp e também no e-mail cadastrado." 
          />
          <FAQItem 
            question="O acesso é vitalício?" 
            answer="Sim! Você paga apenas uma vez e tem acesso para sempre ao material, incluindo todas as futuras atualizações." 
          />
        </div>
      </Section>

      {/* Footer CTA */}
      <Section className="bg-slate-50 text-center pb-12">
        <div className="max-w-2xl mx-auto mb-10">
           <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Garantia de 7 Dias</h3>
          <p className="text-slate-600 text-sm mb-4">
            Você tem 7 dias para testar todo o material. Se por qualquer motivo você não ficar satisfeita, basta nos enviar uma mensagem e devolvemos 100% do seu dinheiro.
          </p>
          <div className="flex items-center justify-center gap-1 text-emerald-600 text-sm font-medium">
            <Lock className="w-4 h-4" /> Compra 100% Segura e Protegida
          </div>
        </div>
        
        <CTAButton className="w-full md:w-auto px-10 py-5 text-xl mb-16">
          EU QUERO MINHAS DINÂMICAS PRONTAS!
        </CTAButton>
        
        <div className="border-t border-slate-200 pt-8 text-slate-400 text-sm">
          <p>© 2026 Dinâmicas de Matemática. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs">Este site não é afiliado ao Facebook, Google ou qualquer entidade do Meta/Alphabet.</p>
        </div>
      </Section>
    </div>
  );
}
