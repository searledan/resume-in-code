interface Env {
    RIC: KVNamespace;
}

export const onRequest: PagesFunction<Env> = async (context) => {
    const value = await context.env.RIC.get(context.params.name);

    return Response.json(value);
};