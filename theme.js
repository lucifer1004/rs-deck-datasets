import theme from 'mdx-deck/themes'

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: 'Roboto, sans-serif',
  // custom colors
  colors: {
    text: '#433d3c',
    background: '#ede4cd',
    link: '#274a78',
  },
  // css: {
  //   'text-decoration': 'unset',
  // },
  heading: {
    padding: '1%',
    margin: '5%',
    'background-color': '#f8b862',
    'box-shadow': '0 0 16px rgba(0, 0, 0, .2)',
    'text-shadow': '2px 3px rgba(0, 0, 0, .2)',
    'border-radius': '10px',
    '&:hover': {
      color: '#59b9c6',
    },
  },
  h1: {
    fontSize: '5em',
    textTransform: 'uppercase',
    '&:hover': {
      fontSize: '5.1em',
    },
  },
  h2: {
    fontSize: '3em',
    '&:hover': {
      fontSize: '3.1em',
    },
  },
  ul: {
    'text-decoration': 'unset',
    // 'list-style-type': 'none',
  },
  li: {
    fontSize: '0.5em',
    margin: '5%',
    'word-wrap': 'break-word',
    // 'background-color': 'cyan',
    '&:hover': {
      // 'padding': '100 100 100 100',
      // 'margin': '100 100 100 100',
    },
  },
  a: {
    'text-align': 'left',
    'text-decoration': 'unset',
    '&:hover': {
      color: '#83ccd2',
    },
    '&:active': {
      color: '#eaf4fc',
    },
  },
  img: {
    padding: '20px',
  },
}
