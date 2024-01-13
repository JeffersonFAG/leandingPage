import { Ubuntu } from "next/font/google";
import "../styles/globals.css";

const inter = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Oasis Piscinas",
  description:
    "Un paraiso en tu hogar, en Oasis diseñamos y construimos la piscina de tus sueños",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
