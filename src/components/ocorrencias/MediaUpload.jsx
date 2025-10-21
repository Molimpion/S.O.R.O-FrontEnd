
import IconeArquivo from '../../assets/Icone-Arquivo.png';

function MediaUpload({ onAdd }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <label key={i} className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 text-sm text-gray-400 cursor-pointer">
          <img src={IconeArquivo} alt="Arquivo" className="w-[30px] h-[30px] mb-2" />
          <div className="mb-2">Clique aqui ou arraste o arquivo</div>
          <input type="file" className="hidden" onChange={onAdd} />
        </label>
      ))}
    </div>
  );
}

export default MediaUpload;
