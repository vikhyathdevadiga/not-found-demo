import { notFound } from 'next/navigation'
export const runtime = 'edge';

async function fetchUser(id: string) {
  const res = await fetch(`https://non-streamed-response.vercel.app/api/user/${id}`)
  if (!res.ok) return undefined
  return res.json()
}

export default async function UserProfile({ params }: { params: { id: string } }) {
  const user = await fetchUser(params.id)

  if (!user) {
    notFound()
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <p className="mb-2"><span className="font-semibold">Name:</span> {user.name}</p>
      <p><span className="font-semibold">Email:</span> {user.email}</p>
    </div>
  )
}
