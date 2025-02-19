import Navbar from "@/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: " Tracking personal finances",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container ml-10">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
