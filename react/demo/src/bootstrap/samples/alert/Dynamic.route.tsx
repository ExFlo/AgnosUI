import type {AlertProps} from '@agnos-ui/react-bootstrap/components/alert';
import {Alert} from '@agnos-ui/react-bootstrap/components/alert';
import type {Dispatch} from 'react';
import {createContext, useContext, useReducer} from 'react';

const AlertContext = createContext<(Partial<AlertProps> & {id: number})[]>([]);
const AlertDispatchContext = createContext<Dispatch<any> | null>(null);
let counter = 0;
function alertsReducer(alerts: any, action: any) {
	switch (action.type) {
		case 'add': {
			return [...alerts, {...action.payload, id: counter++}];
		}
		case 'remove': {
			return alerts.filter((al: Partial<AlertProps>) => al !== action.alert);
		}
	}
}

const DynamicDemo = () => {
	const [alerts, dispatch] = useReducer(alertsReducer, []);

	return (
		<>
			<button
				className="btn btn-primary addError me-1"
				onClick={() => dispatch({type: 'add', payload: {type: 'danger', slotDefault: 'Error', dismissible: true, animated: true}})}
			>
				Add error
			</button>
			<button
				className="btn btn-primary addInfo me-1"
				onClick={() => dispatch({type: 'add', payload: {type: 'info', slotDefault: 'Info', dismissible: true, animated: true}})}
			>
				Add info
			</button>
			<button
				className="btn btn-primary addWarning me-1"
				onClick={() => dispatch({type: 'add', payload: {type: 'warning', slotDefault: 'Warning', dismissible: true, animated: true}})}
			>
				Add warning
			</button>
			<br />
			<div className="alertCount mb-3">Alerts in the service: {alerts.length}</div>
			<AlertContext.Provider value={alerts}>
				<AlertDispatchContext.Provider value={dispatch}>
					<ChildComponent />
				</AlertDispatchContext.Provider>
			</AlertContext.Provider>
		</>
	);
};

const ChildComponent = () => {
	const alertList = useContext(AlertContext);
	const dispatch = useContext(AlertDispatchContext);

	return (
		<>
			{alertList?.map((alert) => (
				<Alert
					animatedOnInit={alert.animatedOnInit}
					animated={alert.animated}
					dismissible={alert.dismissible}
					type={alert.type}
					slotDefault={alert.slotDefault}
					key={`${alert.id}`}
					onHidden={() => dispatch!({type: 'remove', alert})}
				></Alert>
			))}
		</>
	);
};

export default DynamicDemo;
