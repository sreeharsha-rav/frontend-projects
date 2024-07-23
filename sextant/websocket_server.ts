const port = 55455; // The port to run the WebSocket server on

/**
 * Create a WebSocket server that sends the current timestamp to clients every 100ms.
 * 
 * @param {number} port The port to run the WebSocket server on
 * @returns {void}
 */
Deno.serve({ port }, (req) => {
    // Check if the request is a WebSocket upgrade
    if (req.headers.get("upgrade") != "websocket") {
      return new Response("Websocket Server: Please connect with a WebSocket client.", { status: 426 });
    }
  
    // Upgrade the connection to WebSocket
    const { socket, response } = Deno.upgradeWebSocket(req);
  
    // Log when a client connects
    socket.addEventListener("open", () => {
      console.log("A client connected!");
    });
  
    // Set up the interval to send timestamps every 100ms
    const intervalId = setInterval(() => {
      socket.send(new Date().getTime().toString());
    }, 100);
  
    // Clean up when the client disconnects
    socket.addEventListener("close", () => {
      console.log("A client disconnected!");
      clearInterval(intervalId);
    });
  
    // Optional: Handle any messages from the client
    socket.addEventListener("message", (event) => {
      console.log(`Received message from client: ${event.data}`);
      // You can add any specific message handling here if needed
    });
  
    return response;
  });
  
  console.log(`Websocket server running on ws://localhost:${port}`);