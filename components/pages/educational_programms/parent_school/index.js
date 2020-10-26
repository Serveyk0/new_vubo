import { withTranslation } from '../../i18n';
import { Parent_school } from './parent_school';

Parent_school.getInitialProps = async () => ({
  namespacesRequired: ['educational_programms/parent_school'],
})

export default withTranslation('educational_programms/parent_school')(Parent_school)