import { withTranslation } from '../../../../../i18n';
import { Health_baby } from './health_baby';

Health_baby.getInitialProps = async () => ({
  namespacesRequired: ['educational_programms/parent_school/health_baby'],
})

export default withTranslation('educational_programms/parent_school/health_baby')(Health_baby)