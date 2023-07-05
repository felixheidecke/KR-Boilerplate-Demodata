import Events from '$lib/boilerplate/libraries/xioni/events'
import { error as svelteError } from '@sveltejs/kit'

export const load = async ({ fetch }) => {
	const { getEvents } = Events(fetch)
	const [error, events] = await getEvents(1289, { endsAfter: new Date() })

	if (error) {
		throw svelteError(error.statusCode, error.message)
	}

	return {
		events
	}
}
