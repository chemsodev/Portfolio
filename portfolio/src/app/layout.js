import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
const poppins = localFont({
  src: "./fonts/Poppins/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export const metadata = {
  title: "Chems Eddine Bourabia",
  description: "Portfolio of Chems Eddine Bourabia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}antialiased`}
      >
         <Header/>
        {children}
      </body>
    </html>
  );
}
