import { Banner } from "../components/Banner.tsx";
import { Exhibit } from "../components/Exhibit.tsx";
import { AddressDisplay } from "../islands/AddressDisplay.tsx";
import { PacketLatency } from "../islands/PacketLatency.tsx";

export default function Home() {
  
  return (
    <div class="p-4">
      <Banner title="Sextant"/>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Exhibit title="Your IPv4 Address">
          <AddressDisplay url="https://api.ipify.org?format=json" />
        </Exhibit>
        <Exhibit title="Your IPv6 Address">
          <AddressDisplay url="https://api64.ipify.org?format=json" />
        </Exhibit>
      </div>

      <Exhibit title="Packet Latency">
          <PacketLatency />
      </Exhibit>

    </div>
  );
}
