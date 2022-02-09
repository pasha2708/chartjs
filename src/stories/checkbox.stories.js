import { CheckBox } from '../components/CheckBox/index';
import react from 'react';

export default {
  title: "Example/CheckBox",
  component: CheckBox,
}

export const withLabel = (args) => <CheckBox {...args} />

withLabel.args = {
  label: "my Label",
  isChecked: true,
  id: "myCheckBox"

}