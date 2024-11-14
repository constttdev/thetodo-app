import { AVATAR_URL } from '$env/static/private';
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
	register: async ({ request, locals }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		const email = data.get('email');
		if (!username || !password || !email) {
			return fail(400, { error: 'Username, password or email is missing' });
		}

		const reqdata = {
			username: username,
			password: password,
			email: email,
			passwordConfirm: password,
			avatar: { url: AVATAR_URL + username }
		};

		try {
			await locals.pb.collection('user').create(reqdata);
			await locals.pb
				.collection('user')
				.authWithPassword(reqdata.username.toString(), reqdata.password.toString(), reqdata.email.toString());

			console.log(`Sucesfully Registerd user: ${username} with password: ${password}`);
		} catch (error) {
			if (error instanceof ClientResponseError) {
				console.log(error)
				return fail(400, { error: 'Failed to create user' });
			}
		}
	}
};