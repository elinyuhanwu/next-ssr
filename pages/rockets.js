import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Rockets = ({ rockets }) => {
  console.log('ROCKETS', rockets);
  return (
    <div 
      style={{ 
        backgroundColor: 'black',
        color: 'white',
        padding: '30px'
      }}>
      <h1>Rockets Data</h1>
      <Link href='/'>
        <button>Home</button>
      </Link>
      {rockets.map(rocket => {
         return (
           <div key={rocket.id}>
             <h3>{rocket.rocket_name}</h3>
             <p>{rocket.description}</p>
             <div 
              style={{
                display: 'flex',
                overflowX: 'auto'
              }}>
               {rocket.flickr_images.map(img => <img width='300' src={img} style={{padding: '10px'}} />)}
             </div>
           </div>
         )
      })}
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://api.spacexdata.com/v3/rockets?limit=10');
  const data = await res.json();
  return {
    props: {
      rockets: data
    }
  }
}

export default Rockets;