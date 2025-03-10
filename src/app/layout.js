import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopBtn from "@/components/BackToTopBtn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ernest Banda",
  description: "Ernest Banda – Candidate for District 9 I am Ernest Banda, a proud father of three, grandfather of seven, and recently a great-grandfather to a wonderful baby boy. My family and I deeply value faith, family, and country, principles that have guided us through generations and contributed to our success. With over 40 years of experience in Loss Prevention and Asset Protection within both the soft goods and grocery industries, I have worked closely with various law enforcement agencies. My commitment to public safety runs deep, as members of my own family continue to serve in law enforcement. Now retired, I have spent the past few years observing our city move in the wrong direction. This growing concern has motivated me to step forward and put my name on the ballot. My priorities include increasing the number of law enforcement officers, eliminating wasteful spending, and ensuring the effective implementation of Proposition H, which mandates hiring additional police officers and increasing funding for both police and fire pensions. It’s time to take back our city and put it on the right path for all citizens. Together, we can restore safety, accountability, and prosperity in our community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen bg-[#EAEBE6] dark:bg-[#2D2D2D]`} // Light mode and dark mode background colors
      >
        <Header />
        {children}
        <BackToTopBtn/>
        <Footer />
      </body>
    </html>
  );
}
