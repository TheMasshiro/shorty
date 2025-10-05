import { Button as HeadlessButton } from "@headlessui/react"

export default function Button({ children, onClick, className = "", variant = "primary", ...props }) {
    const variants = {
        primary: "w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] data-[hover]:from-blue-700 data-[hover]:to-purple-700 data-[active]:scale-[0.98]",
        secondary: "w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] data-[hover]:bg-gray-700 data-[active]:scale-[0.98]",
        outline: "w-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold py-4 px-6 rounded-lg transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-[1.02] data-[active]:scale-[0.98]",
    };

    return (
        <HeadlessButton
            className={`${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </HeadlessButton>
    );
}
