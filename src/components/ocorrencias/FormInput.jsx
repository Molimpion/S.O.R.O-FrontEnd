import React from 'react';

function FormInput({ label, ...props }) {
  return (
    <div>
  {label && <label className="block font-medium text-[16px] text-gray-800 mb-2">{label}</label>}
      <input
        className="w-full bg-white rounded-md py-2 px-3 text-[16px] font-normal border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 text-center placeholder:text-center"
        {...props}
      />
    </div>
  );
}

export default FormInput;
