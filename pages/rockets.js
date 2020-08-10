import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Rockets = (props) => {
  return (
    <div>
      <h1>Rockets Data</h1>
      <Link href='/'>
        <button>Home</button>
      </Link>
      <div>
        {props.rockets.map(rocket => {
          <div key={rocket.id} style={{color: 'red', fontSize: '14px'}}>
            <Link href={`rockets/${rocket.id}`}>
              <a>{rocket.name}</a>
            </Link>            
            {rocket.description}
          </div>
        })}
      </div>
    </div>
  )
}

Rockets.getInitialProps = async function() {
  const res = await fetch('https://api.spacexdata.com/v4/rockets');
  const data = await res.json();
  console.log('DATA', data);
  return {
    rockets: data
  }
}

export default Rockets;