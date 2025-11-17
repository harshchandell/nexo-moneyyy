
# **📌 Nexo Money – AI-Powered Personal Finance Platform**

Nexo Money is a modern, AI-enhanced personal finance management platform designed to help users track expenses, manage accounts, plan budgets, and gain meaningful insights into their financial habits. Built with a clean, intuitive UI and a seamless full-stack architecture.

---

# 🚀 **Features**

## **🔹 Core Functionality**

### **Expense & Income Tracking**

Add, edit, and categorize your financial transactions with ease.

### **Multi-Account Management**

Manage multiple bank accounts (Savings, Current, etc.) and assign a default account for faster entry.

### **Budget Planning**

Set monthly budgets and monitor your spending with a sleek visual progress indicator.

### **AI Receipt Scanner**

Upload receipts and let AI automatically extract transaction details.

### **Recurring Transactions**

Automate daily, weekly, monthly, or yearly recurring expenses/income.

### **Financial Analytics Dashboard**

Visual insights using charts for:

* Category-wise spending
* Income vs expenses
* Monthly trends

### **Monthly Email Reports**

Receive automated summaries + AI-generated financial insights.

### **Budget Alerts**

Get notified when approaching or exceeding your monthly budget limit.

---

# 🌟 **User Experience**

### **Modern & Minimal UI**

Smooth, clean, and professional interface engineered for usability.

### **Dark Mode Support**

Fully integrated theme switching with system preference detection.

### **Responsive Design**

Looks beautiful on desktop, tablet, and mobile.

### **Fast & Secure Authentication**

Powered by Clerk with seamless login, user management, and sessions.

---

# 🛠️ **Tech Stack**

## **Frontend**

* Next.js 15 (App Router)
* React 19
* Tailwind CSS
* Radix UI + ShadCN UI
* Recharts
* React Hook Form + Zod
* next-themes

## **Backend & Services**

* Prisma ORM
* PostgreSQL (Supabase)
* Clerk Authentication
* Inngest (scheduled jobs & automation)
* Google Gemini API (AI)
* Resend (email delivery)
* Arcjet (rate limiting & security)

---

# 📦 **Installation**

### **1. Clone the repository**

```bash
git clone <repository-url>
cd nexo-money
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Configure environment variables**

Create a `.env.local` file:

```env
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
```

### **4. Setup database**

```bash
npx prisma generate
npx prisma migrate dev
```

### **5. Start development server**

```bash
npm run dev
```

---

# 📊 **Key Modules**

## **📘 Transactions**

* Create / edit / delete transactions
* Category tagging
* Recurring scheduling
* AI-powered receipt extraction

## **🏦 Accounts**

* Multiple account support
* Default account selection
* Balance and history tracking
* Per-account analytics

## **📈 Analytics & Insights**

* Income vs Expense bar charts
* Category breakdown pie charts
* Date range filters
* Automated email summaries

## **📨 Email & Automation**

* Monthly financial reports
* Budget alert emails
* Inngest scheduled workflows

---

# 🔐 **Authentication**

Powered by **Clerk**:

* Email/password login
* User profiles
* Secure sessions
* Automatic onboarding

---

# 🌙 **Dark Mode**

* Auto system detection
* Smooth transitions
* Persistent theme preference
* Fully themed UI

---

# 🚀 **Deployment**

### **Build**

```bash
npm run build
```

### **Start**

```bash
npm start
```



