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
    
    submit: function() {
        this._super();
        if (this._isValid) {
        
            // Save the data!
            // App.statechart.sendAction('saveItem');
            console.log('All fields go! Saving!');
        }
    },

    name: App.TextField.create({
        isRequired: true,
        minLength: 2,
        maxLength: 12
    }),
    
    email: App.EmailField.create({
        isRequired: true
    }),
    
    distance: App.NumberField.create({}),
    
});
