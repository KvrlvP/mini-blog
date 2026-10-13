
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechBlog | Mini Blog con Next.js",
  description:
    "Mini Blog de tecnología desarrollado con Next.js, utilizando CSR y SSR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
