import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
const _inter = Inter({
  subsets: ["latin"]
});
const _geistMono = Geist_Mono({
  subsets: ["latin"]
});
export const metadata = {
  title: "IRONFIT | Premium Gym Gear & Apparel",
  description: "Shop premium gym accessories, fitness apparel, and workout equipment. Elevate your training with IRONFIT.",
  generator: 'v0.app'
};
export default function RootLayout({
  children
}) {
  return <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>;
}