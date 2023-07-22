export const metadata = {
  title: "Todo App",
  description: "By AhsanDev404",
};
import ReduxProvider from "@/components/PRovider";
import "../styles/global.css";
import Footer from "./Footer";

import Header from "./Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider >
        <Header />
        {children}
        <Footer />
        </ReduxProvider>
        
      </body>
    </html>
  );
}
