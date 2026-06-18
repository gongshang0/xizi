import React, { useState, useMemo } from 'react';
import { SalaryState, INITIAL_STATE } from './types';
import { calculateSalary } from './utils/calculations';
import { CompactInput } from './components/CompactInput';

const App: React.FC = () => {
  const [state, setState] = useState<SalaryState>(INITIAL_STATE);
  const results = useMemo(() => calculateSalary(state), [state]);

  const handleNumberChange = (key: keyof SalaryState) => (val: string) => {
    if (val === '') {
      setState(prev => ({ ...prev, [key]: 0 }));
      return;
    }
    const num = parseFloat(val);
    setState(prev => ({ ...prev, [key]: isNaN(num) ? 0 : num }));
  };

  return (
    // Dart: Scaffold backgroundColor: Color(0xFFF4F7FA)
    <div className="min-h-screen bg-[#F4F7FA] font-sans text-slate-900 flex flex-col justify-between max-w-md mx-auto px-[22px] pt-[30px] pb-[16px]">
      
      <div className="flex flex-col gap-[24px]">
        {/* Top Floating Card */}
        {/* Dart: margin: fromLTRB(12, 60, 12, 20) -> mx-[12px] mt-[60px] mb-[20px] */}
        {/* Dart: padding: vertical 30 -> py-[30px] */}
        {/* Dart: color: Color(0xFF2143B3), borderRadius: 24 */}
        {/* Dart: boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 10)] */}
        <div className="w-full py-[32px] bg-[#2143B3] rounded-[24px] shadow-[0_4px_16px_rgba(33,67,179,0.16)]">
          <div className="flex flex-col items-center text-center px-5">
            {/* Dart: Text("本月预计实发 (到手)", style: TextStyle(color: Colors.white70, fontSize: 13)) */}
            <div className="text-white/80 text-[13px] font-normal mb-[12px] tracking-wide">
              本月预计实发 (到手)
            </div>
            
            {/* Dart: Text("¥ ...", style: TextStyle(color: Colors.white, fontSize: 38, fontWeight: FontWeight.bold)) */}
            <div className="text-white text-[44px] font-bold mb-[24px] leading-none tracking-tight">
              <span className="text-2xl font-normal mr-1 relative -top-2">¥</span>
              {results.netPay.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            
            {/* Summary Row */}
            {/* Dart: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly) */}
            <div className="flex w-full justify-evenly items-center">
              {/* Item 1 */}
              {/* Dart: _topStat("总应发", gross) */}
              <div className="flex flex-col items-center">
                 {/* Dart: fontSize: 11, color: Colors.white60 */}
                 <span className="text-white/60 text-[11px] mb-1.5">总应发</span>
                 {/* Dart: fontSize: 15, fontWeight: FontWeight.w600 */}
                 <span className="text-white text-[15px] font-semibold">
                   ¥ {results.grossPay.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                 </span>
              </div>
              
              {/* Item 2 */}
              {/* Dart: _topStat("各项扣除", -deduct) */}
              <div className="flex flex-col items-center">
                 <span className="text-white/60 text-[11px] mb-1.5">各项扣除</span>
                 <span className="text-white text-[15px] font-semibold">
                   -¥ {results.totalDeductions.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                 </span>
              </div>
            </div>
          </div>
        </div>

        {/* Input Grid in 2x2 layout matching Image 2 */}
        <div className="grid grid-cols-2 gap-[16px]">
          {/* 1. 总班次 */}
          <CompactInput
            label="总班次"
            value={state.totalShifts === 0 ? '' : state.totalShifts}
            onChange={handleNumberChange('totalShifts')}
            textColor="text-[#1B43C3]"
            bgColor="bg-[#E8F1FC]"
            borderColor="border-[#D0E3F8]"
            labelColor="text-[#7088A5]"
          />
          
          {/* 2. 驻站次 */}
          <CompactInput
            label="驻站次"
            value={state.stationCount === 0 ? '' : state.stationCount}
            onChange={handleNumberChange('stationCount')}
            textColor="text-[#1E7E34]"
            bgColor="bg-[#E9F7F0]"
            borderColor="border-[#CFEEDC]"
            labelColor="text-[#6EA587]"
          />
          
          {/* 3. 法定班 */}
          <CompactInput
            label="法定班"
            value={state.holidayShifts === 0 ? '' : state.holidayShifts}
            onChange={handleNumberChange('holidayShifts')}
            textColor="text-[#D62E4A]"
            bgColor="bg-[#FDECEF]"
            borderColor="border-[#FBCED5]"
            labelColor="text-[#B27C86]"
          />

          {/* 4. 其它 */}
          <CompactInput
            label="其它"
            value={state.otherEarnings === 0 ? '' : state.otherEarnings}
            onChange={handleNumberChange('otherEarnings')}
            textColor="text-[#C9791F]"
            bgColor="bg-[#FDF4E7]"
            borderColor="border-[#F9E2C6]"
            labelColor="text-[#B59779]"
          />
        </div>
      </div>

      {/* Footer Text */}
      {/* Dart: Text("数据每笔实时计算 • 已锁定社保基数", style: TextStyle(color: Colors.grey, fontSize: 11)) */}
      {/* Dart: Padding(padding: EdgeInsets.only(bottom: 20)) */}
      <div className="text-center text-gray-400 text-[11px] py-4">
        数据每笔实时计算 • 已锁定社保基数
      </div>

    </div>
  );
};

export default App;