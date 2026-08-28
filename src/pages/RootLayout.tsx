import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

function RootLayout() {
  return (
    <div className="font-oswald  antialiased">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
