import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Package, Boxes } from 'lucide-react'

export default function ProductTable({ productos }) {
  return (
    <Card className="min-w-0 gap-0 overflow-hidden rounded-xl border-[#CDD8C7] bg-white py-0 text-[#203D30] shadow-none">
      <CardHeader className="block space-y-0 border-b border-[#183D32] bg-[#183D32] px-4 py-5 sm:px-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="text-lg font-semibold leading-tight tracking-tight text-white">
              Catálogo de productos
            </CardTitle>
            <p className="mt-1 text-xs leading-5 text-[#C1D0BC]">
              Consulta los artículos registrados
            </p>
          </div>

          <div className="flex w-fit shrink-0 items-center gap-2 rounded-lg bg-[#D6E8B5] px-3 py-2 text-[#244630]">
            <Boxes size={16} strokeWidth={1.8} />
            <span className="text-sm font-bold tabular-nums">{productos.length}</span>
            <span className="text-[11px] font-medium">
              {productos.length === 1 ? 'producto' : 'productos'}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="min-w-0 p-0">
        <Table className="block w-full md:table md:table-fixed">
          <colgroup className="hidden md:table-column-group">
            <col className="w-[17%]" />
            <col className="w-[38%]" />
            <col className="w-[19%]" />
            <col className="w-[26%]" />
          </colgroup>

          <TableHeader className="hidden bg-[#E8EFDF] md:table-header-group">
            <TableRow className="border-b border-[#CCD9C0] hover:bg-[#E8EFDF]">
              <TableHead className="h-11 whitespace-nowrap pl-5 pr-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#49633B]">
                Código
              </TableHead>
              <TableHead className="h-11 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#49633B]">
                Descripción
              </TableHead>
              <TableHead className="h-11 whitespace-nowrap pl-3 pr-5 text-right text-[10px] font-bold uppercase tracking-[0.12em] text-[#49633B]">
                Precio
              </TableHead>
              <TableHead className="h-11 pl-3 pr-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#49633B]">
                Categoría
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="block space-y-3 bg-[#F1F5EB] p-3 sm:p-4 md:table-row-group md:space-y-0 md:bg-white md:p-0">
            {productos.length > 0 ? (
              productos.map((producto) => (
                <TableRow
                  key={producto.codigo}
                  className="grid grid-cols-2 gap-x-3 gap-y-3 rounded-lg border border-[#D7E0CD] bg-white p-4 transition-colors hover:bg-[#F0F5E8] md:table-row md:rounded-none md:border-x-0 md:border-t-0 md:border-b md:border-[#E0E7D9] md:p-0 md:even:bg-[#F7F9F3] md:hover:bg-[#EAF2DF]"
                >
                  <TableCell className="col-span-2 block p-0 align-middle md:table-cell md:py-4 md:pl-5 md:pr-3">
                    <span className="whitespace-nowrap font-mono text-[11px] font-semibold text-[#708164]">
                      {producto.codigo}
                    </span>
                  </TableCell>

                  <TableCell className="col-span-2 block whitespace-normal break-words border-b border-[#E6ECDD] px-0 pb-3 pt-0 align-middle text-sm font-semibold leading-5 text-[#29452F] md:table-cell md:border-0 md:px-3 md:py-4 md:font-medium">
                    {producto.descripcion}
                  </TableCell>

                  <TableCell className="block whitespace-nowrap p-0 align-middle tabular-nums md:table-cell md:py-4 md:pl-3 md:pr-5 md:text-right">
                    <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.12em] text-[#7B8A6F] md:hidden">
                      Precio
                    </span>
                    <span className="mr-1 text-[11px] font-medium text-[#7B8A6F]">S/</span>
                    <span className="text-base font-bold text-[#183D32] md:text-sm">
                      {Number(producto.precio).toFixed(2)}
                    </span>
                  </TableCell>

                  <TableCell className="block min-w-0 p-0 text-right align-middle md:table-cell md:py-4 md:pl-3 md:pr-5 md:text-left">
                    <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.12em] text-[#7B8A6F] md:hidden">
                      Categoría
                    </span>
                    <span className="inline-block max-w-full whitespace-normal break-words rounded-md border border-[#D5DFC9] bg-[#EDF3E5] px-2 py-1 text-[11px] font-medium leading-4 text-[#536F40] md:px-2.5 md:py-1.5">
                      {producto.categoria}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="block border-0 hover:bg-[#F1F5EB] md:table-row md:hover:bg-white">
                <TableCell colSpan={4} className="block whitespace-normal px-4 py-12 text-center md:table-cell">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E8EFDF] text-[#718B5E]">
                    <Package size={27} strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-medium text-[#6D7F60]">
                    Todavía no hay productos registrados.
                  </p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}