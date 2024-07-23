import { useEffect } from "preact/hooks";
import { signal } from "@preact/signals";

interface AddressDisplayProps {
    url: string;
}

const ipAddress = signal<string | null>(null);

export function AddressDisplay({ url }: AddressDisplayProps) {

    // Fetch the IP address from the given URL
    useEffect(() => {
        if (ipAddress.value === null) {
          fetch(url)
            .then(response => response.json())
            .then(data => ipAddress.value = data.ip)
            .catch(error => console.error("Error fetching IP address:", error));
        }
      }, [url]);

    return (
        <div class="bg-gray-100 p-4 rounded-lg">
            <p class="text-gray-700 text-lg font-semibold">{ipAddress.value ? ipAddress.value : "Loading..."}</p>
        </div>
    );
}