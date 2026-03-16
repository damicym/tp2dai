export function parsearUrl(url){
    const nuevaUrl = new URL(url)
    return {
        host: nuevaUrl.host,
        pathname: nuevaUrl.pathname,
        searchParams: nuevaUrl.searchParams
    }
}