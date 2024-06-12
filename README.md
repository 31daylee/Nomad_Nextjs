# Nomad_Nextjs

## 1.6 Manually Install Next.js v14

1. npm init -y
2. JSON script "license" -> MIT
3. npm install react@latest next@latest react-dom@latest
4. JSON script "scripts" -> "dev" : "next dev"
5. Add `page.tsx` or `page.jsx` in "`app`"
6. npm run dev

## 2.1 Defining Routes

- `pages.tsx`: make the client page

## 2.2 Not Found Routes

- `not-found.tsx` : When accessed through a path (URL) that does not exist, the `not-found`page is displayed

### Navigation

- `usePathname()` : Only works in a Client Component. Needs to add `'use client'` on the top
  > ex) `<li><Link href="/">Home</Link>{path === "/" ? "💖" : ""}</li>`
