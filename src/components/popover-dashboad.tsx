import {
    PencilSimpleIcon,
    ProhibitIcon,
    UserCircleIcon,
} from "@phosphor-icons/react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../components/ui/popover";
import { CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function PopoverDashboad() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* <Button variant="outline">Open popover</Button> */}
        <CardTitle className="flex items-center justify-around p-2 text-white bg-blue-400 rounded-bl-lg rounded-tr-lg">
          <UserCircleIcon size={42} weight="fill" />
          <div className="grid gap-2 ">
            <p>UserName</p>
            <small>Email@email.com</small>
          </div>
        </CardTitle>
      </PopoverTrigger>
      <PopoverContent className="grid items-center gap-1 w-80">
        <Button className="flex gap-2 items-center " variant={"link"}>
          <PencilSimpleIcon color="blue" size={32} />
          Editar usuário
        </Button>
        <Button className="flex gap-2 items-center " variant={"link"}>
          <ProhibitIcon color="red" size={32} /> <p>Deletar conta</p>
        </Button>
        <Button variant={"destructive"}>Loggout</Button>
      </PopoverContent>
    </Popover>
  );
}
