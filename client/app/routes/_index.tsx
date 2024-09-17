import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPocketbase } from "~/api/pb.server";
export const meta: MetaFunction = () => {
  return [{ title: "Foo", description: "bar" }];
};

export async function loader() {
  const pb = getPocketbase();
  const records = await pb.collection<any>("users").getFullList();

  return records;
}

export default function HomePage() {
  const users = useLoaderData<typeof loader>();
  return (
    <div>
      <p>example page</p>
      <ul>
        {users.map((usr) => (
          <li key={usr.id}>{usr.email}</li>
        ))}
      </ul>
    </div>
  );
}
