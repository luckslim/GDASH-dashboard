import { CardUser } from "../components/card-user";
import { ChartDashboard } from "../components/chart-area-stacked";
import { TableDashboard } from "../components/table-dashboad";

export function Home() {
  return (
    <>
      <div className="grid gap-5 p-5 items-center align-middle justify-center">
        <div className="md:flex gap-5 md:items-stretch grid justify-center">
          <div className="flex-1 h-full w-full">
            <CardUser />
          </div>
          <div className="md:flex-2 h-full md:w-2xl">
            <ChartDashboard />
          </div>
        </div>
        <div className="md:flex h-full w-full ">
          <TableDashboard />
        </div>
      </div>
    </>
  );
}
