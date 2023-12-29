import React from 'react'
import { sql } from '@vercel/postgres'

async function A() {
  const { rows } = await sql`SELECT * from users where id='410544b2-4001-4271-9855-fec4b6a6442a'`
  console.log('rows', rows)
  return <div>a-1{JSON.stringify(rows)}</div>
}

export default A
