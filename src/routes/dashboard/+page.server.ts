import { fail, redirect } from '@sveltejs/kit';

export const load = async({ locals }) => {
	if (!locals.user) {
		redirect(307, '/login');
	}

	const todos = await locals.pb.collection('todos').getFullList({
		sort: '-created'
	});
	console.log("Load function!")

	return { user: locals.user, todos: todos };
};

export const actions = {
	logout: async ({ locals }) => {
		locals.pb.authStore.clear();
	},
	createTodo: async({ locals, request }) => {
		const t0 = performance.now();
		const data = await request.formData();
		const todo = data.get('todo');

		const reqdata = {
			user: locals.user.id,
			todo: todo,
			status: false
		};

		await locals.pb.collection('todos').create(reqdata);
		const t1 = performance.now();

		console.log(`Creating the Todo took: ${t1 - t0} ms`)
	},
	update: async({ locals, request }) => {
		const data = await request.formData();
		const id = data.get("id");
		const checked = data.get("checked")

		const changeData = {
			'status': checked === 'on'
		}

		console.log("form submit")
		console.log(await locals.pb.collection('todos').update(String(id),changeData));
	}
}
