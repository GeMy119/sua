export interface Environment {
  production: boolean,
  apiUrl: string
}
export const environment: Environment = {
  production: true,
  apiUrl: "https://api.servicesestalam.com"
};
