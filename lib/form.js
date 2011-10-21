spade.require('sproutcore');
App = SC.Application.create();

App.MCForm = SC.Object.extend({
  fieldNames: [],
  fields: [],

  init: function() {
    this._super();

    for (var i = 0; i <= this.getPath('fieldNames.length'); i++) {
      objectName = this.get('fieldNames').objectAt(i)
      if (objectName) {
        object = this.get(objectName);
        if (object) this.get('fields').push(object);
      }
    }

  },
  _isValid: false,

  validate: function() {
    this.set('_isValid', true);
    for (var i = 0; i < this.get('fields').length; i++) {
      if (!this.get('fields')[i].validate()) this.set('_isValid', false);
    }
    this.formDidValidate(this.get('_isValid'));
  },

  unknownProperty: function(key) {
    strlen = length(key);
    return undefined;
  },

  formDidValidate: function(success, errors) {

}

});

App.Field = SC.Object.extend({
  value: '',
  isRequired: false,
  invalidMessage: '',

  validate: function() {
    if (this.get('isRequired') && !this.get('value')) {
      this.set('invalidMessage', 'Required.');
      return false;
    }

    this.set('invalidMessage', '');
    return true;
  }

});

App.TextField = App.Field.extend({
  maxLength: null,
  minLength: null,

  validate: function() {
    if (this._super()) {
      if (this.get('minLength') != null && this.get('value').length < this.get('minLength')) {
        this.set('invalidMessage', 'Must be atleast %@ characters.'.fmt(this.get('minLength')));
        return false;
      }

      if (this.get('maxLength') != null && this.get('value').length > this.get('maxLength')) {
        this.set('invalidMessage', 'Cannot be longer than %@ characters'.fmt(this.get('maxLength')));
        return false;
      }

      return true;
    }
  }
});

App.NumberField = App.TextField.extend({
  validate: function() {

    if (this._super()) {
      if (!this.get('value') || Number(this.get('value'))) {
        return true;
      }
      else {
        this.set('invalidMessage', 'This field can only contain numbers');
        return false;
      }
    }
  }
});

App.EmailField = App.Field.extend({

  validate: function() {
    if (this._super()) {
      var re = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$', 'i');
      if (this.get('value').match(re)) {
        return true;
      }
      else {
        this.set('invalidMessage', 'Invalid email address.');
        return false
      }
    }
  }
});
