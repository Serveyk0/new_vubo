import { withTranslation } from '../../../i18n';
import { International_projects } from './international_projects'

International_projects.getInitialProps = async () => ({
  namespacesRequired: ['international_projects'],
})

export default withTranslation('international_projects')(International_projects)