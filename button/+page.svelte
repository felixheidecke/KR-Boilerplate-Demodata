<script>
	import Button from '$lib/boilerplate/components/Button/Button.svelte'
</script>

<Wrapper size="smaller">
	<h1>Button</h1>

	<ul>
		<li><Button>Hallo</Button></li>
		<li class="$mt"><Button icon="user">Apple</Button></li>
		<li class="$mt"><Button icon="eye" class="$row-reverse">Schlittschuh</Button></li>
	</ul>

	<hr />

	<h2 class="$my-3">ButtonRow</h2>

	<ButtonRow>
		<Button>Hallo</Button>
		<Button>Hallo</Button>
		<Button>Hallo</Button>
	</ButtonRow>
</Wrapper>
