import React from 'react';
import { FAQ_DATA } from '../data/coursesData';
import { X, Heart, Shield, BookOpen, Sparkles, CheckCircle2, Building, Mail, Phone } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenValidator: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenValidator,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#182333] text-white flex items-center justify-between border-b border-slate-700/60">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-[#FFC72C] fill-[#FFC72C]" />
            </div>
            <div>
              <h3 className="text-lg font-bold leading-tight">
                Sobre a ESDHUBEM
              </h3>
              <p className="text-xs text-slate-300">
                Escola de Desenvolvimento Humano e Bem-estar
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          {/* Mission */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFC72C] fill-[#FFC72C]" />
              Nossa Missão & Propósito
            </h4>
            <p className="text-slate-600">
              A <strong>ESDHUBEM</strong> nasceu com o compromisso de democratizar o acesso à educação socioemocional, ao autoconhecimento e às práticas integrativas com rigor didático, empatia e ética.
            </p>
            <p className="text-slate-600">
              Acreditamos que o progresso pessoal e profissional caminham juntos: quando uma pessoa aprende a regular suas emoções, aprimora sua comunicação e compreende seu papel ético no mundo, toda a sociedade ao seu redor floresce.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
              <h5 className="font-bold text-[#243042] text-xs uppercase tracking-wide mb-1">
                Modelo Freepremium
              </h5>
              <p className="text-xs text-slate-600">
                Você assiste a todas as aulas de graça. O pagamento ocorre apenas se desejar o certificado formal.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
              <h5 className="font-bold text-[#243042] text-xs uppercase tracking-wide mb-1">
                Certificados Válidos
              </h5>
              <p className="text-xs text-slate-600">
                Carga horária legítima e autenticação por QR Code e código alfanumérico com consulta pública instantânea.
              </p>
            </div>
          </div>

          {/* Institutional Data */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-xs">
            <h5 className="font-bold text-[#182333] flex items-center gap-1.5">
              <Building className="w-4 h-4 text-[#FFC72C]" />
              Identificação Institucional & Coordenação Pedagógica
            </h5>
            <div className="space-y-1 text-slate-700">
              <p><strong>Razão Social:</strong> ESDHUBEM - Escola de Desenvolvimento Humano e Bem-estar</p>
              <p><strong>CNPJ:</strong> 61928778000150</p>
              <p><strong>Coordenação & Autoria:</strong> Profª. Silviane Silvério (Especialista em Práticas Integrativas & Desenvolvimento Humano)</p>
              <p className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                <a href="http://lattes.cnpq.br/7481458793724724" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-bold">Lattes iD: 7481458793724724</a>
                <span>•</span>
                <a href="https://orcid.org/0000-0001-6311-1195" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline font-bold">ORCID iD: 0000-0001-6311-1195</a>
              </p>
              <p><strong>Sede:</strong> São Paulo - SP - Brasil</p>
              <p><strong>E-mail de Contato:</strong> esdhubem@proton.me</p>
              <p><strong>Telefone / WhatsApp:</strong> (11) 960319637</p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="pt-2 space-y-3">
            <h4 className="text-base font-bold text-slate-900">
              Perguntas Frequentes (FAQ)
            </h4>
            <div className="space-y-2.5">
              {FAQ_DATA.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-xs cursor-pointer"
                >
                  <summary className="font-bold text-slate-800 flex items-center justify-between list-none">
                    <span>{faq.question}</span>
                    <span className="text-[#243042] group-open:rotate-180 transition-transform font-bold">
                      ▾
                    </span>
                  </summary>
                  <p className="mt-2 text-slate-600 leading-relaxed pt-2 border-t border-slate-200/60">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onOpenValidator();
            }}
            className="text-xs font-semibold text-[#243042] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Validar Certificado Agora</span>
          </button>
          <button
            onClick={onClose}
            className="text-xs font-semibold px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
