interface Env {
	TEST: KVNamespace;
}

export const onRequest: PagesFunction<Env> = async (context) => {
	const value = await context.env.TEST.get("Test1");
	return Response.json(value);
};
