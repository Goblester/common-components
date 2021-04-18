const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED';

export type UnAccordionStateType = {
    collapsed: boolean
}

export type ToggleCollapsedActionType = {
    type: typeof TOGGLE_COLLAPSED,
    collapsed: boolean
}

type unAccordionActionTypes = ToggleCollapsedActionType;

export const unAccordionReducer = (state: UnAccordionStateType, action: unAccordionActionTypes): UnAccordionStateType  => {
    switch (action.type) {
        case 'TOGGLE_COLLAPSED':
            return {
                ...state,
                collapsed: action.collapsed
            }
        default:
            return state
    }
}

