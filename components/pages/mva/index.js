import { withTranslation } from '../../../i18n';
import { Mva } from './mva'

Mva.getInitialProps = async () => ({
  namespacesRequired: ['mva'],
})

export default withTranslation('mva')(Mva)