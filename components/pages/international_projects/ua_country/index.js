import { withTranslation } from '../../../../i18n';
import { Ua_country } from './ua_country';

Ua_country.getInitialProps = async () => ({
  namespacesRequired: ['educational_programms/ua_country'],
})

export default withTranslation('educational_programms/ua_country')(Ua_country)