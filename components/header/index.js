import { withTranslation } from '../../i18n';
import { Header } from './header'

Header.getInitialProps = async () => ({
  namespacesRequired: ['header'],
})

export default withTranslation('header')(Header)