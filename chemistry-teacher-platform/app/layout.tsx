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
      <body className="text-gray-900">
        <div className="min-h-screen md:flex">

          {/* Sidebar */}
          <aside className="hidden md:block md:w-64 bg-gradient-to-b from-sky-50 via-white to-cyan-50 border-r border-cyan-100 p-5">
            <h2 className="text-xl font-bold text-blue-700 mb-6">
              ChemTeach
            </h2>

            <nav className="space-y-2 text-sm">
              <Link href="/" className="block p-2 rounded-lg hover:bg-cyan-100/70">
                Басты бет
              </Link>
              <Link href="/classes" className="block p-2 rounded-lg hover:bg-cyan-100/70">
                Менің сыныптарым
              </Link>
              <Link href="/builder" className="block p-2 rounded-lg hover:bg-cyan-100/70">
                Тапсырма жасау
              </Link>
              <Link href="/games" className="block p-2 rounded-lg hover:bg-cyan-100/70">
                Ойындар
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 flex flex-col min-w-0">

            {/* Mobile top nav */}
            <div className="md:hidden border-b border-cyan-100 bg-white/90 backdrop-blur px-4 py-3">
              <div className="text-lg font-bold text-blue-700">ChemTeach</div>
              <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 text-sm">
                <Link href="/" className="whitespace-nowrap px-3 py-2 rounded-lg bg-cyan-100/70">
                  Басты бет
                </Link>
                <Link href="/classes" className="whitespace-nowrap px-3 py-2 rounded-lg bg-cyan-100/70">
                  Сыныптар
                </Link>
                <Link href="/builder" className="whitespace-nowrap px-3 py-2 rounded-lg bg-cyan-100/70">
                  Тапсырма жасау
                </Link>
                <Link href="/games" className="whitespace-nowrap px-3 py-2 rounded-lg bg-cyan-100/70">
                  Ойындар
                </Link>
              </nav>
            </div>

            {/* Topbar */}
            <header className="bg-white/90 backdrop-blur border-b border-cyan-100 px-4 py-3 md:p-4 flex justify-between items-center">
              <span className="text-sm text-slate-600">
                Химия платформасы
              </span>
              <Link
                href="/profile"
                className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:brightness-105"
              >
                Профиль
              </Link>
            </header>

            {/* Page Content */}
            <main className="p-4 md:p-6 flex-1">
              {children}
            </main>

          </div>
        </div>
      </body>
    </html>
  );
}
