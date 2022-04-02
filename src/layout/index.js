import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container mt-3 mb-3">
        {children}
      </main>
      <Footer />
    </>
  )
}