import { useEffect, useState } from "react"

export function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    function handleScroll() {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 0) {
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return isVisible
}
