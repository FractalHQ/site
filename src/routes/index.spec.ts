// TODO: Enable testing in github actions once issue is resolved: https://github.com/mihar-22/svelte-jester/issues/6

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';

import index from './index.svelte';

test('shows proper heading when rendered', () => {
    const { getByText } = render(index);
    expect(getByText('𓏲 Coming Soon')).toBeInTheDocument();
});
