import type { Estado, ResumenSonda, Sonda, Tipo } from './types'

export const OBJETIVO = -1.0

//Recorre el CSV y devuelve un array de sondas con sus lecturas
export function leerCsv(texto: string) {
  const sondas: Sonda[] = []
  const lineas = texto.trim().split('\n')


  for (let i = 1; i < lineas.length; i++) {
    const [fechaHora, nombre, tipo, temp] = lineas[i].trim().split(',')
    const hora = fechaHora.slice(11, 16) // "2026-10-07 01:20" -> "01:20"

    let sonda = sondas.find((s) => s.nombre === nombre)
    if (!sonda) {
      sonda = { nombre, tipo: tipo as Tipo, lecturas: [] }
      sondas.push(sonda)
    }

    sonda.lecturas.push({
      hora,
      minuto: Number(hora.slice(0, 2)) * 60 + Number(hora.slice(3, 5)),
      temp: Number(temp),
    })
  }
  console.log(sondas);


  return sondas
}

// Resumen de cada sonda de pulpa al final del proceso
export function resumirSondas(sondas: Sonda[]) {
  const resumen: ResumenSonda[] = []
  const pulpa = sondas.filter((s) => s.tipo === 'pulpa')

  // el último minuto con datos de todo el archivo
  let fin = 0
  for (const sonda of sondas) {
    const ultima = sonda.lecturas[sonda.lecturas.length - 1]
    if (ultima.minuto > fin) fin = ultima.minuto
  }

  for (const sonda of pulpa) {
    const ultima = sonda.lecturas[sonda.lecturas.length - 1]

    let estado: Estado = 'falta'
    if (fin - ultima.minuto > 10) {
      estado = 'sin-senal' // más de 10 minutos sin datos antes del final
    } else if (ultima.temp <= OBJETIVO) {
      estado = 'llego'
    }

    resumen.push({
      nombre: sonda.nombre,
      estado,
      temp: ultima.temp,
      hora: ultima.hora,
    })
  }

  // las que faltan primero, de la más caliente a la más fría
  resumen.sort((a, b) => {
    if (a.estado === 'falta' && b.estado !== 'falta') return -1
    if (a.estado !== 'falta' && b.estado === 'falta') return 1
    return b.temp - a.temp
  })

  return resumen
}

// Última temperatura del aire (Ambiente o Retorno)
export function ultimaTemperatura(sondas: Sonda[], nombre: string) {
  const sonda = sondas.find((s) => s.nombre === nombre)
  if (!sonda) return null
  return sonda.lecturas[sonda.lecturas.length - 1].temp
}
