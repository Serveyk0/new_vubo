import { withTranslation } from '../../i18n';
import { Menu } from './menu'

Menu.getInitialProps = async () => ({
  namespacesRequired: ['menu'],
})

export default withTranslation('menu')(Menu)