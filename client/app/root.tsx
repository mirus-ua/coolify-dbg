import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import Header from "~/components/header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="antialiased overflow-y-scroll">
        <div className="container mx-auto">
          {children}

          <ScrollRestoration />
          <Scripts />
        </div>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
