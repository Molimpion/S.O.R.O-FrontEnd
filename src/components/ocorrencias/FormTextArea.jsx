import React from 'react';

function FormTextArea({ label, ...props }) {
  return (
    <div>
  {label && <label className="block font-medium text-[16px] text-gray-800 mb-2">{label}</label>}
      <textarea
        rows={5}
        className="w-full bg-white rounded-md py-3 px-3 text-[16px] font-normal border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
        {...props}
      />
    </div>
  );
}

export default FormTextArea;
