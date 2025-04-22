import TopNav from '@/app/ui/dashboard/sidenav';
import Footer from "../ui/dashboard/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar di atas */}
      <TopNav />

      {/* Konten utama */}
      <main className="flex-grow p-6 md:p-12 overflow-y-auto">
        {children}
      </main>
    <Footer />

    </div>
  );
}
