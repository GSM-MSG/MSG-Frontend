import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import "./globals.css";

const pretendard = localFont({ 
  src: '../public/fonts/PretendardVariable.woff2'
});

export const metadata: Metadata = {
  title: "MSG IT 동아리",
  description: "더욱 감칠맛나는 세상을 위해",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <Header />
        <div className="layout">{children}</div>
      </body>
    </html>
  );
}
