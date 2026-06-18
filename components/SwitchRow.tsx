import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SwitchRowProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  icon: LucideIcon;
}

export const SwitchRow: React.FC<SwitchRowProps> = ({ label, checked, onChange, icon: Icon }) => {
  return (
    <div 
      className="flex items-center justify-between py-4 px-1 cursor-pointer group"
      onClick={() => onChange(!checked)}
    >
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-xl transition-colors duration-300 ${checked ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
           <Icon size={20} strokeWidth={1.5} />
        </div>
        <span className={`font-medium text-base transition-colors ${checked ? 'text-slate-800' : 'text-slate-600'}`}>
          {label}
        </span>
      </div>
      
      {/* IOS Style Switch */}
      <div className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${checked ? 'bg-blue-600' : 'bg-slate-200'}`}>
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${checked ? 'translate-x-5' : 'translate-x-0'}`}
        />
      </div>
    </div>
  );
};