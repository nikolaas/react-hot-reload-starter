import { AsyncRoute } from '../../components/AsyncRoute';

export default AsyncRoute({
    name: 'syncCounter',
    component: () => import('./SyncCounter'),
    reducer: () => import('./SyncCounter.reducer'),
});
