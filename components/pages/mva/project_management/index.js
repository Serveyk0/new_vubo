import { withTranslation } from '../../i18n';
import { Project_management } from './project_management';

Project_management.getInitialProps = async () => ({
  namespacesRequired: ['educational_programms/project_management'],
})

export default withTranslation('educational_programms/project_management')(Project_management)