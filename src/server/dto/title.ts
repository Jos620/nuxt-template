import { z } from 'zod';

export const titleDTO = z.object({
  title: z.string(),
});

export type TitleDTO = z.infer<typeof titleDTO>;
