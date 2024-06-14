const o=`import type { PropsConfig } from '@agnos-ui/react-headless/types';
import type { PropsWithChildren, RefAttributes } from 'react';
import type { ModalApi, ModalProps, ModalWidget } from './modal.gen';
export type * from './modal.gen';
export declare const createModal: <Data>(propsConfig?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data>;
export { modalCloseButtonClick, modalOutsideClick } from '@agnos-ui/react-headless/components/modal';
export declare const Modal: <Data>(props: PropsWithChildren<Partial<ModalProps<Data>>> & RefAttributes<ModalApi<Data>>) => JSX.Element;
export declare function openModal<Data>(options: Partial<ModalProps<Data>>): Promise<any>;
`;export{o as default};
