var Header = new Vue({
    el: '#app',
    data : { message: 'Order Form'}
})

var emailValidator = new Vue({
    el: '#email',
    data: { 
        errors: [],
        email: null
    },
    methods: {
        validateEmail() {
            this.errors = [];
            if (!this.email) {
                this.errors.push('Email required.');
              } else if (!this.validEmail(this.email)) {
                this.errors.push('Valid email required.');
              }
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
          }
    }
})

var dropdown = document.getElementById("dropdown-select-2")
dropdown.addEventListener('change', function() { 
    price = setPrice();
  });
var componentDropdown = new Vue({
    el: '#orderDetails',
    data() {
        return{
            selected_component1: "",
            selected_component2: "",
            components:[
                {id: 1, text: 'Processor'},
                {id: 2, text: 'Storage'},
                {id: 3, text: 'Memory'},
                {id: 4, text: 'Graphics'},
                {id: 5, text: 'Monitor'}
            ],
            price: ""
        }
        
    },
    computed: {
        setModel: function(){
            if (this.selected_component1 === 'Processor'){
                var options = [
                    {id: 1, text: 'Core i5', price: '$200'},
                    {id: 2, text: 'Core i7', price: '$300'},
                    {id: 3, text: 'Core i9', price: '$400'},
                ]
            }
            else if (this.selected_component1 === 'Storage'){
                var options = [
                    {id: 1, text: '500gb', price: '$100'},
                    {id: 2, text: '1tb', price: '$150'},
                    {id: 3, text: '2tb', price: '$175'},
                ]
            }
            else if (this.selected_component1 === 'Memory'){
                var options = [
                    {id: 1, text: '8Gb', price: '$50'},
                    {id: 2, text: '16gb', price: '$75'},
                    {id: 3, text: '32gb', price: '$90'},
                ]
            }
            else if (this.selected_component1 === 'Graphics'){
                var options = [
                    {id: 1, text: 'Rtx 4050', price: '$500'},
                    {id: 2, text: 'Rtx 4060', price: '$600'},
                    {id: 3, text: 'Rtx 4060ti', price: '$650'},
                ]
            }
            else if (this.selected_component1 === 'Monitor'){
                var options = [
                    {id: 1, text: '15 Inch', price: '$50'},
                    {id: 2, text: '18 Inch', price: '$70'},
                    {id: 3, text: '20 Inch', price: '$100'},
                ]
            }
            return options
        }
    },
    methods: {
        setPrice: function(){
            if (this.selected_component2 === 'Core i5'){ var price = '$200'}
            else if (this.selected_component2 === 'Core i7'){ var price = '$300'}
            else if (this.selected_component2 === 'Core i9'){ var price = '$400'}
            else if (this.selected_component2 === '500gb'){ var price = '$100'}
            else if (this.selected_component2 === '1tb'){ var price = '$150'}
            else if (this.selected_component2 === '2tb'){ var price = '$175'}
            else if (this.selected_component2 === '8gb'){ var price = '$50'}
            else if (this.selected_component2 === '16gb'){ var price = '$75'}
            else if (this.selected_component2 === '32gb'){ var price = '$90'}
            else if (this.selected_component2 === 'Rtx 4050'){ var price = '$500'}
            else if (this.selected_component2 === 'Rtx 4060'){ var price = '$600'}
            else if (this.selected_component2 === 'Rtx 4060ti'){ var price = '$650'}
            else if (this.selected_component2 === '15 Inch'){ var price = '$50'}
            else if (this.selected_component2 === '18 Inch'){ var price = '$70'}
            else if (this.selected_component2 === '20 Inch'){ var price = '$100'}
            else if (this.selected_component2 === ''){ var price = '$0'}
            return price
        }
    }
})