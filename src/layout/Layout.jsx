export const Layout =({children})=>{
    return (
      <div className="w-screen h-screen">
        <nav className="absolute w-full h-10 bg-gray-900 flex justify-between px-8 items-center">
          <h1 className="text-gray-300">undefined.md</h1>
          <div className="flex gap-2">
          <button className="text-white border-2 border-teal-500 px-4 rounded">Copy</button>
          <button className="text-white bg-teal-500 px-4 rounded">Save</button>
          </div>
        </nav>
        <main className="px-8 py-2 h-full bg-slate-800 pt-12">
            {children}
        </main>
        
      </div>
    )
}
