import AddForm from "./addForm";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

const Add = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return <AddForm />;
};

export default Add;
