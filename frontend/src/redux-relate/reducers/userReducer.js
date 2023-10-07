import { FETCH_USER_INFO } from '@/redux-relate/constant/http'

const initialState = {
	res: {}
}

/**
 *
 *
 * @export    reducer
 * @param     {*} [state=initialState]
 * @param     {*} action
 * @returns
 */
export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_USER_INFO:
			return Object.assign({}, state, {
				res: action.payload
			})
		default:
			return state
	}
}
