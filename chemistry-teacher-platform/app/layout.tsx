import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ChemTeach Platform",
  description: "Химия мұғалімдеріне арналған платформа",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kk">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex min-h-screen">

          {/* Sidebar */}
          <aside className="w-64 bg-white border-r p-5">
            <h2 className="text-xl font-bold text-indigo-600 mb-6">
              ChemTeach
            </h2>

            <nav className="space-y-2 text-sm">
              <Link href="/" className="block p-2 rounded-lg hover:bg-gray-100">
                Басты бет
              </Link>
              <Link href="/classes" className="block p-2 rounded-lg hover:bg-gray-100">
                Менің сыныптарым
              </Link>
              <Link href="/builder" className="block p-2 rounded-lg hover:bg-gray-100">
                Тапсырма жасау
              </Link>
              <Link href="/games" className="block p-2 rounded-lg hover:bg-gray-100">
                Ойындар
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">

            {/* Topbar */}
            <header className="bg-white border-b p-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Химия платформасы
              </span>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
                Профиль
              </button>
            </header>

            {/* Page Content */}
            <main className="p-6 flex-1">
              {children}
            </main>

          </div>
        </div>
      </body>
    </html>
  );
}
