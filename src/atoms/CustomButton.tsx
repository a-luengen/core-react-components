import React from 'react';
import Button from '@material-ui/core/Button';

export interface CustomButtonProps {
  /**
   * Title to be displayed in the 
   * middle of the button.
   */
  title: string;
  /**
   * Icon component to be displayed
   * left of the button title.
   */
  leftIconComponent?: React.FC | React.Component;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title = 'default',
  leftIconComponent,
  onClick
}) => {
  return (
    <Button 
      variant="outlined"
      color="primary" 
      onClick={onClick}
      startIcon={leftIconComponent}
    > 
      {title}
    </Button>
  );
}

export default CustomButton;