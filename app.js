module.exports.themes = [{
  name:        'rafael-theme', // theme name in kebab-case
  displayName: 'Rafael Theme', // formatted theme name
  theme: {
    // Background, foreground, and highlight values nested directly in the theme 
    // object will serve as the default overwrites for all properties you add.
    background: {
      default:    '#100D23',  // primary background color
      success:    '#00FF6A',  // POST request, 200 OK, parameter names
      notice:     '#E8F086',  // PATCH request
      warning:    '#FF7C37',  // PUT request
      danger:     '#FF0339',  // DELETE request
      surprise:   '#00FF6A',  // accent (Dashboard link, GET request, 
                              // SEND button, branch button, add plugin button)
      info:       '#58A6FF'   // OPTIONS AND HEAD request
    },
    foreground: {
      default:     '#FFEE46',    // primary font color
      success:     '#100D23',    // secondary font color for success background
      notice:      '#100D23',    // secondary font color for notice background
      warning:     '#100D23',    // secondary font color for warning background
      danger:      '#100D23',    // secondary font color for danger background
      surprise:    '#100D23',    // secondary font color for surprise background
      info:        '#100D23'     // secondary font color for info background
    },
    highlight: {
      default: '#07B0FF'      // sidebar highlight color
    },
    // The styles object targets sub-components of the Insomnia application.
    styles: {
      appHeader: {
        foreground: {
          surprise:   '#000'  // header branch button font color
        }
      },
      paneHeader: {
        foreground: {
          surprise:   '#000', // pane accent font color
          info:       '#000'  // pane response font color
        }
      },
      editor: {
        foreground: {
          default:    '#000', // primary editor font color
          surprise:   '#000', // editor accent font color
          info:       '#000'  // editor response font color
        }
      },
      dialog: {
        background: {
          default:    '#1E1D45' // modal primary background color
        },
        foreground: {
          default:    '#fff'    // modal primary font color
        }
      }
    }
  }
}]