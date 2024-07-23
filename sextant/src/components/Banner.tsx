import { ComponentChildren } from "preact";

interface BannerProps {
  title: string;
  subtitle?: string;
  children?: ComponentChildren;
}

export function Banner({ title, subtitle, children }: BannerProps) {
  return (
    <div class="bg-blue-600 text-white p-6 mb-4 rounded-md">
      <h1 class="text-3xl font-bold">{title}</h1>
      {subtitle && <p class="text-xl mt-2">{subtitle}</p>}
      {children}
    </div>
  );
}
