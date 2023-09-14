import { useEffect } from 'react';
import { Layout } from '../../components/Layout/Layout';

export default () => {

    useEffect(() => {
        if (window) {
            window.location.replace('https://clwillhuang.github.io/personal-website/');
        }
    }, [])

    return(
        <Layout>
        </Layout>
    )
}