import dynamic from "next/dynamic";
import React from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

import options from "../../../api/auth/[...nextauth]/options";

interface Props {
  params: { id: string };
}

const TicketForm = dynamic(() => import("@/components/TicketForm"), {
  ssr: false,
});

const EditTicket = async ({ params }: Props) => {
  const session = await getServerSession(options);

  if (!session) {
    return (
      <>
        <p className=" text-destructive">User not Authenticated!</p>

        <Link
          href={`/tickets`}
          className={`${buttonVariants({
            variant: "default",
          })}`}>
          Back
        </Link>
      </>
    );
  }
  const ticket = await prisma?.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!ticket) {
    return <p className=" text-destructive">Ticket not found!</p>;
  }

  return <TicketForm ticket={ticket} />;
};

export default EditTicket;
