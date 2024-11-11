import { defineCollection, z } from "astro:content";

const earth = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string(),
        distance: z.string(),
        time: z.string(),
        
    }),
    
})


export const collections = {earth}