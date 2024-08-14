import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ExpenseContextProvider from "@/providers/expense-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xpense - Expense Tracker",
  description:
    "A simple and intuitive expense tracking application to help you manage your finances. This app allows you to record and categorize your expenses, view spending trends over time, and set budget goals to keep your finances on track.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sky-600`}>
        <ExpenseContextProvider>{children}</ExpenseContextProvider>
      </body>
    </html>
  );
}
