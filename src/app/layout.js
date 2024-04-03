import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "বিকাশ ভাইয়া",
  description:
    "এটি সম্পন্ন বিনোদনের জন্য বানানো হয়েছে। কোনো ব্যাক্তি বা উৎসকে আঘাত করার জন্য নয়।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="32x32" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <footer className="mt-10 text-center">
          <p>
            All Right Reserved by{" "}
            <Link
              className="text-pink-400 hover:tracking-wide duration-200"
              href={"https://facebook.com/rafeuddaraj1"}
              target="_blank"
            >
              Rafe Uddaraj
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
