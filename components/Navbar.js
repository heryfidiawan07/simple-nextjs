import Link from 'next/link'

function Navbar(props) {
    return (
        <div className="bg-blue-500">
            <div className="container py-5">
                <div className="flex items-center justify-between">
                    <div>
                        <a className="text-white uppercase font-semi-bold tracking-tighter">
                            {process.env.appName}
                        </a>
                    </div>
                    <div className="flext items-center">
                        <Link href="/">
                            <a className="text-blue-200 hover:text-white py-5 px-3">
                                Home
                            </a>
                        </Link>
                        <Link href="/about">
                            <a className="text-blue-200 hover:text-white py-5 px-3">
                                About
                            </a>
                        </Link>
                        <a href="/login" className="text-blue-200 hover:text-white py-5 px-3">
                            Login
                        </a>
                        <a href="/register" className="text-blue-200 hover:text-white py-5 px-3">
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;