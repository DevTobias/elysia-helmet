import Elysia from 'elysia';
import { HelmetOptions, setHelmetHeaders } from './helmet';

export const helmet = (options: Readonly<HelmetOptions> = {}) => {
  return new Elysia({
    name: 'elysia-helmet',
    seed: options.seed ?? '',
    aot: options.aot ?? true,
  }).onRequest(({ set }) => {
    setHelmetHeaders(
      ([name, value]) => (set.headers[name] = value),
      (name) => delete set.headers[name],
      options
    );
  });
};
