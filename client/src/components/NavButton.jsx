import { Button } from "@headlessui/react"

export default function NavButton({ children, onClick, className = "" }) {
    return (
        <Button
            className={`relative rounded-full p-1 mx-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 ${className}`}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
