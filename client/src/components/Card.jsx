export default function Card({ children, className = '' }) {
    return (
        <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 w-full max-w-2xl ${className}`}>
            {children}
        </div>
    );
}
