import {Meteor} from 'meteor/meteor';
import {DocHead} from 'meteor/kadira:dochead';

/* Title */
const title = 'React Explorer';

/* Meta */
const metas = [
  {
    name: 'description',
    content: 'React Explorer is a short quiz game to test out your knowledge on React, Meteor 1.3 and Mantra. React Explorer is built upon Mantra specifications. For a complete list of libraries used in React Explorer, please see here. Source code for React Explorer is avalaible on Github.'
  },{
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  }
];

/* Link */
const links = [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  },{
    rel: 'stylesheet',
    href: 'http://fonts.googleapis.com/css?family=Roboto:400,300,500&amp;subset=latin',
    media: 'all'
  }
];

Meteor.startup(() => {
  DocHead.setTitle(title);
  metas.map(meta => DocHead.addMeta(meta));
  links.map(link => DocHead.addLink(link));
});
