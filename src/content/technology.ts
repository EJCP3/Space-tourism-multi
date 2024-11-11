import { defineCollection, z } from "astro:content";

const technology = defineCollection({
    schema: z.object({
        title: z.string(),
        name: z.string(),
        img: z.string(),
       
      
        
    }),
    
})


export const collections = {technology}