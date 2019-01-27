import { AxiosInstance } from 'axios';
import { IApiConfig } from '../types/ApiConfig';

export default abstract class {
  protected httpClient: AxiosInstance;
  protected apiConfig: IApiConfig;

  public constructor(client: AxiosInstance, apiConfig: IApiConfig) {
    this.httpClient = client;
    this.apiConfig = apiConfig;
  }
}
