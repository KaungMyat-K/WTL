import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import ScrollToTop from "../components/layouts/ScrollToTop";

function RootLayout() {
  return (
    <div className="font-oswald  antialiased">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
