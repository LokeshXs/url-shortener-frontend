
import {z} from "zod";

export const formScheama = z.object({
    destinationUrl:z.string().min(6,{message:"Too short url!"}),
     time: z.date().optional(),
});