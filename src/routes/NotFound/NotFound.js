import React from 'react';
import { BaseLayout } from '../../components/BaseLayout';

const style = { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' };

export const NotFound = () => {
    return (
        <BaseLayout contentStyle={style}>
            <main>
                <h1>Sorry :(</h1>
                <h2>Page not found</h2>
            </main>
        </BaseLayout>
    );
};
