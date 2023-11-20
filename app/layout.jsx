import "./globals.css";
import { Inter } from "next/font/google";

// components
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hendersen",
  description: "Hendersen Taxand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
