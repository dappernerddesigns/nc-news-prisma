import { z } from "zod";
import { procedure } from "../trpc";
import { findFeatures } from "../models/features-example.models";

export const listFeatures = procedure
  .output(
    z.array(
      z.object({
        id: z.number().int(),
        featureName: z.string(),
        priceInPence: z.number(),
        imgUrl: z.string(),
        description: z.string(),
        category: z.object({ categoryName: z.string() }),
      })
    )
  )
  .query(async () => {
    const features = await findFeatures();
    return features;
  });
