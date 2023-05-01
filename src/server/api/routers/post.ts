import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({});
  }),
  create: publicProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(async({ ctx, input }) => {
      return ctx.prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
        },
      });
    }),
    delete: publicProcedure
    .input(z.object({ id: z.string()}))
    .mutation(async({ctx, input}) => {
      return ctx.prisma.post.delete({
        where: {
          id: input.id
        }
      })
    })
});
