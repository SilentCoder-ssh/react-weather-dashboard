import getWeatherRoute from "./routes/get-weather";

Bun.serve({
  port: 3100,

  async fetch(req: Request): Promise<any> {
    const urlInfos = new URL(req.url);
    const pathname = urlInfos.pathname.slice(1);
    const headers = new Headers();
    console.log(pathname)
    if (pathname === "favicon.ico") {
      return new Response(Bun.file("./public/pikachu.ico"));
    } else if (pathname === "weather/current") {
      return getWeatherRoute(req, pathname);
    }

    return new Response("Response successful!", { status: 200, headers });
  },
});
