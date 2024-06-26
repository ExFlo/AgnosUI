import {useObservable} from '@agnos-ui/react-bootstrap/utils/stores';
import {hashObject$} from '@agnos-ui/common/utils';
import {getPropValues} from '@agnos-ui/common/propsValues';

export function useHashChange() {
	return {config: getPropValues(useObservable(hashObject$).config), props: getPropValues(useObservable(hashObject$).props)};
}
