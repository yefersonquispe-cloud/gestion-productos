import { Package, ArrowUpRight } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-4 rounded-xl border border-[#183D32] bg-[#183D32] px-4 py-6 text-center sm:flex-row sm:justify-between sm:gap-6 sm:p-6 sm:text-left lg:px-8 lg:py-7">
      <div className="flex min-w-0 flex-col items-center gap-3 sm:flex-row sm:gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#D6E8B5] text-[#183D32] sm:h-14 sm:w-14">
          <Package className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.6} />
        </div>

        <div className="min-w-0">
          <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#B9CDBA] sm:text-[10px]">
            Panel de control
          </p>
          <h1 className="text-[23px] font-semibold leading-tight tracking-tight text-[#F7F8F0] sm:text-3xl lg:text-4xl">
            Gestión de productos
          </h1>
          <p className="mt-1.5 text-xs leading-5 text-[#B9CDBA] sm:text-sm">
            Administra y organiza tu catálogo
          </p>
        </div>
      </div>

      <div className="flex w-fit shrink-0 items-center justify-center gap-2 rounded-md border border-[#476555] bg-[#214638] px-3 py-2 text-[11px] font-medium text-[#EDF3E5] sm:text-xs">
        <span className="h-1.5 w-1.5 rounded-full bg-[#D6E8B5]" />
        Catálogo activo
        <ArrowUpRight size={14} className="ml-1 text-[#D6E8B5]" />
      </div>
    </header>
  )
}