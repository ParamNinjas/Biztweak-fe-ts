import { IRecomendation } from "../Interfaces/IRecomendation";
import { DELETE, GET, POST, PUT } from "./client";
import { GetApiResponse, IResponseObject } from "./response";


export const DBServiceUrl = `https://ifxblygwbylbecbsjjvm.supabase.co/rest/v1`;

export const Api = {

  POST_CreateRecommendation: async (
    payload: IRecomendation
  ): Promise<IResponseObject<any>> => {
    const response = await POST(
      `${DBServiceUrl}/Recomendations`,
      payload
    );
    console.log('response', response)
    const result = GetApiResponse<any>(false, "" , response.data)
    return result;
  },
  
  GET_AllRecommendations: async (): Promise<IResponseObject<IRecomendation[]>> => {
    const response = await GET(`${DBServiceUrl}/Recomendations`);
    const result = GetApiResponse<IRecomendation[]>(false, "" , response.data)
    return result;
  },
}