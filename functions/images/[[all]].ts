interface Env {
  IMAGES: R2Bucket;
}

export const onRequest: PagesFunction<Env> = async (ctx) => {
  const path = new URL(ctx.request.url).pathname.replace("/images/", "");
  const image = await ctx.env.IMAGES.get(path);

  if (!image) return new Response(null, { status: 404 });

  return new Response(image.body, {
    headers: { "Content-Type": image.httpMetadata.contentType },
  });
}