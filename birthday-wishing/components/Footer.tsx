export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-montserrat mb-2">
          Celebrating life's special moments
        </p>
        <p className="text-sm font-montserrat">
          © {new Date().getFullYear()} Birthday Wish Template. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

