export interface ResponseRepository<T> {
    statusCode: string;
    message: string;
    data?: T;
}