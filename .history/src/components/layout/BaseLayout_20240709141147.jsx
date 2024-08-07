import { PageWrapper } from "../../styles/styles";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const BaseLayout = () => {
  return (
    <PageWrapper>
      <Header />
      <Sidebar />
      <div
        style={{
          minHeight: "calc(100vh - 545px)",
        }}
      >
        <Outlet />
      </div>
      <Footer />
      <ToastContainer
     position="top-right"
     autoClose={3000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
     transition: Bounce
    />
    </PageWrapper>
  );
};

export default BaseLayout;
