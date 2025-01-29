interface Env {
	RIC: KVNamespace;
}

export const onRequest: PagesFunction<Env> = async (context) => {
	const value = await context.env.RIC.list();

	return Response.json(value);
};