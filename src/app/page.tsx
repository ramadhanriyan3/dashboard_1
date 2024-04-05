import { redirect } from "next/navigation";

export default function Home() {
  return (
    <>
      <div onClick={redirect("/dashboard")}></div>
    </>
  );
}
