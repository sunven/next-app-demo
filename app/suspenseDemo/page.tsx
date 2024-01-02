import React, { Suspense } from 'react'

function fetchRevenue() {
  return new Promise(resolve => {
    setTimeout(resolve, 2000)
  })
}

async function AsyncComponent() {
  await fetchRevenue()
  return <div>AsyncComponent</div>
}

function A() {
  return (
    <div>
      <Suspense fallback={<div>Suspense fallback</div>}>
        <AsyncComponent />
      </Suspense>
    </div>
  )
}

export default A
