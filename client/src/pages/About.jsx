import Card from '../components/Card';
import Icon from '../components/Icon';
import GradientBlob from '../components/GradientBlob';

export default function About() {
    const features = [
        {
            icon: "link",
            title: "Fast & Simple",
            description: "Shorten your URLs in seconds with our lightning-fast service. No registration required."
        },
        {
            icon: "github",
            title: "Open Source",
            description: "Built as a CS50x final project. View the source code and contribute on GitHub."
        },
    ];

    const techStack = [
        { name: "React", category: "Frontend" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Flask", category: "Backend" },
    ];

    return (
        <div className="flex items-center justify-center min-h-screen px-4 py-20">
            <div className="w-full max-w-4xl space-y-8">
                {/* Hero Section */}
                <Card className="relative overflow-hidden">
                    <GradientBlob position="top-right" fromColor="mauve" toColor="pink" />
                    <GradientBlob position="bottom-left" fromColor="sapphire" toColor="teal" />

                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
                            <Icon name="link" className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                            About Shorty
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            A modern URL shortener built with React and modern web technologies.
                            Created as a final project for Harvard's CS50x course.
                        </p>
                    </div>
                </Card>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto justify-items-center">
                    {features.map((feature, index) => (
                        <Card key={index} className="w-full max-w-sm relative overflow-hidden">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                                        <Icon name={feature.icon} className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Tech Stack */}
                <Card className="relative overflow-hidden">
                    <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                        Built With
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {techStack.map((tech, index) => (
                            <div key={index} className="bg-gray-100 dark:bg-gray-700/50 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                                <p className="font-semibold text-gray-900 dark:text-white">{tech.name}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{tech.category}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Project Info */}
                <Card className="relative overflow-hidden text-center">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        CS50x Final Project
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        This project was created as the final project for Harvard University's CS50x:
                        Introduction to Computer Science course. It demonstrates web development skills,
                        including React, modern UI/UX design, and full-stack development.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://github.com/themasshiro/shorty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <Icon name="github" className="w-5 h-5" />
                            <span>View on GitHub</span>
                        </a>
                        <a
                            href="https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <Icon name="edx" className="w-5 h-5" />
                            <span>About CS50x</span>
                        </a>
                    </div>
                </Card>
            </div>
        </div>
    );
}
