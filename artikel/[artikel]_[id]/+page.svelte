<script>
	import stammdaten from '$stammdaten'

	export let data

	const { article } = data
</script>

<svelte:head>
	<title>{article.title} | {stammdaten.title}</title>
	<meta name="description" content={article.teaser} />
</svelte:head>

<Wrapper size="small" responsive>
	<XioniArticle {article} />
	<hr />
	<div class="$text-center $my-3">
		<Link icon="angle-left" to="../">Zurück zur Übersicht</Link>
	</div>
</Wrapper>
