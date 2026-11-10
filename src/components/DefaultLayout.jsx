import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout({children}) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800 flex flex-col justify-between w-full">
      <div className="w-full">
        <Navbar onSearch={(query) => console.log("Search:", query)} />
          <main>
            {children}
          </main>
      </div>

      <Footer />
    </div>
  );
}
