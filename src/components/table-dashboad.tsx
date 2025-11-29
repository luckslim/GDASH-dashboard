import { PaginationBar } from "./pagination-bar-dashboard";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function TableDashboard() {
  return (
    <div className="grid gap-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Data</TableHead>
            <TableHead className="w-[200px]">Temperatura</TableHead>
            <TableHead className="w-[200px]">Velocidade do Vento</TableHead>
            <TableHead className="w-[200px]">Direção do Vento</TableHead>
            <TableHead className="text-right">Código meteorológico</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell>NE</TableCell>
                    <TableCell className="text-right">80</TableCell>
                  </TableRow>
                </AlertDialogTrigger>
                <AlertDialogTrigger asChild></AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex justify-between">
                      Dados do Clima{" "}
                      <Badge
                        className="bg-gray-500 text-blue-50 font-bold"
                        variant={"secondary"}
                      >
                        22/02/2025
                      </Badge>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <div className="grid gap-1">
                        <Button
                          className="flex justify-between"
                          variant={"link"}
                        >
                          <span>Temperatura</span>
                          <span>30 graus</span>{" "}
                        </Button>
                        <Button
                          className="flex justify-between"
                          variant={"link"}
                        >
                          <span>velocidade do vento</span>
                          <span>30km/h</span>{" "}
                        </Button>
                        <Button
                          className="flex justify-between"
                          variant={"link"}
                        >
                          <span>Direção do vento</span>
                          <span>NE</span>{" "}
                        </Button>
                        <Button
                          className="flex justify-between"
                          variant={"link"}
                        >
                          <span>Cod Meteorológico</span>
                          <span>80</span>{" "}
                        </Button>
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-800 hover:bg-red-500">
                      Deletar
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          ))}
        </TableBody>
      </Table>
      <PaginationBar />
    </div>
  );
}
