const apiKey = import.meta.env.VITE_API_KEY;

export default async function getWeatherRoute(req: Request, pathname: string) {
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set("Access-Control-Allow-Origin", "*");
  if (req.method === "GET") {
    const findSymbol = req.url.indexOf("?");
    if (findSymbol > -1) {
      const newUrl = req.url.slice(findSymbol, req.url.length);
      const params = new URLSearchParams(newUrl);

      const current = params.get("current");
      if (!current) {
        return new Response(
          JSON.stringify({ message: "Error: current parameter is required" }),
          {
            status: 400,
            headers,
          }
        );
      }

    //   const dataWeather = 
    }
  }
}
