import React from 'react'
import { storiesOf } from '@storybook/react'

import ShowPerson from './Display'

storiesOf("Pages/ShowPerson", module)
  .add("default", () => <ShowPerson person={{ name: "Marcelo", age: 53 }}/>)