import { defineCollection, z } from "astro:content";

const crew = defineCollection({
    schema: z.object({
        title: z.string(),
        name: z.string(),
        img: z.string(),
        rol: z.string(),
      
        
    }),
    
})


export const collections = {crew}