import { useState } from 'react'
import { Boxes, ArrowDownRight, CircleDot } from 'lucide-react'
import Header from './components/layout/Header'
import ProductForm from './components/products/ProductForm'
import ProductTable from './components/products/ProductTable'
import { productosIniciales } from './data/productos'

export default function App() {
  const [productos, setProductos] = useState(productosIniciales)

  return (
    <main className="min-h-screen bg-[#F3F4ED] px-3 py-3 font-sans text-[#203D30] sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="mx-auto w-full max-w-[1280px] space-y-4 sm:space-y-6">
        <Header />

        <section className="grid min-w-0 grid-cols-1 items-start gap-4 sm:gap-5 xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-6">
          <div className="min-w-0">
            <ProductForm setProductos={setProductos} />
          </div>

          <div className="min-w-0">
            <ProductTable productos={productos} />
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-[#D8DFD0] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#E5EBDD] text-[#59714A]">
              <Boxes size={17} strokeWidth={1.6} />
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#526A45]">
                Inventario / Control
              </p>
              <p className="mt-0.5 text-[10px] leading-4 text-[#7C8975]">
                Gestión de productos · Catálogo local · Los cambios no se guardan permanentemente
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-md bg-[#EAF0E2] px-3 py-2 sm:justify-start sm:bg-transparent sm:p-0">
            <span className="flex items-center gap-1.5 text-[10px] font-medium text-[#6F7F65]">
              <CircleDot size={12} className="text-[#718D59]" />
              Sistema operativo
            </span>

            <span className="flex items-center gap-1.5 border-l border-[#CCD7C2] pl-3 text-sm font-semibold tabular-nums text-[#365838]">
              {String(productos.length).padStart(2, '0')}
              <ArrowDownRight size={13} className="text-[#8CA373]" />
              <span className="text-[10px] font-normal text-[#7C8975]">
                artículos
              </span>
            </span>
          </div>
        </footer>
      </div>
    </main>
  )
}