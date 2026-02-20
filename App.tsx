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
    <div className="min-h-screen bg-[#F4F7FA] font-sans text-slate-900 flex flex-col">
      
      {/* Top Floating Card */}
      {/* Dart: margin: fromLTRB(12, 60, 12, 20) -> mx-[12px] mt-[60px] mb-[20px] */}
      {/* Dart: padding: vertical 30 -> py-[30px] */}
      {/* Dart: color: Color(0xFF0D41A8), borderRadius: 24 */}
      {/* Dart: boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 10)] */}
      <div className="mx-[12px] mt-[60px] mb-[20px] py-[30px] bg-[#0D41A8] rounded-[24px] shadow-[0_0_10px_rgba(0,0,0,0.12)]">
        <div className="flex flex-col items-center text-center px-5">
          {/* Dart: Text("本月预计实发 (到手)", style: TextStyle(color: Colors.white70, fontSize: 13)) */}
          <div className="text-white/70 text-[13px] font-normal mb-[8px]">
            本月预计实发 (到手)
          </div>
          
          {/* Dart: Text("¥ ...", style: TextStyle(color: Colors.white, fontSize: 38, fontWeight: FontWeight.bold)) */}
          <div className="text-white text-[38px] font-bold mb-[20px] leading-none">
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
               <span className="text-white/60 text-[11px] mb-0.5">总应发</span>
               {/* Dart: fontSize: 15, fontWeight: FontWeight.w600 */}
               <span className="text-white text-[15px] font-semibold">
                 ¥ {results.grossPay.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
               </span>
            </div>
            
            {/* Item 2 */}
            {/* Dart: _topStat("各项扣除", -deduct) */}
            <div className="flex flex-col items-center">
               <span className="text-white/60 text-[11px] mb-0.5">各项扣除</span>
               <span className="text-white text-[15px] font-semibold">
                 -¥ {results.totalDeductions.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
               </span>
            </div>
          </div>
        </div>
      </div>

      {/* Input Row */}
      {/* Dart: Padding(padding: EdgeInsets.symmetric(horizontal: 10), child: Row(children: [ ... SizedBox(width: 6) ... ])) */}
      <div className="px-[10px] flex gap-[6px]">
        {/* 1. Dart: _buildSquareInput("总班次", _shifts, Color(0xFF0D41A8)) */}
        <CompactInput
          label="总班次"
          value={state.totalShifts === 0 ? '' : state.totalShifts}
          onChange={handleNumberChange('totalShifts')}
          textColor="text-[#0D41A8]" // Deep Blue
        />
        
        {/* 2. Dart: _buildSquareInput("驻站次", _station, Colors.green.shade700) */}
        <CompactInput
          label="驻站次"
          value={state.stationCount === 0 ? '' : state.stationCount}
          onChange={handleNumberChange('stationCount')}
          textColor="text-green-700" // Green shade 700
        />
        
        {/* 3. Dart: _buildSquareInput("法定班", _legal, Colors.redAccent) */}
        <CompactInput
          label="法定班"
          value={state.holidayShifts === 0 ? '' : state.holidayShifts}
          onChange={handleNumberChange('holidayShifts')}
          textColor="text-red-500" // RedAccent approx
        />

        {/* 4. Dart: _buildSquareInput("其它", _other, Colors.orange.shade800) */}
        <CompactInput
          label="其它"
          value={state.otherEarnings === 0 ? '' : state.otherEarnings}
          onChange={handleNumberChange('otherEarnings')}
          textColor="text-orange-800" // Orange shade 800
        />
      </div>

      <div className="flex-grow" />

      {/* Footer Text */}
      {/* Dart: Text("数据每笔实时计算 • 已锁定社保基数", style: TextStyle(color: Colors.grey, fontSize: 11)) */}
      {/* Dart: Padding(padding: EdgeInsets.only(bottom: 20)) */}
      <div className="text-center text-gray-500 text-[11px] pb-5">
        数据每笔实时计算 • 已锁定社保基数
      </div>

    </div>
  );
};

export default App;