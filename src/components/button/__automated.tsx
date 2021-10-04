import { UseCase as GenericUseCase } from '@automated/automated';

import Component, { Props } from '.';

interface UseCase extends Omit<GenericUseCase, 'props'> {
  props: Props;
}

const defaults: UseCase = {
  props: {
    onClick: () => {},
  },
};

const useCases: Array<UseCase> = [
  defaults,

  {
    name: 'Set text',
    props: {
      ...defaults.props,

      text: 'Hello automated',
    },
  },

  {
    name: 'Set background',
    props: {
      ...defaults.props,

      background: 'green',
    },
  },
];

export default {
  Component,
  dirname: __dirname,
  useCases,
};
