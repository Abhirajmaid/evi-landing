import Sidebar from "../components/Sidebar"; // Double dot use karein kyunki components bahar hai

export default function Layout({ children }) {
  return (
    <div className="flex bg-[#f4f7f6] min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}