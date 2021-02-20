function ViewModel (cookiesPolicy = {}, updated = false) {
  this.analytics = {
    idPrefix: 'analytics',
    name: 'analytics',
    fieldset: {
      legend: {
        text: 'Do you want to accept analytics cookies?',
        classes: 'govuk-fieldset__legend--s'
      }
    },
    items: [
      {
        value: true,
        text: 'Yes',
        checked: cookiesPolicy.analytics
      },
      {
        value: false,
        text: 'No',
        checked: !cookiesPolicy.analytics
      }
    ]
  }

  this.functional = {
    idPrefix: 'functional',
    name: 'functional',
    fieldset: {
      legend: {
        text: 'Do you want to accept functional cookies?',
        classes: 'govuk-fieldset__legend--s'
      }
    },
    items: [
      {
        value: true,
        text: 'Yes',
        checked: cookiesPolicy.functional
      },
      {
        value: false,
        text: 'No',
        checked: !cookiesPolicy.functional
      }
    ]
  }

  this.updated = updated
}

module.exports = ViewModel
