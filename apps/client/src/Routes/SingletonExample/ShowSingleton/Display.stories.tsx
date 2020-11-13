import React from 'react'
import { storiesOf } from '@storybook/react'

import { SingletonExample } from "Api/SingletonExample"
import ShowSingleton from './Display'

const singletonMock: SingletonExample = {
  text: "look at this baby",
  image: {
    url: "https://www.lomsnesvet.ca/wp-content/uploads/sites/21/2019/08/Kitten-Blog-683x1024.jpg",
    alt: "Cute fucking kitten",
  },
}
storiesOf("Pages/SingletonExample", module)
  .add("default", () => <ShowSingleton data={singletonMock}/>)
