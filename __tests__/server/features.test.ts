import { appRouter } from '../../trpc-server';
import { features as featuresData } from '../../db/data/features';

describe('features.listFeatures', () => {
  test('returns a list of features', async () => {
    const caller = appRouter.createCaller({});

    const features = await caller.features.listFeatures();

    expect(features.length).toBe(featuresData.length);

    features.forEach((feature) => {
      expect(feature).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          featureName: expect.any(String),
          priceInPence: expect.any(Number),
          imgUrl: expect.any(String),
          description: expect.any(String),
          category: { categoryName: expect.any(String) },
        })
      );
    });
  });
});
