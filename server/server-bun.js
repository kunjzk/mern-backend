import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname == "/") {
      return new Response("Hello Ice tea bun", { status: 200 });
    } else if (url.pathname == "/ice-tea") {
      return new Response("Thanks for ordering ice tea bun", { status: 200 });
    } else {
      return new Response("404 not found bun", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
