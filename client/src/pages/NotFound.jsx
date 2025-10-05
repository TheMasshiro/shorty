import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Icon from '../components/Icon';
import Button from '../components/Button';

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen px-4 py-20">
            <div className="w-full max-w-2xl">
                <Card className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
                        <Icon name="close" className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-6xl font-bold mb-3 bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400 bg-clip-text text-transparent">
                        404
                    </h1>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Oops! The page you're looking for doesn't exist.
                    </p>
                    <Link to="/">
                        <Button variant="primary">
                            Back to Home
                        </Button>
                    </Link>
                </Card>
            </div>
        </div>
    );
}
