// import type { Metadata } from "next";
// import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="nav-bar">
      <Link className="link-tag"  href="/">Homepage</Link>
      <Link className="link-tag"  href="/about">About</Link>
      </div>
        {children} {/* //sare page render honge yaha children likhne se. */}
      </body>
    </html>
  );
}