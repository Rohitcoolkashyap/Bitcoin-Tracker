import Layout from '../components/layout'
import axios from 'axios';
import Prices from '../components/prices'
export default function Index(props) {
    return <>
        <Layout>
            <h1 className="heading">Bitcoin Tracker</h1>
            <Prices bpi={props.bpi} />
        </Layout>

    </>
}
Index.getInitialProps = async () => {
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const response = await axios.get(url)
    return { bpi: response.data.bpi }
}
