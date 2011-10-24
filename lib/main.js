// ==========================================================================
// Project:   MCForm
// Copyright: ©2011 My Company Inc. All rights reserved.
// ==========================================================================
// TODO: Your app code goes here
App.MyForm = App.MCForm.create({
  fieldNames: ['name', 'email', 'amount'],
  
  name: App.TextField.create({
    label: 'Name',
    placeholder: 'John Smith',
    isRequired: true,
    minLength: 2,
    maxLength: 12
  }),
  
  email: App.EmailField.create({
    label: 'Email',
    placeholder: 'johnsmith@me.com',
    isRequired: true,
  }),
  
  amount: App.NumberField.create({
    label: 'Amount',
    placeholder: '123.34'
  }),
  
  formDidValidate: function() {
    //  alert('form did validate');
  },
});
