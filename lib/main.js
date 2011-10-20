// ==========================================================================
// Project:   MCForm
// Copyright: ©2011 My Company Inc. All rights reserved.
// ==========================================================================

// TODO: Your app code goes here

App.MyForm = App.MCForm.create({

    init: function() {
        this._super();
        this.fields.push(
            this.name,
            this.email,
            this.distance
        )
    },

    name: App.textField.create({
        isRequired: true,
        minLength: 2,
        maxLength: 12
    }),
    
    email: App.emailField.create({
        isRequired: true
    }),
    
    distance: App.numberField.create({
        
    })
    
});