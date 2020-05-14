export interface HttpClient {
  get<T>(url: string, options?: any): Promise<T | undefined>;
}
