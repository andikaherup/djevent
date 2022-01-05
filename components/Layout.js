import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Layout(title, keywords, description, children) {
    return (
        <div>
           <Head>
                <title>{title}</title>
                <meta name='Description' content={description} />
                <meta name='keywords' content={keywords} />
           </Head> 
           <div className={styles.container}></div>
              {children}
        </div>
    )
}

Layout.defaultProps = {
    title: 'DJ event | find the hottest party',
    description : 'Find the latest DJ and other musical event',
    keywords: 'dj, event, party, music, hottest, latest'
}
