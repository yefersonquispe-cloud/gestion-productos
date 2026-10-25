import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PackagePlus, Eraser, CircleAlert, CircleCheck } from 'lucide-react'

export default function ProductForm({ setProductos }) {
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState('')
  const [categoria, setCategoria] = useState('')
  const [error, setError] = useState('')
  const [confirmacion, setConfirmacion] = useState('')

  const limpiarFormulario = () => {
    setDescripcion('')
    setPrecio('')
    setCategoria('')
    setError('')
    setConfirmacion('')
  }

  const registrarProducto = (e) => {
    e.preventDefault()
    setError('')
    setConfirmacion('')

    if (descripcion.trim().length < 3) {
      setError('La descripción es obligatoria y debe contener al menos 3 caracteres.')
      return
    }

    if (!precio.trim() || !Number.isFinite(Number(precio)) || Number(precio) <= 0) {
      setError('Ingresa un precio numérico mayor que cero.')
      return
    }

    if (!categoria.trim()) {
      setError('Ingresa la categoría del producto.')
      return
    }

    setProductos((productosActuales) => {
      const numerosUsados = new Set(
        productosActuales.map((producto) =>
          Number(producto.codigo.replace('PROD-', ''))
        )
      )

      let siguienteNumero = 1
      while (numerosUsados.has(siguienteNumero)) siguienteNumero++

      const nuevoProducto = {
        codigo: `PROD-${String(siguienteNumero).padStart(3, '0')}`,
        descripcion: descripcion.trim(),
        precio: Number(precio),
        categoria: categoria.trim(),
      }

      return [...productosActuales, nuevoProducto]
    })

    setConfirmacion('¡Producto registrado correctamente!')
    setDescripcion('')
    setPrecio('')
    setCategoria('')
  }

  const estiloInput = 'h-11 min-h-11 w-full min-w-0 rounded-lg border-[#CCD7C6] bg-[#FAFBF8] px-3 text-sm text-[#203D30] shadow-none transition-colors placeholder:text-[#899580] hover:border-[#9FB28F] focus-visible:border-[#365D42] focus-visible:ring-[3px] focus-visible:ring-[#E0EBCF]'

  return (
    <Card className="min-w-0 gap-0 overflow-hidden rounded-xl border-[#CDD8C7] bg-white py-0 text-[#203D30] shadow-none">
      <CardHeader className="block space-y-0 border-b border-[#183D32] bg-[#183D32] px-4 py-4 sm:px-5 sm:py-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D6E8B5] text-[#183D32] sm:h-10 sm:w-10">
            <PackagePlus size={21} strokeWidth={1.7} />
          </span>

          <div className="min-w-0">
            <CardTitle className="text-base font-semibold leading-tight tracking-tight text-white sm:text-lg">
              Registrar producto
            </CardTitle>
            <p className="mt-1 text-[11px] leading-4 text-[#C1D0BC] sm:text-xs">
              Añade un artículo al catálogo
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-5">
        <form onSubmit={registrarProducto} noValidate className="space-y-4">
          {error && (
            <div role="alert" aria-live="polite" className="flex items-start gap-2.5 rounded-lg border border-[#E8C9C1] bg-[#FCF2EE] p-3 text-sm leading-relaxed text-[#9A4432]">
              <CircleAlert size={18} className="mt-0.5 shrink-0" />
              <p>{error}</p>
            </div>
          )}

          {confirmacion && (
            <div role="status" aria-live="polite" className="flex items-start gap-2.5 rounded-lg border border-[#B7D9BF] bg-[#EAF6EC] p-3 text-sm leading-relaxed text-[#236B3A]">
              <CircleCheck size={18} className="mt-0.5 shrink-0" />
              <p>{confirmacion}</p>
            </div>
          )}

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1">
            <div className="min-w-0 space-y-2 sm:col-span-2 xl:col-span-1">
              <Label htmlFor="descripcion" className="text-xs font-semibold text-[#3C5535]">
                Descripción
              </Label>
              <Input
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className={estiloInput}
                placeholder="Ej. Teclado inalámbrico"
                autoComplete="off"
              />
            </div>

            <div className="min-w-0 space-y-2">
              <Label htmlFor="precio" className="text-xs font-semibold text-[#3C5535]">
                Precio (S/)
              </Label>
              <Input
                id="precio"
                type="number"
                min="0"
                step="0.01"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                className={`${estiloInput} tabular-nums`}
                placeholder="0.00"
              />
            </div>

            <div className="min-w-0 space-y-2">
              <Label htmlFor="categoria" className="text-xs font-semibold text-[#3C5535]">
                Categoría
              </Label>
              <Input
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className={estiloInput}
                placeholder="Ej. Accesorios"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2.5 border-t border-[#E4EADF] pt-4 sm:grid-cols-[minmax(0,1fr)_auto]">
            <Button
              type="submit"
              className="h-11 min-h-11 w-full shrink-0 gap-2 rounded-lg bg-[#183D32] px-3 text-xs font-semibold text-white shadow-none transition-colors hover:bg-[#2C5540] focus-visible:ring-[#A5B59D]"
            >
              <PackagePlus size={16} />
              Registrar producto
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={limpiarFormulario}
              className="h-11 min-h-11 w-full shrink-0 gap-2 rounded-lg border-[#B94336] bg-[#B94336] px-4 text-xs font-semibold text-white shadow-none transition-colors hover:border-[#9C342A] hover:bg-[#9C342A] hover:text-white focus-visible:ring-[#F0C7C1]"
            >
              <Eraser size={15} />
              Limpiar
            </Button>
          </div>

          <p className="rounded-lg border border-[#DFE7D5] bg-[#F3F6EE] px-3 py-2.5 text-[11px] leading-5 text-[#6D7F60]">
            Completa los tres campos para registrar el producto. La descripción debe tener al menos 3 caracteres y el código se asignará automáticamente.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}