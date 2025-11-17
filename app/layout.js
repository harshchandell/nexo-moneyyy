import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import ThemeProviderWrapper from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nexo",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProviderWrapper>
            <Header />
            <main className="in-h-screen bg-white dark:bg-gray-900 pt-[64px]">{children}</main>
            

            <Toaster richColors />

            <footer className="bg-blue-50 dark:bg-gray-800 py-12">
              <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
                <p>Coded with ☕ by Harsh Chandel</p>
              </div>
            </footer>
          </ThemeProviderWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
