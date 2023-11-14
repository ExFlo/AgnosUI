export * from '@agnos-ui/core';

import {createPagination as coreCreatePagination} from '@agnos-ui/core';
import type {AdaptSlotContentProps, AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState} from './types';

export type PaginationWidget = AdaptWidgetSlots<import('@agnos-ui/core').PaginationWidget>;
export type PaginationProps = WidgetProps<PaginationWidget>;
export type PaginationState = WidgetState<PaginationWidget>;
export type PaginationContext = AdaptSlotContentProps<import('@agnos-ui/core').PaginationContext>;
export type PaginationNumberContext = AdaptSlotContentProps<import('@agnos-ui/core').PaginationNumberContext>;
export const createPagination: WidgetFactory<PaginationWidget> = coreCreatePagination as any;
