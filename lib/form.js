spade.require('sproutcore');
App = SC.Application.create();


App.MCForm = SC.Object.extend({
    fields: [],
    
    validate: function() {
        for (var i = 0; i < this.fields.length; i++) {
            this.fields[i].validate();
        }
    }
});

App.Field = SC.Object.extend({
    value: '',
    isRequired: false,
    invalidMessage: '',
    error: '',
    
    validate: function() {
        if (this.isRequired && !this.value) {
            this.set('invalidMessage', 'Required.');
            return false;
        }
        
        this.set('invalidMessage', '');
        return true;
    }

});

App.textField = App.Field.extend({
    maxLength: null,
    minLength: null,
    
    validate: function() {
        if (this._super()) {
            if (this.minLength != null && this.value.length < this.minLength) {
                this.set('invalidMessage', "Must be atleast %@ characters.".fmt(this.minLength));
                return false;
            }
        
            if (this.maxLength != null && this.value.length > this.maxLength) {
                this.set('invalidMessage', "Cannot be longer than %@ characters".fmt(this.maxLength));
                return false;
            }
            
            return true;
        }
    }
});

App.emailField = App.Field.extend({
    
    validate: function() {
        if (this._super()) {
            var re = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$", "i");
            if (this.value.match(re)) {
                return true;
            }
            else {
                this.set('invalidMessage', "Invalid email address.");
                return false
            }
        }
    }
});