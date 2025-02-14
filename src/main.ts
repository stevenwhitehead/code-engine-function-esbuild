import axios, { AxiosError, AxiosResponse } from 'axios';
axios.defaults.baseURL = 'https://postman-echo.com';

interface CodeEngineParameters {
    __ce_method: string
    __ce_headers: Record<string, string>
    __ce_path: string
    __ce_body: string
    __ce_query: string
  }

  interface CodeEngineResponse {
    headers?: Record<string, string>
    statusCode: number
    body: string | object | any[] | undefined | null
  }

  type CodeEngineFunction = (params: CodeEngineParameters) => Promise<CodeEngineResponse>

const main: CodeEngineFunction = async (params)  => {
    console.log("executing-function")
    console.log(params)
    try {
        const response: AxiosResponse = await axios.get("/get")
        return {
            // bad code commented below, causes 422 since it is a promise and not the response itself
            // body: response,
            // good code below
            body: response.data,
            statusCode: 200,
        }
    } catch (error) {
        return {
            body: error.message,
            statusCode: 500,
        }
    }
}

export { main }
