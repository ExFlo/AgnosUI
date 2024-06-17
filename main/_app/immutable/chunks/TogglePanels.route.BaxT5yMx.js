const o=`import type {AccordionApi, AccordionItemApi} from '@agnos-ui/react-bootstrap/components/accordion';
import {Accordion, AccordionItem} from '@agnos-ui/react-bootstrap/components/accordion';
import {useRef} from 'react';
import BODY from './body.txt?raw';

const AccordionDemo = () => {
	const refAccordion = useRef<AccordionApi>(null);
	const refSecondPanel = useRef<AccordionItemApi>(null);
	return (
		<>
			<Accordion ref={refAccordion}>
				<AccordionItem slotItemHeader="First panel" slotItemBody={BODY} id={'first'} />
				<AccordionItem slotItemHeader="Second panel" slotItemBody={BODY} id={'second'} ref={refSecondPanel} />
			</Accordion>
			<hr />
			<div className="d-flex flex-wrap gap-2">
				<button className="btn btn-sm btn-outline-primary" onClick={() => refAccordion.current?.toggle('first')}>
					Toggle first
				</button>
				<button className="btn btn-sm btn-outline-primary" onClick={() => refSecondPanel.current?.toggle()}>
					Toggle second
				</button>
				<button className="btn btn-sm btn-outline-primary" onClick={() => refAccordion.current?.expandAll()}>
					Expand all
				</button>
				<button className="btn btn-sm btn-outline-primary" onClick={() => refAccordion.current?.collapseAll()}>
					Collapse all
				</button>
			</div>
		</>
	);
};
export default AccordionDemo;
`;export{o as default};