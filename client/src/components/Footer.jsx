import Icon from "./Icon";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-800/50 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-center space-x-2 text-gray-400">
                    <span className="text-sm">Built with ❤️ by</span>
                    <a
                        href="https://github.com/themasshiro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                    >
                        <Icon name="github" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">TheMasshiro</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
