import { PopoverDashboad } from "./popover-dashboad";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";

import { DiamondIcon, MapPinIcon } from "@phosphor-icons/react";
import { Spinner } from "./ui/spinner";
//import { Skeleton } from "./ui/skeleton";

export function CardUser() {
  return (
    <div className="grid gap-5">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <PopoverDashboad />
          <CardDescription>Bem Vindo ao Dashboad!</CardDescription>
          {/* <Skeleton className="p-8 bg-gray-200 rounded-lg" />
          <Skeleton className="p-2 bg-gray-200 rounded-lg w-[200px]" /> */}
        </CardHeader>
        <CardContent>
          <div className="grid items-center gap-2">
            <p className="flex items-center gap-1">
              Localização <MapPinIcon size={22} weight="fill" />
            </p>
            <iframe
              className="rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235198.68142636976!2d-43.44598205!3d-22.91413075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1764326813307!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              loading="lazy"
            ></iframe>
            {/* <Skeleton className="p-2 bg-gray-200 rounded-lg w-[200px]" />
            <Skeleton className="p-20 bg-gray-200 rounded-lg" /> */}
          </div>
        </CardContent>
      </Card>

      <Accordion
        type="single"
        collapsible
        className="w-100"
        defaultValue="item-1"
      >
        <AccordionItem
          className="grid gap-5 items-center justify-center"
          value="item-1"
        >
          <AccordionTrigger className="flex items-center justify-around p-2 rounded-full text-white bg-black shadow-[0_0_15px_rgb(255, 255, 255)] animate-pulse hover:shadow-[0_0_25px_#6cf5ff] hover:brightness-125 hover:animate-none transition-all duration-300">
            <DiamondIcon size={32} weight="fill" />
            Previsão do tempo com IA
          </AccordionTrigger>
          <AccordionContent className="text-center text-gray-500">
            <div className="flex gap-2 items-center justify-center text-lg">
              <Spinner />
              criando previsão...
            </div>
            <p className="text-gray-500 font-bold ">
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
