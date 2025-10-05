import { Input as HeadlessInput } from "@headlessui/react"

export default function Input({ placeholder, className = "", ...props }) {
    return (
        <HeadlessInput
            type="text"
            placeholder={placeholder}
            className={`w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700/50 dark:text-white transition-all duration-200 data-[focus]:ring-2 data-[focus]:ring-blue-500 data-[focus]:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500 ${className}`}
            {...props}
        />
    );
}
