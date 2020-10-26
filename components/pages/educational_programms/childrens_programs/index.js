import { withTranslation } from '../../i18n';
import { Childrens_programs } from './childrens_programs';

Childrens_programs.getInitialProps = async () => ({
  namespacesRequired: ['educational_programms/childrens_programs'],
})

export default withTranslation('educational_programms/childrens_programs')(Childrens_programs)