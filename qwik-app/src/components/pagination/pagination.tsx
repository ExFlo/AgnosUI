// // import {PaginationProps, createPagination, PaginationState} from '@agnos-ui/qwik';
// import {component$, noSerialize, useSignal, useStore, useTask$} from '@builder.io/qwik';

// export const Pagination = component$<Partial<PaginationProps>>((props) => {
// 	const count = useSignal(0);
// 	const state = useStore({state: {} as PaginationState});
// 	useTask$(() => {
// 		const widget = createPagination(props);
// 		widget.state$.subscribe((stateTansu) => {
// 			console.log('state', stateTansu); // append only server side...
// 			state.state = noSerialize(stateTansu);
// 		});
// 	});

// 	// eslint-disable-next-line qwik/no-use-visible-task
// 	// useVisibleTask$(() => {
// 	// 	const createQwik = $(createPagination);
// 	// 	if (createQwik) {
// 	// 		const widget = createQwik(noSerializedProps);
// 	// 		// widget.state$.subscribe((stateTansu) => {
// 	// 		// 	console.log('state', stateTansu);
// 	// 		// 	state.state = stateTansu;
// 	// 		// });
// 	// 		console.log('in');
// 	// 	}
// 	// })

// 	return (
// 		<div>
// 			<p>Count: {count.value}</p>
// 			<p>
// 				<button onClick$={() => count.value++}>Increment</button>
// 			</p>
// 		</div>
// 	);
// });
