
export interface Ticket {
  id: string;
  name: string;
  price: number;
  fee: number;
  installments: number;
  maxInstallments: number;
  availableUntil: string;
  status?: 'available' | 'sold-out';
  hasInfo?: boolean;
}

export interface CartItem {
  ticketId: string;
  quantity: number;
}