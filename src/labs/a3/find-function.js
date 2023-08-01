function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2', 'string3'];

    const four = numberArray1.find(a => a === 4);
    const string3 = stringArray1.find(a => a === 'string3');

    numberArray1 = [1, 2, 4, 5, 6];
    stringArray1 = ['string1', 'string3'];

    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');

    return(
        <div>
            <h3>Find function</h3>
            four = {four}<br />
            string3 = {string3}<br />
            <h3>Find Index function</h3>
            fourIndex = {fourIndex}<br />
            string3Index = {string3Index}<br />
        </div>
    )
}

export default FindFunction