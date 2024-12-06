import type { MetaFunction, LoaderFunction, LinksFunction } from '@remix-run/node';
import stylesheet from "~/tailwind.css?url";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import { rootAuthLoader } from '@clerk/remix/ssr.server';
// Import ClerkApp
import { ClerkApp, SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/remix';
import SignOutComponent from '~/components/SignOutComponent';

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => [
  {
    charset: 'utf-8',
    title: 'New Remix App',
    viewport: 'width=device-width,initial-scale=1',
  },
];

export const loader: LoaderFunction = (args) => rootAuthLoader(args);

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={"w-screen h-screen"}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className={"h-full"}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return (
    <>
      <nav className={"w-screen bg-slate-700 h-16 p-2 flex  items-center "}>
        <SignedIn>
          <SignOutComponent />
        </SignedIn>
        <SignedOut>
          <SignInButton mode={"modal"}>
            <button className={"p-2 bg-purple-700 text-white"}>Sign In</button>
          </SignInButton>
        </SignedOut>
      </nav>
      <div className={"flex flex-col w-full p-8 items-center justify-center gap-2"}>
        <Outlet />
      </div>
      </>
      )
      }

      export default ClerkApp(App, {
        afterSignOutUrl: '/user'
      });
