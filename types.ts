export interface SalaryState {
  totalShifts: number;
  holidayShifts: number;
  stationCount: number;
  otherEarnings: number;
  deductFood: boolean;
}

export const INITIAL_STATE: SalaryState = {
  totalShifts: 0,
  holidayShifts: 0,
  stationCount: 0,
  otherEarnings: 0,
  deductFood: true,
};