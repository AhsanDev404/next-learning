
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-5">
    <div className="container mx-auto flex items-center justify-between">
      <div>
        <p className="text-sm">© 2023 Your Todo App. All rights reserved.</p>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-4 border-t border-gray-600 px-6 py-2 text-center">
      <p className="text-xs">
        Built by {" "}
        <span role="img" aria-label="Heart" className="text-red-600">
          
        </span>{' '}
        AhsanDev404
      </p>
    </div>
  </footer>
  )
}
