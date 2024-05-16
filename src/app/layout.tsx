import type { Metadata } from "next";
import { inter } from "@/fonts/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";
import Navbar from "@/components/global/navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "FindiJobs",
  description: "The official app to create your resume.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
