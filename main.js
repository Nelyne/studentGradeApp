
//To get total score for all subjects

const Total = () => {
    const maths = document.getElementById('maths').value;
    const eng = document.getElementById('eng').value;
    const bio = document.getElementById('bio').value;
    const phy = document.getElementById('phy').value;
    const chem = document.getElementById('chem').value;
    let total = parseFloat(maths) + parseFloat(eng) + parseFloat(bio) + parseFloat(phy) + parseFloat(chem);

    if (maths > 100 || eng > 100 || bio > 100 || phy > 100 || chem > 100) {
    alert ('Enter marks between 0 and 100..')
    } else {
    
    document.getElementById('total').innerHTML = `Maths score: ${maths} <br> English score: ${eng} <br> Biology score: ${bio} <br> Physics score: ${phy} <br> Chemistry score: ${chem} <br><br> Total score: ${total}`
}
}

//To get Average Percentage Score

const Average = () => {
    const maths = document.getElementById('maths').value;
    const eng = document.getElementById('eng').value;
    const bio = document.getElementById('bio').value;
    const phy = document.getElementById('phy').value;
    const chem = document.getElementById('chem').value;
    let total = parseFloat(maths) + parseFloat(eng) + parseFloat(bio) + parseFloat(phy) + parseFloat(chem);
    if (maths > 100 || eng > 100 || bio > 100 || phy > 100 || chem > 100) {
        alert ('Enter marks between 0 and 100..')
    } else {
        let average = total/5;
        document.getElementById('avg').innerHTML = `Your average  score is ${average}`
    }
}

//To get the Grade

    const Grade = () => {const maths = document.getElementById('maths').value;
    const eng = document.getElementById('eng').value;
    const bio = document.getElementById('bio').value;
    const phy = document.getElementById('phy').value;
    const chem = document.getElementById('chem').value;
    let total = parseFloat(maths) + parseFloat(eng) + parseFloat(bio) + parseFloat(phy) + parseFloat(chem);
    if (maths > 100 || eng > 100 || bio > 100 || phy > 100 || chem > 100) {
        alert ('Enter marks between 0 and 100..')
    } else {
         average = total/5;

    }

    if (average <= 100 && average >= 70 ) {
        document.getElementById('grade').innerHTML = "Your grade is an A";
    } else if (average <= 69 && average >= 60 ) {
        document.getElementById('grade').innerHTML = "Your grade is a B";
    } else if (average <= 59 && average >= 50 ) {
        document.getElementById('grade').innerHTML = "Your grade is a C";
    } else if 
        (average <= 49 && average >= 40 ) {
            document.getElementById('grade').innerHTML = "Your grade is a D";
    } else if (average <= 39 && average >= 30 ) {
        document.getElementById('grade').innerHTML = "Your grade is an E";
    } else {
        document.getElementById('grade').innerHTML = "Your grade is a F"
    }
}