
import Link from "next/link";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="link-div">
          <div className="logo">Shiraz</div>
          <div className="links">
          <Link className="link-tag" href="/">Home</Link>
          <Link className="link-tag" href="/about">About</Link>
          <Link className="link-tag" href="/projects">Projects</Link>
          <Link className="link-tag" href="/contact">Contact</Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
