var calc = new Vue({
    el: '#main',
    data: {
        arabicNumbers: '',
        romanNumbers: '',
        decimal: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman: ['M', 'CM', 'D', 'CD', 'C', 'XL', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    },
    methods: {
        convert: function(arabicNumbers) {
            this.romanNumbers = ''; //Setting the value to null before executing any new conversion
            var newData = this.arabicNumbers;
            for (var i = 0; i <= this.decimal.length; i++) {
                while (newData % this.decimal[i] < newData) {
                    this.romanNumbers += this.roman[i];
                    newData -= this.decimal[i];
                }
            }
        }
    }
})