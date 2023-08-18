const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const get = (path: string) => {
  return fetch(`${API_URL}${path}`, { cache: 'no-store' })
    .then(async (response) => {
      const jsonData = await response.json();
      if (response.status >= 400) {
        throw new Error (`${jsonData.statusCode} - ${jsonData.message}`)
      }

      return jsonData
    })
    .catch(() => null);
}
