# Repro for https://github.com/ndom91/react-timezone-select/issues/84

When attempt to pass a classNames prop to the TimezoneSelect component the expected styles changes within the component aren't occurring. Since I'm using tailwind it becomes a bit of an issue as I now need to write custom css for the select component.
I looked into the package a bit and looks like its due to the timezone-select package having an outdated version of react-select.




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
