import Link from 'next/link';

export default () => {
    return <>
        <header>
            <div className="logo">
                <h1>Next</h1>
            </div>
            <ul className="nav">
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="#"><a>Contact</a></Link></li>

            </ul>

        </header>
    </>
}