![transparent](https://capsule-render.vercel.app/api?type=transparent&fontColor=FF0000&text=NEXTFILM&height=140&fontSize=60)

## About the project

Movie Application with NEXT.JS 14
</br>
(This project refers to the Nomad Coder lecture)

## Tech Stack

Built with:

- Typescript
- Next.js
- React.js
- The Movie Database(TMDB)
- React Bootstrap
  > npm install react-bootstrap bootstrap
- Swiper
  > npm install swiper
- Font Awesome
  > npm i --save @fortawesome/fontawesome-svg-core
  > <br/>
  > npm i --save @fortawesome/free-solid-svg-icons
  > <br/>
  > npm i --save @fortawesome/react-fontawesome@latest
- Zustand
  > npm install zustand
  </hr>

## Course

### 1.6 Manually Install Next.js v14

1. npm init -y
2. JSON script "license" -> MIT
3. npm install react@latest next@latest react-dom@latest
4. JSON script "scripts" -> "dev" : "next dev"
5. Add `page.tsx` or `page.jsx` in "`app`"
6. npm run dev

### 2.1 Defining Routes

- `pages.tsx`: make the client page

### 2.2 Not Found Routes

- `not-found.tsx` : When accessed through a path (URL) that does not exist, the `not-found`page is displayed

#### Navigation

- `usePathname()` : Only works in a Client Component. Needs to add `'use client'` on the top
  > ex) `<li><Link href="/">Home</Link>{path === "/" ? "💖" : ""}</li>`

### 2.3 SSR vs CSR

- SSR : Server Side Rendering.
  It is mainly used when building websites with Next.js
- CSR : Client Side Rendering.

### 2.4 Hydration

- This refers to the process of converting non-interactive HTML created through server-side rendering (SSR) into interactive React components using client-side JavaScript.
  (Attaching React to HTML already rendered in a server environment)

### 2.6 Recap

The point is all components are rendered on the Server side first. If you write 'use client' at the top of the script, it will be rendered again on the Client side.

### 2.7 Layouts

- A layout is UI that is shared between multiple routes. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.
  > `/app/layout.js` : the layout will be shared with the `/app` > <br/> > `/app/about-us/layout.js` : the layout will be shared with the `/app/about-us`

### 2.8 Metadata

- The root `page.tsx` needs Root Group using ( ).
  > `/app/(home)/page.tsx`
- `layout.tsx` and `not-found.tsx` files should be existed on `/app` because they are normallay shared all routes.

- Metadata API that can be used to define your application metadata (e.g. meta and link tags inside your HTML head element) for improved SEO and web shareability.

### 2.9 Dynamic Routes

- You can use []
- `[id]` : params : {id : }
  <br/>
  ex) `/app/(movies)/movies/[id]` : `[id]` is id of params. It was rendered on Server side.

### 3.1 Client Side

- You cannot use metadata and 'use client' at the same time

### 3.2 Server Side

- You can use metadata with redering of Server side. (Next.js)

### 3.3 Loading Components

- `loading.tsx` : You can show an instant loading state from the server while the content of a route segment loads. The new content is automatically swapped in once rendering is complete
  > `/app/(home)/loading.tsx` and `/app/(home)/page.tsx` => loading.tsx is loading state and page.tsx is new content

### 3.4 Parallel Requests

- Multiple fetch Requests -> Using `Promise.all` : Multiple asynchronous processes are performed in parallel.
  <br/>
  > `Promise.all([getMovie(id), getVideos(id)])`

### 3.5 Suspense

- `<Suspense>`
- There is not client side interactivity in the component it can be a server component and we don’t even need to ship component code to the client side, it only server side renders.

### 3.7 Error Handling

- Make the `error.tsx` page next to the specific page.tsx

### 4.3 Movie Trailers

- Number.prototype.toFixed() : `.toFixed()`
  ex) `<h3>⭐️ {movie.vote_average.toFixed(1)}</h3>`

### 4.5 Deployment

1. Add JSON script "scripts"
   1. "build" : "next build"
   2. "start": "next start"
2. Go to the Vercel
   1. Click `Add New` button - Project
   2. Select the repo
   3. Configure Project - Name
   4. Click `Deploy` button
3. Install TypeScript
   > npm install --save-dev typescript

- Plus Work

4. Check the API_URL
   - If there is an error about `{API_URL}` then move it to the `app/constants.ts` file.
5. Set the `prefetch` on `<Link>` components
   <br/>
   ex) `<Link prefetch href={`/movies/${id}`}>
   {title}
    </Link>`
