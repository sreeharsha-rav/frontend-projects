import { useEffect } from "preact/hooks";
import { signal } from "@preact/signals";

// Create a signal for latency
const latency = signal<number | null>(null);

export function PacketLatency() {

    // Connect to the WebSocket server
    useEffect(() => {
        const client = new WebSocket('ws://localhost:55455');

        client.onopen = () => {
        console.log('WebSocket Client Connected');
        };

        client.onmessage = (message) => {
        const serverTime = parseInt(message.data as string);
        latency.value = new Date().getTime() - serverTime;
        };

        client.onerror = (error) => {
        console.error('WebSocket Error:', error);
        };

        return () => {
        client.close();
        };
    }, []);

    return (
        <span class="text-md text-gray-600 p-6">
            {latency.value !== null ? `${latency.value}ms` : 'Connecting...'}
        </span>
    );
}