import type { Metadata } from "next";
import { Epilogue, Agbalumo } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

// Load Agbalumo from Google Fonts
const agbalumo = Agbalumo({
  variable: "--font-agbalumo",
  subsets: ["latin"],
  display: 'swap',
  weight: '400',
});

// Load Epilogue from Google Fonts
const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Golden Smile Creation | Dental Clinic",
  description: "Specialists in dental care and creating perfect smiles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${agbalumo.variable} ${epilogue.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
