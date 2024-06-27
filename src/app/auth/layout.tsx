import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function ShopLayout({ children }: {
  children: React.ReactNode;
}) {

    const session = await auth();

    if ( session?.user ) {
      redirect('/');
    }

    console.log({session});


  return (
    <main className=" flex justify-center">
      <div className=" w-full sm:w-[350] px-10">
        {children}
      </div>
    </main>
  );
}