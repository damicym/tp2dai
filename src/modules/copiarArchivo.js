import fs from "fs"

export function copiar(entrada, salida){
    fs.copyFile(entrada, salida, (err) => {
      if (err) {
        console.error('Error al copiar el archivo:', err)
        return
      }
      console.log('Archivo copiado exitosamente a ' + salida)
    })
}
