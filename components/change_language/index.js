import { withTranslation } from '../../i18n';
import { Change_language } from './change_language'

Change_language.getInitialProps = async () => ({
  namespacesRequired: ['change_language'],
})

export default withTranslation('change_language')(Change_language)