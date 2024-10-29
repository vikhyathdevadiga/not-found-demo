import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: 'noindex',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Not Found</h1>
        <p className="text-gray-600">Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  )
}