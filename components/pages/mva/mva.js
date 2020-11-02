import Head from 'next/head';
import Link from 'next/link';

const path="../media/";
const mva_href = [ 'project_management' ];

export const Mva = ({ t }) =>
{
    return (
        <div className="mva">
            <Head>
                <title>МВА</title>
                <meta name="description" content={"МВА" + " " + mva_href.map((item) => t(item))} />
            </Head>
                            {mva_href.map((item, index) => { return (
                                <Link key={index} href={item}>
                        <div className='mvaPagesHrefItem'>
                            <img className='mvaPagesHrefItemBack' alt={item} src={path + item + ".png"} />
                            <div className='dummy'></div>
                            <p className='mvaPagesHrefItemText'>{t(item)}</p>
                        </div>
                        </Link>
                    )})}
        </div>
    )
}