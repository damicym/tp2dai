export function safeParsearUrl(url){
    try {
        const nuevaUrl = new URL(url)
        const protocol = nuevaUrl.protocol
        if (protocol !== 'http:' && protocol !== 'https:') throw new Error('Protocolo no válido')
        const host = nuevaUrl.host
        if (host.slice(0, 3) !== 'www') throw new Error('Host no válido')
        const pathname = nuevaUrl.pathname
        const searchParams = nuevaUrl.searchParams
        return {
            host: host,
            pathname: pathname,
            searchParams: searchParams
        }
    } catch (error) {
        console.error('Error al parsear la URL:', error)
        return null
    }
}