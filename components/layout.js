import Navbar from './navbar';
import Head from 'next/head';

export default (props) => {
    return <>
        <Head>
            <title>Bitcoin tracker</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
        </Head>
        <Navbar />
        {/* every child component render here */}
        {props.children}
    </>

}