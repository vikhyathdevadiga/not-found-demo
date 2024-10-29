import { Suspense } from 'react'
import { notFound } from 'next/navigation'
export const runtime = 'edge';

async function fetchUser(id: string) {
  const res = await fetch(`https://streamed-response.vercel.app/api/user/${id}`)
  if (!res.ok) return undefined
  return res.json()
}

async function UserDetails({ id }: { id: string }) {
  const user = await fetchUser(id)

  if (!user) {
    notFound()
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">User Details</h2>
      <p className="mb-1"><span className="font-medium">Name:</span> {user.name}</p>
      <p><span className="font-medium">Email:</span> {user.email}</p>
    </div>
  )
}

export default function UserProfile({ params }: { params: { id: string } }) {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">User Profile (Streaming)</h1>
      <Suspense fallback={<p className="text-gray-500">Loading user details...</p>}>
        <UserDetails id={params.id} />
      </Suspense>
    </div>
  )
}
