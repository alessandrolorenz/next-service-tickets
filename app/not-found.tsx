import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
            <p className="mt-4 text-lg text-gray-600">
                Oops! The page you are looking for does not exist.
            </p>
            <Link href="/"  className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">   
                    Go back home
            </Link>
        </div>
    );
};

export default NotFound;