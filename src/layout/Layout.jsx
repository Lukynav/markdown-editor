export const Layout =({children})=>{
    return (
      <>
        <nav className="w-full h-16 bg-gray-900">

        </nav>
        <main className="p-2 h-screen bg-slate-800">
            {children}
        </main>
      </>
    )
  }