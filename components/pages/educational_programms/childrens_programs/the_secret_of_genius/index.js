import { withTranslation } from '../../../../../i18n';
import { The_secret_of_genius } from './the_secret_of_genius';

The_secret_of_genius.getStaticProps = async () => ({
  namespacesRequired: ['educational_programms/childrens_programs/the_secret_of_genius'],
})

export default withTranslation('educational_programms/childrens_programs/the_secret_of_genius')(The_secret_of_genius)