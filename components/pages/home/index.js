import { withTranslation } from '../../../i18n';
import { Home } from './home'

Home.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

export default withTranslation('home')(Home)