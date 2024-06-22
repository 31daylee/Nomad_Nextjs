import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";
import favicon from "../public/favicon-32x32.png";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
  icons: {
    icon: favicon.src,
  },

  description: "The best movies on the best framework",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
