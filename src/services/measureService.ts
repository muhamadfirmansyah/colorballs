import { Get, Post } from "../shared/utils/service";

export const getMeasures = () => Get('/measures')


export const postMeasures = (payload: any) => Post('/measures', payload)