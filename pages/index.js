import Image from 'next/image';
import Head from 'next/head';
import Header1 from '@/components/Header1';
import Header2 from '@/components/Header2';
import Header3 from '@/components/Header3';
import Header4 from '@/components/Header4';
import Footer from '@/components/Footer';
const Home = () => {

  let imgs = [
    'https://assets.oyoroomscdn.com/cmsMedia/6e9d9804-9c6f-4b18-a5d5-5e9a8f9815e5.jpg',
    'https://assets.oyoroomscdn.com/cmsMedia/b4462e5e-fd6b-44e4-99d7-fc83767ed892.png'
  ];
  return (
    <div >
      <Head>
        <title>
          OYO : India's best online hotel Booking Site for Sanitized Stay
        </title>
        <link rel="icon" href="/icon.png"></link>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className='mx-20 my-14'>
        <img 
        src={imgs[0]}
        alt='banner1'
        width={200}
        height={100}
        className='h-60 w-full'
        />
      </div>
      <div className='mb-14 mx-20'>
      <img 
        src={imgs[1]}
        alt='banner1'
        width={200}
        height={100}
        className='h-40 w-full'
        />

      <Header4 /> 
      </div>
      <Footer />

    </div>
  )
}

export default Home;