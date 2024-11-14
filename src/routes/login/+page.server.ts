import { fail, redirect } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';

/** @type {import('./$types').PageLoad} */
export const load = ({ locals }) => {
	if (locals.user) {
		redirect(307, '/dashboard');
	}
};

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ request, locals }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		if (!username || !password) {
			return fail(400, { error: 'Username or password is missing' });
		}

		const reqdata = {
			username: username,
			password: password,
		};

		try {
			await locals.pb
				.collection('user')
				.authWithPassword(reqdata.username.toString(), reqdata.password.toString());
		} catch (error) {
			if (error instanceof ClientResponseError) {
				console.log(error)
				return fail(400, { error: 'Failed to login' });
			}
		}
	}
};