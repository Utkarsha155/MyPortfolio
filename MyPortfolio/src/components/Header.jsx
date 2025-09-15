import React from 'react'

const Header = ({ isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }) => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    closeMobileMenu()
  }

  return (
    <>
      <nav
        className={`fixed top-0 right-0 w-full max-w-sm h-screen bg-bg-primary/95 backdrop-blur-xl z-50 transition-all duration-300 flex flex-col p-8 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex justify-between items-center mb-12">
          <img
            className="h-10 w-auto brightness-0 invert"
            src="/portfolio2_1.svg"
            alt="Portfolio Logo"
          />
          <button
            onClick={closeMobileMenu}
            className="bg-none border-none cursor-pointer p-2 rounded-lg transition-colors hover:bg-glass-bg"
            aria-label="Close navigation"
          >
            <img
              className="w-6 h-6 brightness-0 invert"
              src="/close.svg"
              alt="Close"
            />
          </button>
        </div>
        <ul className="flex flex-col gap-6 list-none">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="text-text-secondary no-underline text-xl font-medium px-4 py-4 rounded-lg transition-all duration-300 block hover:text-text-primary hover:bg-glass-bg hover:translate-x-2"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <header className="fixed top-0 left-0 right-0 z-40 bg-bg-primary/80 backdrop-blur-xl border-b border-border-color transition-all duration-300">
        <nav className="flex justify-between items-center px-8 py-4 max-w-6xl mx-auto" role="navigation" aria-label="Main navigation">
          <div className="nav-brand">
            <img
              src="/portfolio2.svg"
              alt="Portfolio Logo"
              className="h-10 w-auto brightness-0 invert"
            />
          </div>
          <ul className="hidden md:flex list-none gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMobileMenu}
              className="md:hidden bg-none border-none cursor-pointer p-2 rounded-lg transition-colors hover:bg-glass-bg"
              aria-label="Open navigation menu"
            >
              <img
                className="w-6 h-6 brightness-0 invert"
                src="/hamburger.svg"
                alt="Menu"
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
