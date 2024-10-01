import { redirect } from "next/navigation";
export default async function Articles() {
  redirect("/blog");
  return (
    <div>
      {`Rien à voir ici, vous allez être redirigé dans quelques instants vers la
      page de blog`}
    </div>
  );
}
