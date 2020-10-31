import { withTranslation } from '../../../i18n';
import { Home } from './home'

Home.getStaticProps = async () => ({
  namespacesRequired: ['home'],
})

export default withTranslation('home')(Home)