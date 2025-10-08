
import {z} from "zod";

export const formScheama = z.object({
    destinationUrl:z.string().min(6,{message:"Too short url!"}),
     time: z.date().optional(),
     customShortCode:z.string().min(6,{message:"Must be at least 6 characters long"}).optional()
});