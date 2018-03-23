import React from 'react'
import { storiesOf, action, linkTo } from '@storybook/react';
import Header from './'

storiesOf('Header', module)
  .add('without text', () => (
    <Header />
  ))
  .add('with text', () => (
    <Header app_name='OMG Coolest App Ever' />
  ))
