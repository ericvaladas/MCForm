// ==========================================================================
// Project:   MCForm
// Copyright: ©2011 My Company Inc. All rights reserved.
// ==========================================================================
// TODO: Your app code goes here
App.MyForm = App.MCForm.create({
  fieldNames: ['name', 'email', 'distance'],
  name: App.TextField.create({
    isRequired: true,
    minLength: 2,
    maxLength: 12
  }),

  email: App.EmailField.create({
    isRequired: true
  }),

  distance: App.NumberField.create({}),
  formDidValidate: function() {
    //  alert('form did validate');
  },
});
