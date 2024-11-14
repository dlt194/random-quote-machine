import "./globals.css";
import Providers from "./providers"; // Import the Client Component

export const metadata = {
  title: "@DLT194 - Random Quote Machine",
  description: "A random quote generator built with Next.js and Redux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
