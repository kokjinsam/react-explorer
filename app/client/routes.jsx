import React from 'react'
import {mount} from 'react-mounter'
import {FlowRouter} from 'meteor/kadira:flow-router'

import {Layout, Welcome} from './app.jsx'

FlowRouter.route('/', {
  action () {
    mount(Layout, {
      content: (<Welcome name='arunoda'/>)
    })
  }
})
