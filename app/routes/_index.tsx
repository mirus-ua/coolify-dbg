import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Foo", description: "bar" }];
};

export default function HomePage() {
  return <p>example page</p>;
}
