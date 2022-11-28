import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-white antialiased">
      <head />
      <body className="flex h-full flex-col">{children}</body>
    </html>
  );
}
