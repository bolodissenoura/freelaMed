import Header from "@components/Header";
const Layout = ({ children }) => {
  return (
    <div className="overflow-x-hidden min-h-screen">
      <Header />
      <main id="main" className="main-container">
        {children}
      </main>
    </div>
  );
};

export default Layout;
