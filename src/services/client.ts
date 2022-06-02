const axios = require("axios").default;

let header: any;

  header = {
    Authorization: `Anonymous`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
    "apikey" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmeGJseWd3YnlsYmVjYnNqanZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA0NjAzNTQsImV4cCI6MTk2NjAzNjM1NH0.G3gTrxlRtKfPFqLPyi4WczSlhp1_q0A83r4X0ot_vcE"
  };


export async function GET(endPoint: string) {
  try {
    const result = await axios.get(`${endPoint}`, { headers: header });
    return result;
  } catch (error : any) {
    console.log(
      `[API ERROR : Method: GET; Endpoint: ${endPoint}]`,
      error.toJSON()
    );
    return error.response;
  }
}

export async function POST(endPoint: string, payload: Object) {
  console.log("String", endPoint, payload)
  try {
  
    const result = await axios.post(`${endPoint}`, payload, {
      headers: header,
    });

    return result;
  } catch (error : any) {
    console.log(`[API ERROR : Method: POST; Endpoint: ${endPoint}]`, error);
   console.log("ERROR ON POST, returning", error);
    return error.response;
  }
}

export async function DELETE(endPoint: string, payload: Object) {
  console.log("endpoint", endPoint, "payload", payload)
  try {
    const result = await axios.delete(`${endPoint}`, {data:payload}, {
      headers: header
    });
    
    return result;
  } catch (error : any) {
    console.log(`[API ERROR : Method: DELETE; Endpoint: ${endPoint}]`, error);
    console.log("ERROR ON DELETE, returning", error);
    return error.response;
  }
}

export function PUT(endPoint: string, params: Object) {
  let HEADER = {
    Authorization: `Anonymous`,
    "Access-Control-Allow-Origin": "*",
  };
  axios
    .put(`${endPoint}`, { headers: HEADER, params: params })
    .then((result: any) => {
      return result;
    })
    .catch((error: any) => {
      return error;
    });
}
