import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  CreditCard,
  QrCode,
  Sun,
  ShieldCheck,
  Sparkles,
  Send,
  CheckCircle2,
  ArrowUp,
  Heart,
  Award,
  Eye
} from 'lucide-react';
import newsletterImg from '../assets/newsletter.jpg';
import esdhubemLogo from '../assets/esdhubem-logo.png';

interface FooterProps {
  onSelectCategory: (categoryName: string) => void;
  onOpenValidator: () => void;
  onOpenAbout: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenCertificatePreview?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenValidator,
  onOpenAbout,
  onNavigate,
  onOpenCertificatePreview
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [legalModalTitle, setLegalModalTitle] = useState<string | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111827] text-slate-300 pt-12 pb-8 border-t border-slate-800 relative">
      {/* Banner / Pre-Footer "Imagem ilustrativa" with supportive counseling/learning vibe */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#182333] via-[#243042] to-[#1e293b] text-white p-6 sm:p-10 shadow-xl border border-slate-700/60 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Visual with "Imagem ilustrativa" tag */}
          <div className="w-full md:w-5/12 relative rounded-2xl overflow-hidden shadow-lg h-56 sm:h-64 shrink-0 bg-slate-900">
            <img
              src={newsletterImg}
              alt="Atendimento humanizado e mentoria ESDHUBEM"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/20">
              Imagem ilustrativa
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200">
              Mentoria e desenvolvimento contínuo para sua carreira e bem-estar.
            </div>
          </div>

          {/* Newsletter Box inside the pre-footer */}
          <div className="w-full md:w-7/12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFC72C] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 fill-[#FFC72C]" />
              <span>Comunidade ESDHUBEM</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Assine nossa newsletter
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
              Receba nossos conteúdos exclusivos, novidades sobre lançamentos de cursos e dicas valiosas para acelerar o seu desenvolvimento e alavancar a sua carreira! Assine agora e faça parte da comunidade ESDHUBEM.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="pt-2">
              <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                  className="flex-1 bg-white text-slate-900 placeholder-slate-400 px-4 py-3 rounded-xl sm:rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC72C]"
                  id="newsletter-email-input"
                />
                <button
                  type="submit"
                  className="bg-[#FFC72C] hover:bg-[#F5B014] active:scale-95 text-slate-950 font-bold px-6 py-3 rounded-xl sm:rounded-full text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-md"
                  id="newsletter-submit-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>Inscrever</span>
                </button>
              </div>

              {subscribed && (
                <div className="mt-2 text-xs font-semibold text-amber-300 flex items-center gap-1.5 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC72C]" />
                  <span>Obrigado! Seu e-mail foi cadastrado com sucesso.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800 text-xs sm:text-sm">
          {/* Column 1: Fale Conosco */}
          <div className="space-y-4 lg:col-span-1">
            <div className="mb-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-white/5 flex items-center justify-center p-1 border border-white/10 shadow-lg">
               <img src={esdhubemLogo} alt="ESDHUBEM Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider">
              Fale Conosco
            </h4>
            <div className="space-y-3 text-slate-300 text-xs">
              <a
                href="https://wa.me/5511960319637"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-[#FFC72C] transition-colors group"
                id="footer-contact-phone"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800 group-hover:bg-[#243042] flex items-center justify-center text-[#FFC72C] shrink-0 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold">(11) 960319637</span>
              </a>

              <a
                href="mailto:esdhubem@proton.me"
                className="flex items-center gap-2.5 hover:text-[#FFC72C] transition-colors group"
                id="footer-contact-email"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800 group-hover:bg-[#243042] flex items-center justify-center text-[#FFC72C] shrink-0 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="break-all">esdhubem@proton.me</span>
              </a>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>9h - 17h, Segunda - Sexta</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>São Paulo SP Brasil</span>
              </div>
            </div>

            {/* Métodos de Pagamento */}
            <div className="pt-4 border-t border-slate-800">
              <h5 className="text-white font-semibold text-xs uppercase tracking-wider mb-2.5">
                Métodos de Pagamento
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200 text-xs font-semibold">
                  <QrCode className="w-3.5 h-3.5 text-emerald-400" />
                  Pix
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200 text-xs font-semibold">
                  <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                  Cartão
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200 text-xs font-semibold">
                  <Sun className="w-3.5 h-3.5 text-[#FFC72C]" />
                  Sol
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Links úteis */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base uppercase tracking-wider">
              Links úteis
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left font-medium"
                >
                  Blog ESDHUBEM
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categorias')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left text-white font-medium"
                >
                  Aprofunde: Categorias (18 Áreas)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('livraria')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left text-[#FFC72C] font-semibold"
                >
                  Livraria (Livros & Materiais)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categoria:landing-pages-biolinks')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left text-emerald-400 font-semibold"
                >
                  Sites & Biolinks (Landing Pages)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('aplicativos')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left text-cyan-400 font-semibold"
                >
                  Aplicativos & Dashboards (MEI e ME)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('artigos')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left text-emerald-400 font-semibold"
                >
                  Artigos Científicos & Anais (Zenodo / DOI)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sala-de-aula')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left text-white font-semibold flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC72C]" />
                  <span>Sala de Aula (Área do Aluno)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left"
                >
                  Sobre nós / A Escola
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenValidator}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left text-[#FFC72C] font-semibold flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#FFC72C]" />
                  <span>Validar Certificado</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCertificatePreview?.()}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left text-amber-400 font-bold flex items-center gap-1"
                >
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Modelo do Certificado & Guia PDF</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('regras-certificacao-merito')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left text-[#FFC72C] font-extrabold flex items-center gap-1"
                >
                  <Award className="w-3.5 h-3.5 text-[#FFC72C]" />
                  <span>Regras de Certificação</span>
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/5511960319637"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FFC72C] transition-colors"
                >
                  Contato e Suporte WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Informações Legais */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base uppercase tracking-wider">
              Informações Legais
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('corpo-docente')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left text-amber-400 font-semibold"
                >
                  Corpo Docente & Especialistas (E-E-A-T)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('direitos-aluno')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left text-emerald-400 font-semibold"
                >
                  Horas Complementares & Amparo Legal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('politica-pagamento')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left text-cyan-400 font-semibold"
                >
                  Política de Pagamento & Reembolso (CDC)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('secretaria-documentacao')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left text-[#FFC72C] font-extrabold flex items-center gap-1"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FFC72C]" />
                  <span>Secretaria & Tabela de Serviços</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('regras-certificacao-merito')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left text-[#FFC72C] font-extrabold flex items-center gap-1"
                >
                  <Award className="w-3.5 h-3.5 text-[#FFC72C]" />
                  <span>Regras de Certificação (Mérito Acadêmico)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('informacoes-legais')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left text-white font-semibold"
                >
                  Validade dos Certificados (Lei 9.394/96)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('politicas')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left"
                >
                  Política de Privacidade & LGPD
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('informacoes-legais')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left"
                >
                  Termos de Uso & Responsabilidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('informacoes-legais')}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left"
                >
                  Dados Institucionais & Coordenação
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenValidator}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left text-emerald-400 font-semibold"
                >
                  Verificação Antifraude com QR Code
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 & 5: Categorias */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-bold text-base uppercase tracking-wider">
                Categorias
              </h4>
              <button
                onClick={() => onNavigate('categorias')}
                className="text-xs text-[#FFC72C] hover:underline font-bold cursor-pointer"
              >
                Ver Todas as 18 →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {[
                { name: 'Treinamento nas Empresas B2B', slug: 'categoria:treinamentos-palestras-corporativas', isB2b: true },
                { name: 'Formação Empresarial', slug: 'categoria:formacao-empresarial' },
                { name: 'Cursos Freepremium', slug: 'categoria:cursos-freepremium' },
                { name: 'Horas Complementares', slug: 'categoria:horas-complementares' },
                { name: 'Formação Livre', slug: 'categoria:formacao-livre' },
                { name: 'Desenvolvimento Pessoal', slug: 'categoria:desenvolvimento-pessoal' },
                { name: 'Desenvolvimento Humano', slug: 'categoria:desenvolvimento-humano' },
                { name: 'Desenvolvimento Profissional', slug: 'categoria:desenvolvimento-profissional' },
                { name: 'Desenvolvimento Ético', slug: 'categoria:desenvolvimento-etico' },
                { name: 'Desenvolvimento Relacional', slug: 'categoria:desenvolvimento-relacional' },
                { name: 'Desenvolvimento Financeiro', slug: 'categoria:desenvolvimento-financeiro' },
                { name: 'Desenvolvimento Ambiental', slug: 'categoria:desenvolvimento-ambiental' },
                { name: 'Desenvolvimento da Consciência', slug: 'categoria:desenvolvimento-da-consciencia' },
                { name: 'Desenvolvimento Tecnológico e IA', slug: 'categoria:desenvolvimento-tecnologico-ia' },
                { name: 'Desenvolvimento nas Empresas', slug: 'categoria:desenvolvimento-nas-empresas' },
                { name: 'Práticas Integrativas', slug: 'categoria:praticas-integrativas' },
                { name: 'Coach Integrativo', slug: 'categoria:coach-integrativo' },
                { name: 'Pedagogia Integrativa', slug: 'categoria:pedagogia-integrativa' },
                { name: 'Livros & Materiais', slug: 'livraria' },
                { name: 'Aplicativos & Dashboards', slug: 'aplicativos' },
                { name: 'Landing Pages & Biolinks', slug: 'categoria:landing-pages-biolinks' },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onNavigate(item.slug);
                  }}
                  className="hover:text-[#FFC72C] transition-colors cursor-pointer text-left py-0.5 truncate text-slate-300 flex items-center gap-1"
                >
                  <span>• {item.name}</span>
                  {item.isB2b && (
                    <span className="text-[9px] bg-[#FFC72C] text-slate-950 font-black px-1 rounded uppercase ml-1">
                      B2B
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 mt-8 border-t border-slate-800/50 flex flex-col items-center justify-center gap-6 text-center text-slate-400">
          <div className="text-[10px] leading-relaxed max-w-4xl text-slate-500">
            <p className="mb-2">
              <strong>ESDHUBEM</strong> — CNPJ 61.928.778/0001-50. Certificados de Cursos Livres emitidos pela instituição.
            </p>
            <p>
              Amparado pela Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/96) e Decreto nº 5.154/04. Não é diploma de graduação, pós-graduação ou ensino técnico. A aceitação como atividade complementar fica sujeita às normas internas de cada instituição de ensino.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs">
            <p>© 2026 ESDHUBEM São Paulo SP Brasil. Todos os direitos reservados.</p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 mt-4 sm:mt-0"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal Info Modal */}
      {legalModalTitle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white text-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-bold text-lg text-slate-900">
                {legalModalTitle}
              </h3>
              <button
                onClick={() => setLegalModalTitle(null)}
                className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed max-h-80 overflow-y-auto">
              <p>
                A <strong>ESDHUBEM - Escola de Desenvolvimento Humano e Bem-estar (CNPJ 61928778000150)</strong> atua com transparência, segurança de dados e respeito ao consumidor.
              </p>
              <p>
                <strong>Certificação e Direitos:</strong> Nossos cursos livres são amparados pelo Decreto Federal nº 5.154/04 e Lei 9.394/96. O acesso às videoaulas é 100% livre no modelo Freepremium. Apenas a emissão do certificado com validação oficial e QR Code possui taxa administrativa.
              </p>
              <p>
                <strong>Reembolsos & Garantia:</strong> Para cursos pagos e emissão de certificados, garantimos reembolso integral em até 7 dias corridos caso o conteúdo não atenda às suas expectativas, conforme o Código de Defesa do Consumidor.
              </p>
              <p>
                <strong>Atendimento Oficial:</strong> Dúvidas podem ser encaminhadas diretamente ao e-mail <code>esdhubem@proton.me</code> ou telefone <code>(11) 960319637</code> de segunda a sexta, das 9h às 17h.
              </p>
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModalTitle(null)}
                className="px-4 py-2 bg-[#243042] text-white text-xs font-bold rounded-xl hover:bg-[#182333] cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
