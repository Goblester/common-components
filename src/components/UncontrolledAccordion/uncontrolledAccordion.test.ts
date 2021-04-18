import {unAccordionReducer, UnAccordionStateType} from './uncontrolledAccordionReducer';

let state: UnAccordionStateType;


beforeEach(() => {
    state = {collapsed: false}
})


test('toggle-collapsed should work', () => {
    state = {collapsed: false};
    const newState = unAccordionReducer(state, {type: 'TOGGLE_COLLAPSED', collapsed: true});
    expect(newState.collapsed).toBe(true);
});


