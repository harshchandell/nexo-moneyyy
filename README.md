Nexo Money – AI-Powered Personal Finance Platform

Nexo Money is a modern, AI-enhanced personal finance management platform designed to help users track expenses, manage accounts, plan budgets, and gain meaningful insights into their financial habits. Built using a full-stack architecture with a clean, intuitive UI and seamless user experience.

🚀 Features
🔹 Core Functionality

Expense & Income Tracking
Add, edit, and categorize your financial transactions with ease.

Multi-Account Management
Manage multiple bank accounts (Savings, Current, etc.) and assign a default account for faster entry.

Budget Planning
Set monthly budgets and monitor your spending with a sleek progress indicator.

AI Receipt Scanner
Upload receipts and let AI automatically extract the transaction details.

Recurring Transactions
Automate daily, weekly, monthly, or yearly recurring expenses/income.

Financial Analytics Dashboard
Visual insights using charts for category breakdowns, income vs expenses, and trends.

Monthly Email Reports
Receive automated summaries + AI insights directly in your inbox.

Budget Alerts
Alerts when you approach or exceed your monthly budget.

🌟 User Experience

Modern & Minimal UI
Smooth, clean interface with thoughtfully designed components.

Dark Mode Support
Fully integrated theme switching with system preference detection.

Responsive Design
Works beautifully across desktop, tablet, and mobile.

Fast & Secure Authentication
Powered by Clerk with seamless login, session handling, and account management.

🛠️ Tech Stack
Frontend

Next.js 15 (App Router)

React 19

Tailwind CSS

Radix UI & ShadCN UI

Recharts

React Hook Form + Zod

next-themes

Backend & Services

Prisma ORM

PostgreSQL (Supabase)

Clerk Authentication

Inngest (scheduled jobs & automation)

Google Gemini API (AI features)

Resend (email delivery)

Arcjet (security + rate limiting)

📦 Installation

1. Clone the repo
   git clone <repository-url>
   cd nexo-money

2. Install dependencies
   npm install

3. Add environment variables

Create a .env.local:

# Clerk

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Database

DATABASE_URL=
DIRECT_URL=

# AI

GEMINI_API_KEY=

# Email

RESEND_API_KEY=

# Background Jobs

INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=

# Security

ARCJET_KEY=

4. Setup database
   npx prisma generate
   npx prisma migrate dev

5. Start development server
   npm run dev

📊 Key Modules
📘 Transactions

CRUD functionality

Category tagging

Recurring scheduling

AI-powered autofill from receipts

🏦 Accounts

Multiple accounts

Default account selection

Balance tracking

Account-specific analytics

📈 Analytics & Insights

Income vs Expense charts

Pie charts for spending categories

Time-based filtering

Automated monthly email summaries

📨 Email & Automation

Monthly reports

Budget limit notifications

Inngest-powered scheduled jobs

🔐 Authentication

Powered by Clerk:

Email/password login

User profiles

Secure sessions

Seamless dashboard redirection

🌙 Dark Mode

System-aware theme

Persistent preference

Smooth transitions

Fully styled components for both themes

🚀 Deployment
Build
npm run build

Start
npm start
