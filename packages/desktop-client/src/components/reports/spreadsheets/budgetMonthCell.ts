import type { Handlers } from '@universal-app/core/types/handlers';

export type BudgetMonthCell = Awaited<
  | ReturnType<Handlers['envelope-budget-month']>
  | ReturnType<Handlers['tracking-budget-month']>
>[number];
