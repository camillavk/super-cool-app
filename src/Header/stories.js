import React from 'react'
import { storiesOf, action, linkTo } from '@storybook/react';
import Header from './'

storiesOf('Header', module)
  .add('with text', () => (
    <Header>Something</Header>
  ))
