import "./globals.css";

export const metadata = {
  title: "WealthUp",
  description: "Transforming Lives - Financially!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
