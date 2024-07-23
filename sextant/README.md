# Sextant

A single-page application built using Fresh and Deno that displays the IP address and latency of a network.

## Technologies Used

- **Backend**: Deno, TypeScript
- **Frontend**: Fresh, HTML, Tailwind CSS, TSX

## Features

- Displays the IP address of the network.
- Displays the latency of the network.

## Project Structure

The project is divided into two main parts:

1. [`websocket_server`](websocket_server.ts): A Deno server that listens for incoming websocket connections and sends the IP address and latency of the network to the connected clients.

2. [`frontend`](./src/routes/index.tsx): A single-page application built using Fresh that connects to the websocket server and displays the IP address and latency of the network.

## Installation

Clone the repository:

```
git clone
```

No need to install any dependencies. The project uses Deno's built-in module system.

## Usage

1. Start the websocket server:

```bash
deno task server
```

2. Start the frontend:

```bash
deno task start
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.