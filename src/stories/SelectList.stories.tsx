import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectList from '../components/SelectList';

export default {
  title: 'Components/SelectList',
  component: SelectList,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SelectList>;

const Template: ComponentStory<typeof SelectList> = (args) => <SelectList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    {
      text: 'Opção 1',
      value: 1
    }, 
    {
      text: 'Opção 2',
      value: 2
    },
    {
      text: 'Opção 3',
      value: 3
    }
  ]
};