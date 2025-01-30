interface Env {
    RIC: KVNamespace;
}

export const onRequest: PagesFunction<Env> = async (context) => {
    const value = await context.env.RIC.get(context.params.name as string);

    return Response.json(value);
};