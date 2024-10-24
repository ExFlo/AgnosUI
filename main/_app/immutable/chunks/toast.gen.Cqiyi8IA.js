const G=`import { getToastDefaultConfig, createToast } from '@agnos-ui/core-bootstrap/components/toast';
/**
 * Retrieve a shallow copy of the default Toast config
 * @returns the default Toast config
 */
const export_getToastDefaultConfig = getToastDefaultConfig;
export { export_getToastDefaultConfig as getToastDefaultConfig };
/**
 * Create an ToastWidget with given config props
 * @param config - an optional alert config
 * @returns an ToastWidget
 */
const export_createToast = createToast;
export { export_createToast as createToast };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuZ2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuZ2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUs3Rjs7O0dBR0c7QUFDSCxNQUFNLDRCQUE0QixHQUFxQixxQkFBNEIsQ0FBQztBQUNwRixPQUFPLEVBQUMsNEJBQTRCLElBQUkscUJBQXFCLEVBQUMsQ0FBQztBQTJNL0Q7Ozs7R0FJRztBQUNILE1BQU0sa0JBQWtCLEdBQStCLFdBQWtCLENBQUM7QUFDMUUsT0FBTyxFQUFDLGtCQUFrQixJQUFJLFdBQVcsRUFBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRUb2FzdERlZmF1bHRDb25maWcsIGNyZWF0ZVRvYXN0fSBmcm9tICdAYWdub3MtdWkvY29yZS1ib290c3RyYXAvY29tcG9uZW50cy90b2FzdCc7XG5pbXBvcnQgdHlwZSB7V2lkZ2V0U2xvdENvbnRleHQsIFNsb3RDb250ZW50LCBUcmFuc2l0aW9uRm4sIFdpZGdldCwgV2lkZ2V0RmFjdG9yeSwgRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5cblxuXG4vKipcbiAqIFJldHJpZXZlIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBkZWZhdWx0IFRvYXN0IGNvbmZpZ1xuICogQHJldHVybnMgdGhlIGRlZmF1bHQgVG9hc3QgY29uZmlnXG4gKi9cbmNvbnN0IGV4cG9ydF9nZXRUb2FzdERlZmF1bHRDb25maWc6ICgpID0+IFRvYXN0UHJvcHMgPSBnZXRUb2FzdERlZmF1bHRDb25maWcgYXMgYW55O1xuZXhwb3J0IHtleHBvcnRfZ2V0VG9hc3REZWZhdWx0Q29uZmlnIGFzIGdldFRvYXN0RGVmYXVsdENvbmZpZ307XG5cblxuXG5leHBvcnQgdHlwZSBUb2FzdENvbnRleHQgPSBXaWRnZXRTbG90Q29udGV4dDxUb2FzdFdpZGdldD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RTdGF0ZSB7XG5cdFxuXHQvKipcblx0ICogSXMgYHRydWVgIHdoZW4gdGhlIGFsZXJ0IGlzIGhpZGRlbi4gQ29tcGFyZWQgdG8gYHZpc2libGVgLCB0aGlzIGlzIHVwZGF0ZWQgYWZ0ZXIgdGhlIHRyYW5zaXRpb24gaXMgZXhlY3V0ZWQuXG5cdCAqL1xuXHRoaWRkZW46IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjYW4gYmUgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyLlxuXHQgKiBUaGUgY2xvc2UgYnV0dG9uICjDlykgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHlvdSBjYW4gYmUgbm90aWZpZWQgb2YgdGhlIGV2ZW50IHdpdGggdGhlIChjbG9zZSkgb3V0cHV0LlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0ZGlzbWlzc2libGU6IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSBhbGVydCBpcyB2aXNpYmxlIHRvIHRoZSB1c2VyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHR2aXNpYmxlOiBib29sZWFuO1xuXHRcblxuXHQvKipcblx0ICogQWNjZXNzaWJpbGl0eSBjbG9zZSBidXR0b24gbGFiZWxcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ0Nsb3NlJ2Bcblx0ICovXG5cdGFyaWFDbG9zZUJ1dHRvbkxhYmVsOiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0Y2xhc3NOYW1lOiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgIGF1dG9tYXRpY2FsbHkgaGlkZXMgdGhlIHRvYXN0IGFmdGVyIHRoZSBkZWxheS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdGF1dG9IaWRlOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIERlbGF5IGluIG1pbGxpc2Vjb25kcyBiZWZvcmUgaGlkaW5nIHRoZSB0b2FzdC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgNTAwMGBcblx0ICovXG5cdGRlbGF5OiBudW1iZXI7XG5cdFxuXHQvKipcblx0ICogR2xvYmFsIHRlbXBsYXRlIGZvciB0aGUgdG9hc3QgY29tcG9uZW50XG5cdCAqL1xuXHRzdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFRvYXN0Q29udGV4dD47XG5cdFxuXHQvKipcblx0ICogVGVtcGxhdGUgZm9yIHRoZSB0b2FzdCBjb250ZW50XG5cdCAqL1xuXHRjaGlsZHJlbjogU2xvdENvbnRlbnQ8VG9hc3RDb250ZXh0Pjtcblx0XG5cdC8qKlxuXHQgKiBIZWFkZXIgdGVtcGxhdGUgZm9yIHRoZSB0b2FzdCBjb21wb25lbnRcblx0ICovXG5cdGhlYWRlcjogU2xvdENvbnRlbnQ8VG9hc3RDb250ZXh0Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdFByb3BzIHtcblx0XG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiBmdW5jdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGFsZXJ0IGlzIGRpc3BsYXllZCBvciBoaWRkZW4uXG5cdCAqXG5cdCAqIERlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgYGFuaW1hdGVkT25Jbml0YCwgdGhlIGFuaW1hdGlvbiBjYW4gYmUgb3B0aW9uYWxseSBza2lwcGVkIGR1cmluZyB0aGUgc2hvd2luZyBwcm9jZXNzLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWRlVHJhbnNpdGlvbmBcblx0ICovXG5cdHRyYW5zaXRpb246IFRyYW5zaXRpb25Gbjtcblx0XG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgYWxlcnQgdmlzaWJpbGl0eSBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0b25WaXNpYmxlQ2hhbmdlOiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZDtcblx0XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCBpcyBoaWRkZW4uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRvbkhpZGRlbjogKCkgPT4gdm9pZDtcblx0XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCBpcyBzaG93bi5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdG9uU2hvd246ICgpID0+IHZvaWQ7XG5cdFxuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFsZXJ0IG9wZW5pbmcgd2lsbCBiZSBhbmltYXRlZC5cblx0ICpcblx0ICogQW5pbWF0aW9uIGlzIHRyaWdnZXJlZCAgd2hlbiB0aGUgYC5vcGVuKClgIGZ1bmN0aW9uIGlzIGNhbGxlZFxuXHQgKiBvciB0aGUgdmlzaWJsZSBwcm9wIGlzIGNoYW5nZWRcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRhbmltYXRlZE9uSW5pdDogYm9vbGVhbjtcblx0XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFsZXJ0IGNsb3Npbmcgd2lsbCBiZSBhbmltYXRlZC5cblx0ICpcblx0ICogQW5pbWF0aW9uIGlzIHRyaWdnZXJlZCAgd2hlbiBjbGlja2VkIG9uIHRoZSBjbG9zZSBidXR0b24gKMOXKSxcblx0ICogdmlhIHRoZSBgLmNsb3NlKClgIGZ1bmN0aW9uIG9yIHRoZSB2aXNpYmxlIHByb3AgaXMgY2hhbmdlZFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0YW5pbWF0ZWQ6IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjYW4gYmUgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyLlxuXHQgKiBUaGUgY2xvc2UgYnV0dG9uICjDlykgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHlvdSBjYW4gYmUgbm90aWZpZWQgb2YgdGhlIGV2ZW50IHdpdGggdGhlIChjbG9zZSkgb3V0cHV0LlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0ZGlzbWlzc2libGU6IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSBhbGVydCBpcyB2aXNpYmxlIHRvIHRoZSB1c2VyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHR2aXNpYmxlOiBib29sZWFuO1xuXHRcblxuXHQvKipcblx0ICogQWNjZXNzaWJpbGl0eSBjbG9zZSBidXR0b24gbGFiZWxcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ0Nsb3NlJ2Bcblx0ICovXG5cdGFyaWFDbG9zZUJ1dHRvbkxhYmVsOiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0Y2xhc3NOYW1lOiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgIGF1dG9tYXRpY2FsbHkgaGlkZXMgdGhlIHRvYXN0IGFmdGVyIHRoZSBkZWxheS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdGF1dG9IaWRlOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIERlbGF5IGluIG1pbGxpc2Vjb25kcyBiZWZvcmUgaGlkaW5nIHRoZSB0b2FzdC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgNTAwMGBcblx0ICovXG5cdGRlbGF5OiBudW1iZXI7XG5cdFxuXHQvKipcblx0ICogR2xvYmFsIHRlbXBsYXRlIGZvciB0aGUgdG9hc3QgY29tcG9uZW50XG5cdCAqL1xuXHRzdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFRvYXN0Q29udGV4dD47XG5cdFxuXHQvKipcblx0ICogVGVtcGxhdGUgZm9yIHRoZSB0b2FzdCBjb250ZW50XG5cdCAqL1xuXHRjaGlsZHJlbjogU2xvdENvbnRlbnQ8VG9hc3RDb250ZXh0Pjtcblx0XG5cdC8qKlxuXHQgKiBIZWFkZXIgdGVtcGxhdGUgZm9yIHRoZSB0b2FzdCBjb21wb25lbnRcblx0ICovXG5cdGhlYWRlcjogU2xvdENvbnRlbnQ8VG9hc3RDb250ZXh0Pjtcbn1cblxuXG5cbmV4cG9ydCB0eXBlIFRvYXN0V2lkZ2V0ID0gV2lkZ2V0PFRvYXN0UHJvcHMsIFRvYXN0U3RhdGUsIFRvYXN0QXBpLCBUb2FzdERpcmVjdGl2ZXM+O1xuXG5cblxuLyoqXG4gKiBDcmVhdGUgYW4gVG9hc3RXaWRnZXQgd2l0aCBnaXZlbiBjb25maWcgcHJvcHNcbiAqIEBwYXJhbSBjb25maWcgLSBhbiBvcHRpb25hbCBhbGVydCBjb25maWdcbiAqIEByZXR1cm5zIGFuIFRvYXN0V2lkZ2V0XG4gKi9cbmNvbnN0IGV4cG9ydF9jcmVhdGVUb2FzdDogV2lkZ2V0RmFjdG9yeTxUb2FzdFdpZGdldD4gPSBjcmVhdGVUb2FzdCBhcyBhbnk7XG5leHBvcnQge2V4cG9ydF9jcmVhdGVUb2FzdCBhcyBjcmVhdGVUb2FzdH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RBcGkge1xuXHRcblx0LyoqXG5cdCAqIFRyaWdnZXJzIGFsZXJ0IGNsb3NpbmcgcHJvZ3JhbW1hdGljYWxseSAoc2FtZSBhcyBjbGlja2luZyBvbiB0aGUgY2xvc2UgYnV0dG9uICjDlykpLlxuXHQgKi9cblx0Y2xvc2UoKTogdm9pZDtcblx0XG5cblx0LyoqXG5cdCAqIFRyaWdnZXJzIHRoZSBhbGVydCB0byBiZSBkaXNwbGF5ZWQgZm9yIHRoZSB1c2VyLlxuXHQgKi9cblx0b3BlbigpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0RGlyZWN0aXZlcyB7XG5cdFxuXHQvKipcblx0ICogdGhlIHRyYW5zaXRpb24gZGlyZWN0aXZlLCBwaWxvdGluZyB3aGF0IGlzIHRoZSB2aXN1YWwgZWZmZWN0IG9mIGdvaW5nIGZyb20gaGlkZGVuIHRvIHZpc2libGVcblx0ICovXG5cdHRyYW5zaXRpb25EaXJlY3RpdmU6IERpcmVjdGl2ZTtcblx0XG5cdC8qKlxuXHQgKiBEaXJlY3RpdmUgdGhhdCBoYW5kbGVzIHRoZSBhdXRvaGlkZSBvZiB0aGUgdG9hc3QgY29tcG9uZW50XG5cdCAqL1xuXHRhdXRvSGlkZURpcmVjdGl2ZTogRGlyZWN0aXZlO1xuXHRcblx0LyoqXG5cdCAqIERpcmVjdGl2ZSB0aGF0IGFkZHMgYWxsIHRoZSBuZWNlc3NhcnkgYXR0cmlidXRlcyB0byB0aGUgYm9keVxuXHQgKi9cblx0Ym9keURpcmVjdGl2ZTogRGlyZWN0aXZlO1xuXHRcblx0LyoqXG5cdCAqIERpcmVjdGl2ZSB0aGF0IGFkZHMgYWxsIHRoZSBuZWNlc3NhcnkgYXR0cmlidXRlcyB0byB0aGUgY2xvc2UgYnV0dG9uIGRlcGVuZGluZyBvbiB0aGUgcHJlc2VuY2Ugb2YgdGhlIGhlYWRlclxuXHQgKi9cblx0Y2xvc2VCdXR0b25EaXJlY3RpdmU6IERpcmVjdGl2ZTtcbn1cblxuIl19`;export{G as default};