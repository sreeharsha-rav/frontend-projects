import { ComponentChildren } from "preact";

interface ExhibitProps {
    title: string;
    children?: ComponentChildren;
}
  
export function Exhibit({ title, children }: ExhibitProps) {
    return (
        <div class="border rounded-lg overflow-hidden shadow-lg mb-4">
            <div class="p-4">
                <h2 class="text-lg font-bold mb-2 p-2">{title}</h2>
                {children}
            </div>
        </div>
    );
}