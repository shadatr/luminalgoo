import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import { Tajawal} from "next/font/google";
import "./globals.css";

const inter = Tajawal({style:"normal", weight:["200" , "300" , "400" , "500" ,"700", "800" ,"900"],subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luminalgoo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
