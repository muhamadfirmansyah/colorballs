import { Get } from "../shared/utils/service";

export const getContacts = () => Get('/users', 'https://jsonplaceholder.typicode.com')