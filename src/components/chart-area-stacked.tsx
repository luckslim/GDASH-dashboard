"use client";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import type { ChartConfig } from "./ui/chart";
import { TimerIcon } from "@phosphor-icons/react";
//import { Skeleton } from "./ui/skeleton";

export const description = "A stacked area chart";

const chartData = [
  { hour: "00:00", temperatura: 22, velocidadeVento: 10 },
  { hour: "01:00", temperatura: 21, velocidadeVento: 12 },
  { hour: "02:00", temperatura: 20, velocidadeVento: 11 },
  { hour: "03:00", temperatura: 19, velocidadeVento: 9 },
  { hour: "04:00", temperatura: 18, velocidadeVento: 8 },
  { hour: "05:00", temperatura: 19, velocidadeVento: 10 },
  { hour: "06:00", temperatura: 20, velocidadeVento: 12 },
  { hour: "07:00", temperatura: 22, velocidadeVento: 14 },
  { hour: "08:00", temperatura: 24, velocidadeVento: 15 },
  { hour: "09:00", temperatura: 26, velocidadeVento: 16 },
  { hour: "10:00", temperatura: 27, velocidadeVento: 17 },
  { hour: "11:00", temperatura: 29, velocidadeVento: 18 },
  { hour: "12:00", temperatura: 30, velocidadeVento: 20 },
  { hour: "13:00", temperatura: 31, velocidadeVento: 21 },
  { hour: "14:00", temperatura: 32, velocidadeVento: 22 },
  { hour: "15:00", temperatura: 31, velocidadeVento: 20 },
  { hour: "16:00", temperatura: 30, velocidadeVento: 18 },
  { hour: "17:00", temperatura: 28, velocidadeVento: 17 },
  { hour: "18:00", temperatura: 26, velocidadeVento: 15 },
  { hour: "19:00", temperatura: 25, velocidadeVento: 14 },
  { hour: "20:00", temperatura: 24, velocidadeVento: 12 },
  { hour: "21:00", temperatura: 23, velocidadeVento: 11 },
  { hour: "22:00", temperatura: 23, velocidadeVento: 10 },
  { hour: "23:00", temperatura: 22, velocidadeVento: 9 },
];

const chartConfig = {
  temperatura: {
    label: "Temperatura (°C)",
    color: "var(--chart-1)",
  },
  velocidadeVento: {
    label: "Velocidade do Vento (km/h)",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartDashboard() {
  return (
    <Card>
      <CardHeader>
        {/* <Skeleton className="p-2 bg-gray-200 rounded-lg w-[200px]" />
        <Skeleton className="p-2 bg-gray-200 rounded-lg w-[300px]" />
        <Skeleton className="p-2 bg-gray-200 rounded-lg w-[200px]" /> */}
        <CardTitle>Temperatura e Velocidade do Vento</CardTitle>
        <CardDescription>gráfico referente a cada hora</CardDescription>
      </CardHeader>
      <CardContent>
        {/* <Skeleton className="p-50 bg-gray-200 rounded-lg" /> */}
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="temperatura"
              type="natural"
              fill="var(--chart-1)"
              fillOpacity={0.4}
              stroke="var(--chart-1)"
              stackId="a"
            />
            <Area
              dataKey="velocidadeVento"
              type="natural"
              fill="var(--chart-2)"
              fillOpacity={0.4}
              stroke="var(--chart-2)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              24 Horas <TimerIcon />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Relatório a cada hora do dia
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
