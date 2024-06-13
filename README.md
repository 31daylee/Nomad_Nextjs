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

## 2.3 SSR vs CSR

- SSR : Server Side Rendering.
  It is mainly used when building websites with Next.js
- CSR : Client Side Rendering.

## 2.4 Hydration

- This refers to the process of converting non-interactive HTML created through server-side rendering (SSR) into interactive React components using client-side JavaScript.
  (Attaching React to HTML already rendered in a server environment)

## 2.6 Recap

The point is all components are rendered on the Server side first. If you write 'use client' at the top of the script, it will be rendered again on the Client side.

## 2.7 Layouts

- A layout is UI that is shared between multiple routes. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.
  > `/app/layout.js` : the layout will be shared with the `/app`
  > `/app/about-us/layout.js` : the layout will be shared with the `/app/about-us`
