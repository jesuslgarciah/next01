import React from 'react-dom';

function notFound() {
  return (
    <main>
      <h1>404 Not found</h1>
      <style jsx>
        {`
          h1 { background-color: red; }
        `}
      </style>
    </main>
  )
}

export default notFound;