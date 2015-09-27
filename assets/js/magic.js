/**
 * Created by Student on 9/27/2015.
 */

function Account(id, type, balance, nickname){
    this.id = id
    this.type = type
    this.balance = balance
    this.nickname = nickname
}

function Customer(){
    this.customer_id = "55e94a6af8d8770528e60ebc"
    this.accounts = []
}

key = "4dbe573322ab2d14e717bb629cbf1101"

person = new Customer

$.ajax({
    url: 'http://api.reimaginebanking.com/customers/' + person.customer_id + '/accounts?key=' + key,
    success: function(results){
        for (i = 0; i < Object.keys(results).length;i++){
            person.accounts.push(new Account(results[i]._id, results[i].type, results[i].balance, results[i].nickname))
            //window.alert(person.accounts[i].type)
        }
    },
    error: function () {
        window.alert("error")
    }
});