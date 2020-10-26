import { withTranslation } from '../../i18n';
import { Footer } from './footer'

Footer.getInitialProps = async () => ({
  namespacesRequired: ['footer'],
})

export default withTranslation('footer')(Footer)