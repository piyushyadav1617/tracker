import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "./_components/navbar";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";
import QueryClientProvider from "./queryClientProvider";
import AuthProvider from "./auth/provider";
import { Container } from "postcss";
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
              <main className="mx-5 sm:mx-10 md:mx-auto mt-10  md:w-[700px] lg:w-[990px] 2xl:w-[1200px] ">
                {children}
              </main>
            </ThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
