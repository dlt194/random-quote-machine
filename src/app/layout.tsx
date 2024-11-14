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
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          defer
          src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
        ></script>
      </head>
      <body className="bg-green-800">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
