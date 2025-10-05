export default function GradientBlob({ position = "top-right", fromColor = "blue-500", toColor = "purple-500", className = "" }) {
    const positionClasses = {
        "top-right": "top-0 right-0",
        "bottom-left": "bottom-0 left-0",
        "top-left": "top-0 left-0",
        "bottom-right": "bottom-0 right-0",
    };

    return (
        <div 
            className={`absolute ${positionClasses[position]} w-64 h-64 bg-gradient-to-br from-${fromColor}/10 to-${toColor}/10 rounded-full blur-3xl -z-10 ${className}`}
        />
    );
}
