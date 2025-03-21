import type {ModalContext} from '@agnos-ui/react-bootstrap/components/modal';
import {openModal} from '@agnos-ui/react-bootstrap/components/modal';

type ModalContent = {name: string};

const ModalBody = ({state, api}: ModalContext<ModalContent>) => (
	<>
		<p>Hello, {state.contentData.name}!</p>
		<button type="button" className="btn btn-outline-primary" onClick={() => api.close()}>
			Close
		</button>
	</>
);

const ComponentDemo = () => (
	<button
		type="button"
		className="btn btn-primary"
		onClick={() => openModal({title: 'Hi there!', children: ModalBody, contentData: {name: 'World'}})}
	>
		Launch demo modal
	</button>
);
export default ComponentDemo;
