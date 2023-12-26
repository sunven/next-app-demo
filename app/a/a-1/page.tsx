import React from 'react'
import { sql } from '@vercel/postgres'

async function A() {
  const { rows } = await sql`SELECT * from CARTS where user_id=1`
  console.log('rows', rows)
  return <div>a-1</div>
}

export default A
