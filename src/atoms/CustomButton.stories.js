import { action } from '@storybook/addon-actions';
import CustomButton from './CustomButton';
import SaveIcon from '@material-ui/icons/Save';

export default {
  title: 'Atoms/CustomButton',
  component: CustomButton,
};

export const Default = () => <CustomButton title="Default" />

export const WithClick = () => <CustomButton title="Default" onClick={action('clicked')}/>

export const WithIcon = () => { 
  return (
    <CustomButton 
      title="Default" 
      onClick={action('clicked')}
      leftIconComponent={<SaveIcon />}
    />
  ); 
}