import React from 'react';

interface IconInputProps {
  label: string;
  subLabel?: string;
  value: number | string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export const IconInput: React.FC<IconInputProps> = ({
  label,
  subLabel,
  value,
  onChange,
  placeholder
}) => {
  return (
    // Dart: decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(20), boxShadow: ...)
    <div className="bg-white p-[18px] rounded-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.03)] mb-4">
      {/* Label Area */}
      <div className="mb-[14px]">
        {/* Dart: Text(title, style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Color(0xFF1A1C1E))) */}
        <label className="block text-[#1A1C1E] text-base font-bold">
          {label}
        </label>
        {/* Dart: Text(sub, style: TextStyle(color: Colors.grey, fontSize: 12)) */}
        {subLabel && (
          <span className="block text-gray-500 text-xs mt-1">
            {subLabel}
          </span>
        )}
      </div>

      {/* Input Area */}
      {/* Dart: fillColor: Color(0xFFF5F7FA), borderRadius: 12 */}
      {/* Dart: style: TextStyle(fontSize: 22, fontWeight: FontWeight.w600, color: Color(0xFF0D41A8)) */}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[#F5F7FA] text-[#0D41A8] text-[22px] font-semibold py-3 px-4 rounded-[12px] border-transparent focus:border-[#0D41A8] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0D41A8] transition-all placeholder-gray-300"
      />
    </div>
  );
};