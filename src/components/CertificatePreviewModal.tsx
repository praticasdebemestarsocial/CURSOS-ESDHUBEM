import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  Download,
  FileText,
  Award,
  CheckCircle2,
  ExternalLink,
  Lock,
  QrCode,
  Building2,
  FileCheck,
  Eye,
  Sparkles
} from 'lucide-react';
import certificateModelImg from '../assets/modelo-certificado.jpg';

interface CertificatePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificatePreviewModal: React.FC<CertificatePreviewModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'modelo' | 'pdf'>('modelo');
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen) return null;

  const pdfUrl = 'padrao-certificado-esdhubem.pdf';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-slate-700/80 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-5 sm:p-6 bg-[#182333] flex items-center justify-between border-b border-slate-700/80">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#FFC72C]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-400/20 text-[#FFC72C] text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full border border-amber-400/30">
                  Documento Oficial ESDHUBEM
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold leading-tight text-white mt-0.5">
                Modelo do Certificado & Padrão Digital
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('modelo')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              activeTab === 'modelo'
                ? 'bg-slate-900 text-[#FFC72C] border-t-2 border-[#FFC72C]'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Modelo de Certificado (Imagem)</span>
          </button>

          <button
            onClick={() => setActiveTab('pdf')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              activeTab === 'pdf'
                ? 'bg-slate-900 text-[#FFC72C] border-t-2 border-[#FFC72C]'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Novo Padrão de Qualificação (PDF)</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-slate-900">
          {activeTab === 'modelo' ? (
            <div className="space-y-6">
              {/* Image Preview Box */}
              <div className="relative bg-slate-950 rounded-2xl border border-slate-800 p-2 sm:p-4 group">
                <div className="relative overflow-hidden rounded-xl bg-slate-900 flex items-center justify-center min-h-[220px]">
                  <img
                    src={certificateModelImg}
                    alt="Modelo Oficial de Certificado de Formação Livre ESDHUBEM"
                    className={`w-full h-auto object-contain rounded-xl transition-all duration-300 ${
                      isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
                    }`}
                    onClick={() => setIsZoomed(!isZoomed)}
                  />
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    Clique na imagem para ampliar/reduzir
                  </span>
                  <a
                    href={certificateModelImg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 hover:underline"
                  >
                    <span>Abrir Imagem em Alta Definição</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Key Certificate Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                    <span>Amparo Legal Nacional</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Certificado de Formação Livre regido pela <strong>Lei nº 9.394/1996 (LDB)</strong> e Decreto Presidencial nº 5.154/2004, com validade acadêmica e profissional em todo o Brasil.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <QrCode className="w-5 h-5 shrink-0" />
                    <span>Módulo de Segurança QR</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Equipado com duplo QR Code para verificação instantânea no portal oficial e validação de código hash anti-fraude.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <FileCheck className="w-5 h-5 shrink-0" />
                    <span>Autenticação ITI Gov.br</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Dupla verificação governamental com assinatura digital da Coordenação ESDHUBEM (Prof.ª Silviane Silvério, CNPJ 61.928.778/0001-50).
                  </p>
                </div>
              </div>

              {/* Verification Callout */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#182333] to-slate-800 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    Quer testar a verificação pública de um certificado?
                  </h4>
                  <p className="text-xs text-slate-300">
                    Utilize o nosso sistema oficial de consulta inserindo o código impresso no documento.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('pdf');
                  }}
                  className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>Ver Apresentação do Padrão (PDF)</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* PDF Header & Download Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-800 to-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-extrabold text-xl shrink-0">
                    PDF
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      O Novo Padrão de Qualificação Digital
                    </h4>
                    <p className="text-xs text-slate-300">
                      Documento institucional apresentando o certificado de nova geração da ESDHUBEM
                    </p>
                  </div>
                </div>

                <a
                  href={pdfUrl}
                  download="Apresentacao-Novo-Padrao-Certificado-ESDHUBEM.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#FFC72C] hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-xl transition-all flex items-center gap-2 shadow-lg cursor-pointer shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Apresentação em PDF</span>
                </a>
              </div>

              {/* Slides / PDF Content Summary */}
              <div className="space-y-4">
                <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Destaques da Apresentação Oficial (6 Páginas)
                </h5>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {/* Slide 1 & 2 */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-white">
                      <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 text-[10px] flex items-center justify-center">1</span>
                      <span>Pilares de Confiança Institucional</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-300 pl-4 list-disc">
                      <li><strong>A Instituição:</strong> ESDHUBEM (CNPJ 61.928.778/0001-50).</li>
                      <li><strong>Amparo Legal:</strong> Lei de Diretrizes e Bases da Educação Nacional (LDB - Lei nº 9.394/1996).</li>
                      <li><strong>O Propósito:</strong> Liberdade de aprendizado e incentivo à qualificação profissional contínua.</li>
                    </ul>
                  </div>

                  {/* Slide 3 & 4 */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-white">
                      <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 text-[10px] flex items-center justify-center">2</span>
                      <span>Design Orientado ao Futuro</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-300 pl-4 list-disc">
                      <li><strong>Segurança & Credibilidade:</strong> Paleta azul profundo para solidez acadêmica e infraestrutura confiável.</li>
                      <li><strong>Inovação & Destaque:</strong> Farol cibernético amarelo representando a energia da conquista do aluno.</li>
                    </ul>
                  </div>

                  {/* Slide 5 */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-white">
                      <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 text-[10px] flex items-center justify-center">3</span>
                      <span>Infraestrutura de Autenticação</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-300 pl-4 list-disc">
                      <li><strong>Dupla Autenticação Governamental:</strong> Validação de assinaturas via portal oficial Gov.br (<code>validar.iti.gov.br</code>).</li>
                      <li><strong>Rastreabilidade de Emissão:</strong> Validação direta na plataforma oficial (<code>gerarcertificado.com.br</code>).</li>
                      <li><strong>Responsabilidade Legal:</strong> Assinatura oficial da Coordenação (Prof.ª Silviane Silvério).</li>
                    </ul>
                  </div>

                  {/* Slide 6 */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-white">
                      <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 text-[10px] flex items-center justify-center">4</span>
                      <span>Fluxo de Emissão Eficiente</span>
                    </div>
                    <ol className="space-y-1.5 text-slate-300 pl-4 list-decimal">
                      <li>Preenchimento dos dados acadêmicos e carga horária.</li>
                      <li>Geração automática dos QR Codes de validação e hash anti-fraude.</li>
                      <li>Exportação instantânea e entrega direta ao aluno.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#182333] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ESDHUBEM • CNPJ 61.928.778/0001-50 • São Paulo/SP</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors flex items-center gap-1.5 font-semibold cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Abrir PDF no Navegador</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg font-bold transition-colors cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
