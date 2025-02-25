// Product Layout

export default function ProductLayout({ children }) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        {children}
        <h1>Featured Products</h1>
      </main>
    </div>
  );
}
