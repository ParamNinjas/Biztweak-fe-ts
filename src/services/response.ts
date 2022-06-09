


export interface IResponseObject<T> {
  error: boolean;
  message?: string;
  result?: T;
}




export const GetApiResponse = <T>(
  error: boolean,
  message:string,
  result?: T
): IResponseObject<T> => {
  
  const response =  {
    error:error as boolean,
    message:message as string,
    result: result as T
  } as IResponseObject<T>;
 
  return response;
};
