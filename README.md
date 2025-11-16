# Nexo Money (Welth)

An AI-powered personal finance management platform that helps you track, analyze, and optimize your spending with real-time insights. Built with modern web technologies and designed for the Indian market with INR currency support.

## 🚀 Features

### Core Functionality
- **Transaction Tracking**: Record income and expenses with detailed categorization
- **Multi-Account Management**: Manage multiple accounts (Current, Savings) with default account support
- **Budget Planning**: Set monthly budgets and track spending with visual progress indicators
- **Recurring Transactions**: Automate recurring income and expenses (Daily, Weekly, Monthly, Yearly)
- **Smart Receipt Scanner**: AI-powered receipt scanning using Google Gemini to automatically extract transaction details
- **Financial Analytics**: Interactive charts and graphs showing income vs expenses, category breakdowns, and trends
- **Monthly Reports**: Automated monthly financial reports with AI-generated insights delivered via email
- **Budget Alerts**: Email notifications when budget thresholds are reached

### User Experience
- **Dark Mode**: Full site-wide dark mode support with system preference detection
- **Modern UI**: Clean, minimalist design with Inter font and rounded corners
- **Responsive Design**: Fully responsive layout that works on all devices
- **INR Currency Support**: Native Indian Rupee (₹) formatting with en-IN locale

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Recharts** - Chart library for data visualization
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **next-themes** - Dark mode support
- **Lucide React** - Icon library

### Backend & Services
- **Prisma** - ORM for database management
- **PostgreSQL** - Database (via Supabase)
- **Clerk** - Authentication and user management
- **Inngest** - Background job processing for recurring transactions and reports
- **Google Generative AI (Gemini)** - AI-powered receipt scanning and financial insights
- **Resend** - Email delivery service
- **Arcjet** - Rate limiting and security

### Development Tools
- **TypeScript/JavaScript** - Programming language
- **ESLint** - Code linting
- **Turbopack** - Fast bundler for development

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **PostgreSQL** database (or Supabase account)
- Accounts for the following services:
  - Clerk (for authentication)
  - Google Cloud (for Gemini API)
  - Resend (for emails)
  - Inngest (for background jobs)
  - Supabase (for database hosting, optional)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nexo-money-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

   # Database
   DATABASE_URL=your_postgresql_connection_string
   DIRECT_URL=your_direct_postgresql_connection_string

   # Google Gemini AI
   GEMINI_API_KEY=your_gemini_api_key

   # Email Service
   RESEND_API_KEY=your_resend_api_key

   # Inngest (for background jobs)
   INNGEST_EVENT_KEY=your_inngest_event_key
   INNGEST_SIGNING_KEY=your_inngest_signing_key

   # Security
   ARCJET_KEY=your_arcjet_key
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma Client
   npx prisma generate

   # Run database migrations
   npx prisma migrate dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nexo-money-main/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── (main)/            # Main application pages
│   │   ├── account/       # Account management
│   │   ├── dashboard/     # Dashboard and overview
│   │   └── transaction/   # Transaction management
│   ├── api/               # API routes
│   └── layout.js          # Root layout
├── actions/               # Server actions
│   ├── account.js         # Account CRUD operations
│   ├── budget.js          # Budget management
│   ├── dashboard.js       # Dashboard data fetching
│   ├── seed.js           # Database seeding
│   ├── send-email.js      # Email sending
│   └── transaction.js    # Transaction operations
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── header.jsx          # Navigation header
│   ├── hero.jsx          # Landing page hero
│   └── theme-provider.jsx # Dark mode provider
├── data/                 # Static data
│   ├── categories.js     # Transaction categories
│   └── landing.js       # Landing page content
├── emails/               # Email templates
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   ├── currency.js      # Currency formatting
│   ├── inngest/         # Background job functions
│   ├── prisma.js        # Database client
│   └── utils.js         # General utilities
├── prisma/               # Database schema and migrations
└── public/              # Static assets
```

## 🎯 Key Features Explained

### Transaction Management
- Create, edit, and delete transactions
- Categorize transactions (Income/Expense)
- Support for recurring transactions with automatic processing
- Receipt scanning with AI to auto-fill transaction details

### Account Management
- Create multiple accounts (Current, Savings)
- Set default account for quick transactions
- View account balance and transaction history
- Account-specific analytics

### Budget Tracking
- Set monthly budgets per account
- Visual progress indicators
- Email alerts when approaching budget limits
- Real-time expense tracking

### Analytics & Reports
- Interactive bar charts for income vs expenses
- Pie charts for category breakdown
- Monthly financial reports with AI insights
- Date range filtering (7 days, 1 month, 3 months, etc.)

## 🔐 Authentication

The application uses Clerk for authentication. Users can:
- Sign up with email
- Sign in securely
- Manage their profile
- Automatic user creation in database on first login

## 🌙 Dark Mode

Dark mode is fully integrated throughout the application:
- System preference detection
- Manual toggle in header
- Persistent theme selection (localStorage)
- Smooth transitions between themes

## 💰 Currency Support

The application is configured for Indian Rupee (INR):
- All currency displays use ₹ symbol
- Number formatting follows Indian locale (en-IN)
- Proper comma placement for thousands

## 📧 Email Notifications

Automated emails are sent for:
- Monthly financial reports with AI insights
- Budget alerts when thresholds are reached
- Beautiful HTML email templates

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Environment Setup for Production
Ensure all environment variables are set in your hosting platform:
- Vercel (recommended for Next.js)
- Railway
- Render
- AWS

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is private and proprietary.

## 👨‍💻 Development

### Available Scripts
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run email` - Preview email templates

### Database Migrations
```bash
# Create a new migration
npx prisma migrate dev --name migration_name

# Apply migrations
npx prisma migrate deploy

# Reset database (development only)
npx prisma migrate reset
```

## 🐛 Troubleshooting

### Database Connection Issues
- Verify your `DATABASE_URL` and `DIRECT_URL` are correct
- Ensure your database is accessible
- Check Prisma client is generated: `npx prisma generate`

### Authentication Issues
- Verify Clerk keys are set correctly
- Check Clerk dashboard for configuration
- Ensure redirect URLs match your environment

### Build Errors
- Clear `.next` folder and rebuild
- Ensure all dependencies are installed
- Check Node.js version compatibility

## 📞 Support

For issues and questions, please open an issue in the repository.

---

Made with 💗 by RoadsideCoder
