import CustomHeader from './CustomHeader';
import CompanyLogo from '../atoms/CompanyLogo';

export default {
  title: 'Organisms/CustomHeader',
  component: CustomHeader,
};

export const Default = () => <CustomHeader title="My New App is great!" />;


export const WithCompanyLogo = () => (
  <CustomHeader 
    title="Company with logo!" 
    logo={<CompanyLogo />}
  />
);