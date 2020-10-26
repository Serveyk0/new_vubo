import { withTranslation } from '../../i18n';
import { Education_abroad } from './education_abroad'

Education_abroad.getInitialProps = async () => ({
  namespacesRequired: ['education_abroad'],
})

export default withTranslation('education_abroad')(Education_abroad)