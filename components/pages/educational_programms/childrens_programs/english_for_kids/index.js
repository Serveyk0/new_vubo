import { withTranslation } from '../../../../../i18n';
import { English_for_kids } from './english_for_kids';

English_for_kids.getInitialProps = async () => ({
  namespacesRequired: ['educational_programms/childrens_programs/english_for_kids'],
})

export default withTranslation('educational_programms/childrens_programs/english_for_kids')(English_for_kids)