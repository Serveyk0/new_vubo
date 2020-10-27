import { Main_text } from './main_text';
import { Quote } from './quote';
import { News } from './news';

export const Home = ({ t }) =>
{
    return (
        <div className="home">
            <Main_text t={t} />
            <Quote t={t} />
            <News t={t} />
        </div>
    )
}