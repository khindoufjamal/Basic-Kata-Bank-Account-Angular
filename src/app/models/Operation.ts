import { Account } from './account';
export interface Operation {
  operationType: string,
  amount: number,
  operationDate?: Date,
  accountNumber?: number
}
