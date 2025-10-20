import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import FormInput from '../../components/ocorrencias/FormInput';
import FormSelect from '../../components/ocorrencias/FormSelect';
import FormTextArea from '../../components/ocorrencias/FormTextArea';
import MediaUpload from '../../components/ocorrencias/MediaUpload';
import IconeAcionamento from '../../assets/Icone-Acionamento.png';
import IconeClassificacao from '../../assets/Icone-Classficacao.png';
import IconeViatura from '../../assets/Icone-Viatura.png';
import IconeLocalizacao from '../../assets/Icone-Localizacao.png';

import IconeMidia from '../../assets/Icone-Midia.png';
import MapaIlustrativo from '../../assets/Mapa-Ilustrativo.png';

function NovaOcorrenciaPage() {
  return (
    <AdminLayout pageTitle="Registro de Nova Ocorrência" userName="Maria Silva">
      <div className="space-y-8">
        {/* Card principal com padding grande */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
          {/* Acionamento e Detalhes */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              <img src={IconeAcionamento} alt="Acionamento" className="w-[30px] h-[30px]" />
              <h2 className="text-lg font-semibold text-slate-800">Acionamento e Detalhes</h2>
            </div>

            <div className="bg-[#EEF6FB] rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <FormInput label="ID de ocorrência" placeholder="#24221" defaultValue="#24221" />
                <FormInput label="Data do acionamento" placeholder="dd/mm/aaaa" />
                <FormInput label="Hora do acionamento" placeholder="--:--" />
                <FormSelect label="Forma de acionamento">
                  <option>Selecione</option>
                </FormSelect>
              </div>

              <div className="mb-3">
                <FormTextArea label="Descrição do incidente" placeholder="Descreva o incidente com detalhes" />
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" id="treino" className="w-4 h-4" />
                <label htmlFor="treino">Modo de Treinamento</label>
              </div>
            </div>
          </div>

          {/* Classificação da Ocorrência */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              <img src={IconeClassificacao} alt="Classificação" className="w-[30px] h-[30px]" />
              <h2 className="text-lg font-semibold text-slate-800">Classificação da Ocorrência</h2>
            </div>

            <div className="bg-[#EEF6FB] rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormSelect label="Natureza Principal">
                  <option>Selecione</option>
                </FormSelect>
                <FormSelect label="Grupo de Ocorrência">
                  <option>Selecione</option>
                </FormSelect>
                <FormSelect label="Especificação (Subgrupo)">
                  <option>Digite</option>
                </FormSelect>
              </div>
            </div>
          </div>

          {/* Viatura e equipe (início) */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={IconeViatura} alt="Viatura" className="w-[30px] h-[30px]" />
              <h2 className="text-lg font-semibold text-slate-800">Viatura e equipe</h2>
            </div>

            <div className="bg-[#EEF6FB] rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormSelect label="Acionar Viatura">
                  <option>Selecione</option>
                </FormSelect>
                <FormSelect label="Atribuir Operador">
                  <option>Selecione</option>
                </FormSelect>
                <FormInput label="Observações" placeholder="Observações" />
              </div>
            </div>
          </div>
        </section>

        {/* Localização */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <img src={IconeLocalizacao} alt="Localização" className="w-[30px] h-[30px]" />
              <h2 className="text-lg font-semibold text-slate-800">Localização</h2>
            </div>

          <div className="bg-[#EEF6FB] rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FormSelect label="Região">
                <option>Selecione a região</option>
              </FormSelect>
              <FormInput label="Logradouro" placeholder="Ex: Rua, Avenida, Quadra..." />
              <FormInput label="Número" placeholder="Nº" />
              <FormInput label="Complemento" placeholder="Ex: Bloco A, Apto 101" />
            </div>

            <div className="mb-4">
              <FormTextArea label="Referência" placeholder="Descreva um ponto de referência para facilitar a localização" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <FormInput label="Latitude" placeholder="Ex: -23.5489" />
              <FormInput label="Longitude" placeholder="Ex: -46.6388" />
            </div>

            <div className="mt-6">
              <div className="w-full h-48 bg-white rounded-lg border border-gray-200 overflow-hidden">
                <img src={MapaIlustrativo} alt="Mapa ilustrativo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Mídia */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <img src={IconeMidia} alt="Mídia" className="w-[30px] h-[30px]" />
            <h2 className="text-lg font-semibold text-slate-800">Mídia</h2>
          </div>

          <div className="bg-[#EEF6FB] rounded-xl p-6">
            <MediaUpload />
            <div className="flex justify-end mt-4">
              <button className="bg-white text-gray-700 px-4 py-2 rounded-md border">Adicionar mídia</button>
            </div>
          </div>
        </section>
        {/* Espaço para rodapé de ações */}
  <div className="flex justify-center gap-8 mt-8">
          <button
            type="button"
            className="bg-[#6B7890] hover:bg-[#5a657a] text-white text-[20px] font-medium px-12 py-4 rounded-[24px] transition-colors duration-200"
          >
            Limpar Formulário
          </button>
          <button
            type="submit"
            className="bg-[#061C43] hover:bg-[#0F377E] text-white text-[20px] font-medium px-12 py-4 rounded-[24px] transition-colors duration-200"
          >
            Registrar Ocorrência
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}

export default NovaOcorrenciaPage;
