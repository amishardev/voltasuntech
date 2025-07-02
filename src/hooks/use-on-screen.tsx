'use client'

import { useEffect, useState, type RefObject } from 'react'

export function useOnScreen(ref: RefObject<HTMLElement>): boolean {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true)
          observer.unobserve(element);
        }
      },
      {
        rootMargin: '0px 0px -50px 0px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isIntersecting
}
