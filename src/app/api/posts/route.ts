import { NextResponse } from "next/server"; 

export async function GET() {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const posts = data.slice(0,4)
  return NextResponse.json({ data: posts });
}

export async function POST() {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })

  const data = await res.json()

  return NextResponse.json(data)
}