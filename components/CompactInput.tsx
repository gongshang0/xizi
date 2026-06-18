import React from 'react';

interface CompactInputProps {
  label: string;
  value: number | string;
  onChange: (val: string) => void;
  textColor?: string;
}

export const CompactInput: React.FC<CompactInputProps> = ({ 
  label, 
  value, 
  onChange,
  textColor = 'text-[#0D41A8]' // Default to Deep Blue
}) => {
  return (
    // Dart: decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.02), blurRadius: 8)])
    // Dart: padding: vertical 12
    <div className="flex-1 bg-white rounded-[16px] py-[12px] shadow-[0_0_8px_rgba(0,0,0,0.02)] flex flex-col items-center">
      {/* Dart: Text(label, style: TextStyle(fontSize: 11, color: Colors.black45, fontWeight: FontWeight.bold)) */}
      <span className="text-[11px] text-black/45 font-bold mb-[4px] whitespace-nowrap">
        {label}
      </span>
      
      {/* Dart: TextField(style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: textColor)) */}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={(e) => e.target.select()}
        placeholder="0"
        className={`w-full text-center text-[18px] font-bold ${textColor} bg-transparent outline-none border-none p-0 placeholder-gray-300`}
      />
    </div>
  );
};