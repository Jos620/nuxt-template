import { http, HttpResponse } from 'msw';

import type { TestResponse } from '@@/src/server/api/test';

export default [
  http.get('/api/test', () => {
    return HttpResponse.json<TestResponse>({ title: 'Mocked title' });
  }),
];
