import { withTranslation } from '../../i18n';
import { Distance_education } from './distance_education';

Distance_education.getInitialProps = async () => ({
  namespacesRequired: ['education_abroad/distance_education'],
})

export default withTranslation('education_abroad/distance_education')(Distance_education)