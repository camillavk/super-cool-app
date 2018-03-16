import React from 'react'
import { storiesOf, action, linkTo } from '@storybook/react';
import Welcome from './'

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ))
