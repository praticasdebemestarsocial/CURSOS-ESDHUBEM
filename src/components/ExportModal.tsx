import React, { useState } from 'react';
import { X, Code, Copy, Check, Download, ExternalLink, Globe, Github, Terminal, CheckCircle2 } from 'lucide-react';
import { STANDALONE_FILES } from '../data/standaloneFiles';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FileKey = 'index.html' | 'styles.css' | 'app.js' | 'manifest.json' | 'sw.js';

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<FileKey>('index.html');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'instructions'>('code');

  if (!isOpen) return null;

  const fileData = STANDALONE_FILES.find(f => f.filename === selectedFile) || STANDALONE_FILES[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(fileData.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([fileData.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = selectedFile;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const fileKeys: FileKey[] = ['index.html', 'styles.css', 'app.js', 'manifest.json', 'sw.js'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-white/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-slate-100 border border-yellow-300/80 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden shadow-2xl shadow-yellow-950/60 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-yellow-950 bg-[#070e1a] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-yellow-100 border border-yellow-700/60 flex items-center justify-center text-yellow-600">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                Arquivos do PWA para GitHub Pages
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-yellow-100 border border-yellow-300 text-yellow-700">
                  Pronto para Deploy
                </span>
              </h2>
              <p className="text-xs text-slate-600">
                Código completo sem omissões dos 5 arquivos essenciais solicitados.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Mode: Código vs Passo a Passo */}
        <div className="flex items-center justify-between px-5 pt-3 border-b border-yellow-950 bg-[#08111e]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3.5 py-2 text-xs font-bold border-b-2 transition ${
                activeTab === 'code'
                  ? 'border-yellow-500 text-yellow-700'
                  : 'border-transparent text-slate-600 hover:text-slate-800'
              }`}
            >
              Código dos Arquivos ({fileKeys.length})
            </button>
            <button
              onClick={() => setActiveTab('instructions')}
              className={`px-3.5 py-2 text-xs font-bold border-b-2 transition flex items-center gap-1.5 ${
                activeTab === 'instructions'
                  ? 'border-yellow-500 text-yellow-700'
                  : 'border-transparent text-slate-600 hover:text-slate-800'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-yellow-600" />
              Guia de Ativação do GitHub Pages
            </button>
          </div>

          <a
            href="./github-pages/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-yellow-600 hover:text-yellow-700 flex items-center gap-1 px-2.5 py-1 rounded bg-yellow-100/60 border border-yellow-300/60 transition mb-2"
          >
            <span>Testar Versão Standalone</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
          
          {activeTab === 'code' ? (
            <div className="space-y-4">
              
              {/* File Selector Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {fileKeys.map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedFile(key);
                      setCopied(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition whitespace-nowrap flex items-center gap-1.5 border ${
                      selectedFile === key
                        ? 'bg-yellow-600 text-slate-900 border-yellow-500 shadow-md shadow-yellow-500/20'
                        : 'bg-slate-100/80 text-slate-700 border-yellow-950 hover:border-slate-400'
                    }`}
                  >
                    <Code className="w-3 h-3" />
                    {key}
                  </button>
                ))}
              </div>

              {/* File Action Bar */}
              <div className="p-3 bg-[#060e1b] rounded-xl border border-yellow-950 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <span className="text-xs font-mono font-bold text-yellow-700">
                    {selectedFile}
                  </span>
                  <p className="text-[11px] text-slate-600">
                    {fileData.description}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    id="btn-copy-file-content"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition ${
                      copied
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                        : 'bg-yellow-100 text-yellow-700 border-yellow-300 hover:bg-yellow-900'
                    }`}
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copiado para o Clipboard!' : 'Copiar Código'}</span>
                  </button>

                  <button
                    onClick={handleDownload}
                    id="btn-download-single-file"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 bg-slate-200 hover:bg-slate-300 border border-slate-400 transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Baixar</span>
                  </button>
                </div>
              </div>

              {/* Code Display Area */}
              <div className="relative">
                <pre className="p-4 rounded-xl bg-[#030711] border border-yellow-950 font-mono text-xs text-slate-700 overflow-x-auto max-h-[480px] custom-scrollbar select-text leading-relaxed">
                  <code>{fileData.content}</code>
                </pre>
              </div>

            </div>
          ) : (
            /* Guia de Ativação do GitHub Pages */
            <div className="space-y-5 text-slate-700 text-xs sm:text-sm leading-relaxed">
              
              <div className="p-4 rounded-xl bg-yellow-100/30 border border-yellow-300/60">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2 mb-1">
                  <Globe className="w-4 h-4 text-yellow-600" />
                  Como Ativar o PWA Gratuitamente no GitHub Pages (Deploy em 3 Minutos)
                </h3>
                <p className="text-slate-700 text-xs">
                  O projeto foi arquitetado 100% estático e com caminhos relativos (<code className="text-yellow-700 font-mono">./</code>), não necessitando de Node.js, Webpack ou build servers no GitHub Pages.
                </p>
              </div>

              <div className="grid gap-4">
                
                {/* Passo 1 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-yellow-950 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-yellow-100 border border-yellow-300 text-yellow-600 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      Crie um Repositório no GitHub
                    </h4>
                    <p className="text-slate-600 text-xs">
                      Acesse <a href="https://github.com/new" target="_blank" rel="noreferrer" className="text-yellow-600 underline">github.com/new</a>, defina o nome (ex: <code className="text-slate-800">curso-comunicacao-assertiva</code>) e marque como <strong>Público</strong>.
                    </p>
                  </div>
                </div>

                {/* Passo 2 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-yellow-950 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-yellow-100 border border-yellow-300 text-yellow-600 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      Envie os 5 Arquivos na Raiz do Repositório
                    </h4>
                    <p className="text-slate-600 text-xs mb-2">
                      Coloque os arquivos diretamente na raiz (branch <code className="text-slate-800 font-mono">main</code>):
                    </p>
                    <div className="bg-white p-2.5 rounded font-mono text-[11px] text-yellow-700 border border-yellow-950 space-y-0.5">
                      <div>├── index.html</div>
                      <div>├── styles.css</div>
                      <div>├── app.js</div>
                      <div>├── manifest.json</div>
                      <div>├── sw.js</div>
                      <div>└── icon.svg (ou pwa-192x192.png)</div>
                    </div>
                  </div>
                </div>

                {/* Passo 3 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-yellow-950 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-yellow-100 border border-yellow-300 text-yellow-600 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      Ative o GitHub Pages nas Configurações
                    </h4>
                    <p className="text-slate-600 text-xs mb-1">
                      No seu repositório no GitHub:
                    </p>
                    <ol className="list-decimal list-inside text-xs text-slate-700 space-y-1">
                      <li>Vá em <strong>Settings</strong> (Configurações) &gt; aba lateral <strong>Pages</strong>.</li>
                      <li>Em <strong>Build and deployment &gt; Source</strong>, selecione <strong>Deploy from a branch</strong>.</li>
                      <li>Em <strong>Branch</strong>, selecione <code className="text-yellow-700 font-mono">main</code> e a pasta <code className="text-yellow-700 font-mono">/ (root)</code>.</li>
                      <li>Clique em <strong>Save</strong>.</li>
                    </ol>
                  </div>
                </div>

                {/* Passo 4 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-yellow-950 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      Pronto! Seu PWA Estará no Ar com HTTPS
                    </h4>
                    <p className="text-slate-600 text-xs">
                      Em aproximadamente 60 segundos, seu link público estará ativo em:
                      <br />
                      <code className="text-yellow-700 font-mono bg-white/50 px-2 py-0.5 rounded mt-1 inline-block">
                        https://seu-usuario.github.io/curso-comunicacao-assertiva/
                      </code>
                    </p>
                    <p className="text-slate-600 text-xs mt-2">
                      Ao abrir no celular (Chrome ou Safari), o botão <strong>Instalar App</strong> ou o menu do navegador permitirá instalar o PWA na tela inicial com suporte offline!
                    </p>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-yellow-950 bg-[#070e1a] flex items-center justify-between">
          <span className="text-xs text-slate-600">
            Você pode copiar qualquer arquivo acima ou baixar tudo com 1 clique.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-bold text-slate-900 bg-slate-200 hover:bg-slate-300 border border-slate-400 transition"
          >
            Fechar Janela
          </button>
        </div>

      </div>
    </div>
  );
};
