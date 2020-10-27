import { withTranslation } from '../../../i18n';
import { Contacts } from './contacts'

Contacts.getInitialProps = async () => ({
  namespacesRequired: ['contacts'],
})

export default withTranslation('contacts')(Contacts)