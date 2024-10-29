import { NextResponse } from 'next/server'
export const runtime = 'edge';

const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
]

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = users.find(u => u.id === params.id)

  if (!user) {
    return new NextResponse('User not found', { status: 404 })
  }

  // Simulate a delay to make the difference between streamed and non-streamed more noticeable
  await new Promise(resolve => setTimeout(resolve, 1000))

  return NextResponse.json(user)
}