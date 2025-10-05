import Icon from './Icon';

export default function StatsCard({ icon = "link", label, value, iconBgFrom = "purple-500", iconBgTo = "purple-600" }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow w-full max-w-md">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${iconBgFrom} to-${iconBgTo} rounded-lg flex items-center justify-center`}>
                        <Icon name={icon} className="w-6 h-6 text-white" />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
                </div>
            </div>
        </div>
    );
}
