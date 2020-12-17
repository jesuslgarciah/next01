import React from 'react-dom';
import Link from 'next/link';

function HomePage() {
  return(
    <main>
      <h1>Página principal</h1>
      <Link href="/about">
        <a>I a <em>/about</em></a>
      </Link>
      <style jsx>
        {`
          h1 { color: red; }
        `}
      </style>
    </main>
  )
}

export default HomePage;