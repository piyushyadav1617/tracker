import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "./_components/navbar";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";
import QueryClientProvider from "./queryClientProvider";
import AuthProvider from "./auth/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tracker",
  description: "Track issues",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <Separator />
            <Toaster />
            <main>{children}</main>
          </ThemeProvider>
        </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
