const c=`/*
 * Public API Surface of @agnos-ui/angular-headless
 */
export * from '@agnos-ui/core';
export * from './config';
export * from './slot.directive';
export * from './slotDefault.directive';
export * from './slotTypes';
export * from './use.directive';
export * from './utils';
export * from './coercion';
import { createAccordion as coreCreateAccordion, createAlert as coreCreateAlert, createModal as coreCreateModal, createPagination as coreCreatePagination, createProgressbar as coreCreateProgressbar, createRating as coreCreateRating, createSelect as coreCreateSelect, } from '@agnos-ui/core';
export const createAccordion = coreCreateAccordion;
export const createAlert = coreCreateAlert;
export const createModal = coreCreateModal;
export const createPagination = coreCreatePagination;
export const createRating = coreCreateRating;
export const createSelect = coreCreateSelect;
export const createProgressbar = coreCreateProgressbar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxjQUFjLGdCQUFnQixDQUFDO0FBQy9CLGNBQWMsVUFBVSxDQUFDO0FBRXpCLGNBQWMsa0JBQWtCLENBQUM7QUFDakMsY0FBYyx5QkFBeUIsQ0FBQztBQUN4QyxjQUFjLGFBQWEsQ0FBQztBQUU1QixjQUFjLGlCQUFpQixDQUFDO0FBQ2hDLGNBQWMsU0FBUyxDQUFDO0FBQ3hCLGNBQWMsWUFBWSxDQUFDO0FBRzNCLE9BQU8sRUFDTixlQUFlLElBQUksbUJBQW1CLEVBQ3RDLFdBQVcsSUFBSSxlQUFlLEVBQzlCLFdBQVcsSUFBSSxlQUFlLEVBQzlCLGdCQUFnQixJQUFJLG9CQUFvQixFQUN4QyxpQkFBaUIsSUFBSSxxQkFBcUIsRUFDMUMsWUFBWSxJQUFJLGdCQUFnQixFQUNoQyxZQUFZLElBQUksZ0JBQWdCLEdBQ2hDLE1BQU0sZ0JBQWdCLENBQUM7QUFXeEIsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFtQyxtQkFBMEIsQ0FBQztBQU0xRixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQStCLGVBQXNCLENBQUM7QUFNOUUsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUF1RSxlQUFzQixDQUFDO0FBT3RILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFvQyxvQkFBMkIsQ0FBQztBQUs3RixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQWdDLGdCQUF1QixDQUFDO0FBT2pGLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBK0UsZ0JBQXVCLENBQUM7QUFVaEksTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQXFDLHFCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFB1YmxpYyBBUEkgU3VyZmFjZSBvZiBAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzc1xuICovXG5cbmV4cG9ydCAqIGZyb20gJ0BhZ25vcy11aS9jb3JlJztcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlnJztcbmV4cG9ydCB0eXBlIHtXaWRnZXRzQ29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL3Nsb3QuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vc2xvdERlZmF1bHQuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vc2xvdFR5cGVzJztcbmV4cG9ydCB0eXBlIHtTbG90Q29udGVudH0gZnJvbSAnLi9zbG90VHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi91c2UuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb2VyY2lvbic7XG5cbmltcG9ydCB0eXBlIHtQcm9wc0NvbmZpZywgV2lkZ2V0RmFjdG9yeSwgV2lkZ2V0UHJvcHMsIFdpZGdldFN0YXRlfSBmcm9tICdAYWdub3MtdWkvY29yZSc7XG5pbXBvcnQge1xuXHRjcmVhdGVBY2NvcmRpb24gYXMgY29yZUNyZWF0ZUFjY29yZGlvbixcblx0Y3JlYXRlQWxlcnQgYXMgY29yZUNyZWF0ZUFsZXJ0LFxuXHRjcmVhdGVNb2RhbCBhcyBjb3JlQ3JlYXRlTW9kYWwsXG5cdGNyZWF0ZVBhZ2luYXRpb24gYXMgY29yZUNyZWF0ZVBhZ2luYXRpb24sXG5cdGNyZWF0ZVByb2dyZXNzYmFyIGFzIGNvcmVDcmVhdGVQcm9ncmVzc2Jhcixcblx0Y3JlYXRlUmF0aW5nIGFzIGNvcmVDcmVhdGVSYXRpbmcsXG5cdGNyZWF0ZVNlbGVjdCBhcyBjb3JlQ3JlYXRlU2VsZWN0LFxufSBmcm9tICdAYWdub3MtdWkvY29yZSc7XG5pbXBvcnQgdHlwZSB7QWRhcHRTbG90Q29udGVudFByb3BzLCBBZGFwdFdpZGdldFNsb3RzfSBmcm9tICcuL3Nsb3RUeXBlcyc7XG5cbmV4cG9ydCB0eXBlIEFjY29yZGlvbldpZGdldCA9IEFkYXB0V2lkZ2V0U2xvdHM8aW1wb3J0KCdAYWdub3MtdWkvY29yZScpLkFjY29yZGlvbldpZGdldD47XG5leHBvcnQgdHlwZSBBY2NvcmRpb25Qcm9wcyA9IFdpZGdldFByb3BzPEFjY29yZGlvbldpZGdldD47XG5leHBvcnQgdHlwZSBBY2NvcmRpb25TdGF0ZSA9IFdpZGdldFN0YXRlPEFjY29yZGlvbldpZGdldD47XG5leHBvcnQgdHlwZSBBY2NvcmRpb25BcGkgPSBBY2NvcmRpb25XaWRnZXRbJ2FwaSddO1xuZXhwb3J0IHR5cGUgQWNjb3JkaW9uSXRlbVdpZGdldCA9IEFkYXB0V2lkZ2V0U2xvdHM8aW1wb3J0KCdAYWdub3MtdWkvY29yZScpLkFjY29yZGlvbkl0ZW1XaWRnZXQ+O1xuZXhwb3J0IHR5cGUgQWNjb3JkaW9uSXRlbVByb3BzID0gV2lkZ2V0UHJvcHM8QWNjb3JkaW9uSXRlbVdpZGdldD47XG5leHBvcnQgdHlwZSBBY2NvcmRpb25JdGVtU3RhdGUgPSBXaWRnZXRTdGF0ZTxBY2NvcmRpb25JdGVtV2lkZ2V0PjtcbmV4cG9ydCB0eXBlIEFjY29yZGlvbkl0ZW1Db250ZXh0ID0gQWRhcHRTbG90Q29udGVudFByb3BzPGltcG9ydCgnQGFnbm9zLXVpL2NvcmUnKS5BY2NvcmRpb25JdGVtQ29udGV4dD47XG5leHBvcnQgY29uc3QgY3JlYXRlQWNjb3JkaW9uOiBXaWRnZXRGYWN0b3J5PEFjY29yZGlvbldpZGdldD4gPSBjb3JlQ3JlYXRlQWNjb3JkaW9uIGFzIGFueTtcblxuZXhwb3J0IHR5cGUgQWxlcnRXaWRnZXQgPSBBZGFwdFdpZGdldFNsb3RzPGltcG9ydCgnQGFnbm9zLXVpL2NvcmUnKS5BbGVydFdpZGdldD47XG5leHBvcnQgdHlwZSBBbGVydFByb3BzID0gV2lkZ2V0UHJvcHM8QWxlcnRXaWRnZXQ+O1xuZXhwb3J0IHR5cGUgQWxlcnRTdGF0ZSA9IFdpZGdldFN0YXRlPEFsZXJ0V2lkZ2V0PjtcbmV4cG9ydCB0eXBlIEFsZXJ0Q29udGV4dCA9IEFkYXB0U2xvdENvbnRlbnRQcm9wczxpbXBvcnQoJ0BhZ25vcy11aS9jb3JlJykuQWxlcnRDb250ZXh0PjtcbmV4cG9ydCBjb25zdCBjcmVhdGVBbGVydDogV2lkZ2V0RmFjdG9yeTxBbGVydFdpZGdldD4gPSBjb3JlQ3JlYXRlQWxlcnQgYXMgYW55O1xuXG5leHBvcnQgdHlwZSBNb2RhbFdpZGdldDxEYXRhPiA9IEFkYXB0V2lkZ2V0U2xvdHM8aW1wb3J0KCdAYWdub3MtdWkvY29yZScpLk1vZGFsV2lkZ2V0PERhdGE+PjtcbmV4cG9ydCB0eXBlIE1vZGFsUHJvcHM8RGF0YT4gPSBXaWRnZXRQcm9wczxNb2RhbFdpZGdldDxEYXRhPj47XG5leHBvcnQgdHlwZSBNb2RhbFN0YXRlPERhdGE+ID0gV2lkZ2V0U3RhdGU8TW9kYWxXaWRnZXQ8RGF0YT4+O1xuZXhwb3J0IHR5cGUgTW9kYWxDb250ZXh0PERhdGE+ID0gQWRhcHRTbG90Q29udGVudFByb3BzPGltcG9ydCgnQGFnbm9zLXVpL2NvcmUnKS5Nb2RhbENvbnRleHQ8RGF0YT4+O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1vZGFsOiA8RGF0YT4ocHJvcHM/OiBQcm9wc0NvbmZpZzxNb2RhbFByb3BzPERhdGE+PikgPT4gTW9kYWxXaWRnZXQ8RGF0YT4gPSBjb3JlQ3JlYXRlTW9kYWwgYXMgYW55O1xuXG5leHBvcnQgdHlwZSBQYWdpbmF0aW9uV2lkZ2V0ID0gQWRhcHRXaWRnZXRTbG90czxpbXBvcnQoJ0BhZ25vcy11aS9jb3JlJykuUGFnaW5hdGlvbldpZGdldD47XG5leHBvcnQgdHlwZSBQYWdpbmF0aW9uUHJvcHMgPSBXaWRnZXRQcm9wczxQYWdpbmF0aW9uV2lkZ2V0PjtcbmV4cG9ydCB0eXBlIFBhZ2luYXRpb25TdGF0ZSA9IFdpZGdldFN0YXRlPFBhZ2luYXRpb25XaWRnZXQ+O1xuZXhwb3J0IHR5cGUgUGFnaW5hdGlvbkNvbnRleHQgPSBBZGFwdFNsb3RDb250ZW50UHJvcHM8aW1wb3J0KCdAYWdub3MtdWkvY29yZScpLlBhZ2luYXRpb25Db250ZXh0PjtcbmV4cG9ydCB0eXBlIFBhZ2luYXRpb25OdW1iZXJDb250ZXh0ID0gQWRhcHRTbG90Q29udGVudFByb3BzPGltcG9ydCgnQGFnbm9zLXVpL2NvcmUnKS5QYWdpbmF0aW9uTnVtYmVyQ29udGV4dD47XG5leHBvcnQgY29uc3QgY3JlYXRlUGFnaW5hdGlvbjogV2lkZ2V0RmFjdG9yeTxQYWdpbmF0aW9uV2lkZ2V0PiA9IGNvcmVDcmVhdGVQYWdpbmF0aW9uIGFzIGFueTtcblxuZXhwb3J0IHR5cGUgUmF0aW5nV2lkZ2V0ID0gQWRhcHRXaWRnZXRTbG90czxpbXBvcnQoJ0BhZ25vcy11aS9jb3JlJykuUmF0aW5nV2lkZ2V0PjtcbmV4cG9ydCB0eXBlIFJhdGluZ1Byb3BzID0gV2lkZ2V0UHJvcHM8UmF0aW5nV2lkZ2V0PjtcbmV4cG9ydCB0eXBlIFJhdGluZ1N0YXRlID0gV2lkZ2V0U3RhdGU8UmF0aW5nV2lkZ2V0PjtcbmV4cG9ydCBjb25zdCBjcmVhdGVSYXRpbmc6IFdpZGdldEZhY3Rvcnk8UmF0aW5nV2lkZ2V0PiA9IGNvcmVDcmVhdGVSYXRpbmcgYXMgYW55O1xuXG5leHBvcnQgdHlwZSBTZWxlY3RXaWRnZXQ8SXRlbT4gPSBBZGFwdFdpZGdldFNsb3RzPGltcG9ydCgnQGFnbm9zLXVpL2NvcmUnKS5TZWxlY3RXaWRnZXQ8SXRlbT4+O1xuZXhwb3J0IHR5cGUgU2VsZWN0UHJvcHM8SXRlbT4gPSBXaWRnZXRQcm9wczxTZWxlY3RXaWRnZXQ8SXRlbT4+O1xuZXhwb3J0IHR5cGUgU2VsZWN0U3RhdGU8SXRlbT4gPSBXaWRnZXRTdGF0ZTxTZWxlY3RXaWRnZXQ8SXRlbT4+O1xuZXhwb3J0IHR5cGUgU2VsZWN0Q29udGV4dDxJdGVtPiA9IEFkYXB0U2xvdENvbnRlbnRQcm9wczxpbXBvcnQoJ0BhZ25vcy11aS9jb3JlJykuU2VsZWN0Q29udGV4dDxJdGVtPj47XG5leHBvcnQgdHlwZSBTZWxlY3RJdGVtQ29udGV4dDxJdGVtPiA9IEFkYXB0U2xvdENvbnRlbnRQcm9wczxpbXBvcnQoJ0BhZ25vcy11aS9jb3JlJykuU2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4+O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVNlbGVjdDogPEl0ZW0+KHByb3BzQ29uZmlnPzogUHJvcHNDb25maWc8U2VsZWN0UHJvcHM8SXRlbT4+KSA9PiBTZWxlY3RXaWRnZXQ8SXRlbT4gPSBjb3JlQ3JlYXRlU2VsZWN0IGFzIGFueTtcblxuZXhwb3J0IHR5cGUgU2xpZGVyV2lkZ2V0ID0gQWRhcHRXaWRnZXRTbG90czxpbXBvcnQoJ0BhZ25vcy11aS9jb3JlJykuU2xpZGVyV2lkZ2V0PjtcbmV4cG9ydCB0eXBlIFNsaWRlclByb3BzID0gV2lkZ2V0UHJvcHM8U2xpZGVyV2lkZ2V0PjtcbmV4cG9ydCB0eXBlIFNsaWRlclN0YXRlID0gV2lkZ2V0U3RhdGU8U2xpZGVyV2lkZ2V0PjtcblxuZXhwb3J0IHR5cGUgUHJvZ3Jlc3NiYXJXaWRnZXQgPSBBZGFwdFdpZGdldFNsb3RzPGltcG9ydCgnQGFnbm9zLXVpL2NvcmUnKS5Qcm9ncmVzc2JhcldpZGdldD47XG5leHBvcnQgdHlwZSBQcm9ncmVzc2JhclByb3BzID0gV2lkZ2V0UHJvcHM8UHJvZ3Jlc3NiYXJXaWRnZXQ+O1xuZXhwb3J0IHR5cGUgUHJvZ3Jlc3NiYXJTdGF0ZSA9IFdpZGdldFN0YXRlPFByb2dyZXNzYmFyV2lkZ2V0PjtcbmV4cG9ydCB0eXBlIFByb2dyZXNzYmFyQ29udGV4dCA9IEFkYXB0U2xvdENvbnRlbnRQcm9wczxpbXBvcnQoJ0BhZ25vcy11aS9jb3JlJykuUHJvZ3Jlc3NiYXJDb250ZXh0PjtcbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9ncmVzc2JhcjogV2lkZ2V0RmFjdG9yeTxQcm9ncmVzc2JhcldpZGdldD4gPSBjb3JlQ3JlYXRlUHJvZ3Jlc3NiYXIgYXMgYW55O1xuIl19`;export{c as default};