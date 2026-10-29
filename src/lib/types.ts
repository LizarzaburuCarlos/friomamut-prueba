//Los dos tipos de sondas de lectura
export type Tipo = 'pulpa' | 'aire'


//Cada registro de lectura de una sonda
export type Lectura = {
    hora: string
    minuto: number
    temp: number
}

//Cada sonda con su tipo y sus lecturas
export type Sonda = {
    nombre: string
    tipo: Tipo
    lecturas: Lectura[]
}

//Estado de la sonda al final del proceso
export type Estado = 'llego' | 'falta' | 'sin-senal'


//Resumen de cada sonda de pulpa al final del proceso
export type ResumenSonda = {
    nombre: string
    estado: Estado
    temp: number
    hora: string
}
