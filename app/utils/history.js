import { createBrowserHistory } from 'history';
export const baseUrl = () => {
    if(process.env.ENVIRONMENT_NAME === 'uat'){
        return `/${process.env.BRANCH_NAME}`
    }
    return ''
};
const history = createBrowserHistory({ basename: baseUrl() });
export default history;
