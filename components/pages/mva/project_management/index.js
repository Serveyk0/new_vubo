import { withTranslation } from '../../../../i18n';
import { Project_management } from './project_management';

Project_management.getInitialProps = async () => ({
  namespacesRequired: ['mva/project_management'],
})

export default withTranslation('mva/project_management')(Project_management)