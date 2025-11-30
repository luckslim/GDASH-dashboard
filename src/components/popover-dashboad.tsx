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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Input } from "./ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircleIcon } from "lucide-react";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import z from "zod";

const userValidationSchema = z.object({
  user: z.string(),
  userName: z.string(),
  email: z.email(),
});

type UserValidationSchema = z.infer<typeof userValidationSchema>;

export function PopoverDashboad() {
  const [data, SetData] = useState<UserValidationSchema>({
    user: "",
    email: "",
    userName: "",
  });
  const token = Cookies.get("token");
  useEffect(() => {
    if (!token) return;
    axios
      .get("http://localhost:3333/get/account", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { userPresenter } = response.data;
        const parsedUsePresenter = userValidationSchema.parse(userPresenter);
        SetData(parsedUsePresenter);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [token]);
  function handleLoggout() {
    Cookies.remove("token");
    window.location.reload();
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <CardTitle className="flex items-center justify-around p-2 text-white bg-blue-400 rounded-bl-lg rounded-tr-lg">
          <UserCircleIcon size={42} weight="fill" />
          <div className="grid gap-2 ">
            <p>{data.userName}</p>
            <small>{data.email}</small>
          </div>
        </CardTitle>
      </PopoverTrigger>
      <PopoverContent className="grid items-center gap-1 w-80">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="flex gap-2 items-center " variant={"link"}>
              <PencilSimpleIcon color="blue" size={32} />
              Editar usuário
            </Button>
          </AlertDialogTrigger>
          <AlertDialogTrigger asChild></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Editar Dados de Usuário</AlertDialogTitle>
              <AlertDialogDescription>
                Essa ação permite modificações dos dados permanentimente, todas
                as modificações entram em vigor assim que tudo for salvo.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <Input placeholder="Insira seu novo nome" />
            <Input placeholder="Insira seu novo nome de usuário" />
            <Input placeholder="Insira sua nova senha" />
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction className="bg-blue-500 hover:bg-blue-400">
                Salvar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="flex gap-2 items-center " variant={"link"}>
              <ProhibitIcon color="red" size={32} /> <p>Deletar conta</p>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Excluir conta</DrawerTitle>
                <DrawerDescription></DrawerDescription>
              </DrawerHeader>
              <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertTitle>
                  Tem certeza que deseja excluir sua conta?
                </AlertTitle>
                <AlertDescription>
                  <p>
                    A exclusão da sua conta é permanente e não pode ser
                    desfeita. Todos os seus dados serão removidos
                    definitivamente do sistema. Você perderá acesso aos seus
                    projetos, histórico e configurações. Essa ação é
                    irreversível e afetará todas as funcionalidades vinculadas.
                    Leia atentamente os itens abaixo antes de continuar.
                  </p>
                  <ul className="list-inside list-disc text-sm">
                    <li>Perda total dos seus dados pessoais</li>
                    <li>Exclusão de todos os projetos e publicações</li>
                    <li>Remoção de históricos, comentários e interações</li>
                    <li>Cancelamento imediato de qualquer assinatura ativa</li>
                    <li>Impossibilidade de recuperar a conta futuramente</li>
                  </ul>
                </AlertDescription>
              </Alert>
              <DrawerFooter>
                <Button className="bg-red-600 hover:bg-red-500 text-red-50 font-bold">
                  Sim, Exclua essa conta.
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline">
                    Não, Desejo continuar o acesso
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
        <Button onClick={handleLoggout} variant={"destructive"}>
          Loggout
        </Button>
      </PopoverContent>
    </Popover>
  );
}
