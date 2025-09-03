import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="flex items-center justify-center h-16">
                <span>
                    &copy; Made by {' '}
                    <Link
                        href="/"
                        className="font-bold"
                    >
                        ihbhuiyan28
                    </Link>
                </span>
            </div>
        </footer>
    );
}
