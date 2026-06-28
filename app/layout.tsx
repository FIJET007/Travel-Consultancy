import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GlobeTrek Solutions | Study Abroad and Travel Consultation",
  description:
    "GlobeTrek Solutions helps students, families, and travellers with study abroad guidance, travel packages, reservations, and consultation.",
  icons: { icon: "/globetrek-logo.jpeg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}