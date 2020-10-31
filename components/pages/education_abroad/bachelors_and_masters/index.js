import { withTranslation } from '../../../../i18n';
import { Bachelors_and_masters } from './bachelors_and_masters'

Bachelors_and_masters.getStaticProps = async () => ({
  namespacesRequired: ['education_abroad/bachelors_and_masters'],
})

export default withTranslation('education_abroad/bachelors_and_masters')(Bachelors_and_masters)