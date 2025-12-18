function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-950">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-sky-400 drop-shadow-lg">
          It Works!
        </h1>
        <p className="mt-4 text-xl text-slate-300">
          Tailwind v4 + Vite + React
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <div className="h-16 w-16 rotate-x-12 rounded-xl bg-pink-500 shadow-xl transition hover:rotate-x-0 hover:scale-110" />
          <div className="h-16 w-16 rotate-y-12 rounded-xl bg-purple-500 shadow-xl transition hover:rotate-y-0 hover:scale-110" />
        </div>
      </div>
    </div>
  );
}

export default App;
