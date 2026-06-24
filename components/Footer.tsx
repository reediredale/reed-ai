export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 px-8">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold text-white text-sm mb-0.5">Reed Iredale</p>
          <p className="text-slate-500 text-xs">Growth Experimentation Consultant</p>
        </div>
        <div className="flex items-center gap-6 text-xs text-slate-500">
          <a
            href="mailto:reed@reediredale.com"
            className="hover:text-white transition-colors"
          >
            reed@reediredale.com
          </a>
          <a
            href="https://www.linkedin.com/in/reed-iredale/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
