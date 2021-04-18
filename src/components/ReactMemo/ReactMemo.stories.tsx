import {Story} from '@storybook/react/types-6-0';
import {Example1} from './ReactMemo';

export default {
    title: 'Kabzda/ReactMemo',
    component: Example1
}

export const Example: Story<any> = (args) => {
    return <Example1/>
}
