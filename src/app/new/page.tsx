import Link from "next/link";

export default function New() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <div>
        <form className="flex gap-2 flex-2" action="">
          <input
            name="title"
            type="text"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          />
          <div className="flex gap-1 justify-end">
            <Link
              href=".."
              className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
