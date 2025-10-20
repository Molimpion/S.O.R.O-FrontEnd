import React from 'react';

function FormSelect({ label, children, ...props }) {
  return (
    <div>
  {label && <label className="block font-medium text-[16px] text-gray-800 mb-2">{label}</label>}
      <select
        className="w-full bg-white rounded-md py-2 px-3 text-[16px] font-normal border border-transparent shadow-sm focus:outline-none text-center"
        {...props}
      >
        {children}
      </select>
    </div>
  );
}

export default FormSelect;
