export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-semibold text-white">Reed Iredale</span>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a
            href="mailto:reed@reediredale.com"
            className="hover:text-gray-400 transition-colors"
          >
            reed@reediredale.com
          </a>
          <a
            href="https://www.linkedin.com/in/reediredale"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-sm text-gray-700">
          © {new Date().getFullYear()} Reed Iredale
        </p>
      </div>
    </footer>
  )
}
