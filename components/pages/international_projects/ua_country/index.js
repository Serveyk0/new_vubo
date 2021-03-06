import { withTranslation } from '../../../../i18n';
import { Ua_country } from './ua_country';

Ua_country.getInitialProps = async () => ({
  namespacesRequired: ['international_projects/ua_country'],
})

export default withTranslation('international_projects/ua_country')(Ua_country)