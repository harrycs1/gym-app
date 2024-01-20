import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/General/Header";
import { Footer } from "./components/General/Footer";
import {UserProvider} from './contexts/userContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gymie",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <Header />
          <div className="bg-platinum min-h-screen pt-10 pb-12">{children}</div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}