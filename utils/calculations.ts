import { SalaryState } from '../types';

export const calculateSalary = (state: SalaryState) => {
  // Zero state check matching Flutter logic
  if (state.totalShifts === 0 && state.stationCount === 0 && state.holidayShifts === 0 && state.otherEarnings === 0) {
    return {
      grossPay: 0,
      totalDeductions: 0,
      netPay: 0,
      overtimeEarnings: 0,
      legalEarnings: 0,
      deductionSocial: 0,
      deductionTax: 0
    };
  }

  // 1. Constants
  const BASE_SALARY = 2740;
  const STANDARD_SHIFTS = 21.75;
  const PERFORMANCE_BONUS = 200; 
  const STATION_RATE = 110;      
  
  // Dart Code: double daily = 2740 / 21.75;
  const DAILY_RATE = BASE_SALARY / STANDARD_SHIFTS;

  // 2. Earnings Calculation
  
  // Base Pay
  const basePay = BASE_SALARY;

  // Overtime & Legal Pay
  // Dart Code: double extraShifts = (s - 21.75) > 0 ? (s - 21.75) : 0;
  const extraShifts = (state.totalShifts - STANDARD_SHIFTS) > 0 ? (state.totalShifts - STANDARD_SHIFTS) : 0;
  
  // Dart Code: double otPay = (extraShifts * 1.5 * daily) + (l * 3.0 * daily);
  const overtimeEarnings = extraShifts * 1.5 * DAILY_RATE;
  const legalEarnings = state.holidayShifts * 3.0 * DAILY_RATE;
  
  const totalOvertimePay = overtimeEarnings + legalEarnings;

  // Allowances
  const stationPay = state.stationCount * STATION_RATE;
  
  // Gross Pay
  // Dart Code: double currentGross = base + otPay + stationPay + bonus + oth;
  const grossPay = basePay + totalOvertimePay + stationPay + PERFORMANCE_BONUS + state.otherEarnings;

  // 3. Deductions Calculation

  // Social Security
  // Dart Code: double ss = 420.68;
  const deductionSocial = 420.68;

  // Tax
  // Dart Code: double taxable = currentGross - ss - 5000;
  const TAX_THRESHOLD = 5000;
  const taxableIncome = grossPay - deductionSocial - TAX_THRESHOLD;
  const deductionTax = taxableIncome > 0 ? taxableIncome * 0.03 : 0;

  // Food Deduction
  // Dart Code: double food = 550;
  const DEDUCTION_FOOD = 550;

  // Total Deductions
  const totalDeductions = deductionSocial + deductionTax + DEDUCTION_FOOD;

  // 4. Net Pay
  // Dart Code: net = gross - deduct;
  const netPay = grossPay - totalDeductions;

  return {
    grossPay,
    totalDeductions,
    netPay,
    overtimeEarnings,
    legalEarnings,
    deductionSocial,
    deductionTax
  };
};