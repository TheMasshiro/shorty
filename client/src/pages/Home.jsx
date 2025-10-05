import Card from '../components/Card';
import Input from '../components/Input';
import Icon from '../components/Icon';
import GradientBlob from '../components/GradientBlob';
import StatsCard from '../components/StatsCard';
import Button from '../components/Button';

export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen px-4 py-20">
            <div className="w-full max-w-4xl space-y-8">
                {/* Main Card */}
                <Card className="relative overflow-hidden">
                    {/* Gradient Background Decoration */}
                    <GradientBlob position="top-right" fromColor="blue-500" toColor="purple-500" />
                    <GradientBlob position="bottom-left" fromColor="indigo-500" toColor="pink-500" />
                    
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                            <Icon name="link" className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            Shorty
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Transform long URLs into short, shareable links in seconds
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="relative group">
                            <Input placeholder="Enter your long URL here..." />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
                        </div>
                        <Button variant="primary">
                            Shorten URL
                        </Button>
                    </div>
                </Card>

                {/* Stats Section */}
                <div className="flex justify-center">
                    <StatsCard 
                        icon="link" 
                        label="Links Shortened" 
                        value="48,392"
                        iconBgFrom="purple-500"
                        iconBgTo="purple-600"
                    />
                </div>
            </div>
        </div>
    );
}
