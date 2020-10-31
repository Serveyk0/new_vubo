import { withTranslation } from '../../../i18n';
import { Educational_programms } from './educational_programms'

Educational_programms.getStaticProps = async () => ({
  namespacesRequired: ['educational_programms'],
})

export default withTranslation('educational_programms')(Educational_programms)