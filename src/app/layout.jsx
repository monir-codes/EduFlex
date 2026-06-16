import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "EduFlex - Next.js Assessment Version",
  description: "Modern Developer Centric Dashboard Layout Marketplace Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-white min-h-screen flex flex-col pt-20 antialiased font-sans">
        {/* Sticky Navbar alignment inside template bounds */}
        <Navbar />
        
        {/* Children mapping components context container rules */}
        <div className="flex-1 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}