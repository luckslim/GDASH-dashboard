import axios from "axios";
import Cookies from "js-cookie";
import type { ClimateResponse, Climate } from "../components/table-dashboad";

interface RawClimate {
  _id: { value: string };
  props: {
    timeStamp: string;
    temperature: number;
    windSpeed: number;
    windDirection: string;
    weatherCode: string;
  };
}

export async function handleDataTable(page: number): Promise<ClimateResponse> {
  const token = Cookies.get("token");

  const response = await axios.get(
    `http://localhost:3333/get/${page}/climate`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const climates: Climate[] = (response.data.climate as RawClimate[]).map(
    (item) => ({
      id: item._id.value,
      timeStamp: item.props.timeStamp,
      temperature: item.props.temperature,
      windSpeed: item.props.windSpeed,
      windDirection: item.props.windDirection,
      weatherCode: item.props.weatherCode,
    })
  );

  return { climates };
}
