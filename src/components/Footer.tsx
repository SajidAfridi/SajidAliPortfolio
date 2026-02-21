import React from "react"

export function Footer() {
  return (
    <footer className="bg-[#0f1f3c] text-white py-10 border-t border-white/10">
      <div className="container max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <p className="text-lg font-bold">Sajid Ali</p>
            <p className="text-sm text-white/70">Lead Flutter Developer</p>
          </div>

          <div className="text-sm text-white/70">
            <p>© {new Date().getFullYear()} All rights reserved.</p>
            <p>Wartair, Dargai, KPK Pakistan</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
