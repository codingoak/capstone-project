import Button from './Button';
import { ButtonPrimary } from './Button';
import { ButtonSecondary } from './Button';

export default {
  title: 'Button',
  component: Button,
  subcomponents: { ButtonPrimary, ButtonSecondary },
};

export const Empty = () => <Button>CLICK ME</Button>;
export const Primary = () => <ButtonPrimary>PRIMARY</ButtonPrimary>;
export const Secondary = () => <ButtonSecondary>SECONDARY</ButtonSecondary>;
