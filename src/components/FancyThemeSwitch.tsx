"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export function FancyThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        relative flex items-center w-14 h-7 rounded-full transition-colors 
        ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"}
      `}
    >
      {/* Sliding circle */}
      <span
        className={`
          absolute flex items-center justify-center w-6 h-6 rounded-full 
          bg-white shadow-md transition-transform
          ${theme === "dark" ? "translate-x-7" : "translate-x-1"}
        `}
      >
        {theme === "dark" ? (
          <Moon className="h-4 w-4 text-zinc-900" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </span>
    </button>
  )
}