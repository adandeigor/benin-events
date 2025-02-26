export enum PaymentStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    REFUNDED = "REFUNDED",
  }
  
  export enum TicketStatus {
    ACTIVE = "ACTIVE",
    USED = "USED",
    CANCELLED = "CANCELLED",
    EXPIRED = "EXPIRED",
  }
  
  export enum EventVisibility {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",
    DRAFT = "DRAFT",
  }
  
  export interface Rule {
    rule_id: number;
    rule_name: string;
    rule_description: string;
    rule_created_at: Date;
    rule_updated_at: Date;
  }
  
  export interface User {
    user_id: number;
    name: string;
    email: string;
    role_id: number;
    role: Rule;
    password: string;
    phone_number: string;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface Categories {
    category_id: number;
    category_name: string;
    category_description: string;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface Events {
    event_id: number;
    title: string;
    description: string;
    start_date: Date;
    end_date: Date;
    images: string[];
    organizer_id: number;
    organizer: User;
    category_id: number;
    category: Categories;
    ticket_price: number;
    vedette: boolean;
    visibility: EventVisibility;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface Tickets {
    ticket_id: number;
    event_id: number;
    event: Events;
    user_id: number;
    user: User;
    status: TicketStatus;
    qr_code: string;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface Marketing_Campaigns {
    campaign_id: number;
    event_id: number;
    event: Events;
    start_date: Date;
    end_date: Date;
    type: string;
    status: string;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface Transactions {
    transaction_id: number;
    user_id: number;
    user: User;
    amount: number;
    payment_method: string;
    status: PaymentStatus;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface Payments {
    payment_id: number;
    ticket_id: number;
    ticket: Tickets;
    transaction_id: number;
    transaction: Transactions;
    amount: number;
    payment_status: PaymentStatus;
    payment_method: string;
    created_at: Date;
  }
  
  export interface Guide {
    guide_id: number;
    title: string;
    description: string;
    file_url: string;
    created_at: Date;
  }
  
  export interface Faqs {
    faq_id: number;
    question: string;
    answer: string;
    created_at: Date;
  }
  