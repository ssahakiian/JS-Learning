function Card(type, number, cvv, date) {
    this.type = type;
    this.number = number;
    this.cvv = cvv;
    this.date = date;
    this.isActive = false;
    }
    
Card.prototype.active = function() {
    if (this.isActive) {
        alert(`Your card is already active`)
    } else {
        this.isActive = true;
        alert(`Change Your card type is active`);
        return this;
    }
}
    
Card.prototype.block = function () {
    this.isActive = false;
    alert(`Your card blocked`);
    return this;
    }
    
const platinum = new Card(
    'platinum',
    '4242 4242 4242 4242',
    '614',
    '07/26'
    );

