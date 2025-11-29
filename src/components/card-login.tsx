import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export function CardLogin() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm  bg-repeat z-50">
      <Card className="w-full max-w-sm shadow-2xl border border-white/20 bg-white/10 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-white">
            Faça o login com sua conta
          </CardTitle>
          <CardDescription className="text-gray-200">
            Para acessar o Dashboard é necessário realizar o login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6 text-white">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@exemplo.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-white">
                    Senha
                  </Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm text-gray-200 underline-offset-4 hover:underline"
                  >
                    esqueceu sua senha?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Crie sua conta
          </Button>
        </CardFooter>
      </Card>

      {/* CREATE USER */}
{/* 
      <Card className="w-full max-w-sm shadow-2xl border border-white/20 bg-white/10 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-white">Crie sua conta</CardTitle>
          <CardDescription className="text-gray-200">
            Para acessar o Dashboard é necessário criar uma conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6 text-white">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-white">
                  nome
                </Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="m@exemplo.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="useName" className="text-white">
                  nome de usuário
                </Label>
                <Input
                  id="useName"
                  type="useName"
                  placeholder="m@exemplo.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@exemplo.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-white">
                    Senha
                  </Label>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button variant={"secondary"} className="w-full">
            Criar conta
          </Button>
          <Button  variant="link" type="submit" className="text-amber-50  w-full">
            <ArrowArcLeftIcon/>voltar
          </Button>
        </CardFooter>
      </Card> */}
    </div>
  );
}
