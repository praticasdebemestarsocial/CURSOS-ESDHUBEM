import React, { useState } from 'react';
import { X, Award, Send } from 'lucide-react';

interface CertificateModalProps {
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ onClose }) => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const curso = "Comunicação Assertiva com a Liderança";
  const dataConclusao = new Date().toLocaleDateString('pt-BR');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const whatsappNumber = "5511999999999"; // Substitua pelo seu número
    const text = `Olá, concluí o curso!\n*Nome:* ${nome}\n*CPF:* ${cpf}\n*Curso:* ${curso}\n*Data:* ${dataConclusao}\n\nGostaria de solicitar meu certificado.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Se preferir FormSubmit futuramente, descomente o bloco abaixo e adicione seu email no action do form
    /*
    fetch("https://formsubmit.co/ajax/SEU_EMAIL_AQUI", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        nome,
        cpf,
        curso,
        dataConclusao,
        assunto: "Nova solicitação de certificado"
      })
    })
    .then(response => response.json())
    .then(data => { ... })
    */

    // Simular um pequeno delay
    setTimeout(() => {
      setIsLoading(false);
      window.open(whatsappUrl, '_blank');
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-green-700">
            <Award className="w-5 h-5" />
            <h3 className="font-bold text-lg">Solicitar Certificado</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <div className="mb-6 bg-green-50 p-4 rounded-xl border border-green-200">
            <p className="text-sm text-green-800">
              <strong>Parabéns pela conclusão!</strong> Preencha seus dados abaixo com cuidado. 
              As informações serão usadas para a emissão oficial do seu certificado.
            </p>
          </div>

          <form id="cert-form" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Nome Completo
              </label>
              <input 
                type="text" 
                required
                value={nome}
                onChange={e => setNome(e.target.value)}
                placeholder="Como deve aparecer no certificado"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                CPF
              </label>
              <input 
                type="text" 
                required
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                placeholder="000.000.000-00"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 opacity-70">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Curso
                </label>
                <input 
                  type="text" 
                  disabled
                  value={curso}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Data
                </label>
                <input 
                  type="text" 
                  disabled
                  value={dataConclusao}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 text-sm"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="p-6 pt-2 border-t border-slate-100 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            form="cert-form"
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-green-600 hover:bg-green-700 rounded-xl transition disabled:opacity-50"
          >
            {isLoading ? 'Enviando...' : 'Enviar Solicitação'}
            {!isLoading && <Send className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
