export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-semibold text-slate-700">My Next.js App</p>
        <p>
          &copy; {new Date().getFullYear()} My Next.js App. Built with care.
        </p>
      </div>
    </footer>
  );
}
