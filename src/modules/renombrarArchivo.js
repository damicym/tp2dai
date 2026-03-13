import fs from "fs"

export function renombrar(entrada, salida){
    fs.rename(entrada, salida, (err) => {
      if (err) {
        console.error('Error al renombrar el archivo:', err)
        return
      }
      console.log('Archivo renombrado exitosamente a ' + salida)
    })
}
