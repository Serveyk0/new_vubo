import { withTranslation } from '../../../../i18n';
import { Spanish_language } from './spanish_language'

Spanish_language.getStaticProps = async () => ({
  namespacesRequired: ['education_abroad/spanish_language'],
})

export default withTranslation('education_abroad/spanish_language')(Spanish_language)