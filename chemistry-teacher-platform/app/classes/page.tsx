import Link from "next/link";

const grades = [7, 8, 9, 10, 11];

export default function ClassesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Менің сыныптарым</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {grades.map((grade) => (
          <Link
            key={grade}
            href={`/classes/${grade}`}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-indigo-600">
              {grade}-сынып
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              {grade}-сыныпқа арналған химия материалдары
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
