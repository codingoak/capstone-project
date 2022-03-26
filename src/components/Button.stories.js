import Button from './Button';
import { ButtonPrimary } from './Button';
import { ButtonPrimarySmall } from './Button';
import { ButtonSecondary } from './Button';

export default {
  title: 'Button',
  component: Button,
  subcomponents: { ButtonPrimary, ButtonPrimarySmall, ButtonSecondary },
};

export const Primary = () => <ButtonPrimary children={'PRIMARY'} />;
export const PrimarySmall = () => <ButtonPrimarySmall children={'SMALL'} />;
export const Secondary = () => <ButtonSecondary children={'SECONDARY'} />;
