const pages = async () =>
	Object.fromEntries(
		await Promise.all(
			Object.entries(
				import.meta.glob('/src/data/*.json')
			).map(async ([path, page]) => [path, (await page()).default])
		)
	);

const app = async () =>
	`<pre><code>${JSON.stringify(await pages(), null, 2)}</code></pre>`;

export default app;
