import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="bg-slate-900 text-white">
            <div className="flex items-center h-16 px-4">
                <Link href="/">
                    <span className="font-bold">
                        ihbhuiyan28-facebook
                    </span>
                </Link>
            </div>
        </header>
    );
}
