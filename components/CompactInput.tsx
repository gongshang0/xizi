import React from 'react';

interface CompactInputProps {
  label: string;
  value: number | string;
  onChange: (val: string) => void;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  labelColor?: string;
}

export const CompactInput: React.FC<CompactInputProps> = ({ 
  label, 
  value, 
  onChange,
  textColor = 'text-[#0D41A8]', // Default to Deep Blue
  bgColor = 'bg-white',
  borderColor = 'border-transparent',
  labelColor = 'text-black/45'
}) => {
  return (
    // Dart: decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.02), blurRadius: 8)])
    // Dart: padding: vertical 12
    <div className={`flex-1 ${bgColor} border ${borderColor} rounded-[20px] py-[24px] shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col items-center transition-all duration-200`}>
      {/* Dart: Text(label, style: TextStyle(fontSize: 11, color: Colors.black45, fontWeight: FontWeight.bold)) */}
      <span className={`text-[14px] ${labelColor} font-bold mb-[10px] whitespace-nowrap`}>
        {label}
      </span>
      
      {/* Dart: TextField(style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: textColor)) */}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={(e) => e.target.select()}
        placeholder="0"
        className={`w-full text-center text-[22px] font-bold ${textColor} bg-transparent outline-none border-none p-0 placeholder-current/30`}
      />
    </div>
  );
};