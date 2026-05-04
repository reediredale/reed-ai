export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-neutral-100">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-display font-semibold text-neutral-900 text-sm">Reed Iredale</p>
        <div className="flex items-center gap-5 text-xs text-neutral-400">
          <a href="mailto:reed@reediredale.com" className="hover:text-neutral-700 transition-colors">
            reed@reediredale.com
          </a>
          <a
            href="https://www.linkedin.com/in/reed-iredale/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-700 transition-colors"
          >
            LinkedIn
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
