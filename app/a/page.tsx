'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

function A() {
  const pathname = usePathname()
  console.log(pathname)
  return <div>a</div>
}

export default A
