import Link from "next/link";

/**
 * Renders a triangle alert icon.
 * 
 * @param {React.SVGProps<SVGSVGElement>} props - The SVG element props.
 * @returns {JSX.Element} The triangle alert icon component.
 */
function TriangleAlertIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    )
}

/**
 * Renders the 404 page component.
 * 
 * @returns {JSX.Element} The 404 page component.
 */
export default function Component() {
    return (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
            <TriangleAlertIcon className="mx-auto h-12 w-12 text-[#f44336]" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">404 - Page Not Found</h1>
            <p className="mt-4">
            The page you are looking for does not exist. Please check the URL or go back to the homepage.
            </p>
            <div className="mt-6">
            <Link
                href="/"
                className="inline-flex items-center rounded-md bg-[#f44336] px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-[#e53935] focus:outline-none focus:ring-2 focus:ring-[#f44336] focus:ring-offset-2"
                prefetch={false}
            >
                Go to Homepage
            </Link>
            </div>
        </div>
        </div>
    )
}
