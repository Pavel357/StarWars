import UiButton from "./UiButton";

export default {
  title: 'Ui-Kit/UiButton',
  component: UiButton
}

//Создаем еще один компонент с нашим компонентом
const Template= (args) => <UiButton {...args} />;

//Создаем объект со всеми пропсами компонента
const props = {
  text: 'Hellow',
  onClick: () => console.log('Button click'),
  disabled: false, 
  classes: '',
  theme: 'dark'
}

//Пробрасываем пропсы нашего компонента
export const Light = Template.bind({});

Light.args = {
  ...props,
  theme: 'light'
};

//Пробрасываем пропсы нашего компонента
export const Dark = Template.bind({});

Dark.args = {
  ...props,
  theme: 'dark'
};

//Пробрасываем пропсы нашего компонента
export const Disabled = Template.bind({});

Disabled.args = {
  ...props,
  disabled: true
};