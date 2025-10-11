
import {z} from "zod";

export const formScheama = z.object({
    destinationUrl:z.string().min(6,{message:"Too short url!"}),
     time: z.date().optional(),
     customShortCode:z.string().refine((val)=>{
        if(val.length>=1){
            if(val.length <6){
                return false
            }else{
                return true;
            }
        }else{
            return true;
        }
     },{message:"Minimum 6 character long!"})
});