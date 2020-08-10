// Entry point of our app
import Link from 'next/link';

const Index = () => (
  <div style={{fontSize: '20px', color: 'blue'}}>
    <h1>SSR Magician</h1>
    <Link href="/rockets">
      <button>Rockets</button>
    </Link>
    <Link href="/about">
      <button>About</button>
    </Link>    
  </div>
);

export default Index;
