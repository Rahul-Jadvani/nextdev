import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/manual-ui/Navbar";
import Nav from "@/components/manual-ui/Nav";


// Font configuration using next/font
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
  display: "swap",  // Ensures a smooth fallback display until the font loads
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.variable} font-main`}
      >
        <Navbar></Navbar>
        {children}
        <div className="hidden lg:block w-full" style={{height: '64px'}}></div>
        <Nav></Nav>
      </body>
    </html>
  );
}
